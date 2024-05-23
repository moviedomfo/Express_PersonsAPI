import { CreatePersonDto, UpdatePersonDto } from "@app/DTOs/PersonDto";
import {PersonBE} from "@domain/Entities/PersonBE";

export interface IPersonsRepository {
  ClearAll: () => Promise<void>;
  Insert: (req: CreatePersonDto) => Promise<string>;
  GetById: (id: number) => Promise<PersonBE>;
  GetAll: (name?: string,page?: number , pageSize?: number ) => Promise<PersonBE[]>;
  Update: (req: UpdatePersonDto) => Promise<void>;

}
