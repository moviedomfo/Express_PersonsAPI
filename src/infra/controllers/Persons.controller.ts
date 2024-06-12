
import { NextFunction, Request, Response } from "express";
import { IPersonsService } from "@domain/interfases/IPersonsService";
import { UpdatePersonReq } from "@app/DTOs/Persons/UpdatePersonISVC";
import { parse_Int } from "@common/helpers/paramsValidators";
import { CreatePersonReq } from "@app/DTOs/Persons/CreatePersonISVC";
import HttpStatusCode from "@common/Enums/HttpStatusCode";

export default class PersonsController {
  constructor(private readonly personsService: IPersonsService) {


  }

  public GetAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, lastname, page, pageSize } = req.query;
      const currentPage = parseInt(page as string) || 1; // Página actual
      const limit = parseInt(pageSize as string) || 10; // Tamaño de página
      const result = await this.personsService.GetAll(name as string, currentPage, limit);

      if (result) res.status(HttpStatusCode.OK).send(result);
      else res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (e) {
      next(e);
    }
  };

  public Create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let person: CreatePersonReq = JSON.parse(JSON.stringify(req.body));

      await this.personsService.Create(person);

      res.status(HttpStatusCode.CREATED).send();
    } catch (e) {
      next(e);
    }
  };
  public Update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let person: UpdatePersonReq = JSON.parse(JSON.stringify(req.body));

      await this.personsService.Update(person);

      res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (e) {
      next(e);
    }
  };

  public GetById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = parse_Int(req.params.id);
      const result = await this.personsService.GetById(id);
      if (result) res.status(HttpStatusCode.OK).send(result);
      else res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (e) {
      next(e);
    }
  };



  public ClearAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      await this.personsService.ClearAll();
      res.status(HttpStatusCode.OK).send(true);
    } catch (e) {
      next(e);
    }
  };
}
