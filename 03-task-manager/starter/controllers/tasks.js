// good practice to use CamelSens in the ModelName
const Task = require('../models/Task')
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({})
    
    res.status(200).json({ tasks })
    //res.status(200).json({ tasks, amount: tasks.length })
    //res.status(200).json({ status: "success", data: {tasks, nbHits: tasks.lenght}})
    

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

const updateTask = async (req, res) => {
  try {
    const { id:taskID } = req.params
    // the third parameter in the findOneAndUpdate option is need in order to return the update values (new)
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    
    if (!task){
      return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }
    
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ message: error})  
  }d
}


module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}