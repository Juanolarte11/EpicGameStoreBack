const { Users, Carrito } = require("../db.js");


const userCreate = async (userName, userPassword, userEmail, userBirth) => {
let user = await Users.create({
                userName,
                userPassword, 
                userEmail, 
                userBirth})
return user;
};

const getAllUsers = async () => {

    const allUsers = await Users.findAll(
        {
            include: [
                {model : Carrito},
                ]
        }
    )

    

    return allUsers;
}

module.exports = {userCreate, getAllUsers};
