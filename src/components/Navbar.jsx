import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src="logo.svg" alt="logo" width={64} height={64} className="cursor-pointer absolute top-11 md:top-8 z-10 w-[2.5rem] h-[2.5rem] md:w-[4rem] md:h-[4rem] " />
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex">
            <ul className="flex space-x-8 text-sm font-bold text-[#424242]">
              {['HOME', 'ABOUT', 'CAREER', 'PORTFOLIO', 'WORK', 'BUSINESS', 'CONTACT'].map((item) => (
                <li key={item} className="cursor-pointer">
                  <a href={`#${item.toLowerCase().replace(' ', '')}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, slide in from the right side */}
      <div 
        className={`z-10 fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['HOME', 'ABOUT ME', 'CAREER', 'PORTFOLIO', 'WORK', 'BUSINESS', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden" 
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;