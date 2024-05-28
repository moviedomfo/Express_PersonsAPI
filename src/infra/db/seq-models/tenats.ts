import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { persons, personsId } from './persons';
import type { persons_fields_info, persons_fields_infoId } from './persons_fields_info';

export interface tenatsAttributes {
  id: string;
  name?: string;
  doc_number?: string;
}

export type tenatsPk = "id";
export type tenatsId = tenats[tenatsPk];
export type tenatsOptionalAttributes = "name" | "doc_number";
export type tenatsCreationAttributes = Optional<tenatsAttributes, tenatsOptionalAttributes>;

export class tenats extends Model<tenatsAttributes, tenatsCreationAttributes> implements tenatsAttributes {
  id!: string;
  name?: string;
  doc_number?: string;

  // tenats hasMany persons via tenant_id
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
  // tenats hasMany persons_fields_info via tenant_id
  persons_fields_infos!: persons_fields_info[];
  getPersons_fields_infos!: Sequelize.HasManyGetAssociationsMixin<persons_fields_info>;
  setPersons_fields_infos!: Sequelize.HasManySetAssociationsMixin<persons_fields_info, persons_fields_infoId>;
  addPersons_fields_info!: Sequelize.HasManyAddAssociationMixin<persons_fields_info, persons_fields_infoId>;
  addPersons_fields_infos!: Sequelize.HasManyAddAssociationsMixin<persons_fields_info, persons_fields_infoId>;
  createPersons_fields_info!: Sequelize.HasManyCreateAssociationMixin<persons_fields_info>;
  removePersons_fields_info!: Sequelize.HasManyRemoveAssociationMixin<persons_fields_info, persons_fields_infoId>;
  removePersons_fields_infos!: Sequelize.HasManyRemoveAssociationsMixin<persons_fields_info, persons_fields_infoId>;
  hasPersons_fields_info!: Sequelize.HasManyHasAssociationMixin<persons_fields_info, persons_fields_infoId>;
  hasPersons_fields_infos!: Sequelize.HasManyHasAssociationsMixin<persons_fields_info, persons_fields_infoId>;
  countPersons_fields_infos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tenats {
    return tenats.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    doc_number: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tenats',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_tenats",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
