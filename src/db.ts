import { Sequelize } from 'sequelize';
import config from '../config/config.json';

 type DbSettings = {
    database: string,
    username: string,
    password: string,
    host: string,
}

const env = process.env.NODE_ENV || 'development';
const dbConfig: DbSettings = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'postgres'
});

export default sequelize;