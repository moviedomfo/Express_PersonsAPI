import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_roles, security_rolesId } from './security_roles';
import type { security_user_roles, security_user_rolesId } from './security_user_roles';
import type { securityt_user_logins, securityt_user_loginsId } from './securityt_user_logins';

export interface security_usersAttributes {
  id: string;
  user_name: string;
  email?: string;
  email_confirmed: boolean;
  password_hash?: string;
  phone_number?: string;
  phone_number_confirmed: boolean;
  two_factor_enabled: boolean;
  lockout_end_date?: Date;
  lockout_enabled: boolean;
  access_failed_count: number;
  is_locked_out?: boolean;
  failed_password_attempt_count?: number;
  is_approved?: boolean;
  last_login_date?: Date;
  created_date: Date;
  tenant_id?: string;
}

export type security_usersPk = "id";
export type security_usersId = security_users[security_usersPk];
export type security_usersOptionalAttributes = "email" | "password_hash" | "phone_number" | "lockout_end_date" | "is_locked_out" | "failed_password_attempt_count" | "is_approved" | "last_login_date" | "created_date" | "tenant_id";
export type security_usersCreationAttributes = Optional<security_usersAttributes, security_usersOptionalAttributes>;

export class security_users extends Model<security_usersAttributes, security_usersCreationAttributes> implements security_usersAttributes {
  id!: string;
  user_name!: string;
  email?: string;
  email_confirmed!: boolean;
  password_hash?: string;
  phone_number?: string;
  phone_number_confirmed!: boolean;
  two_factor_enabled!: boolean;
  lockout_end_date?: Date;
  lockout_enabled!: boolean;
  access_failed_count!: number;
  is_locked_out?: boolean;
  failed_password_attempt_count?: number;
  is_approved?: boolean;
  last_login_date?: Date;
  created_date!: Date;
  tenant_id?: string;

  // security_users belongsToMany security_roles via user_id and role_id
  role_id_security_roles!: security_roles[];
  getRole_id_security_roles!: Sequelize.BelongsToManyGetAssociationsMixin<security_roles>;
  setRole_id_security_roles!: Sequelize.BelongsToManySetAssociationsMixin<security_roles, security_rolesId>;
  addRole_id_security_role!: Sequelize.BelongsToManyAddAssociationMixin<security_roles, security_rolesId>;
  addRole_id_security_roles!: Sequelize.BelongsToManyAddAssociationsMixin<security_roles, security_rolesId>;
  createRole_id_security_role!: Sequelize.BelongsToManyCreateAssociationMixin<security_roles>;
  removeRole_id_security_role!: Sequelize.BelongsToManyRemoveAssociationMixin<security_roles, security_rolesId>;
  removeRole_id_security_roles!: Sequelize.BelongsToManyRemoveAssociationsMixin<security_roles, security_rolesId>;
  hasRole_id_security_role!: Sequelize.BelongsToManyHasAssociationMixin<security_roles, security_rolesId>;
  hasRole_id_security_roles!: Sequelize.BelongsToManyHasAssociationsMixin<security_roles, security_rolesId>;
  countRole_id_security_roles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // security_users hasMany security_user_roles via user_id
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
  // security_users hasMany securityt_user_logins via UserId
  securityt_user_logins!: securityt_user_logins[];
  getSecurityt_user_logins!: Sequelize.HasManyGetAssociationsMixin<securityt_user_logins>;
  setSecurityt_user_logins!: Sequelize.HasManySetAssociationsMixin<securityt_user_logins, securityt_user_loginsId>;
  addSecurityt_user_login!: Sequelize.HasManyAddAssociationMixin<securityt_user_logins, securityt_user_loginsId>;
  addSecurityt_user_logins!: Sequelize.HasManyAddAssociationsMixin<securityt_user_logins, securityt_user_loginsId>;
  createSecurityt_user_login!: Sequelize.HasManyCreateAssociationMixin<securityt_user_logins>;
  removeSecurityt_user_login!: Sequelize.HasManyRemoveAssociationMixin<securityt_user_logins, securityt_user_loginsId>;
  removeSecurityt_user_logins!: Sequelize.HasManyRemoveAssociationsMixin<securityt_user_logins, securityt_user_loginsId>;
  hasSecurityt_user_login!: Sequelize.HasManyHasAssociationMixin<securityt_user_logins, securityt_user_loginsId>;
  hasSecurityt_user_logins!: Sequelize.HasManyHasAssociationsMixin<securityt_user_logins, securityt_user_loginsId>;
  countSecurityt_user_logins!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof security_users {
    return security_users.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    email_confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone_number_confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    two_factor_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    lockout_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lockout_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    access_failed_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_locked_out: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    failed_password_attempt_count: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    is_approved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    last_login_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    tenant_id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'security_users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SecurityUsers",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
