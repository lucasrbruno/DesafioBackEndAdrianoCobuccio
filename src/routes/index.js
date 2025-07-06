const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const userController = require('../controllers/userController');


/**
 * @api {post} /api/transaction Create transaction
 * @apiName Create a Transaction
 * @apiGroup Transactions
 * @apiDescription Create a transaction by a transaction object with details
 *
 * @apibody {object} transaction An object which contains the transaction details
 * @apiParamExample {object} transaction
 * { 
 *   "type": "withdraw",
 *   "fromUser": "Kapir00to",
 *   "amount": 55
 * }
 * 
 * @apiParamExample {object} transaction
 * { 
 *   "type": "deposit",
 *   "fromUser": "Kapir00to",
 *   "amount": 55
 * }
 * 
 * @apiParamExample {object} transaction
 * {
 *   "type": "transfer",
 *   "fromUser": "Kapir00to",
 *   "toUser": "mariajrpb",
 *   "amount": 100
 * }
 *
 *
 * @apiSuccess {object} transactionResponse Sucess message object
 * @apiSuccessExample {json} Success-Response:
 * {
 *      status: 200,
 *      message: 'transaction sucessful.'
 * }
 *
 * @apiError DefaultError Ocorrs when user is not found.
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400
 *    {
 *     "status": 400,
 *     "message": "From User not found"
 *    }
 * 
 * @apiError DefaultError Ocurrs when user balance is not enough to make a transaction.
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400
 *    {
 *     "status": 400,
 *     "message": "User balance is not enough to make the transaction.
 *    }
 */
router.post('/transaction', transactionController.createTransactionController);

/**
 * @api {get} /api/transaction Get transactions
 * @apiName Get Transaction list
 * @apiGroup Transactions
 * @apiDescription Get all the transactions in database
 *
 * @apiSuccess {object} transactionList Sucess message object
 * @apiSuccessExample {json} Success-Response:
 * 
 * [
 *    {
 *        "_id": "6869b6b8d24df6b5e55f2342",
 *        "type": "deposit",
 *        "fromUser": "Kapir00to",
 *        "amount": 100,
 *        "date": "2025-07-05T23:35:20.840Z",
 *        "__v": 0
 *    },
 *    {
 *        "_id": "6869b6cbd24df6b5e55f2346",
 *        "type": "deposit",
 *        "fromUser": "Kapir00to",
 *        "amount": 100,
 *        "date": "2025-07-05T23:35:39.006Z",
 *        "__v": 0
 *    },
 *    {
 *        "_id": "6869b6edd24df6b5e55f234c",
 *        "type": "transfer",
 *        "fromUser": "Kapir00to",
 *        "toUser": "mariajrpb",
 *        "amount": 100,
 *        "date": "2025-07-05T23:36:13.283Z",
 *        "__v": 0
 *    },
 *    {
 *        "_id": "6869b706d24df6b5e55f2350",
 *        "type": "withdraw",
 *        "fromUser": "Kapir00to",
 *        "amount": 55,
 *        "date": "2025-07-05T23:36:38.980Z",
 *        "__v": 0
 *    }
 * ]
 * 
 * @apiError DefaultError This message should be shown if an error occurs.
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400
 *    {
 *      "status": 500,
 *      "message": "DefaultErrorMessage"
 *    }
 */
router.get('/transaction', transactionController.getTransactionsController);

/**
 * @api {post} /api/user Create User
 * @apiName Register New User
 * @apiGroup Users
 * @apiDescription Register a new user in the database
 *
 * @apibody {object} user An object which contains the user details
 * @apiParamExample {object} user
 * {
 *   "name": "Teste",
 *   "login": "Teste",
 *   "password": "teste"
 * }
 *
 * @apiSuccess {object} userResponse A object containing the user
 * @apiSuccessExample {json} Success-Response:
 * {
        "_id": "686ad97bf4fe5be3fe9cf1cd",
        "name": "Teste",
        "login": "Teste",
        "passwordHash": "$2b$10$a2pwLScP7Z3DILOFfOomJ.B/VNvJR4zm0mv4EUUyFNLN3gZmAhvrW",
        "balance": 0,
        "__v": 0
    }
 *
 * @apiError DefaultError Ocurrs when user is already registered.
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400
 *    {
 *     "status": 400,
 *     "message": "Login already registered."
 *    }
 */
