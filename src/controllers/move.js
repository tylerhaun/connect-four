const sqlite = require("sqlite");
const Sequelize = require("sequelize");
const bson = require("bson");

const debug = require("debug")(__filename);

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite"
});


var model = sequelize.define("move", {
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

sequelize.sync();


class CrudController {

    async create(data) {
        if (!Array.isArray(data)) {
            data = [data];
        }
        return this.model.bulkCreate(data);
    }

    async read(query, options) {
        debug("read ", query);
        const finishedQuery = Object.assign({}, {where: query}, options);
        console.log("finishedQuery", finishedQuery);
        return this.model.findAll(finishedQuery);
    }
    async find(query, options) {
        return this.read(query, options);
    }

    async update() {
        throw new Error("Not Implemented");
    }

    async delete() {
        throw new Error("Not Implemented");
    }

    async count(query) {
        return this.model.count({where: query})
    }

}


export default class GameController extends CrudController {

    constructor() {
        super();
        this.model = model;
    }

}

