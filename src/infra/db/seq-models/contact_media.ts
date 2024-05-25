import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { persons, personsId } from './persons';

export interface contact_mediaAttributes {
  id: number;
  person_id: number;
  description: string;
  value: string;
  type_id?: number;
}

export type contact_mediaPk = "id";
export type contact_mediaId = contact_media[contact_mediaPk];
export type contact_mediaOptionalAttributes = "id" | "type_id";
export type contact_mediaCreationAttributes = Optional<contact_mediaAttributes, contact_mediaOptionalAttributes>;

export class contact_media extends Model<contact_mediaAttributes, contact_mediaCreationAttributes> implements contact_mediaAttributes {
  id!: number;
  person_id!: number;
  description!: string;
  value!: string;
  type_id?: number;

  // contact_media belongsTo persons via person_id
  person!: persons;
  getPerson!: Sequelize.BelongsToGetAssociationMixin<persons>;
  setPerson!: Sequelize.BelongsToSetAssociationMixin<persons, personsId>;
  createPerson!: Sequelize.BelongsToCreateAssociationMixin<persons>;

  static initModel(sequelize: Sequelize.Sequelize): typeof contact_media {
    return contact_media.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'persons',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
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
          { name: "id" },
        ]
      },
    ]
  });
  }
}
