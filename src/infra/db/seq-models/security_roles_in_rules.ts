import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_rules, security_rulesId } from './security_rules';

export interface security_roles_in_rulesAttributes {
  RolId: string;
  RuleId: string;
}

export type security_roles_in_rulesPk = "RolId" | "RuleId";
export type security_roles_in_rulesId = security_roles_in_rules[security_roles_in_rulesPk];
export type security_roles_in_rulesCreationAttributes = security_roles_in_rulesAttributes;

export class security_roles_in_rules extends Model<security_roles_in_rulesAttributes, security_roles_in_rulesCreationAttributes> implements security_roles_in_rulesAttributes {
  RolId!: string;
  RuleId!: string;

  // security_roles_in_rules belongsTo security_rules via RuleId
  Rule!: security_rules;
  getRule!: Sequelize.BelongsToGetAssociationMixin<security_rules>;
  setRule!: Sequelize.BelongsToSetAssociationMixin<security_rules, security_rulesId>;
  createRule!: Sequelize.BelongsToCreateAssociationMixin<security_rules>;

  static initModel(sequelize: Sequelize.Sequelize): typeof security_roles_in_rules {
    return security_roles_in_rules.init({
    RolId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    RuleId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'security_rules',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'security_roles_in_rules',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SecurityRolesInRules",
        unique: true,
        fields: [
          { name: "RolId" },
          { name: "RuleId" },
        ]
      },
    ]
  });
  }
}
