import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-indigo-600">
            SwimTrack AI
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">
              Contact
            </a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow">
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">
            About
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">
            Services
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">
            Contact
          </a>
          <button className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
