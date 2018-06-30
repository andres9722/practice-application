import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TaskSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean,
    required: true
  }
})

export default mongoose.model('task', TaskSchema)
