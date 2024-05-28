import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { params, paramsId } from './params';
import type { persons, personsId } from './persons';

export interface contact_infoAttributes {
  id: number;
  person_id: number;
  description: string;
  value: string;
  type_id?: number;
}

export type contact_infoPk = "id";
export type contact_infoId = contact_info[contact_infoPk];
export type contact_infoOptionalAttributes = "id" | "type_id";
export type contact_infoCreationAttributes = Optional<contact_infoAttributes, contact_infoOptionalAttributes>;

export class contact_info extends Model<contact_infoAttributes, contact_infoCreationAttributes> implements contact_infoAttributes {
  id!: number;
  person_id!: number;
  description!: string;
  value!: string;
  type_id?: number;

  // contact_info belongsTo params via type_id
  type!: params;
  getType!: Sequelize.BelongsToGetAssociationMixin<params>;
  setType!: Sequelize.BelongsToSetAssociationMixin<params, paramsId>;
  createType!: Sequelize.BelongsToCreateAssociationMixin<params>;
  // contact_info belongsTo persons via person_id
  person!: persons;
  getPerson!: Sequelize.BelongsToGetAssociationMixin<persons>;
  setPerson!: Sequelize.BelongsToSetAssociationMixin<persons, personsId>;
  createPerson!: Sequelize.BelongsToCreateAssociationMixin<persons>;

  static initModel(sequelize: Sequelize.Sequelize): typeof contact_info {
    return contact_info.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'persons',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'params',
        key: 'ParamId'
      }
    }
  }, {
    sequelize,
    tableName: 'contact_info',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ContactMedia",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
