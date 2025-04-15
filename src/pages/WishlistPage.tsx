
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { Trash, ShoppingCart, BookOpen } from 'lucide-react';

const WishlistPage = () => {
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem: addToCart } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const handleAddToCart = (item: any) => {
    addToCart(item);
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-poppins font-bold text-navy-800 mb-4">
              My Wishlist
            </h1>
            <p className="text-lg text-navy-600">
              Keep track of books you're interested in and want to purchase later.
            </p>
          </div>
          
          {/* Wishlist Content */}
          <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {items.length > 0 ? (
              <>
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-navy-600">
                    {items.length} {items.length === 1 ? 'book' : 'books'} in your wishlist
                  </p>
                  <button
                    onClick={clearWishlist}
                    className="text-navy-600 hover:text-navy-800 text-sm"
                  >
                    Clear Wishlist
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                      <div className="p-4 flex gap-4">
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="w-24 h-36 object-cover rounded-md"
                        />
                        <div className="flex flex-col flex-grow">
                          <Link to={`/book/${item.id}`} className="hover:underline">
                            <h3 className="font-poppins font-semibold text-navy-800 line-clamp-2">
                              {item.title}
                            </h3>
                          </Link>
                          <p className="text-navy-600 text-sm mb-2">{item.author}</p>
                          <p className="text-terracotta-600 font-semibold mt-auto">₹{item.price}</p>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 p-4 flex justify-between gap-2">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="flex-1 flex items-center justify-center py-2 bg-navy-600 hover:bg-navy-700 text-white rounded-md text-sm transition-colors"
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="flex items-center justify-center p-2 text-navy-600 hover:text-navy-800 rounded-md transition-colors"
                          aria-label="Remove from wishlist"
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-cream-50 rounded-lg">
                <BookOpen className="h-16 w-16 mx-auto text-navy-300 mb-4" />
                <h2 className="text-2xl font-poppins font-semibold text-navy-800 mb-4">
                  Your wishlist is empty
                </h2>
                <p className="text-navy-600 mb-6">
                  Start adding books you love to your wishlist for future reference.
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

export default WishlistPage;
