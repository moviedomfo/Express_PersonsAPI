
import { ErrorCodeEnum, ErrorTypeEnum } from "@common/Enums/ErrorEnums";
import { AppError } from "@common/ErrorHandle/AppError";
import { JWTFunctions } from "@common/helpers/jwtFunctions";
import HttpStatusCode from "@common/Enums/HttpStatusCode";
import { LoginResultEnum } from "@common/Enums/LoginResultEnum";
import { IRefreshTokenService } from "@domain/interfases/IRefreshTokenService";
import { RefreshTokenReq, RefreshTokenRes } from "./DTOs/Auth/RefreshTokenDto";
import { IAuthService } from "@domain/interfases/IAuthService";
import { AuthenticationReq, AuthenticationRes } from "./DTOs/Auth/AuthorizationDto";
import { GetUserReq, GetUserRes, UserSimpleViewDTO } from "./DTOs/Auth/GetUserDto";
import { User } from "@domain/Entities/User";
import { IUserRepository } from "./interfases/IUserRepository";
import GetQrImageRes from "./DTOs/Auth/GetQrImageISVC";
//import { qrcode } from "qrcode";
import QRCode from 'qrcode'

import { authenticator } from "otplib";
import { AppConstants } from "@common/CommonConstants";
export default class AuthService implements IAuthService {
  constructor(private userRepository: IUserRepository, private refreshTokenService: IRefreshTokenService) { }

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
      result.token = jwt;
    }
    if (req.grant_type === "password") {
      const user = await this.userRepository.FindByUserName(req.userName);

      if (!user) throw new AppError(HttpStatusCode.UNAUTHORIZED, LoginResultEnum.LOGIN_USER_DOESNT_EXIST.toString(), "User not found", ErrorTypeEnum.SecurityException);

      const valid = await this.userRepository.VerifyPassword(req.password, user.passwordHash);

      if (!valid) throw new AppError(HttpStatusCode.BAD_REQUEST, LoginResultEnum.LOGIN_USER_OR_PASSWORD_INCORRECT.toExponential(), "Password is not correct", ErrorTypeEnum.SecurityException);

      const jwt = JWTFunctions.GenerateToken(user, req.client_id, req.client_id);

      const refreshToken = await this.refreshTokenService.CreateRefreshToken(user.id.toString(), "");

      result.refresh_token = refreshToken.Token;
      result.token = jwt;
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
    };
    result.User = userSimpleView;

    return result;
  }


  public async GetQrImage(userName: string): Promise<GetQrImageRes> {
    const result: GetQrImageRes = new GetQrImageRes();

    const user = await this.userRepository.FindByUserName(userName);

    if (!user) throw new AppError(HttpStatusCode.NOT_FOUND, undefined, "User not found", ErrorTypeEnum.FunctionalException);
    authenticator.options={
      step:AppConstants.TwoFA_Expires
    }
    const secret = authenticator.generateSecret();
    //const uri = authenticator.keyuri(userName, AppConstants.JWT_issuer, secret);
    const uri = authenticator.keyuri(userName, AppConstants.JWT_issuer, secret);

    const image = await QRCode.toDataURL(uri);
    user.twoFA.tempSecret = secret;

    await this.userRepository.SetUser(user.id, user.twoFA);

    result.success = true;
    result.image = image;



    return result;
  }

  public async Set2FA(userName: string, code: string): Promise<boolean> {


    const user = await this.userRepository.FindByUserName(userName);

    if (!user) throw new AppError(HttpStatusCode.NOT_FOUND, undefined, "User not found", ErrorTypeEnum.FunctionalException);

    let tmpSecret = user.twoFA.tempSecret;
    const verified = authenticator.check(code, tmpSecret);
    if (!verified) return false;

    user.twoFA.enabled = true;
    user.twoFA.secret = tmpSecret;
    await this.userRepository.SetUser(user.id, user.twoFA);

    return true;
  }
}
