
import { PersonsSchema } from "@infra/schemas/sql.schemas";
import { PersonBE } from "@domain/Entities/PersonBE";
import { v4 as uuidv4 } from "uuid";
import { IPersonsRepository } from "@app/interfases/IPersonsRepository";
import { CreatePersonReq, CreatePersonRes, Persons_Fields_Data_DTO, UpdatePersonReq } from "@app/DTOs/PersonDto";

import sequelize from "../db/Sequelize-sql-db";

import { initModels, locations, person_addressess, persons, personsAttributes, personsCreationAttributes, persons_fields_data, persons_fields_info } from "@infra/db/seq-models/init-models";
import { Op, where } from "sequelize";
import { AppConstants } from "@common/CommonConstants";
import { ParamsEnum } from "@common/Enums/ParamsEnums";
import { parseEnum } from "@common/helpers/paramsValidators";

/**Persist to mongodb Persons */
export default class PersonsRepository implements IPersonsRepository {


  public Insert(req: CreatePersonReq): Promise<CreatePersonRes> {


    return new Promise<CreatePersonRes>(async (resolve, reject) => {


      const personAtt: personsCreationAttributes = {
        name: req.Name,
        slug: uuidv4(),
        code: req.Code,
        last_name: req.LastName,
        doc_type_Id: req.DocTypeId,
        doc_number: req.DocNumber,
        discharge_date: req.DischargeDate,
        date_of_birth: req.DateOfBirth,
        photo: "",
        created_date: new Date(),
        category_id: undefined,
        gender_id: req.GenderId,
        enabled: true, // O ajusta según tu lógica
        allowEditData: true,
        created_user_id: AppConstants.APP_USER_ID,
        tenant_id: AppConstants.APP_CLIENT_ID
      };


      try {
        // import models into sequelize instance
        initModels(sequelize);
        const cp = await persons.create(personAtt, {});

        resolve({ Id: cp.id, Slug: cp.slug });
      } catch (err) {
        reject(err);
      }
    });
  }


  public Insert2(req: PersonBE): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      //req.createdAt = dayjs(req.createdAt.toString()).toDate();

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
        createdAt: req.created_date ? req.created_date : new Date(),
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

