import { Entity } from "@common/CleanBases/Entity";
import { PersonAddresseBE } from "./Person_AddressessBE";
import { ContactInfoBE } from "./ContactInfoBE";

export class PersonBE {

  id: number;
  code?: string;
  slug: string;
  name: string;
  last_name: string;
  doc_type_Id: number;
  doc_number: string;
  date_of_birth: Date;
  photo?: string;
  discharge_date?: Date;
  category_id?: number;
  gender_id: number;
  enabled: boolean;
  created_date: Date;
  created_user_id: string;
  updated_date?: Date;
  allowEditData?: boolean;
  tenant_id?: string;
  // addressess?: PersonAddresseBE[];
  // contactInfoList?:ContactMediaBE[];

}
