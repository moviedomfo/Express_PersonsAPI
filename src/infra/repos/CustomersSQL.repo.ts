
import { PersonsSchema } from "@infra/schemas/sql.schemas";
import { PersonBE } from "@domain/Entities/PersonBE";
import { v4 as uuidv4 } from "uuid";
import { DateFunctions } from "@common/helpers/dateFunctions";
import { ExeptionFunctions } from "@common/helpers/ExeptionFunctions";
import { LogFunctions } from "@common/helpers/logFunctions";
import { IPersonsRepository } from "@app/interfases/IPersonsRepository";
import { CreatePersonDto, UpdatePersonDto } from "@app/DTOs/PersonDto";

import sequelize from "../db/Sequelize-sql-db";

import { initModels, persons, personsAttributes, personsCreationAttributes } from "@infra/db/seq-models/init-models";
import { Op } from "sequelize";
import { Entity } from "@common/CleanBases/Entity";
/**Persist to mongodb Persons */
export default class PersonsRepository implements IPersonsRepository {


  public Insert(req: CreatePersonDto): Promise<string> {


    return new Promise<string>(async (resolve, reject) => {


      const personAtt: personsCreationAttributes = {
        Name: req.Name,
        Slug: uuidv4(),
        Code: req.Code,
        Lastname: req.Lastname,
        DocTypeId: req.DocTypeId,
        DocNumber: req.DocNumber,
        DischargeDate: req.DischargeDate,
        DateOfBirth: req.DateOfBirth,
        Photo: "",
        CreatedDate: new Date(),
        CategoryId: undefined,
        GenderId: req.GenderId,
        Enabled: true, // O ajusta según tu lógica
        CreatedUserId: '5FC54C09-9EAB-4025-821B-0B799ABE4F98', // Asegúrate de obtener el ID del usuario que está creando la entrada
        client_id: 'D379670C-21B5-4DDD-A4EC-F5D34156B861'
      };


      try {
        // import models into sequelize instance
        initModels(sequelize);
        const cp = await persons.create(personAtt, {});

        resolve(cp.Id.toString());
      } catch (err) {
        reject(err);
      }
    });
  }


  public Insert2(req: PersonBE): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      //req.CreatedDate = dayjs(req.CreatedDate.toString()).toDate();

      // const f2 = dayjs(req.GeneratedDate).toISOString();
      // const f3 = dayjs(req.GeneratedDate).format("YYYY-MM-DD HH:mm:ss.SSS");
      // const f4 = dayjs(req.GeneratedDate.toString()).toDate();

      // const fechas = {
      //   Name: req.Name,
      //   f1: req.GeneratedDate,
      //   f2,
      //   f3,
      //   f4,
      // };
      // console.log(fechas);
      const personSchema = {
        Name: req.Name,
        Lastname: req.Lastname,
   
        DocNumber: req.DocNumber,
        CreatedDate: req.CreatedDate ? req.CreatedDate : new Date(),
        CloudId: "Comerce",
      };

      try {
        const cp = await PersonsSchema.create(personSchema, {});

        resolve(cp.getDataValue("Id"));
      } catch (err) {
        reject(err);
      }
    });
  }

  public Update(dto: UpdatePersonDto): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {

      const personSchema = {
        Code: dto.Code,
        Slug: dto.Slug,
        Name: dto.Name,
        Lastname: dto.Lastname,
        DocTypeId: dto.DocTypeId,
        DocNumber: dto.DocNumber,
        DateOfBirth: dto.DateOfBirth,
        Photo: dto.Photo,
        DischargeDate: dto.DischargeDate,
        CategoryId: dto.CategoryId,
        GenderId: dto.GenderId,
        Enabled: dto.Enabled,
      };

      const updateOptions = {
        where: { id: dto.Id },
        returning: true // Esto hará que Sequelize devuelva los registros afectados
      };
      try {
        const [affectedCount] = await PersonsSchema.update(personSchema, updateOptions);

        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }


  public GetById(id: number): Promise<PersonBE> {
    return new Promise<PersonBE>(async (resolve, reject) => {
      try {
        initModels(sequelize);
        const res = await persons.findByPk(id);
        const item: PersonBE = {
          Id: res.Id,
          Slug: res.Slug,
          Name: res.Name || "",
          Lastname: res.Lastname || "",
          DocTypeId: res.DocTypeId || 0,
          DocNumber: res.DocNumber || "",
          DateOfBirth: res.DateOfBirth || undefined,
          GenderId: res.GenderId || 0,
          Enabled: res.Enabled || false,
          CreatedDate: res.CreatedDate || undefined,
          CreatedUserId: res.CreatedUserId || "",

        };
        resolve(item);
      } catch (error) {
        reject(error);
      }
    });
  }




  public GetById_(id: number): Promise<PersonBE> {
    return new Promise<PersonBE>(async (resolve, reject) => {
      try {
        const res = await PersonsSchema.findByPk(id);
        // const person = PersonBE.Create({
        //   Id: res.getDataValue("Id"),
        //   Name: res.getDataValue("Name"),
        //   Lastname: res.getDataValue("LastName"),
        //   City: res.getDataValue("LastName"),
        //   Phone: res.getDataValue("Phone"),
        //   kafka_Topic: res.getDataValue("kafka_Topic"),
        //   DocNumber: res.getDataValue("DocNumber"),
        //   GeneratedDate: res.getDataValue("GeneratedDate"),
        //   CreatedDate: res.getDataValue("CreatedDate"),
        // });
        const dummyPerson = {
          Id: 1,
          Slug: "",
          Name: 'John',
          Lastname: 'Doe',
          DocTypeId: 1,
          DocNumber: '123456789',
          DateOfBirth: new Date('1990-01-01'),
          GenderId: 1,
          Enabled: true,
          CreatedDate: new Date(),
          CreatedUserId: 'admin',
          City: 'Dummy City',
          Phone: '1234567890',
          GeneratedDate: new Date()
        };
        resolve(dummyPerson);
      } catch (error) {
        reject(error);
      }
    });
  }

  public async ClearAll(): Promise<void> {
    return new Promise<void>((resolve, _reject) => {
      //PersonsSchema.cl.deleteMany({});
      resolve();
    });
  }

  public async GetAll(name?: string): Promise<PersonBE[]> {
    const where = {
      Name: {
        [Op.like]: name ? `${name}%` : "%",
      },
      kafka_Topic: {
        [Op.eq]: "customers",
      },
    };
    return new Promise<PersonBE[]>(async (resolve, reject) => {
      try {
        const res = await PersonsSchema.findAll({
          where,
        });

        const persons = res.map(p => {
          const item: PersonBE = {
            // Id: p.getDataValue("Id"),
            // Name: p.getDataValue("Name"),
            // Lastname: p.getDataValue("LastName"),
            // City: p.getDataValue("LastName"),
            // Phone: p.getDataValue("Phone"),
            // kafka_Topic: p.getDataValue("kafka_Topic"),
            // DocNumber: p.getDataValue("DocNumber"),
            // GeneratedDate: p.getDataValue("GeneratedDate"),
            // CreatedDate: p.getDataValue("CreatedDate"),
            Id: p.getDataValue("Id"),
            Slug: "",
            Name: "",
            Lastname: "",
            DocTypeId: 0,
            DocNumber: "",
            DateOfBirth: undefined,
            GenderId: 0,
            Enabled: false,
            CreatedDate: undefined,
            CreatedUserId: "",
          };
          return item;
        });

        resolve(persons);
      } catch (err) {
        reject(err);
      }
    });
  }
}
