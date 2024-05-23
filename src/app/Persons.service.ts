import { PersonBE } from "@domain/Entities/PersonBE";
import { ImessageDto } from "@app/DTOs/MessageDto";
import { IPersonsRepository } from "@app/interfases/IPersonsRepository";
import { IPersonsService } from "@domain/interfases/IPersonsService";
import { or } from "sequelize";
import { CreatePersonDto, UpdatePersonDto } from "./DTOs/PersonDto";

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
  public async Create(person: CreatePersonDto): Promise<void> {
    try {
      // person.CreatedDate = new Date(person.CreatedDate);
      // person.GeneratedDate = new Date(person.GeneratedDate);

      const id = await this._personsRepo.Insert(person);
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
  public async GetById(id: string): Promise<PersonBE> {
    return this._personsRepo.GetById(id);
  }

  public async GetAll(name?: string, page?: number, limit?: number): Promise<PersonBE[]> {
    return await this._personsRepo.GetAll(name, page, limit);
  }



  public async ClearAll(): Promise<void> {
    return this._personsRepo.ClearAll();
  }
}