  public Update(req: UpdatePersonReq): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {

      const personSchema = {
        Code: req.Code,
        Slug: req.Slug,
        Name: req.Name,
        Lastname: req.Lastname,
        DocTypeId: req.DocTypeId,
        DocNumber: req.DocNumber,
        DateOfBirth: req.DateOfBirth,
        Photo: req.Photo,
        DischargeDate: req.DischargeDate,
        CategoryId: req.CategoryId,
        GenderId: req.GenderId,
        Enabled: req.Enabled,
      };

      const updateOptions = {
        where: { id: req.Id },
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

  /**
   * 
   * @param id the person_id 
   * 
   * @returns Retrive person by id and their addresses
   */
  public GetById(id: number): Promise<PersonBE> {
    return new Promise<PersonBE>(async (resolve, reject) => {
      try {
        initModels(sequelize);


        const where_include = {
          include: [
            {
              model: person_addressess,
              as: 'person_addressesses',

              attributes: ['id', 'street', 'zip_code'],
              include: [
                {
                  model: locations,
                  as: 'city',
                  attributes: ['name'],

                },
                {
                  model: locations,
                  as: 'province',
                  attributes: ['name'],
                },
                {
                  model: locations,
                  as: 'country',
                  attributes: ['name'],
                }
              ]
            }]


        }
        const res = await persons.findByPk(id, where_include);
        //res.person_addressesses;
        const item: PersonBE = {
          Id: res.id,
          Slug: res.slug,
          Name: res.name || "",
          Lastname: res.last_name || "",
          DocTypeId: res.doc_type_Id || 0,
          DocNumber: res.doc_number || "",
          DateOfBirth: res.date_of_birth || undefined,
          GenderId: res.gender_id || 0,
          Enabled: res.enabled || false,
          created_date: res.created_date || undefined,
          createdUserId: res.created_user_id || "",
          Addressess: [],
          updatd_date: undefined
        };
        if (res.person_addressesses) {
          item.Addressess = res.person_addressesses.map(address => ({
            Id: address.id,
            Street: address.street,
            ZipCode: address.zip_code,
            City: address.city ? address.city.name : null,
            Province: address.province ? address.province.name : null,
            Country: address.country ? address.country.name : null
          }))

        }


        resolve(item);
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * 
   * @param person_id 
   * @returns 
   */
  public SearchDinamicFields(person_id: number): Promise<Persons_Fields_Data_DTO[]> {
    return new Promise<Persons_Fields_Data_DTO[]>(async (resolve, reject) => {
      try {
        initModels(sequelize);


        const where_include = {
          where: {
            person_id: {
              [Op.eq]: person_id,
            },
          },
          include: [
            {
              model: persons_fields_info,
              as: 'field', // Asegúrate de usar el alias correcto que corresponda con la asociación definida en el modelo
              attributes: ['short_name', 'description', 'supported_values', 'type', 'enable'],
              where: {
                enable: true
              }

            },


          ]
        };
        const res = await persons_fields_data.findAll(where_include);

        const result = res.map((p) => {
          const item: Persons_Fields_Data_DTO = {
            short_name: p.field_id,
            data: p.data.trim(),
            description: p.field.description.trim(),
            type: p.field.type.trim(),
            supported_values: p.field.supported_values.trim(),
            type_param: ParamsEnum
          };
          return item;
        });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Demo .. a diferencia de SearchDinamicFields utiliza await p.getField(); par aobtener los datos 
   * de 
   * @param person_id persons_fields_info
   * @returns 
   */
  public SearchDinamicFields2(person_id: number): Promise<Persons_Fields_Data_DTO[]> {
    return new Promise<Persons_Fields_Data_DTO[]>(async (resolve, reject) => {
      try {
        initModels(sequelize);


        const where_include = {
          where: {
            person_id: {
              [Op.eq]: person_id,
            },

          },
          // include: [
          //   {
          //     model: persons_fields_info,
          //     as: 'field',
          //     attributes: ['short_name', 'description', 'supported_values', 'type'],
          //   }]
        }


        const res = await persons_fields_data.findAll(where_include);

        const result = await Promise.all(res.map(async p => {
          const field_info = await p.getField();
          //          if(field_info.type === 'param')
          const param = field_info.type === 'param' ? parseEnum<ParamsEnum>(ParamsEnum, field_info.type) : null;

          const item: Persons_Fields_Data_DTO = {
            short_name: p.field_id,
            data: p.data,
            description: field_info.description,
            type: field_info.type,
            supported_values: field_info.supported_values,
            type_param: field_info.type === param,

          };
          return item;
        }));


        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public async ClearAll(): Promise<void> {
    return new Promise<void>(async (resolve, _reject) => {
      const res = await persons.findByPk(32);
      //PersonsSchema.cl.deleteMany({});
      resolve();
    });
  }

  public async GetAll(name?: string): Promise<PersonBE[]> {
    const where = {
      Name: {
        [Op.like]: name ? `${name}%` : "%",
      },
      // kafka_Topic: {
      //   [Op.eq]: "customers",
      // },
    };

    return new Promise<PersonBE[]>(async (resolve, reject) => {
      try {
        initModels(sequelize);

        const res = await persons.findAll({
          where,
        });

        // const res personList = await PersonsSchema.findAll({
        //   where,
        // });

        const personList = res.map(p => {
          const item: PersonBE = {
            Id: p.getDataValue("id"),
            Name: p.getDataValue("name"),
            Lastname: p.getDataValue("last_name"),
            Slug: p.getDataValue("slug"),
            DocNumber: p.getDataValue("doc_number"),
            DateOfBirth: p.getDataValue("date_of_birth"),
            created_date: p.getDataValue("created_date"),
            DocTypeId: p.getDataValue("doc_type_Id"),
            GenderId: p.getDataValue("gender_id"),
            Enabled: p.getDataValue("enabled"),
            createdUserId: p.get("created_user_id"),
            CategoryId: p.category_id,
            updatd_date: p.updated_date
          };
          return item;
        });

        resolve(personList);
      } catch (err) {
        reject(err);
      }
    });
  }

  // public GetById_(id: number): Promise<PersonBE> {
  //   return new Promise<PersonBE>(async (resolve, reject) => {
  //     try {
  //       const res = await PersonsSchema.findByPk(id);
  //       // const person = PersonBE.Create({
  //       //   Id: res.getDataValue("Id"),
  //       //   Name: res.getDataValue("Name"),
  //       //   Lastname: res.getDataValue("LastName"),
  //       //   City: res.getDataValue("LastName"),
  //       //   Phone: res.getDataValue("Phone"),
  //       //   kafka_Topic: res.getDataValue("kafka_Topic"),
  //       //   DocNumber: res.getDataValue("DocNumber"),
  //       //   GeneratedDate: res.getDataValue("GeneratedDate"),
  //       //   createdAt: res.getDataValue("createdAt"),
  //       // });

  //       resolve(dummyPerson);
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  // }

}
