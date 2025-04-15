
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { getCategories } from '@/data/books';
import { 
  Heart, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  LogOut, 
  ChevronRight 
} from 'lucide-react';

const Header = () => {
  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const categories = getCategories();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-poppins font-bold text-navy-700 flex items-center">
            BookByte
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy-700 hover:text-navy-500 font-inter transition-colors">
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-navy-700 hover:text-navy-500 font-inter transition-colors"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-navy-700 hover:bg-navy-50"
                      onClick={closeMobileMenu}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link to="/bestsellers" className="text-navy-700 hover:text-navy-500 font-inter transition-colors">
              Bestsellers
            </Link>
            
            <Link to="/new-releases" className="text-navy-700 hover:text-navy-500 font-inter transition-colors">
              New Releases
            </Link>
            
            <Link to="/contact" className="text-navy-700 hover:text-navy-500 font-inter transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link to="/wishlist" className="text-navy-700 hover:text-navy-500 relative">
              <Heart className="h-6 w-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-terracotta-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            
            {/* Cart */}
            <Link to="/cart" className="text-navy-700 hover:text-navy-500 relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-terracotta-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* User Account / Auth */}
            <div className="relative">
              <button 
                className="text-navy-700 hover:text-navy-500"
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
              >
                <User className="h-6 w-6" />
              </button>
              
              {accountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {isAuthenticated ? (
                      <>
                        <div className="px-4 py-2 text-sm text-navy-700 border-b border-gray-100">
                          Hello, {user?.name}
                        </div>
                        <Link
                          to="/account"
                          className="block px-4 py-2 text-sm text-navy-700 hover:bg-navy-50"
                          onClick={() => setAccountDropdownOpen(false)}
                        >
                          My Account
                        </Link>
                        {user?.role === 'admin' && (
                          <Link
                            to="/admin"
                            className="block px-4 py-2 text-sm text-navy-700 hover:bg-navy-50"
                            onClick={() => setAccountDropdownOpen(false)}
                          >
                            Admin Dashboard
                          </Link>
                        )}
                        <button
                          onClick={() => {
                            logout();
                            setAccountDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-navy-700 hover:bg-navy-50"
                        >
                          Logout <LogOut className="h-4 w-4 inline ml-1" />
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm text-navy-700 hover:bg-navy-50"
                          onClick={() => setAccountDropdownOpen(false)}
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-sm text-navy-700 hover:bg-navy-50"
                          onClick={() => setAccountDropdownOpen(false)}
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-navy-700 hover:text-navy-500"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <Link 
              to="/" 
              className="block py-2 text-navy-700 font-medium"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            
            {/* Mobile Categories Dropdown */}
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 text-navy-700 font-medium"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              >
                Categories
                {categoryDropdownOpen ? 
                  <ChevronDown className="h-5 w-5" /> : 
                  <ChevronRight className="h-5 w-5" />
                }
              </button>
              
              {categoryDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase()}`}
                      className="block py-2 text-navy-600 hover:text-navy-800"
                      onClick={closeMobileMenu}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/bestsellers" 
              className="block py-2 text-navy-700 font-medium"
              onClick={closeMobileMenu}
            >
              Bestsellers
            </Link>
            
            <Link 
              to="/new-releases" 
              className="block py-2 text-navy-700 font-medium"
              onClick={closeMobileMenu}
            >
              New Releases
            </Link>
            
            <Link 
              to="/wishlist" 
              className="block py-2 text-navy-700 font-medium"
              onClick={closeMobileMenu}
            >
              Wishlist
            </Link>
            
            <Link 
              to="/cart" 
              className="block py-2 text-navy-700 font-medium"
              onClick={closeMobileMenu}
            >
              Cart
            </Link>
            
            <Link 
              to="/contact" 
              className="block py-2 text-navy-700 font-medium"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/account" 
                  className="block py-2 text-navy-700 font-medium"
                  onClick={closeMobileMenu}
                >
                  My Account
                </Link>
                {user?.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="block py-2 text-navy-700 font-medium"
                    onClick={closeMobileMenu}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  className="block py-2 text-navy-700 font-medium w-full text-left"
                  onClick={() => {
                    logout();
                    closeMobileMenu();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block py-2 text-navy-700 font-medium"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block py-2 text-navy-700 font-medium"
                  onClick={closeMobileMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
