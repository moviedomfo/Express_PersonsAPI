import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_users, security_usersId } from './security_users';

export interface tenatsAttributes {
  Id: string;
  Name?: string;
  CUIT?: string;
  PersonId?: number;
}

export type tenatsPk = "Id";
export type tenatsId = tenats[tenatsPk];
export type tenatsOptionalAttributes = "Name" | "CUIT" | "PersonId";
export type tenatsCreationAttributes = Optional<tenatsAttributes, tenatsOptionalAttributes>;

export class tenats extends Model<tenatsAttributes, tenatsCreationAttributes> implements tenatsAttributes {
  Id!: string;
  Name?: string;
  CUIT?: string;
  PersonId?: number;

  // tenats hasMany security_users via TenantId
  security_users!: security_users[];
  getSecurity_users!: Sequelize.HasManyGetAssociationsMixin<security_users>;
  setSecurity_users!: Sequelize.HasManySetAssociationsMixin<security_users, security_usersId>;
  addSecurity_user!: Sequelize.HasManyAddAssociationMixin<security_users, security_usersId>;
  addSecurity_users!: Sequelize.HasManyAddAssociationsMixin<security_users, security_usersId>;
  createSecurity_user!: Sequelize.HasManyCreateAssociationMixin<security_users>;
  removeSecurity_user!: Sequelize.HasManyRemoveAssociationMixin<security_users, security_usersId>;
  removeSecurity_users!: Sequelize.HasManyRemoveAssociationsMixin<security_users, security_usersId>;
  hasSecurity_user!: Sequelize.HasManyHasAssociationMixin<security_users, security_usersId>;
  hasSecurity_users!: Sequelize.HasManyHasAssociationsMixin<security_users, security_usersId>;
  countSecurity_users!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tenats {
    return tenats.init({
    Id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CUIT: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    PersonId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tenats',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Tenats",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
