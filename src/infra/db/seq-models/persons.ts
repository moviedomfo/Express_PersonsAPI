import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contact_info, contact_infoId } from './contact_info';
import type { params, paramsId } from './params';
import type { person_addressess, person_addressessId } from './person_addressess';
import type { persons_fields_data, persons_fields_dataId } from './persons_fields_data';
import type { persons_fields_info, persons_fields_infoId } from './persons_fields_info';
import type { tenats, tenatsId } from './tenats';

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
  created_date: Date;
  created_user_id: string;
  updated_date?: Date;
  allowEditData?: boolean;
  tenant_id?: string;
}

export type personsPk = "id";
export type personsId = persons[personsPk];
export type personsOptionalAttributes = "id" | "code" | "photo" | "discharge_date" | "category_id" | "created_date" | "updated_date" | "allowEditData" | "tenant_id";
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
  created_date!: Date;
  created_user_id!: string;
  updated_date?: Date;
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
  // persons hasMany contact_info via person_id
  contact_infos!: contact_info[];
  getContact_infos!: Sequelize.HasManyGetAssociationsMixin<contact_info>;
  setContact_infos!: Sequelize.HasManySetAssociationsMixin<contact_info, contact_infoId>;
  addContact_info!: Sequelize.HasManyAddAssociationMixin<contact_info, contact_infoId>;
  addContact_infos!: Sequelize.HasManyAddAssociationsMixin<contact_info, contact_infoId>;
  createContact_info!: Sequelize.HasManyCreateAssociationMixin<contact_info>;
  removeContact_info!: Sequelize.HasManyRemoveAssociationMixin<contact_info, contact_infoId>;
  removeContact_infos!: Sequelize.HasManyRemoveAssociationsMixin<contact_info, contact_infoId>;
  hasContact_info!: Sequelize.HasManyHasAssociationMixin<contact_info, contact_infoId>;
  hasContact_infos!: Sequelize.HasManyHasAssociationsMixin<contact_info, contact_infoId>;
  countContact_infos!: Sequelize.HasManyCountAssociationsMixin;
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
  // persons belongsToMany persons_fields_info via person_id and field_id
  field_id_persons_fields_infos!: persons_fields_info[];
  getField_id_persons_fields_infos!: Sequelize.BelongsToManyGetAssociationsMixin<persons_fields_info>;
  setField_id_persons_fields_infos!: Sequelize.BelongsToManySetAssociationsMixin<persons_fields_info, persons_fields_infoId>;
  addField_id_persons_fields_info!: Sequelize.BelongsToManyAddAssociationMixin<persons_fields_info, persons_fields_infoId>;
  addField_id_persons_fields_infos!: Sequelize.BelongsToManyAddAssociationsMixin<persons_fields_info, persons_fields_infoId>;
  createField_id_persons_fields_info!: Sequelize.BelongsToManyCreateAssociationMixin<persons_fields_info>;
  removeField_id_persons_fields_info!: Sequelize.BelongsToManyRemoveAssociationMixin<persons_fields_info, persons_fields_infoId>;
  removeField_id_persons_fields_infos!: Sequelize.BelongsToManyRemoveAssociationsMixin<persons_fields_info, persons_fields_infoId>;
  hasField_id_persons_fields_info!: Sequelize.BelongsToManyHasAssociationMixin<persons_fields_info, persons_fields_infoId>;
  hasField_id_persons_fields_infos!: Sequelize.BelongsToManyHasAssociationsMixin<persons_fields_info, persons_fields_infoId>;
  countField_id_persons_fields_infos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // persons belongsTo tenats via tenant_id
  tenant!: tenats;
  getTenant!: Sequelize.BelongsToGetAssociationMixin<tenats>;
  setTenant!: Sequelize.BelongsToSetAssociationMixin<tenats, tenatsId>;
  createTenant!: Sequelize.BelongsToCreateAssociationMixin<tenats>;

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
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    created_user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    allowEditData: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    tenant_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tenats',
        key: 'id'
      }
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
          { name: "id" },
        ]
      },
    ]
  });
  }
}
