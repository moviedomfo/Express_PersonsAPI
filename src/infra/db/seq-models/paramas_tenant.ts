import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface paramas_tenantAttributes {
  param_id: number;
  tenant_Id: number;
  value: string;
}

export type paramas_tenantPk = "param_id" | "tenant_Id";
export type paramas_tenantId = paramas_tenant[paramas_tenantPk];
export type paramas_tenantCreationAttributes = paramas_tenantAttributes;

export class paramas_tenant extends Model<paramas_tenantAttributes, paramas_tenantCreationAttributes> implements paramas_tenantAttributes {
  param_id!: number;
  tenant_Id!: number;
  value!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof paramas_tenant {
    return paramas_tenant.init({
    param_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenant_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paramas_tenant',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_paramas_tenant",
        unique: true,
        fields: [
          { name: "tenant_Id" },
          { name: "param_id" },
        ]
      },
    ]
  });
  }
}
