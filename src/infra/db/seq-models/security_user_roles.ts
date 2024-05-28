import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_roles, security_rolesId } from './security_roles';
import type { security_users, security_usersId } from './security_users';

export interface security_user_rolesAttributes {
  user_id: string;
  role_id: string;
}

export type security_user_rolesPk = "user_id" | "role_id";
export type security_user_rolesId = security_user_roles[security_user_rolesPk];
export type security_user_rolesCreationAttributes = security_user_rolesAttributes;

export class security_user_roles extends Model<security_user_rolesAttributes, security_user_rolesCreationAttributes> implements security_user_rolesAttributes {
  user_id!: string;
  role_id!: string;

  // security_user_roles belongsTo security_roles via role_id
  role!: security_roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<security_roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<security_roles, security_rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<security_roles>;
  // security_user_roles belongsTo security_users via user_id
  user!: security_users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<security_users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<security_users, security_usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<security_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof security_user_roles {
    return security_user_roles.init({
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'security_users',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'security_roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'security_user_roles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SecurityUserRoles",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
