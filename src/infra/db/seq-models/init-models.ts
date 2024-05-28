import type { Sequelize } from "sequelize";
import { activities as _activities } from "./activities";
import type { activitiesAttributes, activitiesCreationAttributes } from "./activities";
import { activity_instance as _activity_instance } from "./activity_instance";
import type { activity_instanceAttributes, activity_instanceCreationAttributes } from "./activity_instance";
import { contact_info as _contact_info } from "./contact_info";
import type { contact_infoAttributes, contact_infoCreationAttributes } from "./contact_info";
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
import { programs as _programs } from "./programs";
import type { programsAttributes, programsCreationAttributes } from "./programs";
import { programs_activities as _programs_activities } from "./programs_activities";
import type { programs_activitiesAttributes, programs_activitiesCreationAttributes } from "./programs_activities";
import { security_clients as _security_clients } from "./security_clients";
import type { security_clientsAttributes, security_clientsCreationAttributes } from "./security_clients";
import { security_permissions as _security_permissions } from "./security_permissions";
import type { security_permissionsAttributes, security_permissionsCreationAttributes } from "./security_permissions";
import { security_permissions_groups as _security_permissions_groups } from "./security_permissions_groups";
import type { security_permissions_groupsAttributes, security_permissions_groupsCreationAttributes } from "./security_permissions_groups";
import { security_roles as _security_roles } from "./security_roles";
import type { security_rolesAttributes, security_rolesCreationAttributes } from "./security_roles";
import { security_roles_permissions as _security_roles_permissions } from "./security_roles_permissions";
import type { security_roles_permissionsAttributes, security_roles_permissionsCreationAttributes } from "./security_roles_permissions";
import { security_user_roles as _security_user_roles } from "./security_user_roles";
import type { security_user_rolesAttributes, security_user_rolesCreationAttributes } from "./security_user_roles";
import { security_users as _security_users } from "./security_users";
import type { security_usersAttributes, security_usersCreationAttributes } from "./security_users";
import { securityt_user_logins as _securityt_user_logins } from "./securityt_user_logins";
import type { securityt_user_loginsAttributes, securityt_user_loginsCreationAttributes } from "./securityt_user_logins";
import { students as _students } from "./students";
import type { studentsAttributes, studentsCreationAttributes } from "./students";
import { templates as _templates } from "./templates";
import type { templatesAttributes, templatesCreationAttributes } from "./templates";
import { tenats as _tenats } from "./tenats";
import type { tenatsAttributes, tenatsCreationAttributes } from "./tenats";

export {
  _activities as activities,
  _activity_instance as activity_instance,
  _contact_info as contact_info,
  _institution as institution,
  _locations as locations,
  _paramas_tenant as paramas_tenant,
  _params as params,
  _person_addressess as person_addressess,
  _persons as persons,
  _persons_fields_data as persons_fields_data,
  _persons_fields_info as persons_fields_info,
  _platform as platform,
  _programs as programs,
  _programs_activities as programs_activities,
  _security_clients as security_clients,
  _security_permissions as security_permissions,
  _security_permissions_groups as security_permissions_groups,
  _security_roles as security_roles,
  _security_roles_permissions as security_roles_permissions,
  _security_user_roles as security_user_roles,
  _security_users as security_users,
  _securityt_user_logins as securityt_user_logins,
  _students as students,
  _templates as templates,
  _tenats as tenats,
};

