import { ParamsEnum } from "@common/Enums/ParamsEnums";

export class UpdatePersonReq {

  id:number;
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
  addressess?: UpdatePersonFieldsData_DTO [];
  dynamic_data :UpdatePersonAddressessesDTO[];
  enabled?: boolean;
}
/**
 * Listado de parametros dinamicos
 * Si se intenta insertar uno no configurado para la entidad en cuestion
 * Saltara un error de constraint
 */
export interface UpdatePersonFieldsData_DTO {
  
  data?: string;
  field_id: string;

}

/**
 * 
 */
export class UpdatePersonAddressessesDTO {
  street: string;
  zip_code: number;
  city_id: number;
  province_id: number;
  country_id: number;
}


