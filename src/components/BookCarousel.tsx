
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BookCard from './BookCard';
import type { Book } from '@/data/books';

interface BookCarouselProps {
  title: string;
  books: Book[];
}

const BookCarousel = ({ title, books }: BookCarouselProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll 80% of visible width
      
      let newPosition;
      if (direction === 'left') {
        newPosition = Math.max(0, scrollPosition - scrollAmount);
      } else {
        newPosition = Math.min(scrollWidth - clientWidth, scrollPosition + scrollAmount);
      }
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };

  const showLeftButton = scrollPosition > 0;
  const showRightButton = carouselRef.current 
    ? scrollPosition < carouselRef.current.scrollWidth - carouselRef.current.clientWidth
    : true;

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-poppins font-bold text-navy-800">{title}</h2>
        <div className="flex space-x-2">
          <button 
            className={`p-2 rounded-full ${showLeftButton ? 'bg-navy-100 text-navy-600 hover:bg-navy-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'} transition-colors`}
            onClick={() => scroll('left')}
            disabled={!showLeftButton}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            className={`p-2 rounded-full ${showRightButton ? 'bg-navy-100 text-navy-600 hover:bg-navy-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'} transition-colors`}
            onClick={() => scroll('right')}
            disabled={!showRightButton}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="flex space-x-4">
          {books.map((book) => (
            <div key={book.id} className="w-64 flex-shrink-0">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;
