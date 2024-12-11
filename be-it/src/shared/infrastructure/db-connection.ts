import { Sequelize } from 'sequelize';
import { SqliteDialect } from '@sequelize/sqlite3';
const sequelize =  new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:', // or ''
    pool: { max: 1, idle: Infinity, maxUses: Infinity },
} as any);

const connectDb = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    } catch (error) {
        
    }
}

export default sequelize
export {connectDb}