import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { activity_instance, activity_instanceId } from './activity_instance';

export interface platformAttributes {
  id: number;
  name: string;
  type_Id: number;
}

export type platformPk = "id";
export type platformId = platform[platformPk];
export type platformOptionalAttributes = "id" | "type_Id";
export type platformCreationAttributes = Optional<platformAttributes, platformOptionalAttributes>;

export class platform extends Model<platformAttributes, platformCreationAttributes> implements platformAttributes {
  id!: number;
  name!: string;
  type_Id!: number;

  // platform hasMany activity_instance via platform_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof platform {
    return platform.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    type_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1201
    }
  }, {
    sequelize,
    tableName: 'platform',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ev_platf__3213E83F1CBC84B2",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
