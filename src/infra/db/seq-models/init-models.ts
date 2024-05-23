import type { Sequelize } from "sequelize";
import { contact_media as _contact_media } from "./contact_media";
import type { contact_mediaAttributes, contact_mediaCreationAttributes } from "./contact_media";
import { locations as _locations } from "./locations";
import type { locationsAttributes, locationsCreationAttributes } from "./locations";
import { params as _params } from "./params";
import type { paramsAttributes, paramsCreationAttributes } from "./params";
import { person_addressess as _person_addressess } from "./person_addressess";
import type { person_addressessAttributes, person_addressessCreationAttributes } from "./person_addressess";
import { persons as _persons } from "./persons";
import type { personsAttributes, personsCreationAttributes } from "./persons";
import { persons_fields_data as _persons_fields_data } from "./persons_fields_data";
import type { persons_fields_dataAttributes, persons_fields_dataCreationAttributes } from "./persons_fields_data";
import { persons_fields_info as _persons_fields_info } from "./persons_fields_info";
import type { persons_fields_infoAttributes, persons_fields_infoCreationAttributes } from "./persons_fields_info";
import { security_clients as _security_clients } from "./security_clients";
import type { security_clientsAttributes, security_clientsCreationAttributes } from "./security_clients";
import { security_roles as _security_roles } from "./security_roles";
import type { security_rolesAttributes, security_rolesCreationAttributes } from "./security_roles";
import { security_roles_in_rules as _security_roles_in_rules } from "./security_roles_in_rules";
import type { security_roles_in_rulesAttributes, security_roles_in_rulesCreationAttributes } from "./security_roles_in_rules";
import { security_rules as _security_rules } from "./security_rules";
import type { security_rulesAttributes, security_rulesCreationAttributes } from "./security_rules";
import { security_rules_category as _security_rules_category } from "./security_rules_category";
import type { security_rules_categoryAttributes, security_rules_categoryCreationAttributes } from "./security_rules_category";
import { security_users as _security_users } from "./security_users";
import type { security_usersAttributes, security_usersCreationAttributes } from "./security_users";
import { securityrules_in_category as _securityrules_in_category } from "./securityrules_in_category";
import type { securityrules_in_categoryAttributes, securityrules_in_categoryCreationAttributes } from "./securityrules_in_category";
import { securityt_user_logins as _securityt_user_logins } from "./securityt_user_logins";
import type { securityt_user_loginsAttributes, securityt_user_loginsCreationAttributes } from "./securityt_user_logins";
import { securityuser_roles as _securityuser_roles } from "./securityuser_roles";
import type { securityuser_rolesAttributes, securityuser_rolesCreationAttributes } from "./securityuser_roles";
import { students as _students } from "./students";
import type { studentsAttributes, studentsCreationAttributes } from "./students";
import { tenats as _tenats } from "./tenats";
import type { tenatsAttributes, tenatsCreationAttributes } from "./tenats";

export {
  _contact_media as contact_media,
  _locations as locations,
  _params as params,
  _person_addressess as person_addressess,
  _persons as persons,
  _persons_fields_data as persons_fields_data,
  _persons_fields_info as persons_fields_info,
  _security_clients as security_clients,
  _security_roles as security_roles,
  _security_roles_in_rules as security_roles_in_rules,
  _security_rules as security_rules,
  _security_rules_category as security_rules_category,
  _security_users as security_users,
  _securityrules_in_category as securityrules_in_category,
  _securityt_user_logins as securityt_user_logins,
  _securityuser_roles as securityuser_roles,
  _students as students,
  _tenats as tenats,
};

