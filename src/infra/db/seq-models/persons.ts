import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contact_media, contact_mediaId } from './contact_media';
import type { params, paramsId } from './params';
import type { person_addressess, person_addressessId } from './person_addressess';
import type { persons_fields_data } from './persons_fields_data';

export interface personsAttributes {
  Id: number;
  Code?: number;
  Slug: string;
  Name: string;
  Lastname: string;
  DocTypeId: number;
  DocNumber: string;
  DateOfBirth: Date;
  Photo?: string;
  DischargeDate?: Date;
  CategoryId?: number;
  GenderId: number;
  Enabled: boolean;
  CreatedDate: Date;
  CreatedUserId: string;
  client_id?: string;
}

export type personsPk = "Id";
export type personsId = persons[personsPk];
export type personsOptionalAttributes = "Id" | "Code" | "Photo" | "DischargeDate" | "CategoryId"  | "CreatedDate" | "client_id";
export type personsCreationAttributes = Optional<personsAttributes, personsOptionalAttributes>;

export class persons extends Model<personsAttributes, personsCreationAttributes> implements personsAttributes {
  Id!: number;
  Code?: number;
  Slug!: string;
  Name!: string;
  Lastname!: string;
  DocTypeId!: number;
  DocNumber!: string;
  DateOfBirth!: Date;
  Photo?: string;
  DischargeDate?: Date;
  CategoryId?: number;
  GenderId!: number;
  Enabled!: boolean;
  CreatedDate!: Date;
  CreatedUserId!: string;
  client_id?: string;

  // persons belongsTo params via DocTypeId
  DocType!: params;
  getDocType!: Sequelize.BelongsToGetAssociationMixin<params>;
  setDocType!: Sequelize.BelongsToSetAssociationMixin<params, paramsId>;
  createDocType!: Sequelize.BelongsToCreateAssociationMixin<params>;
  // persons belongsTo params via CategoryId
  Category!: params;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<params>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<params, paramsId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<params>;
  // persons hasMany contact_media via PersonId
  contact_media!: contact_media[];
  getContact_media!: Sequelize.HasManyGetAssociationsMixin<contact_media>;
  setContact_media!: Sequelize.HasManySetAssociationsMixin<contact_media, contact_mediaId>;
  addContact_medium!: Sequelize.HasManyAddAssociationMixin<contact_media, contact_mediaId>;
  addContact_media!: Sequelize.HasManyAddAssociationsMixin<contact_media, contact_mediaId>;
  createContact_medium!: Sequelize.HasManyCreateAssociationMixin<contact_media>;
  removeContact_medium!: Sequelize.HasManyRemoveAssociationMixin<contact_media, contact_mediaId>;
  removeContact_media!: Sequelize.HasManyRemoveAssociationsMixin<contact_media, contact_mediaId>;
  hasContact_medium!: Sequelize.HasManyHasAssociationMixin<contact_media, contact_mediaId>;
  hasContact_media!: Sequelize.HasManyHasAssociationsMixin<contact_media, contact_mediaId>;
  countContact_media!: Sequelize.HasManyCountAssociationsMixin;
  // persons hasMany person_addressess via PersonId
  person_addressesses!: person_addressess[];
  getPerson_addressesses!: Sequelize.HasManyGetAssociationsMixin<person_addressess>;
  setPerson_addressesses!: Sequelize.HasManySetAssociationsMixin<person_addressess, person_addressessId>;
  addPerson_addressess!: Sequelize.HasManyAddAssociationMixin<person_addressess, person_addressessId>;
  addPerson_addressesses!: Sequelize.HasManyAddAssociationsMixin<person_addressess, person_addressessId>;
  createPerson_addressess!: Sequelize.HasManyCreateAssociationMixin<person_addressess>;
  removePerson_addressess!: Sequelize.HasManyRemoveAssociationMixin<person_addressess, person_addressessId>;
  removePerson_addressesses!: Sequelize.HasManyRemoveAssociationsMixin<person_addressess, person_addressessId>;
  hasPerson_addressess!: Sequelize.HasManyHasAssociationMixin<person_addressess, person_addressessId>;
  hasPerson_addressesses!: Sequelize.HasManyHasAssociationsMixin<person_addressess, person_addressessId>;
  countPerson_addressesses!: Sequelize.HasManyCountAssociationsMixin;
  // persons hasMany persons_fields_data via PersonId
  persons_fields_data!: persons_fields_data[];
  getPersons_fields_data!: Sequelize.HasManyGetAssociationsMixin<persons_fields_data>;
  // setPersons_fields_data!: Sequelize.HasManySetAssociationsMixin<persons_fields_data, persons_fields_dataId>;
  // addPersons_fields_datum!: Sequelize.HasManyAddAssociationMixin<persons_fields_data, persons_fields_dataId>;
  // addPersons_fields_data!: Sequelize.HasManyAddAssociationsMixin<persons_fields_data, persons_fields_dataId>;
  // createPersons_fields_datum!: Sequelize.HasManyCreateAssociationMixin<persons_fields_data>;
  // removePersons_fields_datum!: Sequelize.HasManyRemoveAssociationMixin<persons_fields_data, persons_fields_dataId>;
  // removePersons_fields_data!: Sequelize.HasManyRemoveAssociationsMixin<persons_fields_data, persons_fields_dataId>;
  // hasPersons_fields_datum!: Sequelize.HasManyHasAssociationMixin<persons_fields_data, persons_fields_dataId>;
  // hasPersons_fields_data!: Sequelize.HasManyHasAssociationsMixin<persons_fields_data, persons_fields_dataId>;
  countPersons_fields_data!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof persons {
    return persons.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Code: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Slug: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    Name: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    Lastname: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    DocTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'params',
        key: 'Id'
      }
    },
    DocNumber: {
      type: DataTypes.CHAR(11),
      allowNull: false
    },
    DateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Photo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    DischargeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'params',
        key: 'Id'
      }
    },
    GenderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
    Enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    CreatedUserId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    client_id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'persons',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Person",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
