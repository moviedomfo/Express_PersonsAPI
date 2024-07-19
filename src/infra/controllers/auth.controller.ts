import { NextFunction, Request, Response } from "express";
import HttpStatusCode from "@common/Enums/HttpStatusCode";
import { AuthenticationReq } from "@app/DTOs/Auth/AuthorizationDto";
import { RefreshTokenReq } from "@app/DTOs/Auth/RefreshTokenDto";
import { IAuthService } from "@domain/interfases/IAuthService";

/**
 * 
 */
export default class AuthController {
  constructor(private readonly authService: IAuthService) { }

  public Auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reqBody: AuthenticationReq = req.body as AuthenticationReq;
      const response = await this.authService.Auth(reqBody);
      res.status(HttpStatusCode.OK).send(response);
    } catch (e) {
      next(e);
    }
  };


  public RefreshToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reqBody: RefreshTokenReq = req.body as RefreshTokenReq;

      const response = await this.authService.RefreshToken(reqBody);
      res.status(HttpStatusCode.OK).send(response);
    } catch (e) {
      next(e);
    }
  };


  public GetUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userName } = req.query;

      const response = await this.authService.GetUser(userName as string);

      res.status(HttpStatusCode.OK).send(response);
    } catch (e) {
      next(e);
    }
  };


  public GetQrImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userName } = req.query;
      const response = await this.authService.GetQrImage(userName as string);

      res.status(HttpStatusCode.OK).send(response);
    } catch (e) {
      next(e);
    }
  };


  public Set2FA = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userName, code } = req.query;
      const response = await this.authService.Set2FA(userName as string, code as string);

      res.status(HttpStatusCode.OK).send(response);
    } catch (e) {
      next(e);
    }
  };
}
