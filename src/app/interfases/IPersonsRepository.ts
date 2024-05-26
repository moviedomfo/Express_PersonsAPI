import { CreatePersonDto, CreatePersonRes, Persons_Fields_DTO, UpdatePersonDto } from "@app/DTOs/PersonDto";
import { PersonBE } from "@domain/Entities/PersonBE";

export interface IPersonsRepository {
  ClearAll: () => Promise<void>;
  Insert: (req: CreatePersonDto) => Promise<CreatePersonRes>;
  GetById: (id: number) => Promise<PersonBE>;
  GetAll: (name?: string, page?: number, pageSize?: number) => Promise<PersonBE[]>;
  Update: (req: UpdatePersonDto) => Promise<void>;


  SearchDinamicFields: (person_id: number) => Promise<Persons_Fields_DTO[]>;
}
