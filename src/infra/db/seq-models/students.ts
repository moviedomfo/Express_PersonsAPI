import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface studentsAttributes {
  Id: number;
  PersonId: number;
  Name: string;
  CUIT?: string;
}

export type studentsPk = "Id";
export type studentsId = students[studentsPk];
export type studentsOptionalAttributes = "Id" | "CUIT";
export type studentsCreationAttributes = Optional<studentsAttributes, studentsOptionalAttributes>;

export class students extends Model<studentsAttributes, studentsCreationAttributes> implements studentsAttributes {
  Id!: number;
  PersonId!: number;
  Name!: string;
  CUIT?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof students {
    return students.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PersonId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    CUIT: {
      type: DataTypes.CHAR(14),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'students',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Students",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
