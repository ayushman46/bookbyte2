require('dotenv').config();
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

// Feedback Model
const Feedback = mongoose.model('Feedback', new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
}));

// Seed Data
async function seedFeedback() {
  try {
    const feedbacks = [
      { name: 'John Doe', email: 'john@example.com', message: 'Great service!' },
      { name: 'Jane Smith', email: 'jane@example.com', message: 'Loved the books!' },
      { name: 'Alice Johnson', email: 'alice@example.com', message: 'Fast delivery!' },
      { name: 'Bob Brown', email: 'bob@example.com', message: 'Excellent customer support!' },
      { name: 'Charlie Davis', email: 'charlie@example.com', message: 'Highly recommend this store!' },
    ];

    await Feedback.insertMany(feedbacks);
    console.log('✅ Feedback seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error seeding feedback:', error);
    mongoose.connection.close();
  }
}

seedFeedback();