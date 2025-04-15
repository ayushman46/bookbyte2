
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Trash, ShoppingBag, ChevronRight, ChevronLeft, Plus, Minus } from 'lucide-react';

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading for animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  const handleCheckout = () => {
    // TODO: Implement Razorpay integration
    navigate('/checkout');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-poppins font-bold text-navy-800 mb-4">
              Shopping Cart
            </h1>
            <p className="text-lg text-navy-600">
              Review and checkout your selected books.
            </p>
          </div>
          
          {/* Cart Content */}
          <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {items.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-poppins font-semibold text-navy-800">
                          Cart Items ({totalItems})
                        </h2>
                        <button
                          onClick={clearCart}
                          className="text-navy-600 hover:text-navy-800 text-sm"
                        >
                          Clear Cart
                        </button>
                      </div>
                    </div>
                    
                    <div className="divide-y divide-gray-100">
                      {items.map((item) => (
                        <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-4">
                          <img
                            src={item.coverImage}
                            alt={item.title}
                            className="w-24 h-36 object-cover rounded-md"
                          />
                          
                          <div className="flex-grow">
                            <Link to={`/book/${item.id}`} className="hover:underline">
                              <h3 className="font-poppins font-semibold text-navy-800">
                                {item.title}
                              </h3>
                            </Link>
                            <p className="text-navy-600 text-sm mb-4">{item.author}</p>
                            
                            <div className="flex flex-wrap items-center justify-between gap-4">
                              <div className="flex items-center">
                                <button
                                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 rounded-l-md bg-gray-100 text-navy-600 hover:bg-gray-200 transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="px-4 py-1 bg-gray-100 text-navy-800">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 rounded-r-md bg-gray-100 text-navy-600 hover:bg-gray-200 transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              
                              <div className="flex items-center gap-4">
                                <p className="text-navy-800 font-medium">
                                  ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                                </p>
                                <button
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="text-navy-600 hover:text-navy-800"
                                  aria-label="Remove from cart"
                                >
                                  <Trash className="h-5 w-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-6 bg-cream-50 flex justify-between">
                      <Link to="/" className="flex items-center text-navy-600 hover:text-navy-800 transition-colors">
                        <ChevronLeft className="h-5 w-5 mr-1" /> Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                    <div className="p-6 border-b border-gray-100">
                      <h2 className="text-xl font-poppins font-semibold text-navy-800">
                        Order Summary
                      </h2>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between text-navy-600">
                        <span>Subtotal</span>
                        <span>₹{totalPrice}</span>
                      </div>
                      <div className="flex justify-between text-navy-600">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="pt-4 border-t border-gray-100 flex justify-between font-semibold text-lg text-navy-800">
                        <span>Total</span>
                        <span>₹{totalPrice}</span>
                      </div>
                      
                      <button
                        onClick={handleCheckout}
                        className="w-full mt-6 py-3 bg-terracotta-500 text-white rounded-md hover:bg-terracotta-600 transition-colors flex items-center justify-center font-medium"
                      >
                        Proceed to Checkout <ChevronRight className="h-5 w-5 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-cream-50 rounded-lg">
                <ShoppingBag className="h-16 w-16 mx-auto text-navy-300 mb-4" />
                <h2 className="text-2xl font-poppins font-semibold text-navy-800 mb-4">
                  Your cart is empty
                </h2>
                <p className="text-navy-600 mb-6">
                  Looks like you haven't added any books to your cart yet.
                </p>
                <Link
                  to="/"
                  className="inline-block px-6 py-3 bg-navy-600 text-white rounded-md hover:bg-navy-700 transition-colors"
                >
                  Browse Books
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
