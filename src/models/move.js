import Game from "./game";

const sqlite = require("sqlite");
const Sequelize = require("sequelize");
const bson = require("bson");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite"
});



const Move = sequelize.define("move", {
    id: {
        type: Sequelize.STRING,
        defaultValue: () => String(new bson.ObjectId()),
        primaryKey: true,
    },
    culumn: {
        type: Sequelize.INTEGER,
        validate: {
            min: 0,
            max: 6
        }
    }
}, {
    timestamps: true
});
Move.hasOne(Game, {as: "game", foreignKey: "id"})
