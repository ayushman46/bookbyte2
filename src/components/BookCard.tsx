
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, ExternalLink } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import type { Book } from '@/data/books';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();
  const [imageError, setImageError] = useState(false);

  const isWishlisted = isInWishlist(book.id);

  const handleAddToCart = () => {
    addItem({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      coverImage: book.coverImage
    });
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

  // Fallback image URL
  const fallbackImage = 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2730&q=80';

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="relative">
        <Link to={`/book/${book.id}`}>
          <img 
            src={imageError ? fallbackImage : book.coverImage} 
            alt={book.title} 
            className="w-full h-64 object-cover object-center"
            onError={() => setImageError(true)}
          />
        </Link>
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button 
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full bg-white shadow-md ${isWishlisted ? 'text-terracotta-500' : 'text-gray-500 hover:text-terracotta-500'} transition-colors`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className="h-5 w-5" fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
        {(book.isBestseller || book.isNewRelease) && (
          <div className="absolute top-2 left-2">
            {book.isBestseller && (
              <span className="bg-terracotta-500 text-white text-xs uppercase font-semibold py-1 px-2 rounded-md">
                Bestseller
              </span>
            )}
            {book.isNewRelease && !book.isBestseller && (
              <span className="bg-navy-500 text-white text-xs uppercase font-semibold py-1 px-2 rounded-md">
                New Release
              </span>
            )}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <Link to={`/book/${book.id}`} className="inline-block mb-1">
          <h3 className="text-lg font-poppins font-semibold text-navy-800 hover:text-navy-600 transition-colors line-clamp-1">
            {book.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">{book.author}</p>
        <p className="mb-3 text-navy-600 text-sm line-clamp-2">{book.shortDescription}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-terracotta-600 font-semibold">₹{book.price}</span>
          <div className="flex space-x-2">
            <a 
              href={book.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Buy on Amazon"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <button 
              onClick={handleAddToCart}
              className="p-2 rounded-full bg-navy-600 text-white hover:bg-navy-700 transition-colors"
              aria-label="Add to cart"
              disabled={!book.inStock}
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {!book.inStock && (
          <p className="text-red-500 text-sm mt-2">Out of stock</p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
