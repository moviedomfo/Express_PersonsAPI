import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { params, paramsId } from './params';
import type { persons, personsId } from './persons';

export interface contact_mediaAttributes {
  Id: number;
  PersonId: number;
  Description: string;
  Value: string;
  TypeId?: number;
}

export type contact_mediaPk = "Id";
export type contact_mediaId = contact_media[contact_mediaPk];
export type contact_mediaOptionalAttributes = "Id" | "TypeId";
export type contact_mediaCreationAttributes = Optional<contact_mediaAttributes, contact_mediaOptionalAttributes>;

export class contact_media extends Model<contact_mediaAttributes, contact_mediaCreationAttributes> implements contact_mediaAttributes {
  Id!: number;
  PersonId!: number;
  Description!: string;
  Value!: string;
  TypeId?: number;

  // contact_media belongsTo params via TypeId
  Type!: params;
  getType!: Sequelize.BelongsToGetAssociationMixin<params>;
  setType!: Sequelize.BelongsToSetAssociationMixin<params, paramsId>;
  createType!: Sequelize.BelongsToCreateAssociationMixin<params>;
  // contact_media belongsTo persons via PersonId
  Person!: persons;
  getPerson!: Sequelize.BelongsToGetAssociationMixin<persons>;
  setPerson!: Sequelize.BelongsToSetAssociationMixin<persons, personsId>;
  createPerson!: Sequelize.BelongsToCreateAssociationMixin<persons>;

  static initModel(sequelize: Sequelize.Sequelize): typeof contact_media {
    return contact_media.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PersonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'persons',
        key: 'Id'
      }
    },
    Description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    Value: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    TypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'params',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'contact_media',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ContactMedia",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
