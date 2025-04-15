
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCarousel from '@/components/BookCarousel';
import { getBestsellers, getNewReleases } from '@/data/books';
import { ChevronRight } from 'lucide-react';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animation on component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const bestsellers = getBestsellers();
  const newReleases = getNewReleases();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80")',
              backgroundBlendMode: 'overlay',
            }}
          />
          <div className="absolute inset-0 bg-navy-900/80 z-10" />
          
          <div className="container mx-auto px-4 relative z-20">
            <div className={`max-w-2xl transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-4">
                Welcome to BookByte
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Explore our vast collection of books across genres, from bestsellers to new releases. Begin your reading journey today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/categories" className="btn-primary">
                  Browse Books
                </Link>
                <Link to="/new-releases" className="btn-secondary">
                  New Releases
                </Link>
                <Link to="/bestsellers" className="btn-accent">
                  Bestsellers
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Bestsellers Carousel */}
          <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-3xl font-poppins font-bold text-primary">Bestsellers</h2>
              <Link to="/bestsellers" className="text-accent hover:text-accent-foreground flex items-center text-sm font-semibold">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <BookCarousel title="" books={bestsellers} />
          </div>

          {/* New Releases Carousel */}
          <div className={`transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-3xl font-poppins font-bold text-primary">New Releases</h2>
              <Link to="/new-releases" className="text-accent hover:text-accent-foreground flex items-center text-sm font-semibold">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <BookCarousel title="" books={newReleases} />
          </div>

          {/* Features Section */}
          <section className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-muted">
              <h3 className="text-xl font-poppins font-semibold text-card-foreground mb-3">Explore Categories</h3>
              <p className="text-muted-foreground mb-4">Dive into our extensive collection of books across various genres. Find your perfect read!</p>
              <Link to="/categories" className="text-accent hover:text-accent-foreground font-medium flex items-center">
                Browse Categories <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-muted">
              <h3 className="text-xl font-poppins font-semibold text-card-foreground mb-3">Save For Later</h3>
              <p className="text-muted-foreground mb-4">Add books to your wishlist and come back to them later when you're ready to make a purchase.</p>
              <Link to="/wishlist" className="text-accent hover:text-accent-foreground font-medium flex items-center">
                View Wishlist <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-muted">
              <h3 className="text-xl font-poppins font-semibold text-card-foreground mb-3">Fast Checkout</h3>
              <p className="text-muted-foreground mb-4">Seamless shopping experience with secure payment options and quick checkout process.</p>
              <Link to="/cart" className="text-accent hover:text-accent-foreground font-medium flex items-center">
                View Cart <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </section>

          {/* Testimonials or Quote Section */}
          <section className="mt-16 text-center py-12 bg-card rounded-lg">
            <blockquote className="max-w-3xl mx-auto px-4">
              <p className="text-2xl text-card-foreground italic font-poppins mb-6">
                "A reader lives a thousand lives before he dies. The man who never reads lives only one."
              </p>
              <footer className="text-muted-foreground">
                — George R.R. Martin
              </footer>
            </blockquote>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
