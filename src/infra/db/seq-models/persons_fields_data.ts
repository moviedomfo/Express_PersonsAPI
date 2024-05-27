import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { persons, personsId } from './persons';
import type { persons_fields_info, persons_fields_infoId } from './persons_fields_info';

export interface persons_fields_dataAttributes {
  person_id: number;
  field_id: string;
  data?: string;
}

export type persons_fields_dataPk = "person_id" | "field_id";
export type persons_fields_dataId = persons_fields_data[persons_fields_dataPk];
export type persons_fields_dataOptionalAttributes = "data";
export type persons_fields_dataCreationAttributes = Optional<persons_fields_dataAttributes, persons_fields_dataOptionalAttributes>;

export class persons_fields_data extends Model<persons_fields_dataAttributes, persons_fields_dataCreationAttributes> implements persons_fields_dataAttributes {
  person_id!: number;
  field_id!: string;
  data?: string;

  // persons_fields_data belongsTo persons via person_id
  person!: persons;
  getPerson!: Sequelize.BelongsToGetAssociationMixin<persons>;
  setPerson!: Sequelize.BelongsToSetAssociationMixin<persons, personsId>;
  createPerson!: Sequelize.BelongsToCreateAssociationMixin<persons>;
  // persons_fields_data belongsTo persons_fields_info via field_id
  field!: persons_fields_info;
  getField!: Sequelize.BelongsToGetAssociationMixin<persons_fields_info>;
  setField!: Sequelize.BelongsToSetAssociationMixin<persons_fields_info, persons_fields_infoId>;
  createField!: Sequelize.BelongsToCreateAssociationMixin<persons_fields_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof persons_fields_data {
    return persons_fields_data.init({
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persons',
        key: 'id'
      }
    },
    field_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persons_fields_info',
        key: 'short_name'
      }
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'persons_fields_data',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_persons_fields_data",
        unique: true,
        fields: [
          { name: "person_id" },
          { name: "field_id" },
        ]
      },
    ]
  });
  }
}
