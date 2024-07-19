import { createContainer, asClass, InjectionMode } from "awilix";
import PersonsService from "@app/Persons.service";
import CustomersRepository from "@infra/repos/CustomersSQL.repo";
import PersonsController from "@infra/controllers/Persons.controller"
import AuthService from "@app/Auth.service";
import AuthController from "@infra/controllers/auth.controller";
import UserMockRepository from "@infra/repos/UserMock.repo";
import RefreshTokenService from "@app/RefreshToken.service";
import InMemCahceRepository from "@infra/repos/InMemCahceRepository.repo";
import NodeDBUsersRepository from "@infra/repos/NodeDBUsers.repo";




/**
 * Dependency Injection (DI) Container implemented with awilix 
 */
const Container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});


Container.register({
  authService: asClass(AuthService).scoped(),
  refreshTokenService: asClass(RefreshTokenService).scoped(),
  personsRepo: asClass(CustomersRepository).scoped(),

  personsService: asClass(PersonsService).scoped(),
  personsController: asClass(PersonsController).scoped(),
  authController: asClass(AuthController).scoped(),
  userRepository: asClass(NodeDBUsersRepository).scoped(),
  cacheRepository: asClass(InMemCahceRepository).scoped(),


});

export const personsService = Container.resolve("personsService");
export const personsController = Container.resolve("personsController");
export const personsRepo = Container.resolve("personsRepo");

export const userRepository = Container.resolve("userRepository");
export const authService = Container.resolve("authService");
export const refreshTokenService = Container.resolve("refreshTokenService");
export const authController = Container.resolve("authController")



export default Container;
