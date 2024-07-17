const transectionModel = require("../models/transactionModel");



const getAllTransection = async (req, res) => {
    try {
        const transections = await transectionModel.find({});
        res.status(200).json(transections);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

};

const addTransection = async (req, res) => {
    try {
        const newTransection = new transectionModel(req.body);
        await newTransection.save()
        res.status(201).send("Transaction Created")
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = { getAllTransection, addTransection };