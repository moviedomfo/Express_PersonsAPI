import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_roles, security_rolesId } from './security_roles';
import type { security_users, security_usersId } from './security_users';

export interface securityuser_rolesAttributes {
  UserId: string;
  RoleId: string;
}

export type securityuser_rolesPk = "UserId" | "RoleId";
export type securityuser_rolesId = securityuser_roles[securityuser_rolesPk];
export type securityuser_rolesCreationAttributes = securityuser_rolesAttributes;

export class securityuser_roles extends Model<securityuser_rolesAttributes, securityuser_rolesCreationAttributes> implements securityuser_rolesAttributes {
  UserId!: string;
  RoleId!: string;

  // securityuser_roles belongsTo security_roles via RoleId
  Role!: security_roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<security_roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<security_roles, security_rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<security_roles>;
  // securityuser_roles belongsTo security_users via UserId
  User!: security_users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<security_users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<security_users, security_usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<security_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof securityuser_roles {
    return securityuser_roles.init({
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'security_users',
        key: 'Id'
      }
    },
    RoleId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'security_roles',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'securityuser_roles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SecurityUserRoles",
        unique: true,
        fields: [
          { name: "UserId" },
          { name: "RoleId" },
        ]
      },
    ]
  });
  }
}
