import type { Sequelize } from "sequelize";
import { activities as _activities } from "./activities";
import type { activitiesAttributes, activitiesCreationAttributes } from "./activities";
import { activity_instance as _activity_instance } from "./activity_instance";
import type { activity_instanceAttributes, activity_instanceCreationAttributes } from "./activity_instance";
import { contact_media as _contact_media } from "./contact_media";
import type { contact_mediaAttributes, contact_mediaCreationAttributes } from "./contact_media";
import { institution as _institution } from "./institution";
import type { institutionAttributes, institutionCreationAttributes } from "./institution";
import { locations as _locations } from "./locations";
import type { locationsAttributes, locationsCreationAttributes } from "./locations";
import { paramas_tenant as _paramas_tenant } from "./paramas_tenant";
import type { paramas_tenantAttributes, paramas_tenantCreationAttributes } from "./paramas_tenant";
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
import { platform as _platform } from "./platform";
import type { platformAttributes, platformCreationAttributes } from "./platform";
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
import { templates as _templates } from "./templates";
import type { templatesAttributes, templatesCreationAttributes } from "./templates";
import { tenats as _tenats } from "./tenats";
import type { tenatsAttributes, tenatsCreationAttributes } from "./tenats";

export {
  _activities as activities,
  _activity_instance as activity_instance,
  _contact_media as contact_media,
  _institution as institution,
  _locations as locations,
  _paramas_tenant as paramas_tenant,
  _params as params,
  _person_addressess as person_addressess,
  _persons as persons,
  _persons_fields_data as persons_fields_data,
  _persons_fields_info as persons_fields_info,
  _platform as platform,
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
  _templates as templates,
  _tenats as tenats,
};

export type {
  activitiesAttributes,
  activitiesCreationAttributes,
  activity_instanceAttributes,
  activity_instanceCreationAttributes,
  contact_mediaAttributes,
  contact_mediaCreationAttributes,
  institutionAttributes,
  institutionCreationAttributes,
  locationsAttributes,
  locationsCreationAttributes,
  paramas_tenantAttributes,
  paramas_tenantCreationAttributes,
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
  platformAttributes,
  platformCreationAttributes,
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
  templatesAttributes,
  templatesCreationAttributes,
  tenatsAttributes,
  tenatsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const activities = _activities.initModel(sequelize);
  const activity_instance = _activity_instance.initModel(sequelize);
  const contact_media = _contact_media.initModel(sequelize);
  const institution = _institution.initModel(sequelize);
  const locations = _locations.initModel(sequelize);
  const paramas_tenant = _paramas_tenant.initModel(sequelize);
  const params = _params.initModel(sequelize);
  const person_addressess = _person_addressess.initModel(sequelize);
  const persons = _persons.initModel(sequelize);
  const persons_fields_data = _persons_fields_data.initModel(sequelize);
  const persons_fields_info = _persons_fields_info.initModel(sequelize);
  const platform = _platform.initModel(sequelize);
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
  const templates = _templates.initModel(sequelize);
  const tenats = _tenats.initModel(sequelize);

  security_roles.belongsToMany(security_users, { as: 'UserId_security_users', through: securityuser_roles, foreignKey: "RoleId", otherKey: "UserId" });
  security_rules.belongsToMany(security_rules_category, { as: 'CategoryId_security_rules_categories', through: securityrules_in_category, foreignKey: "RuleId", otherKey: "CategoryId" });
  security_rules_category.belongsToMany(security_rules, { as: 'RuleId_security_rules', through: securityrules_in_category, foreignKey: "CategoryId", otherKey: "RuleId" });
  security_users.belongsToMany(security_roles, { as: 'RoleId_security_roles', through: securityuser_roles, foreignKey: "UserId", otherKey: "RoleId" });
  activity_instance.belongsTo(activities, { as: "activity", foreignKey: "activity_Id"});
  activities.hasMany(activity_instance, { as: "activity_instances", foreignKey: "activity_Id"});
  activity_instance.belongsTo(institution, { as: "institution", foreignKey: "institution_id"});
  institution.hasMany(activity_instance, { as: "activity_instances", foreignKey: "institution_id"});
  person_addressess.belongsTo(locations, { as: "city", foreignKey: "cityId"});
  locations.hasMany(person_addressess, { as: "person_addressesses", foreignKey: "cityId"});
  person_addressess.belongsTo(locations, { as: "province", foreignKey: "province_Id"});
  locations.hasMany(person_addressess, { as: "province_person_addressesses", foreignKey: "province_Id"});
  person_addressess.belongsTo(locations, { as: "country", foreignKey: "country_Id"});
  locations.hasMany(person_addressess, { as: "country_person_addressesses", foreignKey: "country_Id"});
  activities.belongsTo(params, { as: "modality", foreignKey: "modality_Id"});
  params.hasMany(activities, { as: "activities", foreignKey: "modality_Id"});
  activity_instance.belongsTo(params, { as: "state", foreignKey: "state_id"});
  params.hasMany(activity_instance, { as: "activity_instances", foreignKey: "state_id"});
  persons.belongsTo(params, { as: "gender", foreignKey: "gender_id"});
  params.hasMany(persons, { as: "people", foreignKey: "gender_id"});
  persons.belongsTo(params, { as: "category", foreignKey: "category_id"});
  params.hasMany(persons, { as: "category_people", foreignKey: "category_id"});
  contact_media.belongsTo(persons, { as: "person", foreignKey: "person_id"});
  persons.hasMany(contact_media, { as: "contact_media", foreignKey: "person_id"});
  person_addressess.belongsTo(persons, { as: "person", foreignKey: "person_Id"});
  persons.hasMany(person_addressess, { as: "person_addressesses", foreignKey: "person_Id"});
  persons_fields_data.belongsTo(persons, { as: "person", foreignKey: "person_id"});
  persons.hasMany(persons_fields_data, { as: "persons_fields_data", foreignKey: "person_id"});
  activity_instance.belongsTo(platform, { as: "platform", foreignKey: "platform_id"});
  platform.hasMany(activity_instance, { as: "activity_instances", foreignKey: "platform_id"});
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
  activity_instance.belongsTo(templates, { as: "template", foreignKey: "template_id"});
  templates.hasMany(activity_instance, { as: "activity_instances", foreignKey: "template_id"});
  security_users.belongsTo(tenats, { as: "Tenant", foreignKey: "TenantId"});
  tenats.hasMany(security_users, { as: "security_users", foreignKey: "TenantId"});

  return {
    activities: activities,
    activity_instance: activity_instance,
    contact_media: contact_media,
    institution: institution,
    locations: locations,
    paramas_tenant: paramas_tenant,
    params: params,
    person_addressess: person_addressess,
    persons: persons,
    persons_fields_data: persons_fields_data,
    persons_fields_info: persons_fields_info,
    platform: platform,
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
    templates: templates,
    tenats: tenats,
  };
}
