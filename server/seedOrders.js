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

// Order Model
const Order = mongoose.model('Order', new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    quantity: Number,
  }],
  totalPrice: Number,
  status: { type: String, default: 'pending' }, // 'pending' or 'completed'
  timestamp: { type: Date, default: Date.now },
}));

// Seed Data
async function seedOrders() {
  try {
    const orders = [
      {
        userId: '643d1f2e8f1b2c001c8e4a1a', // Replace with a valid user ID from your database
        items: [
          { bookId: '643d1f2e8f1b2c001c8e4a1b', quantity: 2 }, // Replace with valid book IDs
          { bookId: '643d1f2e8f1b2c001c8e4a1c', quantity: 1 },
        ],
        totalPrice: 40,
        status: 'pending',
      },
      {
        userId: '643d1f2e8f1b2c001c8e4a1b', // Replace with another valid user ID
        items: [
          { bookId: '643d1f2e8f1b2c001c8e4a1d', quantity: 3 },
        ],
        totalPrice: 75,
        status: 'completed',
      },
    ];

    await Order.insertMany(orders);
    console.log('✅ Orders seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error seeding orders:', error);
    mongoose.connection.close();
  }
}

seedOrders();