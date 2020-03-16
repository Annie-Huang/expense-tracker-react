const Transaction = require('../models/Transaction');

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
// exports.getTransactions = (req, res, next) => {
//     res.send('GET transactions');
// }
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
};

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
// exports.addTransaction = (req, res, next) => {
//     res.send('POST transactions');
// };
exports.addTransaction = async (req, res, next) => {
    res.send('POST transactions');
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction');
};
