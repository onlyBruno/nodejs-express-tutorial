// good practice to use CamelSens in the ModelName
const Task = require('../models/Task')
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
  } catch (error) {
    res.status(500).json({ message: error})
  }
  
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json(task)  
  } catch (error) {
    res.status(500).json({ message: error})
  }

}
const getSingleTask = async (req, res) => {
  try {
    const {id: taskID} = req.params
    const task = await Task.findOne({_id: taskID})
    console.log(taskID)
    if (!task) {
      return res.status(404).json({ message: `No task with ID ${taskID}`})
    }
    // common ways to response a delete in an API
    // res.status(200).send()
    //res.status(200).json({ task: null, status: 'success'})
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ message: error})
  }
}
const updateTask = (req, res) => {
  res.send('task updated')
}
const deleteTask = async (req, res) => {
  try {
    const {id: taskID } = req.params
    const task = await Task.findOneAndDelete({_id: taskID})
    if (!task) {
      return res.status(404).json({ message: `No task with ID ${taskID}`})
    }
    res.status(200).json({ message: `The task with ${taskID} were deleted successfully`})
  } catch (error) {
    res.status(500).json({ message: error})
  }
  res.send('task deleted')
}

module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}