router.post('/user', userController.createUserController);

/**
 * @api {get} /api/user Get Users
 * @apiName Get Users
 * @apiGroup Users
 * @apiDescription Get a list of all the users in the database
 *
 * @apiSuccess {object} userList List of all users
 * @apiSuccessExample {json} Success-Response:
 * [
 *    {
 *        "_id": "6869ae3372e40f5c3a98c153",
 *        "name": "Maria Jose",
 *        "login": "mariajrpb",
 *        "passwordHash": "$2b$10$Zl0aQDVq2YBHIbVVXMWbPecwR7ocCEMZyD6pL584YEua60N2MY2Gy",
 *        "balance": 100,
 *        "__v": 0
 *    },
 *    {
 *        "_id": "6869b14bd3cb50bf288e24df",
 *        "name": "Lucas Rezende Bruno",
 *        "login": "Kapir00to",
 *        "passwordHash": "$2b$10$g3a9IDV91X4JlbLhY6BefOGxamtSH4OhUcFRwyCdp3z4.304Epf2i",
 *        "balance": 45,
 *        "__v": 0
 *    },
 *    {
 *        "_id": "686ad97bf4fe5be3fe9cf1cd",
 *        "name": "Teste",
 *        "login": "Teste",
 *        "passwordHash": "$2b$10$a2pwLScP7Z3DILOFfOomJ.B/VNvJR4zm0mv4EUUyFNLN3gZmAhvrW",
 *        "balance": 0,
 *        "__v": 0
 *    },
 *    {
 *        "_id": "686adbfdb83bd0ea00fb3154",
 *        "name": "Teste 2 da Silva",
 *        "login": "Teste2",
 *        "passwordHash": "$2b$10$MyRNjwUo1M535HiCruWee.nmJso9is8LVlU9jMY21Mynx9.OJa.EG",
 *        "balance": 0,
 *        "__v": 0
 *    }
 *]
 * @apiError DefaultError This message should be shown if an error occurs.
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400
 *    {
 *      "status": 500,
 *      "message": "DefaultErrorMessage"
 *    }
 */
router.get('/user', userController.getUsersController);

/**
 * @api {post} /api/user Login User
 * @apiName Login User
 * @apiGroup Users
 * @apiDescription Tries to login with the user details
 *
 * @apibody {object} user An object which contains the user details
 * @apiParamExample {object} user
 * {
 *   "login": "Teste",
 *   "password": "teste"
 * }
 *
 * @apiSuccess {object} loginResponse A object containing the login success response
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "message": "Login sucessful",
 *   "login": "Teste"
 * }
 *
 * @apiError DefaultError Ocurrs when password is wrong.
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400
 *    {
 *     "status": 500,
 *     "message": "Passwords do not match! Authentication failed."
 *    }
 */
router.get('/login', userController.loginUserController);

/**
 * @api {delete} /api/user Revert Transaction
 * @apiName Revert Transaction
 * @apiGroup Transactions
 * @apiDescription Revert a existing transaction
 *
 *@apiquery {String} transactionId transaction Id to be reverted
 *
 * @apiSuccess {object} deleteResponse A object containing the success response
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "message": "transaction deleted successfully",
 * }
 *
 * @apiError DefaultError Ocurrs transaction id is not found in the database.
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400
 *    {
 *     "status": 500,
 *     "message": "Transaction not found."
 *    }
 */
router.delete('/transaction/:transactionId', transactionController.revertTransactionsController);

module.exports = router;
