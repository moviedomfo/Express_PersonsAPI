import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_permissions_groups, security_permissions_groupsId } from './security_permissions_groups';
import type { security_roles, security_rolesId } from './security_roles';
import type { security_roles_permissions, security_roles_permissionsId } from './security_roles_permissions';

export interface security_permissionsAttributes {
  id: number;
  description?: string;
  code?: string;
  group_id: number;
}

export type security_permissionsPk = "id";
export type security_permissionsId = security_permissions[security_permissionsPk];
export type security_permissionsOptionalAttributes = "id" | "description" | "code";
export type security_permissionsCreationAttributes = Optional<security_permissionsAttributes, security_permissionsOptionalAttributes>;

export class security_permissions extends Model<security_permissionsAttributes, security_permissionsCreationAttributes> implements security_permissionsAttributes {
  id!: number;
  description?: string;
  code?: string;
  group_id!: number;

  // security_permissions belongsToMany security_roles via permission_id and rol_Id
  rol_Id_security_roles!: security_roles[];
  getRol_Id_security_roles!: Sequelize.BelongsToManyGetAssociationsMixin<security_roles>;
  setRol_Id_security_roles!: Sequelize.BelongsToManySetAssociationsMixin<security_roles, security_rolesId>;
  addRol_Id_security_role!: Sequelize.BelongsToManyAddAssociationMixin<security_roles, security_rolesId>;
  addRol_Id_security_roles!: Sequelize.BelongsToManyAddAssociationsMixin<security_roles, security_rolesId>;
  createRol_Id_security_role!: Sequelize.BelongsToManyCreateAssociationMixin<security_roles>;
  removeRol_Id_security_role!: Sequelize.BelongsToManyRemoveAssociationMixin<security_roles, security_rolesId>;
  removeRol_Id_security_roles!: Sequelize.BelongsToManyRemoveAssociationsMixin<security_roles, security_rolesId>;
  hasRol_Id_security_role!: Sequelize.BelongsToManyHasAssociationMixin<security_roles, security_rolesId>;
  hasRol_Id_security_roles!: Sequelize.BelongsToManyHasAssociationsMixin<security_roles, security_rolesId>;
  countRol_Id_security_roles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // security_permissions hasMany security_roles_permissions via permission_id
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
  // security_permissions belongsTo security_permissions_groups via group_id
  group!: security_permissions_groups;
  getGroup!: Sequelize.BelongsToGetAssociationMixin<security_permissions_groups>;
  setGroup!: Sequelize.BelongsToSetAssociationMixin<security_permissions_groups, security_permissions_groupsId>;
  createGroup!: Sequelize.BelongsToCreateAssociationMixin<security_permissions_groups>;

  static initModel(sequelize: Sequelize.Sequelize): typeof security_permissions {
    return security_permissions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'security_permissions_groups',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'security_permissions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_security_rules",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
