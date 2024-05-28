import { CreatePersonRes } from "@app/DTOs/Persons/CreatePersonISVC";
import {  ContactInfoDTO, Fields_Data_DTO, GetPersonByIdRes } from "@app/DTOs/Persons/GetPersonByIdISVC";
import { UpdatePersonReq } from "@app/DTOs/Persons/UpdatePersonISVC";
import { ContactInfoBE } from "@domain/Entities/ContactInfoBE";
import { PersonBE } from "@domain/Entities/PersonBE";
import { PersonAddresseBE } from "@domain/Entities/Person_AddressessBE";

export interface IPersonsRepository {

  ClearAll: () => Promise<void>;
  Insert: (person: PersonBE) => Promise<CreatePersonRes>;
  Add_contact_info: (person_id: number, contactInfoList: ContactInfoBE[]) => Promise<void>;
  Add_addressess: (person_id: number, addressess: PersonAddresseBE[]) => Promise<void>;

  GetById: (id: number) => Promise<GetPersonByIdRes>;
  GetAll: (name?: string, page?: number, pageSize?: number) => Promise<PersonBE[]>;
  Update: (req: UpdatePersonReq) => Promise<void>;


  SearchDinamicFields: (person_id: number) => Promise<Fields_Data_DTO[]>;
  SearchContactInfo: (person_id: number) => Promise<ContactInfoDTO[]>;
}


