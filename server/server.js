require('dotenv').config(); // Load environment variables
console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging MONGO_URI

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('✅ Connected to MongoDB');
});

// -------------------- Mongoose Models --------------------

const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' },
}));

const Book = mongoose.model('Book', new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  stock: Number
}));

const Order = mongoose.model('Order', new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    quantity: Number
  }],
  totalPrice: Number,
  status: { type: String, default: 'pending' },
  timestamp: { type: Date, default: Date.now }
}));

const Feedback = mongoose.model('Feedback', new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
}));

// -------------------- API Routes --------------------

// 📚 BOOKS
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
});

app.get('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book' });
  }
});

// 🧑 USERS (Login/Register)
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, email, password });
    await newUser.save();

    const { password: pw, ...userWithoutPassword } = newUser.toObject();
    res.status(201).json({ user: userWithoutPassword, token: 'mock-jwt-token' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const { password: pw, ...userWithoutPassword } = user.toObject();
    res.json({ user: userWithoutPassword, token: 'mock-jwt-token' });
  } catch (error) {
    res.status(500).json({ message: 'Error during login' });
  }
});

// 💬 FEEDBACK
app.post('/api/feedback', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();

    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: 'Error saving feedback' });
  }
});

app.get('/api/feedback', async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedback' });
  }
});

// 🛒 ORDERS
app.post('/api/orders', async (req, res) => {
  try {
    console.log('Incoming Order Request:', req.body); // Log the request body

    const { userId, items, totalPrice } = req.body;

    const newOrder = new Order({ userId, items, totalPrice });
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error); // Log errors
    res.status(500).json({ message: 'Error creating order' });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('userId').populate('items.bookId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
