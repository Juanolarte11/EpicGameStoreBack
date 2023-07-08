const {  deleteFavorites, getFavorites, createFavorites } = require('../controllers/favoritesController');
const { Videogame,  Users} = require("../db.js");

const postFavoritesHandler = async (req, res, next) => {
    const  { userId, gameId } = req.body
    try {
    
        const user = await Users.findByPk(userId)
        const videogame = await Videogame.findByPk(gameId)
        const respuesta = await createFavorites(user, videogame)
        res.status(200).json(respuesta)
    } catch (error) {
        res.status(400).json({ error:error.message })
    }
}

const deleteFavoritesHandler = async (req, res, next) => {
    const { userId } = req.query
    try {
        const favoritesDelete = await deleteFavorites(userId);
        res.status(200).json(favoritesDelete)
    } catch (error) {
        res.status(400).json({ error:error.message })
    }
}

const getFavoritesHandler = async (req, res, next) => {
    const { userId } = req.query
    try {
        const favoritesGet = await getFavorites(userId);
        res.status(200).json(favoritesGet)
    } catch (error) {
        res.status(400).json({ error:error.message })
    }
}

module.exports = {postFavoritesHandler, deleteFavoritesHandler, getFavoritesHandler}