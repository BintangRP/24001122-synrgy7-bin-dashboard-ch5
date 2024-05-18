import { Sequelize } from "sequelize";

const sequelize = new Sequelize('synrgy-ch5-crud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;