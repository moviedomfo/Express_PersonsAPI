import checkTokenMeddeware from "@common/auth.middleware";
import Container from "@common/ContainerOk";
import PersonsController from "@infra/controllers/PersonsPub.controller";
import express from "express";
export const personRouter = express.Router();

const PersonsController: PersonsController = Container.resolve("personsController") as PersonsController;

// personRouter.post("/provider", checkTokenMeddeware, PersonsController.Create);
// personRouter.get("/providers/:id", checkTokenMeddeware, PersonsController.GetProviderById);
// personRouter.get("/providers", checkTokenMeddeware, PersonsController.GetAllProviders);
personRouter.post("/customer", PersonsController.Create);
personRouter.get("/customer/:id", PersonsController.GetById);
personRouter.put("/customers", PersonsController.Update);
personRouter.get("/customers", PersonsController.GetAll);
