import checkTokenMeddeware from "@common/auth.middleware";
import Container from "@common/ContainerOk";
import express from "express";
import  PersonsController from "@infra/controllers/Persons.controller"
export const personRouter = express.Router();

const personsController: PersonsController = Container.resolve("personsController") as PersonsController;

// personRouter.post("/provider", checkTokenMeddeware, personsController.Create);
// personRouter.get("/providers/:id", checkTokenMeddeware, personsController.GetProviderById);
// personRouter.get("/providers", checkTokenMeddeware, personsController.GetAllProviders);
personRouter.post("/customer", personsController.Create);
personRouter.get("/customer/:id", personsController.GetById);
personRouter.put("/customers", personsController.Update);
personRouter.get("/customers", personsController.GetAll);
