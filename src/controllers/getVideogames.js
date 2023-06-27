const getVideogamesApi = require("./getVideogamesApi.js")
const getVideogamesDb = require("./getVideogamesDb.js")


const getVideogames = async () => {
    try {
        let videogamesApi = await getVideogamesApi();
        //let videogamesDb = await getVideogamesDb()
        const videogames = [...videogamesApi];
        return videogames;
    } catch (error) {
        return new Error(error.message);
    }
}

module.exports = getVideogames 