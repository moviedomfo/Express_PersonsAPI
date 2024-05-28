import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_permissions, security_permissionsId } from './security_permissions';

export interface security_permissions_groupsAttributes {
  id: number;
  name?: string;
  parent_id?: number;
  description?: string;
}

export type security_permissions_groupsPk = "id";
export type security_permissions_groupsId = security_permissions_groups[security_permissions_groupsPk];
export type security_permissions_groupsOptionalAttributes = "id" | "name" | "parent_id" | "description";
export type security_permissions_groupsCreationAttributes = Optional<security_permissions_groupsAttributes, security_permissions_groupsOptionalAttributes>;

export class security_permissions_groups extends Model<security_permissions_groupsAttributes, security_permissions_groupsCreationAttributes> implements security_permissions_groupsAttributes {
  id!: number;
  name?: string;
  parent_id?: number;
  description?: string;

  // security_permissions_groups hasMany security_permissions via group_id
  security_permissions!: security_permissions[];
  getSecurity_permissions!: Sequelize.HasManyGetAssociationsMixin<security_permissions>;
  setSecurity_permissions!: Sequelize.HasManySetAssociationsMixin<security_permissions, security_permissionsId>;
  addSecurity_permission!: Sequelize.HasManyAddAssociationMixin<security_permissions, security_permissionsId>;
  addSecurity_permissions!: Sequelize.HasManyAddAssociationsMixin<security_permissions, security_permissionsId>;
  createSecurity_permission!: Sequelize.HasManyCreateAssociationMixin<security_permissions>;
  removeSecurity_permission!: Sequelize.HasManyRemoveAssociationMixin<security_permissions, security_permissionsId>;
  removeSecurity_permissions!: Sequelize.HasManyRemoveAssociationsMixin<security_permissions, security_permissionsId>;
  hasSecurity_permission!: Sequelize.HasManyHasAssociationMixin<security_permissions, security_permissionsId>;
  hasSecurity_permissions!: Sequelize.HasManyHasAssociationsMixin<security_permissions, security_permissionsId>;
  countSecurity_permissions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof security_permissions_groups {
    return security_permissions_groups.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'security_permissions_groups',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_security_rules_category",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
