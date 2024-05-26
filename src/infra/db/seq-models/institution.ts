import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { activity_instance, activity_instanceId } from './activity_instance';

export interface institutionAttributes {
  id: number;
  slug: string;
  name: string;
  description: string;
  photo?: string;
  created_date?: Date;
  update_date?: Date;
  created_user_id?: string;
  enabled?: boolean;
  tenant_id?: string;
}

export type institutionPk = "id";
export type institutionId = institution[institutionPk];
export type institutionOptionalAttributes = "id" | "slug" | "photo" | "created_date" | "update_date" | "created_user_id" | "enabled" | "tenant_id";
export type institutionCreationAttributes = Optional<institutionAttributes, institutionOptionalAttributes>;

export class institution extends Model<institutionAttributes, institutionCreationAttributes> implements institutionAttributes {
  id!: number;
  slug!: string;
  name!: string;
  description!: string;
  photo?: string;
  created_date?: Date;
  update_date?: Date;
  created_user_id?: string;
  enabled?: boolean;
  tenant_id?: string;

  // institution hasMany activity_instance via institution_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof institution {
    return institution.init({
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
    description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_user_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    tenant_id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'institution',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Instituc__3213E83F6A66833B",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
