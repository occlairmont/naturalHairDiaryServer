const Sequelize = require("sequelize");
// const sequelize = new Sequelize("natural-hair-logs", "postgres", "password", {
//   host: "localhost",
//   dialect: "postgres",
// });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
})

sequelize.authenticate().then(
  function () {
    console.log("Connected to natural-hair-logs postgres database");
  },
  function (err) {
    console.log(err);
  }
);

module.exports = sequelize;
