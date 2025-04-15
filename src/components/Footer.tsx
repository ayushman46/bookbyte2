
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4">ReadExplore</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for discovering the best books across all genres. 
              Explore our vast collection and find your next favorite read.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/new-releases" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                  New Releases
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/fiction" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                  Fiction
                </Link>
              </li>
              <li>
                <Link to="/category/technology" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/category/romance" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                  Romance
                </Link>
              </li>
              <li>
                <Link to="/category/biography" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                  Biography
                </Link>
              </li>
              <li>
                <Link to="/category/children" className="text-gray-300 hover:text-terracotta-400 transition-colors">
                  Children
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-terracotta-400" />
                <span className="text-gray-300">
                  123 Book Street, Reading Avenue, Bookville, 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-terracotta-400" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-terracotta-400" />
                <span className="text-gray-300">info@readexplore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ReadExplore. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-terracotta-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-terracotta-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-terracotta-400 transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
