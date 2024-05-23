import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_rules, security_rulesId } from './security_rules';
import type { securityrules_in_category, securityrules_in_categoryId } from './securityrules_in_category';

export interface security_rules_categoryAttributes {
  CategoryId: string;
  Name?: string;
  ParentCategoryId?: string;
}

export type security_rules_categoryPk = "CategoryId";
export type security_rules_categoryId = security_rules_category[security_rules_categoryPk];
export type security_rules_categoryOptionalAttributes = "Name" | "ParentCategoryId";
export type security_rules_categoryCreationAttributes = Optional<security_rules_categoryAttributes, security_rules_categoryOptionalAttributes>;

export class security_rules_category extends Model<security_rules_categoryAttributes, security_rules_categoryCreationAttributes> implements security_rules_categoryAttributes {
  CategoryId!: string;
  Name?: string;
  ParentCategoryId?: string;

  // security_rules_category belongsToMany security_rules via CategoryId and RuleId
  RuleId_security_rules!: security_rules[];
  getRuleId_security_rules!: Sequelize.BelongsToManyGetAssociationsMixin<security_rules>;
  setRuleId_security_rules!: Sequelize.BelongsToManySetAssociationsMixin<security_rules, security_rulesId>;
  addRuleId_security_rule!: Sequelize.BelongsToManyAddAssociationMixin<security_rules, security_rulesId>;
  addRuleId_security_rules!: Sequelize.BelongsToManyAddAssociationsMixin<security_rules, security_rulesId>;
  createRuleId_security_rule!: Sequelize.BelongsToManyCreateAssociationMixin<security_rules>;
  removeRuleId_security_rule!: Sequelize.BelongsToManyRemoveAssociationMixin<security_rules, security_rulesId>;
  removeRuleId_security_rules!: Sequelize.BelongsToManyRemoveAssociationsMixin<security_rules, security_rulesId>;
  hasRuleId_security_rule!: Sequelize.BelongsToManyHasAssociationMixin<security_rules, security_rulesId>;
  hasRuleId_security_rules!: Sequelize.BelongsToManyHasAssociationsMixin<security_rules, security_rulesId>;
  countRuleId_security_rules!: Sequelize.BelongsToManyCountAssociationsMixin;
  // security_rules_category hasMany securityrules_in_category via CategoryId
  securityrules_in_categories!: securityrules_in_category[];
  getSecurityrules_in_categories!: Sequelize.HasManyGetAssociationsMixin<securityrules_in_category>;
  setSecurityrules_in_categories!: Sequelize.HasManySetAssociationsMixin<securityrules_in_category, securityrules_in_categoryId>;
  addSecurityrules_in_category!: Sequelize.HasManyAddAssociationMixin<securityrules_in_category, securityrules_in_categoryId>;
  addSecurityrules_in_categories!: Sequelize.HasManyAddAssociationsMixin<securityrules_in_category, securityrules_in_categoryId>;
  createSecurityrules_in_category!: Sequelize.HasManyCreateAssociationMixin<securityrules_in_category>;
  removeSecurityrules_in_category!: Sequelize.HasManyRemoveAssociationMixin<securityrules_in_category, securityrules_in_categoryId>;
  removeSecurityrules_in_categories!: Sequelize.HasManyRemoveAssociationsMixin<securityrules_in_category, securityrules_in_categoryId>;
  hasSecurityrules_in_category!: Sequelize.HasManyHasAssociationMixin<securityrules_in_category, securityrules_in_categoryId>;
  hasSecurityrules_in_categories!: Sequelize.HasManyHasAssociationsMixin<securityrules_in_category, securityrules_in_categoryId>;
  countSecurityrules_in_categories!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof security_rules_category {
    return security_rules_category.init({
    CategoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ParentCategoryId: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'security_rules_category',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SecurityRulesCategory",
        unique: true,
        fields: [
          { name: "CategoryId" },
        ]
      },
    ]
  });
  }
}
