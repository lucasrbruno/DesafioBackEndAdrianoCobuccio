const Transaction = require('../models/Transaction');
const User = require('../models/User');

exports.revertTransaction = async (transactionId) => {

    await Transaction.findById(transactionId).then(async transaction => {

        //caso a transacao nao seja encontrada no banco de dados
        if(!transaction){
            throw new Error('Transaction not found.');
        }

        //caso seja um deposito
        if(transaction.type == 'deposit'){
            await User.findOneAndUpdate({ login: transaction.fromUser}, {$inc: { balance: -transaction.amount}});
            await Transaction.deleteMany({_id: transactionId});
            return {
                status: 200,
                message: 'transaction deleted successfully.'
            }
        }

        //caso seja saque
        if (transaction.type == 'withdraw'){
            await User.findOneAndUpdate({ login: transaction.fromUser}, {$inc: { balance: +transaction.amount}});
            await Transaction.deleteMany({_id: transactionId});
            return {
                status: 200,
                message: 'transaction deleted successfully.'
            }
        }

        //caso seja transferencia entre duas contas
        if (transaction.type == 'transfer'){
            await User.findOneAndUpdate({ login: transaction.fromUser}, {$inc: { balance: +transaction.amount}});
            await User.findOneAndUpdate({ login: transaction.toUser}, {$inc: { balance: -transaction.amount}});
            await Transaction.deleteMany({_id: transactionId});
            return {
                status: 200,
                message: 'transaction deleted successfully.'
            }
        }
    });
}