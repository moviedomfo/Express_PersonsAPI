import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_users, security_usersId } from './security_users';

export interface securityt_user_loginsAttributes {
  LoginProvider: string;
  ProviderKey: string;
  UserId: string;
}

export type securityt_user_loginsPk = "LoginProvider" | "ProviderKey";
export type securityt_user_loginsId = securityt_user_logins[securityt_user_loginsPk];
export type securityt_user_loginsCreationAttributes = securityt_user_loginsAttributes;

export class securityt_user_logins extends Model<securityt_user_loginsAttributes, securityt_user_loginsCreationAttributes> implements securityt_user_loginsAttributes {
  LoginProvider!: string;
  ProviderKey!: string;
  UserId!: string;

  // securityt_user_logins belongsTo security_users via UserId
  User!: security_users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<security_users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<security_users, security_usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<security_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof securityt_user_logins {
    return securityt_user_logins.init({
    LoginProvider: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    ProviderKey: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'security_users',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'securityt_user_logins',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SecuritytUserLogins",
        unique: true,
        fields: [
          { name: "LoginProvider" },
          { name: "ProviderKey" },
        ]
      },
    ]
  });
  }
}
