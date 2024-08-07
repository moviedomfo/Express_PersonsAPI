
import { ErrorCodeEnum, ErrorTypeEnum } from "@common/Enums/ErrorEnums";
import { AppError } from "@common/ErrorHandle/AppError";
import { JWTFunctions } from "@common/helpers/jwtFunctions";
import HttpStatusCode from "@common/Enums/HttpStatusCode";
import { LoginResultEnum } from "@common/Enums/LoginResultEnum";
import { IRefreshTokenService } from "@domain/interfases/IRefreshTokenService";
import { RefreshTokenReq, RefreshTokenRes } from "./DTOs/Auth/RefreshTokenDto";
import { IAuthService } from "@domain/interfases/IAuthService";
import { AuthenticationReq, AuthenticationRes } from "./DTOs/Auth/AuthorizationDto";
import { GetUserRes, UserSimpleViewDTO } from "./DTOs/Auth/GetUserDto";
import { User } from "@domain/Entities/User";
import { IUserRepository } from "./interfases/IUserRepository";
import GetQrImageRes from "./DTOs/Auth/GetQrImageISVC";
import { randomBytes } from 'crypto';

//import { qrcode } from "qrcode";
import QRCode from 'qrcode'

import { authenticator } from "otplib";
import { AppConstants } from "@common/CommonConstants";
export default class AuthService implements IAuthService {
  constructor(private userRepository: IUserRepository, private refreshTokenService: IRefreshTokenService) { }

  public GenSecret(): Promise<string> {

    return new Promise<string>((resolve) => {
      const s = randomBytes(64).toString('hex');
      resolve(s);
    });
  }

  public async RefreshToken(req: RefreshTokenReq): Promise<RefreshTokenRes> {

    if (!req.client_id) throw new AppError(HttpStatusCode.BAD_REQUEST, ErrorCodeEnum.PARAMETER_REQUIRED.toString(), "client_id is required not found", ErrorTypeEnum.TecnicalException);

    const tokenData = await this.refreshTokenService.RefreshToken(req.refresh_token);

    let res: RefreshTokenRes = new RefreshTokenRes();

    /** this data comes from cached user data together with refresh_token   */
    const user: User = await this.userRepository.FindByUserName(tokenData.UserID);

    const jwt = JWTFunctions.GenerateToken(user, req.client_id, req.client_id);

    res.refresh_token = tokenData.Token;
    res.jwt = jwt;
    return res;
  }

  public async Auth(req: AuthenticationReq): Promise<AuthenticationRes> {
    const result: AuthenticationRes = new AuthenticationRes();

    if (req.grant_type === "refresh_token") {
      const tokenData = await this.refreshTokenService.RefreshToken(req.refresh_token);

      const user: User = await this.userRepository.GetUserById(tokenData.UserID);

      const jwt = JWTFunctions.GenerateToken(user, req.client_id, req.client_id);

      result.refresh_token = tokenData.Token;
      result.access_token = jwt;
    }
    if (req.grant_type === "password") {
      const user = await this.userRepository.FindByUserName(req.userName);

      if (!user) throw new AppError(HttpStatusCode.UNAUTHORIZED, LoginResultEnum.LOGIN_USER_DOESNT_EXIST.toString(), "User not found", ErrorTypeEnum.SecurityException);


      const valid = await this.userRepository.VerifyPassword(req.password, user.passwordHash);
      if (!valid) throw new AppError(HttpStatusCode.BAD_REQUEST, LoginResultEnum.LOGIN_USER_OR_PASSWORD_INCORRECT.toString(), "Password is not correct", ErrorTypeEnum.SecurityException);
      if (user.twoFA.enabled) {

        if (!user.twoFA.expToken) {
          //Este enrror an uncia q se genere nuevamente el QR ya que esta habilkitado pero no existe jwt de expiracion
          throw new AppError(HttpStatusCode.UNAUTHORIZED, LoginResultEnum.LOGIN_USER_2FA_CodeRequested.toString(), "Se requiere codigo de verificacion", ErrorTypeEnum.SecurityException);
        }
        try {
          const verified = JWTFunctions.VerifySimple(user.twoFA.expToken);

          if (!verified)
            throw new AppError(HttpStatusCode.UNAUTHORIZED, LoginResultEnum.LOGIN_USER_2FA_FAIL.toString(), "Fallo la autenticaion en dos pasos", ErrorTypeEnum.SecurityException);

        } catch (e) {
          //El token existia, por lo tanto existio 2FA. Pero fallo por que expiro y se le solicita que reenvie el codigo
          throw new AppError(HttpStatusCode.UNAUTHORIZED, LoginResultEnum.LOGIN_USER_2FA_FAIL.toString(), "Fallo la autenticaion en dos pasos", ErrorTypeEnum.SecurityException);
        }



      }


      const jwt = JWTFunctions.GenerateToken(user, req.client_id, req.client_id);

      const refreshToken = await this.refreshTokenService.CreateRefreshToken(user.id.toString(), "");

      result.refresh_token = refreshToken.Token;
      result.access_token = jwt;
    }

    return result;
  }

