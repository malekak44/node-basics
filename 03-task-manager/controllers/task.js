const Task = require('../models/task');

const getAllTasks = async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
}

const getTask = async (req, res) => {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
        return res.status(404).json({ msg: `No task found with id ${taskId}` });
    }
    
    return res.status(200).json({ task });
};

const updateTask = async (req, res) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true
    });

    if (!task) {
        return res.status(404).json({ msg: `No task found with id ${taskId}` });
    }

    res.status(200).json({ task });
}

const deleteTask =async (req, res) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
        return res.status(404).json({ msg: `No task found with id ${taskId}` });
    }

    res.status(200).json({ task });
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}