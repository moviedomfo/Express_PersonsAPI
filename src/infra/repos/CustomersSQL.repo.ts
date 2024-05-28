
import { PersonsSchema } from "@infra/schemas/sql.schemas";
import { PersonBE } from "@domain/Entities/PersonBE";
import { IPersonsRepository } from "@app/interfases/IPersonsRepository";
import { UpdatePersonReq } from "@app/DTOs/Persons/UpdatePersonISVC";
import sequelize from "../db/Sequelize-sql-db";
import { contact_info, initModels, locations, params, person_addressess, person_addressessAttributes, persons, personsAttributes, personsCreationAttributes, persons_fields_data, persons_fields_info } from "@infra/db/seq-models/init-models";
import { Op, where } from "sequelize";
import { AppConstants } from "@common/CommonConstants";
import { ParamsEnum } from "@common/Enums/ParamsEnums";
import { getEnumKeyFromValue, parseEnum } from "@common/helpers/paramsValidators";
import { Addressesses_DTO, ContactInfoDTO, Fields_Data_DTO, GetPersonByIdRes } from "@app/DTOs/Persons/GetPersonByIdISVC";
import { CreatePersonReq, CreatePersonRes } from "@app/DTOs/Persons/CreatePersonISVC";
import { ContactInfoBE } from "@domain/Entities/ContactInfoBE";
import { PersonAddresseBE } from "@domain/Entities/Person_AddressessBE";
import { contact_infoAttributes } from "@infra/db/seq-models/contact_info";

/**Persist to mongodb Persons */
export default class PersonsRepository implements IPersonsRepository {


