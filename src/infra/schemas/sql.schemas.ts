import { Model, DataTypes } from "sequelize";
import * as Sequelize from 'sequelize';
import sequelize from "../db/Sequelize-sql-db";

class PersonsSchema extends Model { }

// 2. Create a Schema corresponding to the document interface.
PersonsSchema.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    slug: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    last_name: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    doc_type_Id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doc_number: {
      type: DataTypes.CHAR(11),
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    discharge_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'params',
        key: 'ParamId'
      }
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'params',
        key: 'ParamId'
      }
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    created_user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    allowEditData: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    tenant_id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'persons',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Person",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }
);

export { PersonsSchema };
