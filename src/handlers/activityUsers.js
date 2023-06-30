const { userCreate, getAllUsers } =  require('../controllers/userController')

const postUsers = async (req, res, next) => {
    const {
        userName, 
        userPassword, 
        userEmail, 
        userBirth
    } = req.body;

    try {
        const newUser = await userCreate(userName, 
            userPassword, 
            userEmail, 
            userBirth)
        res.status(200).json(newUser)
    }catch(error){
        res.status(400).json({ error:error.message })
        console.log(error)
    }
}

const getUsers = async (req, res, next) => {
    try {
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(400).json({ error:error.message })
    }
}

module.exports =  { postUsers, getUsers }