export type {
  contact_mediaAttributes,
  contact_mediaCreationAttributes,
  locationsAttributes,
  locationsCreationAttributes,
  paramsAttributes,
  paramsCreationAttributes,
  person_addressessAttributes,
  person_addressessCreationAttributes,
  personsAttributes,
  personsCreationAttributes,
  persons_fields_dataAttributes,
  persons_fields_dataCreationAttributes,
  persons_fields_infoAttributes,
  persons_fields_infoCreationAttributes,
  security_clientsAttributes,
  security_clientsCreationAttributes,
  security_rolesAttributes,
  security_rolesCreationAttributes,
  security_roles_in_rulesAttributes,
  security_roles_in_rulesCreationAttributes,
  security_rulesAttributes,
  security_rulesCreationAttributes,
  security_rules_categoryAttributes,
  security_rules_categoryCreationAttributes,
  security_usersAttributes,
  security_usersCreationAttributes,
  securityrules_in_categoryAttributes,
  securityrules_in_categoryCreationAttributes,
  securityt_user_loginsAttributes,
  securityt_user_loginsCreationAttributes,
  securityuser_rolesAttributes,
  securityuser_rolesCreationAttributes,
  studentsAttributes,
  studentsCreationAttributes,
  tenatsAttributes,
  tenatsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const contact_media = _contact_media.initModel(sequelize);
  const locations = _locations.initModel(sequelize);
  const params = _params.initModel(sequelize);
  const person_addressess = _person_addressess.initModel(sequelize);
  const persons = _persons.initModel(sequelize);
  const persons_fields_data = _persons_fields_data.initModel(sequelize);
  const persons_fields_info = _persons_fields_info.initModel(sequelize);
  const security_clients = _security_clients.initModel(sequelize);
  const security_roles = _security_roles.initModel(sequelize);
  const security_roles_in_rules = _security_roles_in_rules.initModel(sequelize);
  const security_rules = _security_rules.initModel(sequelize);
  const security_rules_category = _security_rules_category.initModel(sequelize);
  const security_users = _security_users.initModel(sequelize);
  const securityrules_in_category = _securityrules_in_category.initModel(sequelize);
  const securityt_user_logins = _securityt_user_logins.initModel(sequelize);
  const securityuser_roles = _securityuser_roles.initModel(sequelize);
  const students = _students.initModel(sequelize);
  const tenats = _tenats.initModel(sequelize);

  security_roles.belongsToMany(security_users, { as: 'UserId_security_users', through: securityuser_roles, foreignKey: "RoleId", otherKey: "UserId" });
  security_rules.belongsToMany(security_rules_category, { as: 'CategoryId_security_rules_categories', through: securityrules_in_category, foreignKey: "RuleId", otherKey: "CategoryId" });
  security_rules_category.belongsToMany(security_rules, { as: 'RuleId_security_rules', through: securityrules_in_category, foreignKey: "CategoryId", otherKey: "RuleId" });
  security_users.belongsToMany(security_roles, { as: 'RoleId_security_roles', through: securityuser_roles, foreignKey: "UserId", otherKey: "RoleId" });
  person_addressess.belongsTo(locations, { as: "City", foreignKey: "CityId"});
  locations.hasMany(person_addressess, { as: "person_addressesses", foreignKey: "CityId"});
  person_addressess.belongsTo(locations, { as: "Province", foreignKey: "ProvinceId"});
  locations.hasMany(person_addressess, { as: "Province_person_addressesses", foreignKey: "ProvinceId"});
  person_addressess.belongsTo(locations, { as: "Country", foreignKey: "CountryId"});
  locations.hasMany(person_addressess, { as: "Country_person_addressesses", foreignKey: "CountryId"});
  contact_media.belongsTo(params, { as: "Type", foreignKey: "TypeId"});
  params.hasMany(contact_media, { as: "contact_media", foreignKey: "TypeId"});
  persons.belongsTo(params, { as: "DocType", foreignKey: "DocTypeId"});
  params.hasMany(persons, { as: "people", foreignKey: "DocTypeId"});
  persons.belongsTo(params, { as: "Category", foreignKey: "CategoryId"});
  params.hasMany(persons, { as: "Category_people", foreignKey: "CategoryId"});
  contact_media.belongsTo(persons, { as: "Person", foreignKey: "PersonId"});
  persons.hasMany(contact_media, { as: "contact_media", foreignKey: "PersonId"});
  person_addressess.belongsTo(persons, { as: "Person", foreignKey: "PersonId"});
  persons.hasMany(person_addressess, { as: "person_addressesses", foreignKey: "PersonId"});
  persons_fields_data.belongsTo(persons, { as: "Person", foreignKey: "PersonId"});
  persons.hasMany(persons_fields_data, { as: "persons_fields_data", foreignKey: "PersonId"});
  securityuser_roles.belongsTo(security_roles, { as: "Role", foreignKey: "RoleId"});
  security_roles.hasMany(securityuser_roles, { as: "securityuser_roles", foreignKey: "RoleId"});
  security_roles_in_rules.belongsTo(security_rules, { as: "Rule", foreignKey: "RuleId"});
  security_rules.hasMany(security_roles_in_rules, { as: "security_roles_in_rules", foreignKey: "RuleId"});
  securityrules_in_category.belongsTo(security_rules, { as: "Rule", foreignKey: "RuleId"});
  security_rules.hasMany(securityrules_in_category, { as: "securityrules_in_categories", foreignKey: "RuleId"});
  securityrules_in_category.belongsTo(security_rules_category, { as: "Category", foreignKey: "CategoryId"});
  security_rules_category.hasMany(securityrules_in_category, { as: "securityrules_in_categories", foreignKey: "CategoryId"});
  securityt_user_logins.belongsTo(security_users, { as: "User", foreignKey: "UserId"});
  security_users.hasMany(securityt_user_logins, { as: "securityt_user_logins", foreignKey: "UserId"});
  securityuser_roles.belongsTo(security_users, { as: "User", foreignKey: "UserId"});
  security_users.hasMany(securityuser_roles, { as: "securityuser_roles", foreignKey: "UserId"});
  security_users.belongsTo(tenats, { as: "Tenant", foreignKey: "TenantId"});
  tenats.hasMany(security_users, { as: "security_users", foreignKey: "TenantId"});

  return {
    contact_media: contact_media,
    locations: locations,
    params: params,
    person_addressess: person_addressess,
    persons: persons,
    persons_fields_data: persons_fields_data,
    persons_fields_info: persons_fields_info,
    security_clients: security_clients,
    security_roles: security_roles,
    security_roles_in_rules: security_roles_in_rules,
    security_rules: security_rules,
    security_rules_category: security_rules_category,
    security_users: security_users,
    securityrules_in_category: securityrules_in_category,
    securityt_user_logins: securityt_user_logins,
    securityuser_roles: securityuser_roles,
    students: students,
    tenats: tenats,
  };
}
