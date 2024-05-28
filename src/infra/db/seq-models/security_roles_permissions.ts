import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_permissions, security_permissionsId } from './security_permissions';
import type { security_roles, security_rolesId } from './security_roles';

export interface security_roles_permissionsAttributes {
  rol_Id: string;
  permission_id: number;
}

export type security_roles_permissionsPk = "rol_Id" | "permission_id";
export type security_roles_permissionsId = security_roles_permissions[security_roles_permissionsPk];
export type security_roles_permissionsCreationAttributes = security_roles_permissionsAttributes;

export class security_roles_permissions extends Model<security_roles_permissionsAttributes, security_roles_permissionsCreationAttributes> implements security_roles_permissionsAttributes {
  rol_Id!: string;
  permission_id!: number;

  // security_roles_permissions belongsTo security_permissions via permission_id
  permission!: security_permissions;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<security_permissions>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<security_permissions, security_permissionsId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<security_permissions>;
  // security_roles_permissions belongsTo security_roles via rol_Id
  rol!: security_roles;
  getRol!: Sequelize.BelongsToGetAssociationMixin<security_roles>;
  setRol!: Sequelize.BelongsToSetAssociationMixin<security_roles, security_rolesId>;
  createRol!: Sequelize.BelongsToCreateAssociationMixin<security_roles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof security_roles_permissions {
    return security_roles_permissions.init({
    rol_Id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'security_roles',
        key: 'id'
      }
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'security_permissions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'security_roles_permissions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_security_roles_permissions",
        unique: true,
        fields: [
          { name: "rol_Id" },
          { name: "permission_id" },
        ]
      },
    ]
  });
  }
}
