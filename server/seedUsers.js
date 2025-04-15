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

// User Model
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, default: 'user' }, // 'user' or 'admin'
}));

// Seed Data
async function seedUsers() {
  try {
    const users = [
      { name: 'John Doe', email: 'john@example.com', password: 'password123', role: 'user' },
      { name: 'Jane Smith', email: 'jane@example.com', password: 'password123', role: 'user' },
      { name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'admin' },
      { name: 'Alice Johnson', email: 'alice@example.com', password: 'alice123', role: 'user' },
      { name: 'Bob Brown', email: 'bob@example.com', password: 'bob123', role: 'user' },
    ];

    await User.insertMany(users);
    console.log('✅ Users seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error seeding users:', error);
    mongoose.connection.close();
  }
}

seedUsers();