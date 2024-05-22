import { PersonBE } from "@domain/Entities/PersonBE";
import { ImessageDto } from "@app/DTOs/MessageDto";
import { IPersonsRepository } from "@app/interfases/IPersonsRepository";
import { IPersonsService } from "@domain/interfases/IPersonsService";
import { or } from "sequelize";

// @Route("PersonsService")
export default class PersonsService implements IPersonsService {
  private readonly _personRepo: IPersonsRepository;
  private readonly _providersRepository: IPersonsRepository;


  constructor(private readonly personRepo: IPersonsRepository, private readonly providersRepo: IPersonsRepository) {
    this._personRepo = personRepo;
    this._providersRepository = providersRepo;
  }

  /**
   * New customme is registered online
   * 1) persist to database
   * 2) send to Queue (rabit or kafka)
   * @param person
   * @origin Api app caller
   */
  public async Create(person: PersonBE): Promise<void> {
    try {
      // person.CreatedDate = new Date(person.CreatedDate);
      // person.GeneratedDate = new Date(person.GeneratedDate);

      const id = await this.personRepo.Insert(person);
      const createdPerson = new PersonBE(id);

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
  public async Update(person: PersonBE): Promise<void> {
    try {
      await this.personRepo.Update(person);


    } catch (err) {
      throw err;
    }
  }
  public async GetById(id: string): Promise<PersonBE> {
    return this.personRepo.GetById(id);
  }

  public async GetAll(name?: string, page?: number, limit?: number): Promise<PersonBE[]> {
    return await this.personRepo.GetAll(name, page, limit);
  }



  public async ClearAll(): Promise<void> {
    return this.personRepo.ClearAll();
  }
}
