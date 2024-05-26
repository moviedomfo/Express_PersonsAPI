import { PersonBE } from "@domain/Entities/PersonBE";
import { CreatePersonDto, CreatePersonRes, UpdatePersonDto } from "@app/DTOs/PersonDto";


export interface IPersonsService {
  /**
   * registro de nuevo cliente online
   */
  Create: (req: CreatePersonDto) => Promise<CreatePersonRes>;

  /**
   *
   * @req : updete Person 
   * @memberof IPersonsService
   */
  Update: (req: UpdatePersonDto) => Promise<void>;

/**
 * 
 * @param id Customer Id
 * @returns 
 */
  GetById: (id: number) => Promise<PersonBE>;
  

  GetAll: (name?: string, page?: number, limit?: number ) => Promise<PersonBE[]>;

  ClearAll: () => Promise<void>;
}
