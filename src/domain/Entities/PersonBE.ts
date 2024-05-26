import { Person_addressessesDTO } from "@app/DTOs/PersonDto";
import { Entity } from "@common/CleanBases/Entity";

export class PersonBE {

  Id: number;
  Code?: number;
  Slug: string;
  Name: string;
  Lastname: string;
  DocTypeId: number;
  DocNumber: string;
  DateOfBirth: Date;
  Photo?: string;
  DischargeDate?: Date;
  CategoryId?: number;
  GenderId: number;
  Enabled: boolean;
  created_date: Date;
  updatd_date: Date;
  createdUserId: string;
  tenant_id?: string;
  Addressess?: Person_addressessesDTO[];
}
