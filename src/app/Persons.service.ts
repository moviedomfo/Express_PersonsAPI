import { PersonBE } from "@domain/Entities/PersonBE";
import { ImessageDto } from "@app/DTOs/MessageDto";
import { IPersonsRepository } from "@app/interfases/IPersonsRepository";
import { IPersonsService } from "@domain/interfases/IPersonsService";
import { or } from "sequelize";
import { UpdatePersonReq } from "./DTOs/Persons/UpdatePersonISVC";
import { v4 as uuidv4 } from "uuid";
import { CreatePersonReq, CreatePersonRes, } from "./DTOs/Persons/CreatePersonISVC";
import { GetPersonByIdRes } from "./DTOs/Persons/GetPersonByIdISVC";
import { PersonAddresseBE } from "@domain/Entities/Person_AddressessBE";
import { ContactInfoBE } from "@domain/Entities/ContactInfoBE";


// @Route("PersonsService")
export default class PersonsService implements IPersonsService {
  private readonly _personsRepo: IPersonsRepository;


  constructor(private readonly personsRepo: IPersonsRepository) {
    this._personsRepo = personsRepo;

  }

  /**
   * New customme is registered online
   * 1) persist to database
   * 2) send to Queue (rabit or kafka)
   * @param person
   * @origin Api app caller
   */
  public async Create(person: CreatePersonReq): Promise<CreatePersonRes> {
    try {


      person.discharge_date = new Date(person.discharge_date);
      // person.GeneratedDate = new Date(person.GeneratedDate);
      const personBE: PersonBE = {
        code: person.code,
        slug: uuidv4(),
        name: person.name,
        last_name: person.last_name,
        doc_type_Id: person.doc_type_Id,
        doc_number: person.doc_number,
        date_of_birth: person.date_of_birth,
        photo: person.photo,
        discharge_date: person.discharge_date,
        category_id: undefined, // Set this if needed
        gender_id: person.gender_id,
        enabled: true, // Set based on your business logic
        created_date: new Date(),
        created_user_id: person.created_user_id,
        updated_date: undefined,
        allowEditData: person.allowEditData,
        tenant_id: person.tenant_id,
        id: -1
      };

      const res = await this._personsRepo.Insert(personBE);


      const addressess = person.addressess?.map(p => {
        const item: PersonAddresseBE = {

          city_id: p.city_id,
          province_Id: p.province_id,
          country_Id: p.country_id,
          street: p.street,
          zip_code: p.zip_code
        }

        return item;
      });

      const contactInfoList = person.contactInfoList?.map(p => {
        const item: ContactInfoBE = {
          description: p.description,
          type_id: p.type_id,
          value: p.value,
          id: -1,
          person_id: -1
        }
        return item;

      });

      await this._personsRepo.Add_addressess(res.Id, addressess);
      await this._personsRepo.Add_contact_info(res.Id, contactInfoList);

      return res;
    } catch (err) {
      throw err;
    }
  }

  /**
   * New provider is registered online
   * 1) persist to database eg:sql server
   * 2) send to Queue (rabit or kafka)
   * @param person
   * @origin this params can be changed if you need to set other topic type for kafka
   */
  public async Update(person: UpdatePersonReq): Promise<void> {
    try {
      await this._personsRepo.Update(person);


    } catch (err) {
      throw err;
    }
  }

  /**
   * 
   * @param id person Id
   * @returns 
  */
  public async GetById(id: number): Promise<GetPersonByIdRes> {


    const res = await this._personsRepo.GetById(id);

    // const res: GetPersonByIdRes = this.map_GetPersonByIdRes(person)

    const dynamicData = await this._personsRepo.SearchDinamicFields(id);
    res.dynamic_data = dynamicData;

    return res;
  }

  public async GetAll(name?: string, page?: number, limit?: number): Promise<PersonBE[]> {
    return await this._personsRepo.GetAll(name, page, limit);
  }



  public async ClearAll(): Promise<void> {
    return this._personsRepo.ClearAll();
  }


  // map_GetPersonByIdRes = (person: PersonBE): GetPersonByIdRes => {
  //   const res: GetPersonByIdRes = new GetPersonByIdRes();
  //   res.Id = person.Id;
  //   res.Code = person.Code;
  //   res.Slug = person.Slug;
  //   res.Name = person.Name;
  //   res.Lastname = person.Lastname;
  //   res.DocTypeId = person.DocTypeId;
  //   res.DocNumber = person.DocNumber;
  //   res.DateOfBirth = person.DateOfBirth;
  //   res.Photo = person.Photo;
  //   res.DischargeDate = person.DischargeDate;
  //   res.CategoryId = person.CategoryId;
  //   res.GenderId = person.GenderId;
  //   res.Enabled = person.Enabled;
  //   res.created_date = person.created_date;
  //   res.updatd_date = person.updatd_date;
  //   res.createdUserId = person.createdUserId;
  //   res.tenant_id = person.tenant_id;
  //   res.Addressess = person.Addressess;
  //   return res;
  // }
}
