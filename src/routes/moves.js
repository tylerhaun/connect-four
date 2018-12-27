import MoveController from "../controllers/move";
import _ from "lodash";
import bluebird from "bluebird";
import {createPaginationParams} from "../utils/pagination";

const moveController = new MoveController();

module.exports = function(router, route) {

    router.route(route)
        .get(function main(request, response, next) {

            bluebird.resolve().then(async () => {

                const paginationParams = createPaginationParams(request);

                const games = await gameController.find()
                return response.json({games});
                
            })

        })
        .post(function main(request, response, next) {

            bluebird.resolve().then(async () => {

                const gameData = _.pick(request.body, [""]);
                Object.assign(gameData, {status: "active"})
                const game = await gameController.create(gameData);

                return response.json({game});
                
            })
        
        })

}
