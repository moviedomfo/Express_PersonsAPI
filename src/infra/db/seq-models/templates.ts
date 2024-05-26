import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { activity_instance, activity_instanceId } from './activity_instance';

export interface templatesAttributes {
  id: number;
  html?: string;
  name?: string;
  notes?: string;
  image?: string;
  orientation?: string;
  type?: string;
  properties_json?: string;
  institution_id?: number;
  allowEditData?: boolean;
  enabled: boolean;
  created_date: Date;
  created_user_id: string;
  updated_date?: Date;
  tenantAt?: string;
}

export type templatesPk = "id";
export type templatesId = templates[templatesPk];
export type templatesOptionalAttributes = "id" | "html" | "name" | "notes" | "image" | "orientation" | "type" | "properties_json" | "institution_id" | "allowEditData" | "enabled" | "updated_date" | "tenantAt";
export type templatesCreationAttributes = Optional<templatesAttributes, templatesOptionalAttributes>;

export class templates extends Model<templatesAttributes, templatesCreationAttributes> implements templatesAttributes {
  id!: number;
  html?: string;
  name?: string;
  notes?: string;
  image?: string;
  orientation?: string;
  type?: string;
  properties_json?: string;
  institution_id?: number;
  allowEditData?: boolean;
  enabled!: boolean;
  created_date!: Date;
  created_user_id!: string;
  updated_date?: Date;
  tenantAt?: string;

  // templates hasMany activity_instance via template_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof templates {
    return templates.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orientation: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    properties_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    institution_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowEditData: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    created_user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tenantAt: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'templates',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__template__3213E83FFD1135E9",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
