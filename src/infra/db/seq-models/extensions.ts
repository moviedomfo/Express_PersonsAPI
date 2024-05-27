// // persons_fields_data.ts
// import { Model, DataTypes } from 'sequelize';
// import { sequelize } from '../database';

// class PersonsFieldsData extends Model {
//   static associate(models) {
//     this.belongsTo(models.PersonsFieldsInfo, { foreignKey: 'field_id', targetKey: 'short_name' });
//   }
// }

// PersonsFieldsData.init({
//   person_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   field_id: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   // otros campos...
// }, {
//   sequelize,
//   modelName: 'PersonsFieldsData',
// });

// export default PersonsFieldsData;

// // persons_fields_info.ts
// import { Model, DataTypes } from 'sequelize';
// import { sequelize } from '../database';

// class PersonsFieldsInfo extends Model {}

// PersonsFieldsInfo.init({
//   short_name: {
//     type: DataTypes.STRING,
//     primaryKey: true,
//   },
//   // otros campos...
// }, {
//   sequelize,
//   modelName: 'PersonsFieldsInfo',
// });

// export default PersonsFieldsInfo;
