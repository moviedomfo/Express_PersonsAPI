import { PersonBE } from "@domain/Entities/PersonBE";
import { ImessageDto } from "@app/DTOs/MessageDto";
import { IPersonsRepository } from "@app/interfases/IPersonsRepository";
import { IPersonsService } from "@domain/interfases/IPersonsService";
import { or } from "sequelize";
import { CreatePersonDto, CreatePersonRes, GetPersonByIdRes, UpdatePersonDto } from "./DTOs/PersonDto";

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
  public async Create(person: CreatePersonDto): Promise<CreatePersonRes> {
    try {


      // person.createdAt new Date(person.createdAt);
      // person.GeneratedDate = new Date(person.GeneratedDate);

      const res = await this._personsRepo.Insert(person);
      // const createdPerson = new PersonBE(id);

      // const msg: IKafkaMessageDto = {
      //   key: person.Id.toString(),
      //   command: "CreateCustomerEvent",
      //   content: JSON.stringify(person),
      //   origin: origin,
      // };

      /** send to Event Buss */
      //await this._EventBusRepo.PushToQueue(msg, "customers");
      // const event: PersonWasCreatedEvent = new PersonWasCreatedEvent(createdPerson, origin);
      //await event.Emit();
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
  public async Update(person: UpdatePersonDto): Promise<void> {
    try {
      await this._personsRepo.Update(person);


    } catch (err) {
      throw err;
    }
  }
  public async GetById(id: number): Promise<GetPersonByIdRes> {

    const res: GetPersonByIdRes = new GetPersonByIdRes();
    const person = await this._personsRepo.GetById(id);
    
    res.Id = person.Id;
    res.Code = person.Code;
    res.Slug = person.Slug;
    res.Name = person.Name;
    res.Lastname = person.Lastname;
    res.DocTypeId = person.DocTypeId;
    res.DocNumber = person.DocNumber;
    res.DateOfBirth = person.DateOfBirth;
    res.Photo = person.Photo;
    res.DischargeDate = person.DischargeDate;
    res.CategoryId = person.CategoryId;
    res.GenderId = person.GenderId;
    res.Enabled = person.Enabled;
    res.created_date = person.created_date;
    res.updatd_date = person.updatd_date;
    res.createdUserId = person.createdUserId;
    res.tenant_id = person.tenant_id;
    res.Addressess = person.Addressess;

    const dynamicData = await this._personsRepo.SearchDinamicFields(id);

    res.DynamicData = dynamicData;
    return res;
  }

  public async GetAll(name?: string, page?: number, limit?: number): Promise<PersonBE[]> {
    return await this._personsRepo.GetAll(name, page, limit);
  }



  public async ClearAll(): Promise<void> {
    return this._personsRepo.ClearAll();
  }
}
