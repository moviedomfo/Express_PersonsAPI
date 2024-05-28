
export class CreatePersonReq {

  code?: string;
  name: string;
  last_name: string;
  doc_type_Id: number;
  doc_number: string;
  date_of_birth: Date;
  photo?: string;
  discharge_date?: Date;
  gender_id: number;
  created_user_id: string;
  allowEditData?: boolean;
  tenant_id?: string;
  addressess?: Create_Person_Addressesses_DTO[];
  dynamic_data :Create_Person_Fields_Data_DTO[];
  contactInfoList :Create_Person_ContactMediaDTO[];
}

/**
 * Listado de parametros dinamicos
 * Si se intenta insertar uno no configurado para la entidad en cuestion
 * Saltara un error de constraint
 */
export interface Create_Person_Fields_Data_DTO {
  
  data?: string;
  field_id: string;
}

export class Create_Person_Addressesses_DTO {
  street: string;
  zip_code: string;
  city_id: number;
  province_id: number;
  country_id: number;
}
export interface Create_Person_ContactMediaDTO {
  value: string;
  description: string;
  type_id?: number;
}
export class CreatePersonRes {

  Id: number;
  Slug?: string;
  

}

