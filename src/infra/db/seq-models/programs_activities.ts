import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { activities, activitiesId } from './activities';
import type { programs, programsId } from './programs';

export interface programs_activitiesAttributes {
  id: number;
  program_id?: number;
  activity_id?: number;
}

export type programs_activitiesPk = "id";
export type programs_activitiesId = programs_activities[programs_activitiesPk];
export type programs_activitiesOptionalAttributes = "id" | "program_id" | "activity_id";
export type programs_activitiesCreationAttributes = Optional<programs_activitiesAttributes, programs_activitiesOptionalAttributes>;

export class programs_activities extends Model<programs_activitiesAttributes, programs_activitiesCreationAttributes> implements programs_activitiesAttributes {
  id!: number;
  program_id?: number;
  activity_id?: number;

  // programs_activities belongsTo activities via activity_id
  activity!: activities;
  getActivity!: Sequelize.BelongsToGetAssociationMixin<activities>;
  setActivity!: Sequelize.BelongsToSetAssociationMixin<activities, activitiesId>;
  createActivity!: Sequelize.BelongsToCreateAssociationMixin<activities>;
  // programs_activities belongsTo programs via program_id
  program!: programs;
  getProgram!: Sequelize.BelongsToGetAssociationMixin<programs>;
  setProgram!: Sequelize.BelongsToSetAssociationMixin<programs, programsId>;
  createProgram!: Sequelize.BelongsToCreateAssociationMixin<programs>;

  static initModel(sequelize: Sequelize.Sequelize): typeof programs_activities {
    return programs_activities.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    program_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'programs',
        key: 'id'
      }
    },
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'activities',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'programs_activities',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__programs__3213E83F1B304D83",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
