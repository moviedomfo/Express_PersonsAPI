import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { locations, locationsId } from './locations';
import type { persons, personsId } from './persons';

export interface person_addressessAttributes {
  Id?: number;
  PersonId?: number;
  CityId?: number;
  ProvinceId?: number;
  CountryId?: number;
  Street?: string;
  ZipCode?: string;
}

export type person_addressessPk = "Id";
export type person_addressessId = person_addressess[person_addressessPk];
export type person_addressessOptionalAttributes = "Id" | "PersonId" | "CityId" | "ProvinceId" | "CountryId" | "Street" | "ZipCode";
export type person_addressessCreationAttributes = Optional<person_addressessAttributes, person_addressessOptionalAttributes>;

export class person_addressess extends Model<person_addressessAttributes, person_addressessCreationAttributes> implements person_addressessAttributes {
  Id?: number;
  PersonId?: number;
  CityId?: number;
  ProvinceId?: number;
  CountryId?: number;
  Street?: string;
  ZipCode?: string;

  // person_addressess belongsTo locations via CityId
  City!: locations;
  getCity!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setCity!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createCity!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // person_addressess belongsTo locations via ProvinceId
  Province!: locations;
  getProvince!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setProvince!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createProvince!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // person_addressess belongsTo locations via CountryId
  Country!: locations;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // person_addressess belongsTo persons via PersonId
  Person!: persons;
  getPerson!: Sequelize.BelongsToGetAssociationMixin<persons>;
  setPerson!: Sequelize.BelongsToSetAssociationMixin<persons, personsId>;
  createPerson!: Sequelize.BelongsToCreateAssociationMixin<persons>;

  static initModel(sequelize: Sequelize.Sequelize): typeof person_addressess {
    return person_addressess.init({
    Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    PersonId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'persons',
        key: 'Id'
      }
    },
    CityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'Id'
      }
    },
    ProvinceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'Id'
      }
    },
    CountryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'Id'
      }
    },
    Street: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ZipCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'person_addressess',
    schema: 'dbo',
    timestamps: false
  });
  }
}