  public async GetUser(userName: string): Promise<GetUserRes> {
    const result: GetUserRes = new GetUserRes();

    const user = await this.userRepository.FindByUserName(userName);


    if (!user) throw new AppError(HttpStatusCode.NOT_FOUND, undefined, "User not found", ErrorTypeEnum.FunctionalException);
    const userSimpleView: UserSimpleViewDTO = {
      id: user.id,
      userName: user.userName,
      email: user.email,
      fullName: `${user.lastName}, ${user.name}`,
      twoFAenabled: user.twoFA.enabled
    };
    result.User = userSimpleView;

    return result;
  }


  public async GetQrImage(userName: string): Promise<GetQrImageRes> {
    const result: GetQrImageRes = new GetQrImageRes();

    const user = await this.userRepository.FindByUserName(userName);

    if (!user) throw new AppError(HttpStatusCode.NOT_FOUND, undefined, "User not found", ErrorTypeEnum.FunctionalException);
    authenticator.options = {
      step: AppConstants.TwoFA_Expires
    }
    const secret = authenticator.generateSecret();
    //const uri = authenticator.keyuri(userName, AppConstants.JWT_issuer, secret);
    const uri = authenticator.keyuri(
      encodeURIComponent(userName),
      encodeURIComponent(AppConstants.JWT_issuer),
      secret
    );
    //const uri = authenticator.keyuri(userName, AppConstants.JWT_issuer, secret);
    try {

      const image = await QRCode.toDataURL(uri);
      user.twoFA.tempSecret = secret;

      await this.userRepository.SetUser(user.id, user.twoFA);

      result.success = true;
      result.image = image;
    } catch (e) {
      console.log(e);

    }



    return result;
  }

  public async Disable2FA(userName: string): Promise<boolean> {

    const user = await this.userRepository.FindByUserName(userName);

    if (!user) throw new AppError(HttpStatusCode.NOT_FOUND, undefined, "User not found", ErrorTypeEnum.FunctionalException);


    user.twoFA.enabled = false;
    user.twoFA.secret = '';
    user.twoFA.tempSecret = '';
    user.twoFA.expToken = '';
    await this.userRepository.SetUser(user.id, user.twoFA);

    return true;
  }

  /**
   * 
   * @param userName 
   * @param code 
   * @returns 
   */
  public async Set2FA(userName: string, code: string): Promise<boolean> {

    const user = await this.userRepository.FindByUserName(userName);

    if (!user) throw new AppError(HttpStatusCode.NOT_FOUND, undefined, "User not found", ErrorTypeEnum.FunctionalException);

    const tempSecret = user.twoFA.tempSecret;

    const verified = authenticator.check(code, tempSecret);
    if (verified === false) return false;

    user.twoFA.enabled = true;
    user.twoFA.secret = tempSecret;
    const jwt = JWTFunctions.GenerateTokenInternal(user, "internal", "internal");
    user.twoFA.expToken = jwt;
    await this.userRepository.SetUser(user.id, user.twoFA);

    return true;
  }
}
