import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface persons_fields_infoAttributes {
  ShortName: string;
  Description: string;
  Type: string;
  SupportedValues: string;
  Enable: boolean;
  TenantID: string;
  Label?: string;
}

export type persons_fields_infoPk = "ShortName";
export type persons_fields_infoId = persons_fields_info[persons_fields_infoPk];
export type persons_fields_infoOptionalAttributes = "Enable" | "Label";
export type persons_fields_infoCreationAttributes = Optional<persons_fields_infoAttributes, persons_fields_infoOptionalAttributes>;

export class persons_fields_info extends Model<persons_fields_infoAttributes, persons_fields_infoCreationAttributes> implements persons_fields_infoAttributes {
  ShortName!: string;
  Description!: string;
  Type!: string;
  SupportedValues!: string;
  Enable!: boolean;
  TenantID!: string;
  Label?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof persons_fields_info {
    return persons_fields_info.init({
    ShortName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    Type: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    SupportedValues: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    TenantID: {
      type: DataTypes.UUID,
      allowNull: false
    },
    Label: {
      type: DataTypes.STRING(50),
      allowNull: true
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
          { name: "ShortName" },
        ]
      },
    ]
  });
  }
}