export type {
  activitiesAttributes,
  activitiesCreationAttributes,
  activity_instanceAttributes,
  activity_instanceCreationAttributes,
  contact_infoAttributes,
  contact_infoCreationAttributes,
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
  programsAttributes,
  programsCreationAttributes,
  programs_activitiesAttributes,
  programs_activitiesCreationAttributes,
  security_clientsAttributes,
  security_clientsCreationAttributes,
  security_permissionsAttributes,
  security_permissionsCreationAttributes,
  security_permissions_groupsAttributes,
  security_permissions_groupsCreationAttributes,
  security_rolesAttributes,
  security_rolesCreationAttributes,
  security_roles_permissionsAttributes,
  security_roles_permissionsCreationAttributes,
  security_user_rolesAttributes,
  security_user_rolesCreationAttributes,
  security_usersAttributes,
  security_usersCreationAttributes,
  securityt_user_loginsAttributes,
  securityt_user_loginsCreationAttributes,
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
  const contact_info = _contact_info.initModel(sequelize);
  const institution = _institution.initModel(sequelize);
  const locations = _locations.initModel(sequelize);
  const paramas_tenant = _paramas_tenant.initModel(sequelize);
  const params = _params.initModel(sequelize);
  const person_addressess = _person_addressess.initModel(sequelize);
  const persons = _persons.initModel(sequelize);
  const persons_fields_data = _persons_fields_data.initModel(sequelize);
  const persons_fields_info = _persons_fields_info.initModel(sequelize);
  const platform = _platform.initModel(sequelize);
  const programs = _programs.initModel(sequelize);
  const programs_activities = _programs_activities.initModel(sequelize);
  const security_clients = _security_clients.initModel(sequelize);
  const security_permissions = _security_permissions.initModel(sequelize);
  const security_permissions_groups = _security_permissions_groups.initModel(sequelize);
  const security_roles = _security_roles.initModel(sequelize);
  const security_roles_permissions = _security_roles_permissions.initModel(sequelize);
  const security_user_roles = _security_user_roles.initModel(sequelize);
  const security_users = _security_users.initModel(sequelize);
  const securityt_user_logins = _securityt_user_logins.initModel(sequelize);
  const students = _students.initModel(sequelize);
  const templates = _templates.initModel(sequelize);
  const tenats = _tenats.initModel(sequelize);

  persons.belongsToMany(persons_fields_info, { as: 'field_id_persons_fields_infos', through: persons_fields_data, foreignKey: "person_id", otherKey: "field_id" });
  persons_fields_info.belongsToMany(persons, { as: 'person_id_people', through: persons_fields_data, foreignKey: "field_id", otherKey: "person_id" });
  security_permissions.belongsToMany(security_roles, { as: 'rol_Id_security_roles', through: security_roles_permissions, foreignKey: "permission_id", otherKey: "rol_Id" });
  security_roles.belongsToMany(security_permissions, { as: 'permission_id_security_permissions', through: security_roles_permissions, foreignKey: "rol_Id", otherKey: "permission_id" });
  security_roles.belongsToMany(security_users, { as: 'user_id_security_users', through: security_user_roles, foreignKey: "role_id", otherKey: "user_id" });
  security_users.belongsToMany(security_roles, { as: 'role_id_security_roles', through: security_user_roles, foreignKey: "user_id", otherKey: "role_id" });
  activity_instance.belongsTo(activities, { as: "activity", foreignKey: "activity_Id"});
  activities.hasMany(activity_instance, { as: "activity_instances", foreignKey: "activity_Id"});
  programs_activities.belongsTo(activities, { as: "activity", foreignKey: "activity_id"});
  activities.hasMany(programs_activities, { as: "programs_activities", foreignKey: "activity_id"});
  activity_instance.belongsTo(institution, { as: "institution", foreignKey: "institution_id"});
  institution.hasMany(activity_instance, { as: "activity_instances", foreignKey: "institution_id"});
  person_addressess.belongsTo(locations, { as: "city", foreignKey: "city_id"});
  locations.hasMany(person_addressess, { as: "person_addressesses", foreignKey: "city_id"});
  person_addressess.belongsTo(locations, { as: "province", foreignKey: "province_Id"});
  locations.hasMany(person_addressess, { as: "province_person_addressesses", foreignKey: "province_Id"});
  person_addressess.belongsTo(locations, { as: "country", foreignKey: "country_Id"});
  locations.hasMany(person_addressess, { as: "country_person_addressesses", foreignKey: "country_Id"});
  activities.belongsTo(params, { as: "modality", foreignKey: "modality_Id"});
  params.hasMany(activities, { as: "activities", foreignKey: "modality_Id"});
  activity_instance.belongsTo(params, { as: "state", foreignKey: "state_id"});
  params.hasMany(activity_instance, { as: "activity_instances", foreignKey: "state_id"});
  contact_info.belongsTo(params, { as: "type", foreignKey: "type_id"});
  params.hasMany(contact_info, { as: "contact_infos", foreignKey: "type_id"});
  persons.belongsTo(params, { as: "gender", foreignKey: "gender_id"});
  params.hasMany(persons, { as: "people", foreignKey: "gender_id"});
  persons.belongsTo(params, { as: "category", foreignKey: "category_id"});
  params.hasMany(persons, { as: "category_people", foreignKey: "category_id"});
  contact_info.belongsTo(persons, { as: "person", foreignKey: "person_id"});
  persons.hasMany(contact_info, { as: "contact_infos", foreignKey: "person_id"});
  person_addressess.belongsTo(persons, { as: "person", foreignKey: "person_Id"});
  persons.hasMany(person_addressess, { as: "person_addressesses", foreignKey: "person_Id"});
  persons_fields_data.belongsTo(persons, { as: "person", foreignKey: "person_id"});
  persons.hasMany(persons_fields_data, { as: "persons_fields_data", foreignKey: "person_id"});
  persons_fields_data.belongsTo(persons_fields_info, { as: "field", foreignKey: "field_id"});
  persons_fields_info.hasMany(persons_fields_data, { as: "persons_fields_data", foreignKey: "field_id"});
  activity_instance.belongsTo(platform, { as: "platform", foreignKey: "platform_id"});
  platform.hasMany(activity_instance, { as: "activity_instances", foreignKey: "platform_id"});
  programs_activities.belongsTo(programs, { as: "program", foreignKey: "program_id"});
  programs.hasMany(programs_activities, { as: "programs_activities", foreignKey: "program_id"});
  security_roles_permissions.belongsTo(security_permissions, { as: "permission", foreignKey: "permission_id"});
  security_permissions.hasMany(security_roles_permissions, { as: "security_roles_permissions", foreignKey: "permission_id"});
  security_permissions.belongsTo(security_permissions_groups, { as: "group", foreignKey: "group_id"});
  security_permissions_groups.hasMany(security_permissions, { as: "security_permissions", foreignKey: "group_id"});
  security_roles_permissions.belongsTo(security_roles, { as: "rol", foreignKey: "rol_Id"});
  security_roles.hasMany(security_roles_permissions, { as: "security_roles_permissions", foreignKey: "rol_Id"});
  security_user_roles.belongsTo(security_roles, { as: "role", foreignKey: "role_id"});
  security_roles.hasMany(security_user_roles, { as: "security_user_roles", foreignKey: "role_id"});
  security_user_roles.belongsTo(security_users, { as: "user", foreignKey: "user_id"});
  security_users.hasMany(security_user_roles, { as: "security_user_roles", foreignKey: "user_id"});
  securityt_user_logins.belongsTo(security_users, { as: "User", foreignKey: "UserId"});
  security_users.hasMany(securityt_user_logins, { as: "securityt_user_logins", foreignKey: "UserId"});
  activity_instance.belongsTo(templates, { as: "template", foreignKey: "template_id"});
  templates.hasMany(activity_instance, { as: "activity_instances", foreignKey: "template_id"});
  persons.belongsTo(tenats, { as: "tenant", foreignKey: "tenant_id"});
  tenats.hasMany(persons, { as: "people", foreignKey: "tenant_id"});
  persons_fields_info.belongsTo(tenats, { as: "tenant", foreignKey: "tenant_id"});
  tenats.hasMany(persons_fields_info, { as: "persons_fields_infos", foreignKey: "tenant_id"});

  return {
    activities: activities,
    activity_instance: activity_instance,
    contact_info: contact_info,
    institution: institution,
    locations: locations,
    paramas_tenant: paramas_tenant,
    params: params,
    person_addressess: person_addressess,
    persons: persons,
    persons_fields_data: persons_fields_data,
    persons_fields_info: persons_fields_info,
    platform: platform,
    programs: programs,
    programs_activities: programs_activities,
    security_clients: security_clients,
    security_permissions: security_permissions,
    security_permissions_groups: security_permissions_groups,
    security_roles: security_roles,
    security_roles_permissions: security_roles_permissions,
    security_user_roles: security_user_roles,
    security_users: security_users,
    securityt_user_logins: securityt_user_logins,
    students: students,
    templates: templates,
    tenats: tenats,
  };
}
