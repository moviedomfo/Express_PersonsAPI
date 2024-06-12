import { ParamsEnum } from "@common/Enums/ParamsEnums";



export class GetPersonByIdRes {

  id: number;
  code?: number;
  slug: string;
  name: string;
  last_name: string;
  doc_type_id: number;
  doc_number: string;
  date_of_birth: Date;
  photo?: string;
  discharge_date?: Date;
  category_id?: number;
  gender_id: number;
  enabled: boolean;
  created_date: Date;
  updatd_date: Date;
  created_user_id: string;
  tenant_id?: string;
  addressess?: Addressesses_DTO[];
  dynamic_data: Fields_Data_DTO[];
  contactInfoList: ContactInfoDTO[];
  
}

export class Addressesses_DTO {
  street: string;
  zip_code: string;
  city: string;
  province: string;
  country: string;
}
export interface Fields_Data_DTO {

  data?: string;
  short_name: string;
  description: string;
  type: string;
  // param_type: ParamsEnum;
  param_name: string;
  supported_values: string;
  label?: string;

}

export interface ContactInfoDTO {
  id: number;
  description: string;
  value: string;
  type_id: number;
  type_name: string;
}