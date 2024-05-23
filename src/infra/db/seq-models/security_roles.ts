import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_users, security_usersId } from './security_users';
import type { securityuser_roles, securityuser_rolesId } from './securityuser_roles';

export interface security_rolesAttributes {
  Id: string;
  Description?: string;
  Name: string;
  InstitutionId?: string;
}

export type security_rolesPk = "Id";
export type security_rolesId = security_roles[security_rolesPk];
export type security_rolesOptionalAttributes = "Description" | "InstitutionId";
export type security_rolesCreationAttributes = Optional<security_rolesAttributes, security_rolesOptionalAttributes>;

export class security_roles extends Model<security_rolesAttributes, security_rolesCreationAttributes> implements security_rolesAttributes {
  Id!: string;
  Description?: string;
  Name!: string;
  InstitutionId?: string;

  // security_roles belongsToMany security_users via RoleId and UserId
  UserId_security_users!: security_users[];
  getUserId_security_users!: Sequelize.BelongsToManyGetAssociationsMixin<security_users>;
  setUserId_security_users!: Sequelize.BelongsToManySetAssociationsMixin<security_users, security_usersId>;
  addUserId_security_user!: Sequelize.BelongsToManyAddAssociationMixin<security_users, security_usersId>;
  addUserId_security_users!: Sequelize.BelongsToManyAddAssociationsMixin<security_users, security_usersId>;
  createUserId_security_user!: Sequelize.BelongsToManyCreateAssociationMixin<security_users>;
  removeUserId_security_user!: Sequelize.BelongsToManyRemoveAssociationMixin<security_users, security_usersId>;
  removeUserId_security_users!: Sequelize.BelongsToManyRemoveAssociationsMixin<security_users, security_usersId>;
  hasUserId_security_user!: Sequelize.BelongsToManyHasAssociationMixin<security_users, security_usersId>;
  hasUserId_security_users!: Sequelize.BelongsToManyHasAssociationsMixin<security_users, security_usersId>;
  countUserId_security_users!: Sequelize.BelongsToManyCountAssociationsMixin;
  // security_roles hasMany securityuser_roles via RoleId
  securityuser_roles!: securityuser_roles[];
  getSecurityuser_roles!: Sequelize.HasManyGetAssociationsMixin<securityuser_roles>;
  setSecurityuser_roles!: Sequelize.HasManySetAssociationsMixin<securityuser_roles, securityuser_rolesId>;
  addSecurityuser_role!: Sequelize.HasManyAddAssociationMixin<securityuser_roles, securityuser_rolesId>;
  addSecurityuser_roles!: Sequelize.HasManyAddAssociationsMixin<securityuser_roles, securityuser_rolesId>;
  createSecurityuser_role!: Sequelize.HasManyCreateAssociationMixin<securityuser_roles>;
  removeSecurityuser_role!: Sequelize.HasManyRemoveAssociationMixin<securityuser_roles, securityuser_rolesId>;
  removeSecurityuser_roles!: Sequelize.HasManyRemoveAssociationsMixin<securityuser_roles, securityuser_rolesId>;
  hasSecurityuser_role!: Sequelize.HasManyHasAssociationMixin<securityuser_roles, securityuser_rolesId>;
  hasSecurityuser_roles!: Sequelize.HasManyHasAssociationsMixin<securityuser_roles, securityuser_rolesId>;
  countSecurityuser_roles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof security_roles {
    return security_roles.init({
    Id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    InstitutionId: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'security_roles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_dbo.SecurityRoles",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
