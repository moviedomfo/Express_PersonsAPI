import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_roles, security_rolesId } from './security_roles';
import type { securityt_user_logins, securityt_user_loginsId } from './securityt_user_logins';
import type { securityuser_roles, securityuser_rolesId } from './securityuser_roles';
import type { tenats, tenatsId } from './tenats';

export interface security_usersAttributes {
  Id: string;
  UserName: string;
  Email?: string;
  EmailConfirmed: boolean;
  PasswordHash?: string;
  SecurityStamp?: string;
  PhoneNumber?: string;
  PhoneNumberConfirmed: boolean;
  TwoFactorEnabled: boolean;
  LockoutEndDateUtc?: Date;
  LockoutEnabled: boolean;
  AccessFailedCount: number;
  CreatedDate: Date;
  LastLogInDate?: Date;
  IsLockedOut?: boolean;
  FailedPasswordAttemptCount?: number;
  IsApproved?: boolean;
  TenantId?: string;
}

export type security_usersPk = "Id";
export type security_usersId = security_users[security_usersPk];
export type security_usersOptionalAttributes = "Email" | "PasswordHash" | "SecurityStamp" | "PhoneNumber" | "LockoutEndDateUtc" | "CreatedDate" | "LastLogInDate" | "IsLockedOut" | "FailedPasswordAttemptCount" | "IsApproved" | "TenantId";
export type security_usersCreationAttributes = Optional<security_usersAttributes, security_usersOptionalAttributes>;

export class security_users extends Model<security_usersAttributes, security_usersCreationAttributes> implements security_usersAttributes {
  Id!: string;
  UserName!: string;
  Email?: string;
  EmailConfirmed!: boolean;
  PasswordHash?: string;
  SecurityStamp?: string;
  PhoneNumber?: string;
  PhoneNumberConfirmed!: boolean;
  TwoFactorEnabled!: boolean;
  LockoutEndDateUtc?: Date;
  LockoutEnabled!: boolean;
  AccessFailedCount!: number;
  CreatedDate!: Date;
  LastLogInDate?: Date;
  IsLockedOut?: boolean;
  FailedPasswordAttemptCount?: number;
  IsApproved?: boolean;
  TenantId?: string;

  // security_users belongsToMany security_roles via UserId and RoleId
  RoleId_security_roles!: security_roles[];
  getRoleId_security_roles!: Sequelize.BelongsToManyGetAssociationsMixin<security_roles>;
  setRoleId_security_roles!: Sequelize.BelongsToManySetAssociationsMixin<security_roles, security_rolesId>;
  addRoleId_security_role!: Sequelize.BelongsToManyAddAssociationMixin<security_roles, security_rolesId>;
  addRoleId_security_roles!: Sequelize.BelongsToManyAddAssociationsMixin<security_roles, security_rolesId>;
  createRoleId_security_role!: Sequelize.BelongsToManyCreateAssociationMixin<security_roles>;
  removeRoleId_security_role!: Sequelize.BelongsToManyRemoveAssociationMixin<security_roles, security_rolesId>;
  removeRoleId_security_roles!: Sequelize.BelongsToManyRemoveAssociationsMixin<security_roles, security_rolesId>;
  hasRoleId_security_role!: Sequelize.BelongsToManyHasAssociationMixin<security_roles, security_rolesId>;
  hasRoleId_security_roles!: Sequelize.BelongsToManyHasAssociationsMixin<security_roles, security_rolesId>;
  countRoleId_security_roles!: Sequelize.BelongsToManyCountAssociationsMixin;
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
  // security_users hasMany securityuser_roles via UserId
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
  // security_users belongsTo tenats via TenantId
  Tenant!: tenats;
  getTenant!: Sequelize.BelongsToGetAssociationMixin<tenats>;
  setTenant!: Sequelize.BelongsToSetAssociationMixin<tenats, tenatsId>;
  createTenant!: Sequelize.BelongsToCreateAssociationMixin<tenats>;

  static initModel(sequelize: Sequelize.Sequelize): typeof security_users {
    return security_users.init({
    Id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    EmailConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PasswordHash: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SecurityStamp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PhoneNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PhoneNumberConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TwoFactorEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LockoutEndDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockoutEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AccessFailedCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    LastLogInDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsLockedOut: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FailedPasswordAttemptCount: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    IsApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    TenantId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tenats',
        key: 'Id'
      }
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
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
