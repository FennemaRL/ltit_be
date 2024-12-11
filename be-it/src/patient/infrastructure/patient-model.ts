import { DataTypes } from "sequelize";
import sequelize from "../../shared/infrastructure/db-connection";


export default sequelize.define('Patient', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.TEXT, allowNull: false },
    email: { type: DataTypes.TEXT, allowNull: false },
    address: { type: DataTypes.TEXT, allowNull: false },
    phone: { type: DataTypes.TEXT, allowNull: false }
}, {
    timestamps: false
});