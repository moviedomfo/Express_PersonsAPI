import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contact_media, contact_mediaId } from './contact_media';
import type { params, paramsId } from './params';
import type { person_addressess, person_addressessId } from './person_addressess';
import type { persons_fields_data, persons_fields_dataId } from './persons_fields_data';

export interface personsAttributes {
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
  created_at: Date;
  created_user_id: string;
  updated_at?: Date;
  allowEditData?: boolean;
  tenant_id?: string;
}

export type personsPk = "id";
export type personsId = persons[personsPk];
export type personsOptionalAttributes = "id" | "code" | "photo" | "discharge_date" | "category_id" | "created_at" | "updated_at" | "allowEditData" | "tenant_id";
export type personsCreationAttributes = Optional<personsAttributes, personsOptionalAttributes>;

export class persons extends Model<personsAttributes, personsCreationAttributes> implements personsAttributes {
  id!: number;
  code?: string;
  slug!: string;
  name!: string;
  last_name!: string;
  doc_type_Id!: number;
  doc_number!: string;
  date_of_birth!: Date;
  photo?: string;
  discharge_date?: Date;
  category_id?: number;
  gender_id!: number;
  enabled!: boolean;
  created_at!: Date;
  created_user_id!: string;
  updated_at?: Date;
  allowEditData?: boolean;
  tenant_id?: string;

  // persons belongsTo params via gender_id
  gender!: params;
  getGender!: Sequelize.BelongsToGetAssociationMixin<params>;
  setGender!: Sequelize.BelongsToSetAssociationMixin<params, paramsId>;
  createGender!: Sequelize.BelongsToCreateAssociationMixin<params>;
  // persons belongsTo params via category_id
  category!: params;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<params>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<params, paramsId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<params>;
  // persons hasMany contact_media via person_id
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
  // persons hasMany person_addressess via person_Id
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
  // persons hasMany persons_fields_data via person_id
  persons_fields_data!: persons_fields_data[];
  getPersons_fields_data!: Sequelize.HasManyGetAssociationsMixin<persons_fields_data>;
  setPersons_fields_data!: Sequelize.HasManySetAssociationsMixin<persons_fields_data, persons_fields_dataId>;
  addPersons_fields_datum!: Sequelize.HasManyAddAssociationMixin<persons_fields_data, persons_fields_dataId>;
  addPersons_fields_data!: Sequelize.HasManyAddAssociationsMixin<persons_fields_data, persons_fields_dataId>;
  createPersons_fields_datum!: Sequelize.HasManyCreateAssociationMixin<persons_fields_data>;
  removePersons_fields_datum!: Sequelize.HasManyRemoveAssociationMixin<persons_fields_data, persons_fields_dataId>;
  removePersons_fields_data!: Sequelize.HasManyRemoveAssociationsMixin<persons_fields_data, persons_fields_dataId>;
  hasPersons_fields_datum!: Sequelize.HasManyHasAssociationMixin<persons_fields_data, persons_fields_dataId>;
  hasPersons_fields_data!: Sequelize.HasManyHasAssociationsMixin<persons_fields_data, persons_fields_dataId>;
  countPersons_fields_data!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof persons {
    return persons.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    slug: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    last_name: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    doc_type_Id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doc_number: {
      type: DataTypes.CHAR(11),
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    discharge_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'params',
        key: 'ParamId'
      }
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'params',
        key: 'ParamId'
      }
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    allowEditData: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    tenant_id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'persons',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK_Person",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
