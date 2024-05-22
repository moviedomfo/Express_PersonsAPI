import { PersonBE } from "@domain/Entities/PersonBE";
import { CreatePersonDto } from "@app/DTOs/PersonDto";


export interface IPersonsService {
  /**
   * registro de nuevo cliente online
   */
  Create: (req: CreatePersonDto) => Promise<void>;

  /**
   *
   * @req : Person BE
   * @memberof IPersonsService
   */
  Update: (req: CreatePersonDto) => Promise<void>;

/**
 * 
 * @param id Customer Id
 * @returns 
 */
  GetById: (id: string) => Promise<PersonBE>;
  

  GetAll: (name?: string, page?: number, limit?: number ) => Promise<PersonBE[]>;

  ClearAll: () => Promise<void>;
}
