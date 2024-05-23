import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface security_clientsAttributes {
  Id: string;
  Name: string;
  AllowedOrigin?: string;
  RefreshTokenLifeTime: number;
  JwtLifeTime: number;
  Active: boolean;
  Description?: string;
  AudienceSecret?: string;
  issuer?: string;
  audienceId?: string;
  client_Id?: string;
}

export type security_clientsPk = "Id";
export type security_clientsId = security_clients[security_clientsPk];
export type security_clientsOptionalAttributes = "AllowedOrigin" | "RefreshTokenLifeTime" | "JwtLifeTime" | "Active" | "Description" | "AudienceSecret" | "issuer" | "audienceId" | "client_Id";
export type security_clientsCreationAttributes = Optional<security_clientsAttributes, security_clientsOptionalAttributes>;

export class security_clients extends Model<security_clientsAttributes, security_clientsCreationAttributes> implements security_clientsAttributes {
  Id!: string;
  Name!: string;
  AllowedOrigin?: string;
  RefreshTokenLifeTime!: number;
  JwtLifeTime!: number;
  Active!: boolean;
  Description?: string;
  AudienceSecret?: string;
  issuer?: string;
  audienceId?: string;
  client_Id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof security_clients {
    return security_clients.init({
    Id: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    AllowedOrigin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RefreshTokenLifeTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    JwtLifeTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 60
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AudienceSecret: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    issuer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    audienceId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    client_Id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'security_clients',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_dbo.ApplicationClients",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
