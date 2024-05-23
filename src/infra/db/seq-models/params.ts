import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contact_media, contact_mediaId } from './contact_media';
import type { persons, personsId } from './persons';

export interface paramsAttributes {
  Id: number;
  ParenId?: number;
  Name: string;
  Description?: string;
  Enabled: boolean;
  Culture: string;
}

export type paramsPk = "Id";
export type paramsId = params[paramsPk];
export type paramsOptionalAttributes = "ParenId" | "Description" | "Enabled" | "Culture";
export type paramsCreationAttributes = Optional<paramsAttributes, paramsOptionalAttributes>;

export class params extends Model<paramsAttributes, paramsCreationAttributes> implements paramsAttributes {
  Id!: number;
  ParenId?: number;
  Name!: string;
  Description?: string;
  Enabled!: boolean;
  Culture!: string;

  // params hasMany contact_media via TypeId
  contact_media!: contact_media[];
  getContact_media!: Sequelize.HasManyGetAssociationsMixin<contact_media>;
  setContact_media!: Sequelize.HasManySetAssociationsMixin<contact_media, contact_mediaId>;
  addContact_medium!: Sequelize.HasManyAddAssociationMixin<contact_media, contact_mediaId>;
  addContact_media!: Sequelize.HasManyAddAssociationsMixin<contact_media, contact_mediaId>;
  createContact_medium!: Sequelize.HasManyCreateAssociationMixin<contact_media>;
  removeContact_medium!: Sequelize.HasManyRemoveAssociationMixin<contact_media, contact_mediaId>;
  removeContact_media!: Sequelize.HasManyRemoveAssociationsMixin<contact_media, contact_mediaId>;
  hasContact_medium!: Sequelize.HasManyHasAssociationMixin<contact_media, contact_mediaId>;
  hasContact_media!: Sequelize.HasManyHasAssociationsMixin<contact_media, contact_mediaId>;
  countContact_media!: Sequelize.HasManyCountAssociationsMixin;
  // params hasMany persons via DocTypeId
  people!: persons[];
  getPeople!: Sequelize.HasManyGetAssociationsMixin<persons>;
  setPeople!: Sequelize.HasManySetAssociationsMixin<persons, personsId>;
  addPerson!: Sequelize.HasManyAddAssociationMixin<persons, personsId>;
  addPeople!: Sequelize.HasManyAddAssociationsMixin<persons, personsId>;
  createPerson!: Sequelize.HasManyCreateAssociationMixin<persons>;
  removePerson!: Sequelize.HasManyRemoveAssociationMixin<persons, personsId>;
  removePeople!: Sequelize.HasManyRemoveAssociationsMixin<persons, personsId>;
  hasPerson!: Sequelize.HasManyHasAssociationMixin<persons, personsId>;
  hasPeople!: Sequelize.HasManyHasAssociationsMixin<persons, personsId>;
  countPeople!: Sequelize.HasManyCountAssociationsMixin;
  // params hasMany persons via CategoryId
  Category_people!: persons[];
  getCategory_people!: Sequelize.HasManyGetAssociationsMixin<persons>;
  setCategory_people!: Sequelize.HasManySetAssociationsMixin<persons, personsId>;
  addCategory_person!: Sequelize.HasManyAddAssociationMixin<persons, personsId>;
  addCategory_people!: Sequelize.HasManyAddAssociationsMixin<persons, personsId>;
  createCategory_person!: Sequelize.HasManyCreateAssociationMixin<persons>;
  removeCategory_person!: Sequelize.HasManyRemoveAssociationMixin<persons, personsId>;
  removeCategory_people!: Sequelize.HasManyRemoveAssociationsMixin<persons, personsId>;
  hasCategory_person!: Sequelize.HasManyHasAssociationMixin<persons, personsId>;
  hasCategory_people!: Sequelize.HasManyHasAssociationsMixin<persons, personsId>;
  countCategory_people!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof params {
    return params.init({
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ParenId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    Culture: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      defaultValue: "ES-AR"
    }
  }, {
    sequelize,
    tableName: 'params',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Params",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
