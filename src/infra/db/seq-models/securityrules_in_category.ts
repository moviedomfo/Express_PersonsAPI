import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_rules, security_rulesId } from './security_rules';
import type { security_rules_category, security_rules_categoryId } from './security_rules_category';

export interface securityrules_in_categoryAttributes {
  CategoryId: string;
  RuleId: string;
}

export type securityrules_in_categoryPk = "CategoryId" | "RuleId";
export type securityrules_in_categoryId = securityrules_in_category[securityrules_in_categoryPk];
export type securityrules_in_categoryCreationAttributes = securityrules_in_categoryAttributes;

export class securityrules_in_category extends Model<securityrules_in_categoryAttributes, securityrules_in_categoryCreationAttributes> implements securityrules_in_categoryAttributes {
  CategoryId!: string;
  RuleId!: string;

  // securityrules_in_category belongsTo security_rules via RuleId
  Rule!: security_rules;
  getRule!: Sequelize.BelongsToGetAssociationMixin<security_rules>;
  setRule!: Sequelize.BelongsToSetAssociationMixin<security_rules, security_rulesId>;
  createRule!: Sequelize.BelongsToCreateAssociationMixin<security_rules>;
  // securityrules_in_category belongsTo security_rules_category via CategoryId
  Category!: security_rules_category;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<security_rules_category>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<security_rules_category, security_rules_categoryId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<security_rules_category>;

  static initModel(sequelize: Sequelize.Sequelize): typeof securityrules_in_category {
    return securityrules_in_category.init({
    CategoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'security_rules_category',
        key: 'CategoryId'
      }
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
    tableName: 'securityrules_in_category',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SecurityRulesInCategory",
        unique: true,
        fields: [
          { name: "CategoryId" },
          { name: "RuleId" },
        ]
      },
    ]
  });
  }
}
