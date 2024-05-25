import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { person_addressess, person_addressessId } from './person_addressess';

export interface locationsAttributes {
  id: number;
  bame: string;
  type_id: number;
  parent_id?: number;
}

export type locationsPk = "id";
export type locationsId = locations[locationsPk];
export type locationsOptionalAttributes = "id" | "parent_id";
export type locationsCreationAttributes = Optional<locationsAttributes, locationsOptionalAttributes>;

export class locations extends Model<locationsAttributes, locationsCreationAttributes> implements locationsAttributes {
  id!: number;
  bame!: string;
  type_id!: number;
  parent_id?: number;

  // locations hasMany person_addressess via cityId
  person_addressesses!: person_addressess[];
  getPerson_addressesses!: Sequelize.HasManyGetAssociationsMixin<person_addressess>;
  setPerson_addressesses!: Sequelize.HasManySetAssociationsMixin<person_addressess, person_addressessId>;
  addPerson_addressess!: Sequelize.HasManyAddAssociationMixin<person_addressess, person_addressessId>;
  addPerson_addressesses!: Sequelize.HasManyAddAssociationsMixin<person_addressess, person_addressessId>;
  createPerson_addressess!: Sequelize.HasManyCreateAssociationMixin<person_addressess>;
  removePerson_addressess!: Sequelize.HasManyRemoveAssociationMixin<person_addressess, person_addressessId>;
  removePerson_addressesses!: Sequelize.HasManyRemoveAssociationsMixin<person_addressess, person_addressessId>;
  hasPerson_addressess!: Sequelize.HasManyHasAssociationMixin<person_addressess, person_addressessId>;
  hasPerson_addressesses!: Sequelize.HasManyHasAssociationsMixin<person_addressess, person_addressessId>;
  countPerson_addressesses!: Sequelize.HasManyCountAssociationsMixin;
  // locations hasMany person_addressess via province_Id
  province_person_addressesses!: person_addressess[];
  getProvince_person_addressesses!: Sequelize.HasManyGetAssociationsMixin<person_addressess>;
  setProvince_person_addressesses!: Sequelize.HasManySetAssociationsMixin<person_addressess, person_addressessId>;
  addProvince_person_addressess!: Sequelize.HasManyAddAssociationMixin<person_addressess, person_addressessId>;
  addProvince_person_addressesses!: Sequelize.HasManyAddAssociationsMixin<person_addressess, person_addressessId>;
  createProvince_person_addressess!: Sequelize.HasManyCreateAssociationMixin<person_addressess>;
  removeProvince_person_addressess!: Sequelize.HasManyRemoveAssociationMixin<person_addressess, person_addressessId>;
  removeProvince_person_addressesses!: Sequelize.HasManyRemoveAssociationsMixin<person_addressess, person_addressessId>;
  hasProvince_person_addressess!: Sequelize.HasManyHasAssociationMixin<person_addressess, person_addressessId>;
  hasProvince_person_addressesses!: Sequelize.HasManyHasAssociationsMixin<person_addressess, person_addressessId>;
  countProvince_person_addressesses!: Sequelize.HasManyCountAssociationsMixin;
  // locations hasMany person_addressess via country_Id
  country_person_addressesses!: person_addressess[];
  getCountry_person_addressesses!: Sequelize.HasManyGetAssociationsMixin<person_addressess>;
  setCountry_person_addressesses!: Sequelize.HasManySetAssociationsMixin<person_addressess, person_addressessId>;
  addCountry_person_addressess!: Sequelize.HasManyAddAssociationMixin<person_addressess, person_addressessId>;
  addCountry_person_addressesses!: Sequelize.HasManyAddAssociationsMixin<person_addressess, person_addressessId>;
  createCountry_person_addressess!: Sequelize.HasManyCreateAssociationMixin<person_addressess>;
  removeCountry_person_addressess!: Sequelize.HasManyRemoveAssociationMixin<person_addressess, person_addressessId>;
  removeCountry_person_addressesses!: Sequelize.HasManyRemoveAssociationsMixin<person_addressess, person_addressessId>;
  hasCountry_person_addressess!: Sequelize.HasManyHasAssociationMixin<person_addressess, person_addressessId>;
  hasCountry_person_addressesses!: Sequelize.HasManyHasAssociationsMixin<person_addressess, person_addressessId>;
  countCountry_person_addressesses!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof locations {
    return locations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bame: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'locations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Lotations",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
