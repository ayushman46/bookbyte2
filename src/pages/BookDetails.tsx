
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, ChevronLeft, ExternalLink, Check, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCarousel from '@/components/BookCarousel';
import { getBookById, getBooksByCategory } from '@/data/books';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import type { Book } from '@/data/books';

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [relatedBooks, setRelatedBooks] = useState<Book[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();

  useEffect(() => {
    // Reset states when book id changes
    setIsLoaded(false);
    setAddedToCart(false);
    
    if (id) {
      const bookData = getBookById(id);
      if (bookData) {
        setBook(bookData);
        // Get related books from the same category
        const categoryBooks = getBooksByCategory(bookData.category).filter(b => b.id !== id);
        setRelatedBooks(categoryBooks);
        
        // Simulate loading for animation
        setTimeout(() => {
          setIsLoaded(true);
        }, 100);
      } else {
        // Book not found, redirect to 404
        navigate('/not-found');
      }
    }
  }, [id, navigate]);

  if (!book) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse">
              <div className="h-12 bg-navy-200 rounded-md w-64 mb-4"></div>
              <div className="h-6 bg-navy-200 rounded-md w-48 mx-auto"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isWishlisted = isInWishlist(book.id);

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      coverImage: book.coverImage
    });
    
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(book.id);
    } else {
      addToWishlist({
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        coverImage: book.coverImage
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center text-navy-600 hover:text-navy-800 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back
            </button>
          </div>
          
          {/* Book Details Section */}
          <div className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Book Cover */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                />
                
                {/* Book Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.isBestseller && (
                    <span className="bg-terracotta-500 text-white text-xs uppercase font-semibold py-1 px-2 rounded-md">
                      Bestseller
                    </span>
                  )}
                  {book.isNewRelease && (
                    <span className="bg-navy-500 text-white text-xs uppercase font-semibold py-1 px-2 rounded-md">
                      New Release
                    </span>
                  )}
                  <span className="bg-cream-400 text-navy-800 text-xs uppercase font-semibold py-1 px-2 rounded-md">
                    {book.category}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Book Information */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-navy-600 mb-4">by {book.author}</p>
              
              {/* Price and Stock Status */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-2xl font-semibold text-terracotta-600">₹{book.price}</span>
                {book.inStock ? (
                  <span className="flex items-center text-green-600 text-sm font-medium">
                    <Check className="h-4 w-4 mr-1" /> In Stock
                  </span>
                ) : (
                  <span className="flex items-center text-red-500 text-sm font-medium">
                    <AlertTriangle className="h-4 w-4 mr-1" /> Out of Stock
                  </span>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  onClick={handleAddToCart}
                  disabled={!book.inStock || addedToCart}
                  className={`flex items-center px-6 py-3 rounded-md font-medium transition-colors ${
                    !book.inStock 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : addedToCart 
                        ? 'bg-green-500 text-white' 
                        : 'bg-navy-600 text-white hover:bg-navy-700'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="h-5 w-5 mr-2" /> Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
                    </>
                  )}
                </button>
                
                <button 
                  onClick={handleToggleWishlist}
                  className={`flex items-center px-6 py-3 rounded-md font-medium transition-colors ${
                    isWishlisted 
                      ? 'bg-terracotta-100 text-terracotta-600 border border-terracotta-300' 
                      : 'bg-cream-100 text-navy-700 hover:bg-cream-200 border border-cream-300'
                  }`}
                >
                  <Heart className="h-5 w-5 mr-2" fill={isWishlisted ? "currentColor" : "none"} />
                  {isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
                </button>
                
                <a 
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-amber-500 text-white rounded-md font-medium hover:bg-amber-600 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" /> Buy on Amazon
                </a>
              </div>
              
              {/* Book Description */}
              <div>
                <h2 className="text-xl font-poppins font-semibold text-navy-800 mb-3">Description</h2>
                <div className="prose prose-navy max-w-none mb-8">
                  <p className="text-navy-700">{book.description}</p>
                </div>
              </div>
              
              {/* Book Details Table */}
              <div className="mb-8">
                <h2 className="text-xl font-poppins font-semibold text-navy-800 mb-3">Details</h2>
                <div className="bg-cream-50 p-4 rounded-md">
                  <table className="w-full text-navy-700">
                    <tbody>
                      <tr className="border-b border-cream-200">
                        <td className="py-2 font-medium">Title</td>
                        <td className="py-2">{book.title}</td>
                      </tr>
                      <tr className="border-b border-cream-200">
                        <td className="py-2 font-medium">Author</td>
                        <td className="py-2">{book.author}</td>
                      </tr>
                      <tr className="border-b border-cream-200">
                        <td className="py-2 font-medium">Category</td>
                        <td className="py-2">{book.category}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Availability</td>
                        <td className="py-2">{book.inStock ? 'In Stock' : 'Out of Stock'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Books Section */}
          {relatedBooks.length > 0 && (
            <div className={`transition-all duration-500 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-2xl font-poppins font-semibold text-navy-800 mb-6">You May Also Like</h2>
              <BookCarousel title="" books={relatedBooks} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetails;
