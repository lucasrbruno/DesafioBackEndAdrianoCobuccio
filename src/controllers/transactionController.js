const Transaction = require('../models/Transaction');
const { createTransaction } = require('../services/createTransactionService');
const { revertTransaction } = require('../services/revertTransactionService');

exports.createTransactionController = async (req, res) => {
  try {
    const transaction = await createTransaction(req.body);
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

exports.getTransactionsController = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

exports.revertTransactionsController = async (req, res) => {
  try {
    console.log(req.params);
    const revertResult = await revertTransaction(req.params.transactionId);
    res.status(200).json(revertResult);
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};