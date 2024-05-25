import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { activities, activitiesId } from './activities';
import type { institution, institutionId } from './institution';
import type { params, paramsId } from './params';
import type { platform, platformId } from './platform';
import type { templates, templatesId } from './templates';

export interface activity_instanceAttributes {
  id: number;
  slug: string;
  activity_Id?: number;
  state_id?: number;
  instance_form?: number;
  name: string;
  start_date_pref?: string;
  end_date_pref?: string;
  start_date?: string;
  end_date?: string;
  quota?: number;
  external_url?: string;
  platform_id?: number;
  duration?: string;
  workload?: string;
  institution_id?: number;
  target_id?: number;
  presenmtation?: string;
  terms_and_conditions?: number;
  course_id?: number;
  form?: number;
  form_text?: string;
  form_type?: number;
  template_id?: number;
  autogenerate?: number;
  numgrupos?: number;
  enabled: boolean;
  created_at: Date;
  created_user_id: string;
  updated_at?: Date;
  allowEditData?: boolean;
  tenant_id?: string;
}

export type activity_instancePk = "id";
export type activity_instanceId = activity_instance[activity_instancePk];
export type activity_instanceOptionalAttributes = "id" | "activity_Id" | "state_id" | "instance_form" | "start_date_pref" | "end_date_pref" | "start_date" | "end_date" | "quota" | "external_url" | "platform_id" | "duration" | "workload" | "institution_id" | "target_id" | "presenmtation" | "terms_and_conditions" | "course_id" | "form" | "form_text" | "form_type" | "template_id" | "autogenerate" | "numgrupos" | "created_at" | "updated_at" | "allowEditData" | "tenant_id";
export type activity_instanceCreationAttributes = Optional<activity_instanceAttributes, activity_instanceOptionalAttributes>;

export class activity_instance extends Model<activity_instanceAttributes, activity_instanceCreationAttributes> implements activity_instanceAttributes {
  id!: number;
  slug!: string;
  activity_Id?: number;
  state_id?: number;
  instance_form?: number;
  name!: string;
  start_date_pref?: string;
  end_date_pref?: string;
  start_date?: string;
  end_date?: string;
  quota?: number;
  external_url?: string;
  platform_id?: number;
  duration?: string;
  workload?: string;
  institution_id?: number;
  target_id?: number;
  presenmtation?: string;
  terms_and_conditions?: number;
  course_id?: number;
  form?: number;
  form_text?: string;
  form_type?: number;
  template_id?: number;
  autogenerate?: number;
  numgrupos?: number;
  enabled!: boolean;
  created_at!: Date;
  created_user_id!: string;
  updated_at?: Date;
  allowEditData?: boolean;
  tenant_id?: string;

  // activity_instance belongsTo activities via activity_Id
  activity!: activities;
  getActivity!: Sequelize.BelongsToGetAssociationMixin<activities>;
  setActivity!: Sequelize.BelongsToSetAssociationMixin<activities, activitiesId>;
  createActivity!: Sequelize.BelongsToCreateAssociationMixin<activities>;
  // activity_instance belongsTo institution via institution_id
  institution!: institution;
  getInstitution!: Sequelize.BelongsToGetAssociationMixin<institution>;
  setInstitution!: Sequelize.BelongsToSetAssociationMixin<institution, institutionId>;
  createInstitution!: Sequelize.BelongsToCreateAssociationMixin<institution>;
  // activity_instance belongsTo params via state_id
  state!: params;
  getState!: Sequelize.BelongsToGetAssociationMixin<params>;
  setState!: Sequelize.BelongsToSetAssociationMixin<params, paramsId>;
  createState!: Sequelize.BelongsToCreateAssociationMixin<params>;
  // activity_instance belongsTo platform via platform_id
  platform!: platform;
  getPlatform!: Sequelize.BelongsToGetAssociationMixin<platform>;
  setPlatform!: Sequelize.BelongsToSetAssociationMixin<platform, platformId>;
  createPlatform!: Sequelize.BelongsToCreateAssociationMixin<platform>;
  // activity_instance belongsTo templates via template_id
  template!: templates;
  getTemplate!: Sequelize.BelongsToGetAssociationMixin<templates>;
  setTemplate!: Sequelize.BelongsToSetAssociationMixin<templates, templatesId>;
  createTemplate!: Sequelize.BelongsToCreateAssociationMixin<templates>;

  static initModel(sequelize: Sequelize.Sequelize): typeof activity_instance {
    return activity_instance.init({
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
    activity_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'activities',
        key: 'id'
      }
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'params',
        key: 'ParamId'
      }
    },
    instance_form: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    start_date_pref: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date_pref: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    quota: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    external_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    platform_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'platform',
        key: 'id'
      }
    },
    duration: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    workload: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    institution_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'institution',
        key: 'id'
      }
    },
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    presenmtation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    terms_and_conditions: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    form: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    form_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    form_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'templates',
        key: 'id'
      }
    },
    autogenerate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numgrupos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    allowEditData: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tenant_id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'activity_instance',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__activity__3213E83F08CB8F96",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
