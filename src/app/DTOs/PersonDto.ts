export class CreatePersonDto {

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
  

}


/**
 * Aqui CreatedDate	Enabled CreatedUserId	 client_id	 se establecen en el backend
 */
export class UpdatePersonDto {
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
  constructor(init?: Partial<UpdatePersonDto>) {
    Object.assign(this, init);
  }

  validate() {
    // Aquí puedes agregar lógica de validación
  }
}