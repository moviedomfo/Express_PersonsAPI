import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { security_roles_in_rules, security_roles_in_rulesId } from './security_roles_in_rules';
import type { security_rules_category, security_rules_categoryId } from './security_rules_category';
import type { securityrules_in_category, securityrules_in_categoryId } from './securityrules_in_category';

export interface security_rulesAttributes {
  Id: string;
  Description?: string;
  Name: string;
}

export type security_rulesPk = "Id";
export type security_rulesId = security_rules[security_rulesPk];
export type security_rulesOptionalAttributes = "Description";
export type security_rulesCreationAttributes = Optional<security_rulesAttributes, security_rulesOptionalAttributes>;

export class security_rules extends Model<security_rulesAttributes, security_rulesCreationAttributes> implements security_rulesAttributes {
  Id!: string;
  Description?: string;
  Name!: string;

  // security_rules hasMany security_roles_in_rules via RuleId
  security_roles_in_rules!: security_roles_in_rules[];
  getSecurity_roles_in_rules!: Sequelize.HasManyGetAssociationsMixin<security_roles_in_rules>;
  setSecurity_roles_in_rules!: Sequelize.HasManySetAssociationsMixin<security_roles_in_rules, security_roles_in_rulesId>;
  addSecurity_roles_in_rule!: Sequelize.HasManyAddAssociationMixin<security_roles_in_rules, security_roles_in_rulesId>;
  addSecurity_roles_in_rules!: Sequelize.HasManyAddAssociationsMixin<security_roles_in_rules, security_roles_in_rulesId>;
  createSecurity_roles_in_rule!: Sequelize.HasManyCreateAssociationMixin<security_roles_in_rules>;
  removeSecurity_roles_in_rule!: Sequelize.HasManyRemoveAssociationMixin<security_roles_in_rules, security_roles_in_rulesId>;
  removeSecurity_roles_in_rules!: Sequelize.HasManyRemoveAssociationsMixin<security_roles_in_rules, security_roles_in_rulesId>;
  hasSecurity_roles_in_rule!: Sequelize.HasManyHasAssociationMixin<security_roles_in_rules, security_roles_in_rulesId>;
  hasSecurity_roles_in_rules!: Sequelize.HasManyHasAssociationsMixin<security_roles_in_rules, security_roles_in_rulesId>;
  countSecurity_roles_in_rules!: Sequelize.HasManyCountAssociationsMixin;
  // security_rules belongsToMany security_rules_category via RuleId and CategoryId
  CategoryId_security_rules_categories!: security_rules_category[];
  getCategoryId_security_rules_categories!: Sequelize.BelongsToManyGetAssociationsMixin<security_rules_category>;
  setCategoryId_security_rules_categories!: Sequelize.BelongsToManySetAssociationsMixin<security_rules_category, security_rules_categoryId>;
  addCategoryId_security_rules_category!: Sequelize.BelongsToManyAddAssociationMixin<security_rules_category, security_rules_categoryId>;
  addCategoryId_security_rules_categories!: Sequelize.BelongsToManyAddAssociationsMixin<security_rules_category, security_rules_categoryId>;
  createCategoryId_security_rules_category!: Sequelize.BelongsToManyCreateAssociationMixin<security_rules_category>;
  removeCategoryId_security_rules_category!: Sequelize.BelongsToManyRemoveAssociationMixin<security_rules_category, security_rules_categoryId>;
  removeCategoryId_security_rules_categories!: Sequelize.BelongsToManyRemoveAssociationsMixin<security_rules_category, security_rules_categoryId>;
  hasCategoryId_security_rules_category!: Sequelize.BelongsToManyHasAssociationMixin<security_rules_category, security_rules_categoryId>;
  hasCategoryId_security_rules_categories!: Sequelize.BelongsToManyHasAssociationsMixin<security_rules_category, security_rules_categoryId>;
  countCategoryId_security_rules_categories!: Sequelize.BelongsToManyCountAssociationsMixin;
  // security_rules hasMany securityrules_in_category via RuleId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof security_rules {
    return security_rules.init({
    Id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'security_rules',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SecurityRules",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
