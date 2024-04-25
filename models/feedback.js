import { Schema, model, models } from 'mongoose';

const FeedbackSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  feedback: {
    type: String,
    required: [true, 'Feedback is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }, 
  date: {
    type: String,
    required: [true, 'Date is required.'],
  }
});

const Feedback = models.Feedback || model('Feedback', FeedbackSchema);

export default Feedback;