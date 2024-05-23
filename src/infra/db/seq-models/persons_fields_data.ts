import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { persons, personsId } from './persons';

export interface persons_fields_dataAttributes {
  PersonId: number;
  FieldId: string;
  Data?: string;
}

export type persons_fields_dataOptionalAttributes = "Data";
export type persons_fields_dataCreationAttributes = Optional<persons_fields_dataAttributes, persons_fields_dataOptionalAttributes>;

export class persons_fields_data extends Model<persons_fields_dataAttributes, persons_fields_dataCreationAttributes> implements persons_fields_dataAttributes {
  PersonId!: number;
  FieldId!: string;
  Data?: string;

  // persons_fields_data belongsTo persons via PersonId
  Person!: persons;
  getPerson!: Sequelize.BelongsToGetAssociationMixin<persons>;
  setPerson!: Sequelize.BelongsToSetAssociationMixin<persons, personsId>;
  createPerson!: Sequelize.BelongsToCreateAssociationMixin<persons>;

  static initModel(sequelize: Sequelize.Sequelize): typeof persons_fields_data {
    return persons_fields_data.init({
    PersonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'persons',
        key: 'Id'
      }
    },
    FieldId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'persons_fields_data',
    schema: 'dbo',
    timestamps: false
  });
  }
}
