import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { programs_activities, programs_activitiesId } from './programs_activities';

export interface programsAttributes {
  id: number;
  description: string;
  img: string;
  enabled: boolean;
  created_date: Date;
  created_user_id: string;
  updated_date?: Date;
  tenant_id?: string;
}

export type programsPk = "id";
export type programsId = programs[programsPk];
export type programsOptionalAttributes = "id" | "enabled" | "created_date" | "updated_date" | "tenant_id";
export type programsCreationAttributes = Optional<programsAttributes, programsOptionalAttributes>;

export class programs extends Model<programsAttributes, programsCreationAttributes> implements programsAttributes {
  id!: number;
  description!: string;
  img!: string;
  enabled!: boolean;
  created_date!: Date;
  created_user_id!: string;
  updated_date?: Date;
  tenant_id?: string;

  // programs hasMany programs_activities via program_id
  programs_activities!: programs_activities[];
  getPrograms_activities!: Sequelize.HasManyGetAssociationsMixin<programs_activities>;
  setPrograms_activities!: Sequelize.HasManySetAssociationsMixin<programs_activities, programs_activitiesId>;
  addPrograms_activity!: Sequelize.HasManyAddAssociationMixin<programs_activities, programs_activitiesId>;
  addPrograms_activities!: Sequelize.HasManyAddAssociationsMixin<programs_activities, programs_activitiesId>;
  createPrograms_activity!: Sequelize.HasManyCreateAssociationMixin<programs_activities>;
  removePrograms_activity!: Sequelize.HasManyRemoveAssociationMixin<programs_activities, programs_activitiesId>;
  removePrograms_activities!: Sequelize.HasManyRemoveAssociationsMixin<programs_activities, programs_activitiesId>;
  hasPrograms_activity!: Sequelize.HasManyHasAssociationMixin<programs_activities, programs_activitiesId>;
  hasPrograms_activities!: Sequelize.HasManyHasAssociationsMixin<programs_activities, programs_activitiesId>;
  countPrograms_activities!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof programs {
    return programs.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    img: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'programs',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__programs__3213E83FD3CA4807",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
