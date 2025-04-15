
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookGrid from '@/components/BookGrid';
import { getBooksByCategory, getCategories } from '@/data/books';
import { Search, Filter, X } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortOption, setSortOption] = useState('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const allCategories = getCategories();
  const displayCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  // Initial load when category changes
  useEffect(() => {
    // Reset states when category changes
    setIsLoaded(false);
    setSearchQuery('');
    setSortOption('default');
    setPriceRange([0, 1000]);
    
    // Get books and apply filters/sorting
    if (category) {
      const books = getBooksByCategory(category);
      setFilteredBooks(books);
      
      // Add a slight delay for animation
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }
  }, [category]);

  // Apply filters and search
  useEffect(() => {
    if (category) {
      let books = getBooksByCategory(category);
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        books = books.filter(
          book => 
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
      }
      
      // Apply price range filter
      books = books.filter(
        book => book.price >= priceRange[0] && book.price <= priceRange[1]
      );
      
      // Apply sorting
      if (sortOption === 'price-low') {
        books.sort((a, b) => a.price - b.price);
      } else if (sortOption === 'price-high') {
        books.sort((a, b) => b.price - a.price);
      } else if (sortOption === 'title-asc') {
        books.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOption === 'title-desc') {
        books.sort((a, b) => b.title.localeCompare(a.title));
      }
      
      setFilteredBooks(books);
    }
  }, [category, searchQuery, sortOption, priceRange]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const min = parseInt(e.target.value) || 0;
    setPriceRange([min, priceRange[1]]);
  };

  const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = parseInt(e.target.value) || 1000;
    setPriceRange([priceRange[0], max]);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSortOption('default');
    setPriceRange([0, 1000]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Category Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-2">
              {displayCategory || 'All Categories'}
            </h1>
            <p className="text-navy-600">
              Explore our collection of {displayCategory.toLowerCase() || 'books'} for every reader.
            </p>
          </div>
          
          {/* Category Navigation (Desktop) */}
          <div className="hidden md:flex mb-8 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {allCategories.map((cat) => (
                <Link
                  key={cat}
                  to={`/category/${cat.toLowerCase()}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    category === cat.toLowerCase()
                      ? 'bg-navy-600 text-white'
                      : 'bg-cream-100 text-navy-700 hover:bg-cream-200'
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Filters and Search */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Box */}
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by title or author..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 pr-4 py-2 w-full border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-300"
                />
              </div>
              
              {/* Sort Dropdown (Desktop) */}
              <div className="hidden md:block">
                <select
                  value={sortOption}
                  onChange={handleSortChange}
                  className="px-4 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-300 bg-white"
                >
                  <option value="default">Sort by</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="title-asc">Title: A to Z</option>
                  <option value="title-desc">Title: Z to A</option>
                </select>
              </div>
              
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center px-4 py-2 bg-cream-100 text-navy-700 rounded-md"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
            
            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="md:hidden mt-4 p-4 bg-cream-50 rounded-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Sort by</label>
                  <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-300 bg-white"
                  >
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="title-asc">Title: A to Z</option>
                    <option value="title-desc">Title: Z to A</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Price Range</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0] || ''}
                      onChange={handlePriceMinChange}
                      className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-300"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1] || ''}
                      onChange={handlePriceMaxChange}
                      className="w-full px-3 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-300"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={clearFilters}
                    className="text-navy-600 hover:text-navy-800"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-4 py-2 bg-navy-600 text-white rounded-md hover:bg-navy-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
            
            {/* Desktop Price Range Filter */}
            <div className="hidden md:flex items-center space-x-8 mt-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium">Price:</label>
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0] || ''}
                  onChange={handlePriceMinChange}
                  className="w-24 px-3 py-1 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-300"
                />
                <span>to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1] || ''}
                  onChange={handlePriceMaxChange}
                  className="w-24 px-3 py-1 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-300"
                />
              </div>
              
              {(searchQuery || sortOption !== 'default' || priceRange[0] > 0 || priceRange[1] < 1000) && (
                <button
                  onClick={clearFilters}
                  className="text-navy-600 hover:text-navy-800 text-sm flex items-center"
                >
                  <X className="h-4 w-4 mr-1" /> Clear Filters
                </button>
              )}
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-navy-600">
              Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'result' : 'results'}
            </p>
          </div>
          
          {/* Books Grid */}
          <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <BookGrid books={filteredBooks} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
