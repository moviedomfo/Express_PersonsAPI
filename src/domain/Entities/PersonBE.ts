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
  CreatedDate: Date;
  CreatedUserId: string;
  client_id?: string;
}
