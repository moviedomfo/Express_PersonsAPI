import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { locations, locationsId } from './locations';
import type { persons, personsId } from './persons';

export interface person_addressessAttributes {
  id?: number;
  person_Id?: number;
  cityId?: number;
  province_Id?: number;
  country_Id?: number;
  street?: string;
  zip_code?: string;
}

export type person_addressessPk = "id";
export type person_addressessId = person_addressess[person_addressessPk];
export type person_addressessOptionalAttributes = "id" | "person_Id" | "cityId" | "province_Id" | "country_Id" | "street" | "zip_code";
export type person_addressessCreationAttributes = Optional<person_addressessAttributes, person_addressessOptionalAttributes>;

export class person_addressess extends Model<person_addressessAttributes, person_addressessCreationAttributes> implements person_addressessAttributes {
  id?: number;
  person_Id?: number;
  cityId?: number;
  province_Id?: number;
  country_Id?: number;
  street?: string;
  zip_code?: string;

  // person_addressess belongsTo locations via cityId
  city!: locations;
  getCity!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setCity!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createCity!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // person_addressess belongsTo locations via province_Id
  province!: locations;
  getProvince!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setProvince!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createProvince!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // person_addressess belongsTo locations via country_Id
  country!: locations;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<locations>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<locations, locationsId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<locations>;
  // person_addressess belongsTo persons via person_Id
  person!: persons;
  getPerson!: Sequelize.BelongsToGetAssociationMixin<persons>;
  setPerson!: Sequelize.BelongsToSetAssociationMixin<persons, personsId>;
  createPerson!: Sequelize.BelongsToCreateAssociationMixin<persons>;

  static initModel(sequelize: Sequelize.Sequelize): typeof person_addressess {
    return person_addressess.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    person_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'persons',
        key: 'id'
      }
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'id'
      }
    },
    province_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'id'
      }
    },
    country_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'id'
      }
    },
    street: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    zip_code: {
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
