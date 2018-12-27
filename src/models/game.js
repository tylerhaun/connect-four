const sqlite = require("sqlite");
const Sequelize = require("sequelize");
const bson = require("bson");

const debug = require("debug")(__filename);

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite"
});


const Game = sequelize.define("game", {
    id: {
        type: Sequelize.STRING,
        defaultValue: () => String(new bson.ObjectId()),
        primaryKey: true,
    },
    status: {
        type: Sequelize.ENUM,
        values: ["active", "finished"]
    }
}, {
    timestamps: true
});

sequelize.sync();

export default Game;
