import checkTokenMeddeware from "@common/auth.middleware";
import Container from "@common/ContainerOk";
import express from "express";
import  PersonsController from "@infra/controllers/Persons.controller"
export const personRouter = express.Router();

const personsController: PersonsController = Container.resolve("personsController") as PersonsController;

// personRouter.post("/provider", checkTokenMeddeware, personsController.Create);
// personRouter.get("/providers/:id", checkTokenMeddeware, personsController.GetProviderById);
// personRouter.get("/providers", checkTokenMeddeware, personsController.GetAllProviders);
/**
 * @swagger
 * /api/persons:
 *   post:
 *     summary: Create a new person
 *     tags: [CreatePersonReq]
 *     responses:
 *       200:
 *         description: Person created successfully
 */
personRouter.post("", personsController.Create);
personRouter.get("/:id", personsController.GetById);
personRouter.put("", personsController.Update);
personRouter.get("", personsController.GetAll);
