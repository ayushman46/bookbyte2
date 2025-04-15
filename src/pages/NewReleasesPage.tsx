
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookGrid from '@/components/BookGrid';
import { getNewReleases } from '@/data/books';
import { Search } from 'lucide-react';

const NewReleasesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(getNewReleases());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  // Apply search filter
  useEffect(() => {
    let books = getNewReleases();
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      books = books.filter(
        book => 
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredBooks(books);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-poppins font-bold text-navy-800 mb-4">
              New Releases
            </h1>
            <p className="text-lg text-navy-600">
              Explore our latest additions to the library. These fresh titles have just arrived and are waiting to be discovered. Stay ahead of the curve with our newest books.
            </p>
          </div>
          
          {/* Search Box */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search new releases..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-3 w-full border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-300"
              />
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-navy-600 text-center">
              Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'new release' : 'new releases'}
            </p>
          </div>
          
          {/* Books Grid */}
          <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {filteredBooks.length > 0 ? (
              <BookGrid books={filteredBooks} />
            ) : (
              <div className="text-center py-12">
                <p className="text-navy-600 mb-4">No new releases found matching your search.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 bg-navy-600 text-white rounded-md hover:bg-navy-700"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewReleasesPage;
