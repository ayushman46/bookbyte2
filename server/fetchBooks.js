require('dotenv').config();
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB'); // Debugging connection
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

// Book Model
const Book = mongoose.model('Book', new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  stock: Number,
}));

// Fetch All Books
async function fetchBooks() {
  try {
    const books = await Book.find();
    console.log('Books:', books);
    mongoose.connection.close();
  } catch (error) {
    console.error('Error fetching books:', error);
    mongoose.connection.close();
  }
}

fetchBooks();