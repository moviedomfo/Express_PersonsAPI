import { PersonBE } from "@domain/Entities/PersonBE";
import { UpdatePersonReq } from "@app/DTOs/Persons/UpdatePersonISVC";
import { GetPersonByIdRes } from "@app/DTOs/Persons/GetPersonByIdISVC";
import { CreatePersonReq, CreatePersonRes } from "@app/DTOs/Persons/CreatePersonISVC";


export interface IPersonsService {
  /**
   * registro de nuevo cliente online
   */
  Create: (req: CreatePersonReq) => Promise<CreatePersonRes>;

  /**
   *
   * @req : updete Person 
   * @memberof IPersonsService
   */
  Update: (req: UpdatePersonReq) => Promise<void>;

  /**
   * 
   * @param id Customer Id
   * @returns 
   */
  GetById: (id: number) => Promise<GetPersonByIdRes>;


  GetAll: (name?: string, page?: number, limit?: number) => Promise<PersonBE[]>;

  ClearAll: () => Promise<void>;
}
