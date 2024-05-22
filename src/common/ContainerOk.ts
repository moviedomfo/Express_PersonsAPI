import PersonsService from "@app/Persons.service";
import PersonsController from "@infra/controllers/Persons.controller";
import CustomersRepository from "@infra/repos/CustomersSQL.repo";
import { createContainer, asClass, InjectionMode } from "awilix";




/**
 * Dependency Injection (DI) Container implemented with awilix 
 */
const Container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});


Container.register({
  customersRepo: asClass(CustomersRepository).scoped(),




  personsService: asClass(PersonsService).scoped(),
  PersonsController: asClass(PersonsController).scoped(),



});

export const personsService = Container.resolve("personsService");
export const PersonsController = Container.resolve("personsController");





export default Container;
