import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_permissions, security_permissionsId } from './security_permissions';
import type { security_roles_permissions, security_roles_permissionsId } from './security_roles_permissions';
import type { security_user_roles, security_user_rolesId } from './security_user_roles';
import type { security_users, security_usersId } from './security_users';

export interface security_rolesAttributes {
  id: string;
  description?: string;
  name: string;
  tenant_id?: string;
}

export type security_rolesPk = "id";
export type security_rolesId = security_roles[security_rolesPk];
export type security_rolesOptionalAttributes = "description" | "tenant_id";
export type security_rolesCreationAttributes = Optional<security_rolesAttributes, security_rolesOptionalAttributes>;

export class security_roles extends Model<security_rolesAttributes, security_rolesCreationAttributes> implements security_rolesAttributes {
  id!: string;
  description?: string;
  name!: string;
  tenant_id?: string;

  // security_roles belongsToMany security_permissions via rol_Id and permission_id
  permission_id_security_permissions!: security_permissions[];
  getPermission_id_security_permissions!: Sequelize.BelongsToManyGetAssociationsMixin<security_permissions>;
  setPermission_id_security_permissions!: Sequelize.BelongsToManySetAssociationsMixin<security_permissions, security_permissionsId>;
  addPermission_id_security_permission!: Sequelize.BelongsToManyAddAssociationMixin<security_permissions, security_permissionsId>;
  addPermission_id_security_permissions!: Sequelize.BelongsToManyAddAssociationsMixin<security_permissions, security_permissionsId>;
  createPermission_id_security_permission!: Sequelize.BelongsToManyCreateAssociationMixin<security_permissions>;
  removePermission_id_security_permission!: Sequelize.BelongsToManyRemoveAssociationMixin<security_permissions, security_permissionsId>;
  removePermission_id_security_permissions!: Sequelize.BelongsToManyRemoveAssociationsMixin<security_permissions, security_permissionsId>;
  hasPermission_id_security_permission!: Sequelize.BelongsToManyHasAssociationMixin<security_permissions, security_permissionsId>;
  hasPermission_id_security_permissions!: Sequelize.BelongsToManyHasAssociationsMixin<security_permissions, security_permissionsId>;
  countPermission_id_security_permissions!: Sequelize.BelongsToManyCountAssociationsMixin;
  // security_roles hasMany security_roles_permissions via rol_Id
  security_roles_permissions!: security_roles_permissions[];
  getSecurity_roles_permissions!: Sequelize.HasManyGetAssociationsMixin<security_roles_permissions>;
  setSecurity_roles_permissions!: Sequelize.HasManySetAssociationsMixin<security_roles_permissions, security_roles_permissionsId>;
  addSecurity_roles_permission!: Sequelize.HasManyAddAssociationMixin<security_roles_permissions, security_roles_permissionsId>;
  addSecurity_roles_permissions!: Sequelize.HasManyAddAssociationsMixin<security_roles_permissions, security_roles_permissionsId>;
  createSecurity_roles_permission!: Sequelize.HasManyCreateAssociationMixin<security_roles_permissions>;
  removeSecurity_roles_permission!: Sequelize.HasManyRemoveAssociationMixin<security_roles_permissions, security_roles_permissionsId>;
  removeSecurity_roles_permissions!: Sequelize.HasManyRemoveAssociationsMixin<security_roles_permissions, security_roles_permissionsId>;
  hasSecurity_roles_permission!: Sequelize.HasManyHasAssociationMixin<security_roles_permissions, security_roles_permissionsId>;
  hasSecurity_roles_permissions!: Sequelize.HasManyHasAssociationsMixin<security_roles_permissions, security_roles_permissionsId>;
  countSecurity_roles_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // security_roles hasMany security_user_roles via role_id
  security_user_roles!: security_user_roles[];
  getSecurity_user_roles!: Sequelize.HasManyGetAssociationsMixin<security_user_roles>;
  setSecurity_user_roles!: Sequelize.HasManySetAssociationsMixin<security_user_roles, security_user_rolesId>;
  addSecurity_user_role!: Sequelize.HasManyAddAssociationMixin<security_user_roles, security_user_rolesId>;
  addSecurity_user_roles!: Sequelize.HasManyAddAssociationsMixin<security_user_roles, security_user_rolesId>;
  createSecurity_user_role!: Sequelize.HasManyCreateAssociationMixin<security_user_roles>;
  removeSecurity_user_role!: Sequelize.HasManyRemoveAssociationMixin<security_user_roles, security_user_rolesId>;
  removeSecurity_user_roles!: Sequelize.HasManyRemoveAssociationsMixin<security_user_roles, security_user_rolesId>;
  hasSecurity_user_role!: Sequelize.HasManyHasAssociationMixin<security_user_roles, security_user_rolesId>;
  hasSecurity_user_roles!: Sequelize.HasManyHasAssociationsMixin<security_user_roles, security_user_rolesId>;
  countSecurity_user_roles!: Sequelize.HasManyCountAssociationsMixin;
  // security_roles belongsToMany security_users via role_id and user_id
  user_id_security_users!: security_users[];
  getUser_id_security_users!: Sequelize.BelongsToManyGetAssociationsMixin<security_users>;
  setUser_id_security_users!: Sequelize.BelongsToManySetAssociationsMixin<security_users, security_usersId>;
  addUser_id_security_user!: Sequelize.BelongsToManyAddAssociationMixin<security_users, security_usersId>;
  addUser_id_security_users!: Sequelize.BelongsToManyAddAssociationsMixin<security_users, security_usersId>;
  createUser_id_security_user!: Sequelize.BelongsToManyCreateAssociationMixin<security_users>;
  removeUser_id_security_user!: Sequelize.BelongsToManyRemoveAssociationMixin<security_users, security_usersId>;
  removeUser_id_security_users!: Sequelize.BelongsToManyRemoveAssociationsMixin<security_users, security_usersId>;
  hasUser_id_security_user!: Sequelize.BelongsToManyHasAssociationMixin<security_users, security_usersId>;
  hasUser_id_security_users!: Sequelize.BelongsToManyHasAssociationsMixin<security_users, security_usersId>;
  countUser_id_security_users!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof security_roles {
    return security_roles.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    tenant_id: {
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
          { name: "id" },
        ]
      },
    ]
  });
  }
}
