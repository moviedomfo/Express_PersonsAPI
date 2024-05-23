import { createContainer, asClass, InjectionMode } from "awilix";
import PersonsService from "@app/Persons.service";
import CustomersRepository from "@infra/repos/CustomersSQL.repo";
import PersonsController from "@infra/controllers/Persons.controller"




/**
 * Dependency Injection (DI) Container implemented with awilix 
 */
const Container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});


Container.register({
  personsRepo: asClass(CustomersRepository).scoped(),

  personsService: asClass(PersonsService).scoped(),
  personsController: asClass(PersonsController).scoped(),



});

export const personsService = Container.resolve("personsService");
export const personsController = Container.resolve("personsController");
export const personsRepo = Container.resolve("personsRepo");





export default Container;
