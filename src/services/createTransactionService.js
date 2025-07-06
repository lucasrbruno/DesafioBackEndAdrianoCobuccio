const User = require('../models/User');
const Transaction = require('../models/Transaction');

//funcao de criacao de senha
exports.createTransaction = async (transactionObj) => {
    if (transactionObj.type == 'withdraw') {

        //caso nao tenha sido fornecido o login do usuario
        if (!transactionObj.fromUser) {
            throw new Error('No user login provided.');
        }

        //caso o usuario fornecido nao exista
        const user = User.exists({ login: transactionObj.fromUser }).then(exists => {
            if (!exists) {
                throw new Error('User not found.');
            }
        });

        //caso o usuario nao tenha o suficiente pra fazer o saque
        if (user.balance < transactionObj.amount) {
            throw new Error('User balance is not enough to make the transaction.');
        }

        //faz a atualizacao do balanco
        const updateResponse = await User.updateOne({ login: transactionObj.fromUser }, { $inc: { balance: -transactionObj.amount }});
        await Transaction.create(transactionObj);

        return updateResponse;
    }

    if (transactionObj.type == 'deposit') {

        //caso nao tenha sido fornecido o login do usuario
        if (!transactionObj.fromUser) {
            throw new Error('No user login provided.');
        }

        //caso o usuario fornecido nao exista
        const user = User.exists({ login: transactionObj.fromUser }).then(exists => {
            if (!exists) {
                throw new Error('User not found.');
            }
        });

        //faz a atualizacao do balanco
        const updateResponse = await User.updateOne({ login: transactionObj.fromUser }, { $inc: { balance: transactionObj.amount }});
        await Transaction.create(transactionObj);

        return updateResponse;
    }

    if (transactionObj.type == 'transfer') {

        //caso nao tenha sido fornecido o login do usuario que ira transferir o dinheiro
        if (!transactionObj.fromUser) {
            throw new Error('No  from user login provided.');
        }

        //caso nao tenha sido fornecido o login do usuario que ira receber o dinheiro
        if (!transactionObj.toUser) {
            throw new Error('No  from user login provided.');
        }

        //caso o usuario que ira transferir o dinheiro nao exista
        const fromUser = User.exists({ login: transactionObj.fromUser }).then(exists => {
            if (!exists) {
                throw new Error('From User not found.');
            }
        });

        //caso o usuario que ira receber o dinheiro nao exista
        User.exists({ login: transactionObj.toUser }).then(exists => {
            if (!exists) {
                throw new Error('To User not found.');
            }
        });

        //caso o usuario nao tenha o suficiente pra fazer a transferencia
        if (fromUser.balance < transactionObj.amount) {
            throw new Error('User balance is not enough to make the transaction.');
        }

        //faz a atualizacao do balanco nos dois usuarios
        await User.updateOne({ login: transactionObj.fromUser }, { $inc: { balance: -transactionObj.amount }});
        await User.updateOne({ login: transactionObj.toUser }, { $inc: { balance: transactionObj.amount }});

        await Transaction.create(transactionObj);

        return {
            status: 200,
            message: 'transaction successful.'
        };
    }
}