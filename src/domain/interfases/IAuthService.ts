import { AuthenticationReq, AuthenticationRes } from "@app/DTOs/Auth/AuthorizationDto";
import GetQrImageRes from "@app/DTOs/Auth/GetQrImageISVC";
import { GetUserReq, GetUserRes } from "@app/DTOs/Auth/GetUserDto";
import { RefreshTokenReq, RefreshTokenRes } from "@app/DTOs/Auth/RefreshTokenDto";



export interface IAuthService {
  /** */
  RefreshToken: (req: RefreshTokenReq) => Promise<RefreshTokenRes>;
  /** */
  Auth: (req: AuthenticationReq) => Promise<AuthenticationRes>;
  GetUser: (userName: string) => Promise<GetUserRes>;
  GetQrImage: (userName: string) => Promise<GetQrImageRes>;
  Set2FA: (userName: string, code: string) => Promise<boolean>;

  Disable2FA: (userName: string) => Promise<boolean>;
  GenSecret: () => Promise<string>;
}
