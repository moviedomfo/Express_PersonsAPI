import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { persons, personsId } from './persons';
import type { persons_fields_data, persons_fields_dataId } from './persons_fields_data';
import type { tenats, tenatsId } from './tenats';

export interface persons_fields_infoAttributes {
  short_name: string;
  description: string;
  type: string;
  supported_values: string;
  enable: boolean;
  label?: string;
  tenant_id: string;
}

export type persons_fields_infoPk = "short_name";
export type persons_fields_infoId = persons_fields_info[persons_fields_infoPk];
export type persons_fields_infoOptionalAttributes = "enable" | "label";
export type persons_fields_infoCreationAttributes = Optional<persons_fields_infoAttributes, persons_fields_infoOptionalAttributes>;

export class persons_fields_info extends Model<persons_fields_infoAttributes, persons_fields_infoCreationAttributes> implements persons_fields_infoAttributes {
  short_name!: string;
  description!: string;
  type!: string;
  supported_values!: string;
  enable!: boolean;
  label?: string;
  tenant_id!: string;

  // persons_fields_info belongsToMany persons via field_id and person_id
  person_id_people!: persons[];
  getPerson_id_people!: Sequelize.BelongsToManyGetAssociationsMixin<persons>;
  setPerson_id_people!: Sequelize.BelongsToManySetAssociationsMixin<persons, personsId>;
  addPerson_id_person!: Sequelize.BelongsToManyAddAssociationMixin<persons, personsId>;
  addPerson_id_people!: Sequelize.BelongsToManyAddAssociationsMixin<persons, personsId>;
  createPerson_id_person!: Sequelize.BelongsToManyCreateAssociationMixin<persons>;
  removePerson_id_person!: Sequelize.BelongsToManyRemoveAssociationMixin<persons, personsId>;
  removePerson_id_people!: Sequelize.BelongsToManyRemoveAssociationsMixin<persons, personsId>;
  hasPerson_id_person!: Sequelize.BelongsToManyHasAssociationMixin<persons, personsId>;
  hasPerson_id_people!: Sequelize.BelongsToManyHasAssociationsMixin<persons, personsId>;
  countPerson_id_people!: Sequelize.BelongsToManyCountAssociationsMixin;
  // persons_fields_info hasMany persons_fields_data via field_id
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
  // persons_fields_info belongsTo tenats via tenant_id
  tenant!: tenats;
  getTenant!: Sequelize.BelongsToGetAssociationMixin<tenats>;
  setTenant!: Sequelize.BelongsToSetAssociationMixin<tenats, tenatsId>;
  createTenant!: Sequelize.BelongsToCreateAssociationMixin<tenats>;

  static initModel(sequelize: Sequelize.Sequelize): typeof persons_fields_info {
    return persons_fields_info.init({
    short_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    type: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    supported_values: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    label: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tenant_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tenats',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'persons_fields_info',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Persons_fields_info",
        unique: true,
        fields: [
          { name: "short_name" },
        ]
      },
    ]
  });
  }
}
