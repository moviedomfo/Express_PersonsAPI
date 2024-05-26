import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { activity_instance, activity_instanceId } from './activity_instance';
import type { params, paramsId } from './params';

export interface activitiesAttributes {
  id: number;
  slug: string;
  name: string;
  presentation: string;
  objectives: string;
  syllabus: string;
  type_id?: number;
  photo: string;
  photo2: string;
  modality_Id?: number;
  submodality_Id?: number;
  destacado?: number;
  enabled: boolean;
  allowEditData?: boolean;
  created_date: Date;
  created_user_id: string;
  updated_date?: Date;
  tenant_id: string;
}

export type activitiesPk = "id";
export type activitiesId = activities[activitiesPk];
export type activitiesOptionalAttributes = "id" | "type_id" | "modality_Id" | "submodality_Id" | "destacado" | "enabled" | "allowEditData" | "created_date" | "updated_date";
export type activitiesCreationAttributes = Optional<activitiesAttributes, activitiesOptionalAttributes>;

export class activities extends Model<activitiesAttributes, activitiesCreationAttributes> implements activitiesAttributes {
  id!: number;
  slug!: string;
  name!: string;
  presentation!: string;
  objectives!: string;
  syllabus!: string;
  type_id?: number;
  photo!: string;
  photo2!: string;
  modality_Id?: number;
  submodality_Id?: number;
  destacado?: number;
  enabled!: boolean;
  allowEditData?: boolean;
  created_date!: Date;
  created_user_id!: string;
  updated_date?: Date;
  tenant_id!: string;

  // activities hasMany activity_instance via activity_Id
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
  // activities belongsTo params via modality_Id
  modality!: params;
  getModality!: Sequelize.BelongsToGetAssociationMixin<params>;
  setModality!: Sequelize.BelongsToSetAssociationMixin<params, paramsId>;
  createModality!: Sequelize.BelongsToCreateAssociationMixin<params>;

  static initModel(sequelize: Sequelize.Sequelize): typeof activities {
    return activities.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    slug: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    presentation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    objectives: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    syllabus: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    photo2: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    modality_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'params',
        key: 'ParamId'
      }
    },
    submodality_Id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    destacado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    allowEditData: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    created_user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tenant_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'activities',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__activiti__3213E83FCE647D9F",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
