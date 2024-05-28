import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { activities, activitiesId } from './activities';
import type { activity_instance, activity_instanceId } from './activity_instance';
import type { contact_info, contact_infoId } from './contact_info';
import type { persons, personsId } from './persons';

export interface paramsAttributes {
  ParamId: number;
  ParenId?: number;
  Name: string;
  Description?: string;
  Enabled: boolean;
}

export type paramsPk = "ParamId";
export type paramsId = params[paramsPk];
export type paramsOptionalAttributes = "ParenId" | "Description" | "Enabled";
export type paramsCreationAttributes = Optional<paramsAttributes, paramsOptionalAttributes>;

export class params extends Model<paramsAttributes, paramsCreationAttributes> implements paramsAttributes {
  ParamId!: number;
  ParenId?: number;
  Name!: string;
  Description?: string;
  Enabled!: boolean;

  // params hasMany activities via modality_Id
  activities!: activities[];
  getActivities!: Sequelize.HasManyGetAssociationsMixin<activities>;
  setActivities!: Sequelize.HasManySetAssociationsMixin<activities, activitiesId>;
  addActivity!: Sequelize.HasManyAddAssociationMixin<activities, activitiesId>;
  addActivities!: Sequelize.HasManyAddAssociationsMixin<activities, activitiesId>;
  createActivity!: Sequelize.HasManyCreateAssociationMixin<activities>;
  removeActivity!: Sequelize.HasManyRemoveAssociationMixin<activities, activitiesId>;
  removeActivities!: Sequelize.HasManyRemoveAssociationsMixin<activities, activitiesId>;
  hasActivity!: Sequelize.HasManyHasAssociationMixin<activities, activitiesId>;
  hasActivities!: Sequelize.HasManyHasAssociationsMixin<activities, activitiesId>;
  countActivities!: Sequelize.HasManyCountAssociationsMixin;
  // params hasMany activity_instance via state_id
  activity_instances!: activity_instance[];
  getActivity_instances!: Sequelize.HasManyGetAssociationsMixin<activity_instance>;
  setActivity_instances!: Sequelize.HasManySetAssociationsMixin<activity_instance, activity_instanceId>;
  addActivity_instance!: Sequelize.HasManyAddAssociationMixin<activity_instance, activity_instanceId>;
  addActivity_instances!: Sequelize.HasManyAddAssociationsMixin<activity_instance, activity_instanceId>;
  createActivity_instance!: Sequelize.HasManyCreateAssociationMixin<activity_instance>;
  removeActivity_instance!: Sequelize.HasManyRemoveAssociationMixin<activity_instance, activity_instanceId>;
  removeActivity_instances!: Sequelize.HasManyRemoveAssociationsMixin<activity_instance, activity_instanceId>;
  hasActivity_instance!: Sequelize.HasManyHasAssociationMixin<activity_instance, activity_instanceId>;
  hasActivity_instances!: Sequelize.HasManyHasAssociationsMixin<activity_instance, activity_instanceId>;
  countActivity_instances!: Sequelize.HasManyCountAssociationsMixin;
  // params hasMany contact_info via type_id
  contact_infos!: contact_info[];
  getContact_infos!: Sequelize.HasManyGetAssociationsMixin<contact_info>;
  setContact_infos!: Sequelize.HasManySetAssociationsMixin<contact_info, contact_infoId>;
  addContact_info!: Sequelize.HasManyAddAssociationMixin<contact_info, contact_infoId>;
  addContact_infos!: Sequelize.HasManyAddAssociationsMixin<contact_info, contact_infoId>;
  createContact_info!: Sequelize.HasManyCreateAssociationMixin<contact_info>;
  removeContact_info!: Sequelize.HasManyRemoveAssociationMixin<contact_info, contact_infoId>;
  removeContact_infos!: Sequelize.HasManyRemoveAssociationsMixin<contact_info, contact_infoId>;
  hasContact_info!: Sequelize.HasManyHasAssociationMixin<contact_info, contact_infoId>;
  hasContact_infos!: Sequelize.HasManyHasAssociationsMixin<contact_info, contact_infoId>;
  countContact_infos!: Sequelize.HasManyCountAssociationsMixin;
  // params hasMany persons via gender_id
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
  // params hasMany persons via category_id
  category_people!: persons[];
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
    ParamId: {
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
    }
  }, {
    sequelize,
    tableName: 'params',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_params",
        unique: true,
        fields: [
          { name: "ParamId" },
        ]
      },
    ]
  });
  }
}
