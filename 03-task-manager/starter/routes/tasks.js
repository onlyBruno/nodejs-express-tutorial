const express = require('express')
const router = express.Router()
const { getAllTask, createTask, getSingleTask, updateTask, deleteTask } = require('../controllers/tasks')


// Difference between put and patch
// Put uses when you trying to replace the existing resource
// Patch is for partial update
router
  .route('/')
  .get(getAllTask)
  .post(createTask)
router
  .route('/:id')
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask)


module.exports = router