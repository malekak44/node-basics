const getAllTask = (req, res) => {
    res.send('All tasks');
}

const createTask = (req, res) => {
    res.send('create task');
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