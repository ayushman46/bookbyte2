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

// Seed Data
async function seedBooks() {
  try {
    const books = [
      { title: 'Book 1', author: 'Author 1', description: 'Description 1', price: 10, image: 'url1', category: 'Fiction', stock: 5 },
      { title: 'Book 2', author: 'Author 2', description: 'Description 2', price: 15, image: 'url2', category: 'Non-Fiction', stock: 3 },
      { title: 'Book 3', author: 'Author 3', description: 'Description 3', price: 20, image: 'url3', category: 'Science', stock: 8 },
      { title: 'Book 4', author: 'Author 4', description: 'Description 4', price: 25, image: 'url4', category: 'History', stock: 10 },
      { title: 'Book 5', author: 'Author 5', description: 'Description 5', price: 30, image: 'url5', category: 'Biography', stock: 7 },
    ];

    await Book.insertMany(books);
    console.log('✅ Books seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error seeding books:', error);
    mongoose.connection.close();
  }
}

seedBooks();