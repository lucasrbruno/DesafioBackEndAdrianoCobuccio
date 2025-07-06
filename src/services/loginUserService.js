const User = require('../models/User');
const bcrypt = require('bcrypt');


exports.loginUser = async (loginObj) => {

    //caso o login do usuario nao seja fornecido
    if (!loginObj.login) {
        throw new Error('User login not provided.')
    }

    User.findOne({ login: loginObj.login }).then(user => {
        if (!user) {
            throw new Error('Login not registered.');
        }
        
        bcrypt.compare(loginObj.password, user.passwordHash, (err, result) => {
            if (err) {
                throw new Error('Error comparing passwords:', err);
            }

            if (result) {
                console.log('Login sucessful!');
                return {
                    status: 200,
                    message: 'Login successful',
                    login: user.login
                };
            }
            // Caso a senha não esteja certa
            throw new Error('Passwords do not match! Authentication failed.');

        });

    });
}