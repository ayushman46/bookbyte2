const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
      quantity: Number,
    }
  ],
  total: Number,
  date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Order', OrderSchema);
