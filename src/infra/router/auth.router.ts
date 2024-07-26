
//import container from "@common/DependencyInj/Container";
import express from "express";
import Container from "@common/ContainerOk";
import AuthController from "@infra/controllers/auth.controller";


export const authRouter = express.Router();
const authController: AuthController = Container.resolve("authController") as AuthController;

authRouter.post("/authenticate", authController.Auth);
authRouter.get("/refreshToken", authController.RefreshToken);
authRouter.get("/getUser", authController.GetUser);
authRouter.get("/getQrImage", authController.GetQrImage);
authRouter.get("/set2FA", authController.Set2FA);
authRouter.get("/disable2FA", authController.Disable2FA);
