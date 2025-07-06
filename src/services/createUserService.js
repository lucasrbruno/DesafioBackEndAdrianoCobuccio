const User = require('../models/User');
const bcrypt = require('bcrypt');



//funcao de criacao do usuario
exports.createUser = async (userObj) => {
    let user;

    //caso o usuario já esteja registrado
    User.exists({ login: userObj.login }).then(exists => {
        if(exists){
            throw new Error('Login already registered.');
        } 
    });


    //gerando o hash criptografico   
    bcrypt.hash(userObj.password, 10, async (err, hash) => {
        if(err){
            throw new Error(`Error generating hashed password: ${err}`);
        }

        user = new User({
            name: userObj.name,
            passwordHash: hash,
            login: userObj.login
        });
        await user.save();

    });
    return user;
}