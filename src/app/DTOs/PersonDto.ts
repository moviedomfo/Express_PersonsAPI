export class CreatePersonReq {

  Code?: string;
  Slug?: string;
  Name?: string;
  LastName?: string;
  DocTypeId?: number;
  DocNumber?: string;
  DateOfBirth?: Date;
  Photo?: string;
  DischargeDate?: Date;
  CategoryId?: number;
  GenderId?: number;


}export class CreatePersonRes {

  Id: number;
  Slug?: string;
  

}


/**
 * Aqui createdAt	Enabled CreatedUserId	 client_id	 se establecen en el backend
 */
export class UpdatePersonReq {
  Id: number;
  Code?: number;
  Slug?: string;
  Name?: string;
  Lastname?: string;
  DocTypeId?: number;
  DocNumber?: string;
  DateOfBirth?: Date;

  Photo?: string;
  DischargeDate?: Date;
  CategoryId?: number;
  GenderId?: number;
  Enabled?: boolean;



}

export class GetPersonByIdRes {

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
  DynamicData :Persons_Fields_Data_DTO[];
}
export class Person_addressessesDTO {
  Street: string;
  ZipCode: string;
  City: string;
  Province: string;
  Country: string;
}
export interface Persons_Fields_Data_DTO {
  
  data?: string;
  short_name: string;
  description: string;
  type: string;
  supported_values: string;
  label?: string;

}