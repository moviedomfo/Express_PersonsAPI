import { Model, DataTypes } from "sequelize";
import sequelize from "../db/Sequelize-sql-db";

class PersonsSchema extends Model { }

// 2. Create a Schema corresponding to the document interface.
PersonsSchema.init(
  {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Code: { type: DataTypes.STRING, allowNull: true },
    Slug: { type: DataTypes.STRING, allowNull: false },
    Name: { type: DataTypes.STRING, allowNull: false },
    Lastname: { type: DataTypes.STRING, allowNull: false },
    DoctypeId: { type: DataTypes.INTEGER, allowNull: false },
    DocNumber: { type: DataTypes.STRING, allowNull: false, field: "DocNumber" },
    DateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "DateOfBirth",
    },
    Photo: { type: DataTypes.STRING, allowNull: true },
    
    DischargeDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "DischargeDate",
    },
    CategoryId: { type: DataTypes.INTEGER, allowNull: true },
    GenderId: { type: DataTypes.INTEGER, allowNull: false },
    StateId: { type: DataTypes.INTEGER, allowNull: true },

    Enabled: { type: DataTypes.BOOLEAN, allowNull: false ,defaultValue:true},
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, //Date.now(),
      field: "CreatedDate",
    },
    CreatedUserId: { type: DataTypes.STRING, allowNull: false },
    client_id: { type: DataTypes.STRING, allowNull: false },

  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    tableName: "Persons",
  }
);

export { PersonsSchema };
