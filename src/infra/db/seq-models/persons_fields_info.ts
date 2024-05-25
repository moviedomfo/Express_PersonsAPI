import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface persons_fields_infoAttributes {
  short_name: string;
  description: string;
  type: string;
  supported_values: string;
  eenable: boolean;
  label?: string;
  tenant_id: string;
}

export type persons_fields_infoPk = "short_name";
export type persons_fields_infoId = persons_fields_info[persons_fields_infoPk];
export type persons_fields_infoOptionalAttributes = "eenable" | "label";
export type persons_fields_infoCreationAttributes = Optional<persons_fields_infoAttributes, persons_fields_infoOptionalAttributes>;

export class persons_fields_info extends Model<persons_fields_infoAttributes, persons_fields_infoCreationAttributes> implements persons_fields_infoAttributes {
  short_name!: string;
  description!: string;
  type!: string;
  supported_values!: string;
  eenable!: boolean;
  label?: string;
  tenant_id!: string;


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
    eenable: {
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
      allowNull: false
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