  public Insert(req: PersonBE): Promise<CreatePersonRes> {


    return new Promise<CreatePersonRes>(async (resolve, reject) => {
      const personAtt: personsCreationAttributes = {
        name: req.name,
        slug: req.slug,
        code: req.code,
        last_name: req.last_name,
        doc_type_Id: req.doc_type_Id,
        doc_number: req.doc_number,
        discharge_date: req.discharge_date,
        date_of_birth: req.date_of_birth,
        photo: req.photo,
        created_date: req.created_date,
        category_id: undefined,
        gender_id: req.gender_id,
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

  public Add_contact_info(person_id: number, contactInfoList: ContactInfoBE[]): Promise<void> {

    return new Promise<void>(async (resolve, reject) => {
      try {
        contactInfoList.forEach(p => {
          const contact: contact_infoAttributes = {
            // id: 1,
            person_id: person_id,
            description: p.description,
            value: p.value,
            type_id: p.type_id,
            id: 0
          };

           contact_info.create(contact);
        })
        resolve();
      } catch (err) {
        reject(err);
      }
    });

  }

  public Add_addressess(person_id: number, addressesses: PersonAddresseBE[]): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        addressesses.forEach(a => {
          const exampleAddress: person_addressessAttributes = {
            // id: 1,
            person_Id: person_id,
            city_id: a.city_id,
            province_Id: a.province_Id,
            country_Id: a.country_Id,
            street: a.street,
            zip_code: a.zip_code
          };

          person_addressess.create(exampleAddress);
        })
        resolve();
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
        Name: req.name,
        Lastname: req.last_name,

        DocNumber: req.doc_number,
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
        Code: req.code,
        Name: req.name,
        Lastname: req.last_name,
        DocTypeId: req.doc_type_Id,
        DocNumber: req.doc_number,
        DateOfBirth: req.date_of_birth, Photo: req.photo,
        DischargeDate: req.discharge_date,
        CategoryId: undefined,
        GenderId: req.gender_id,
        Enabled: req.enabled,
      };

      const updateOptions = {
        where: { id: req.id },
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
  public GetById(id: number): Promise<GetPersonByIdRes> {
    return new Promise<GetPersonByIdRes>(async (resolve, reject) => {
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
        const personFromDB = await persons.findByPk(id, where_include);
        //res.person_addressesses;
        const res: GetPersonByIdRes = {
          id: personFromDB.id,
          slug: personFromDB.slug,
          name: personFromDB.name || "",
          last_name: personFromDB.last_name || "",
          doc_type_id: personFromDB.doc_type_Id || 0,
          doc_number: personFromDB.doc_number || "",
          date_of_birth: personFromDB.date_of_birth || undefined,
          gender_id: personFromDB.gender_id || 0,
          enabled: personFromDB.enabled || false,
          created_date: personFromDB.created_date || undefined,
          created_user_id: personFromDB.created_user_id || "",
          addressess: [],
          updatd_date: undefined,
          dynamic_data: [],
          contactInfoList: []
        };

        res.addressess = personFromDB.person_addressesses?.map(address => ({
          id: address.id,
          street: address.street,
          zip_code: address.zip_code,
          city: address.city ? address.city.name : null,
          province: address.province ? address.province.name : null,
          country: address.country ? address.country.name : null
        }));




        resolve(res);
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
  public SearchDinamicFields(person_id: number): Promise<Fields_Data_DTO[]> {
    return new Promise<Fields_Data_DTO[]>(async (resolve, reject) => {
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
          let enumType = undefined;
          let enum_name = undefined;
          if (p.field.type.trim() === 'param') {
            enumType = parseEnum<ParamsEnum>(ParamsEnum, p.field.supported_values.trim());
            // enumType = parseEnum(ParamsEnum, p.field.supported_values.trim());
            enum_name = getEnumKeyFromValue(enumType, parseInt(p.data.trim()));
          }


          const item: Fields_Data_DTO = {
            short_name: p.field_id,
            data: p.data.trim(),
            description: p.field.description.trim(),
            type: p.field.type.trim(),
            supported_values: p.field.supported_values.trim(),
            // param_type: enumType,
            param_name: enum_name,
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
  public SearchDinamicFields2(person_id: number): Promise<Fields_Data_DTO[]> {
    return new Promise<Fields_Data_DTO[]>(async (resolve, reject) => {
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
          let enumType = undefined;
          let enum_name = undefined;
          if (p.field.type.trim() === 'param') {
            enumType = parseEnum<ParamsEnum>(ParamsEnum, p.field.supported_values.trim());

            enum_name = getEnumKeyFromValue(enumType, parseInt(p.data.trim()));
          }
          const item: Fields_Data_DTO = {
            short_name: p.field_id,
            data: p.data,
            description: field_info.description,
            type: field_info.type,
            supported_values: field_info.supported_values,
            // param_type: enumType,
            param_name: enum_name,

          };
          return item;
        }));


        resolve(result);
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
  public SearchContactInfo(person_id: number): Promise<ContactInfoDTO[]> {
    return new Promise<ContactInfoDTO[]>(async (resolve, reject) => {
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
              model: params,
              as: 'type', // Asegúrate de usar el alias correcto que corresponda con la asociación definida en el modelo
              attributes: ['name'],
              where: {
                enable: true
              }

            },


          ]
        };
        const res = await contact_info.findAll(where_include);

        const result = res.map(p => {
          const item: ContactInfoDTO = {
            id: p.id,
            value: p.value.trim(),
            description: p.description.trim(),
            type_id: p.type_id,
            type_name: p.type.Name.trim(),

          };
          return item;
        });
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
            id: p.getDataValue("id"),
            name: p.getDataValue("name"),
            last_name: p.getDataValue("last_name"),
            slug: p.getDataValue("slug"),
            doc_number: p.getDataValue("doc_number"),
            date_of_birth: p.getDataValue("date_of_birth"),
            created_date: p.getDataValue("created_date"),
            doc_type_Id: p.getDataValue("doc_type_Id"),
            gender_id: p.getDataValue("gender_id"),
            enabled: p.getDataValue("enabled"),
            created_user_id: p.get("created_user_id"),
            category_id: p.category_id,
            updated_date: p.updated_date
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
