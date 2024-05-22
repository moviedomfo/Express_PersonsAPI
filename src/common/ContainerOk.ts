import PersonsService from "@app/Persons.service";
import PersonsController from "@infra/controllers/PersonsPub.controller";
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
  personsPubController: asClass(PersonsController).scoped(),



});

export const personsService = Container.resolve("personsService");
export const personsPubController = Container.resolve("personsController");





export default Container;
