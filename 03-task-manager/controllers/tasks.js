const Task = require('../models/task');

const getAllTask = (req, res) => {
    res.send('All tasks');
}



const createTask = (req, res) => {
    try {
        // const task = await new Task(req.body);
        console.log(req.body)
        res.status(200).send(req.body);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const getTask = (req, res) => {
    res.send('All single task');
}

const updateTask = (req, res) => {
    res.send('Update task');
}

const deleteTask = (req, res) => {
    res.send('Delete task');
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}