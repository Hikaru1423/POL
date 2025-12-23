import React, { useState } from 'react';
import { Send, Menu, X } from 'lucide-react';
import logoImage from '../../assets/1423.png';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { href: '#hero', label: 'Главное' },
    { href: '#services', label: 'Услуги' },
    { href: '#programs', label: 'Комплексы' },
    { href: '#doctors', label: 'Врачи' },
    { href: '#advantages', label: 'Преимущества' },
    { href: '#contacts', label: 'Контакты' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-[1400px] w-full">
        {/* Top bar with logo and phone */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-4 border-b border-gray-200 px-4 sm:pl-[2px] sm:pr-[30px] gap-2 sm:gap-0">
          <div className="flex items-center justify-between w-fu ll sm:w-auto">
            <div className="flex items-center gap-1 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img 
                src={logoImage} 
                alt="РЖД Медицина" 
                className="w-70 h-10"
              />
              
            </div>
            










            {/* Mobile menu button - visible only on screens up to 440px */}
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition max-[440px]:flex min-[441px]:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition">
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
            <a 
              href="tel:+79989989191" 
              className="text-red-600 hover:text-red-700 text-sm sm:text-lg lg:text-2xl font-bold transition whitespace-nowrap"
            >
              +7 (998) 998-91-91
            </a>
            <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition hidden sm:flex">
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition hidden lg:flex">
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>
        
        {/* Desktop Navigation menu - hidden on mobile (up to 440px) */}
        <nav className="hidden min-[441px]:flex items-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8 py-2 sm:py-4 px-2 sm:pl-[40px]">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex-1 bg-gray-200 text-gray-900 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg text-xs sm:text-sm lg:text-lg font-medium hover:bg-gray-300 transition uppercase shadow-sm text-center"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div
            className="max-[440px]:block min-[441px]:hidden fixed inset-0 bg-black/50 z-40 top-[73px]"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile menu - visible only on screens up to 440px */}
        <div
          className={`max-[440px]:block min-[441px]:hidden fixed top-[73px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out z-50 ${
            isMobileMenuOpen
              ? 'opacity-100 visible max-h-[500px] overflow-y-auto'
              : 'opacity-0 invisible max-h-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="w-full bg-gray-200 text-gray-900 px-6 py-4 mx-4 mb-2 rounded-lg text-base font-medium hover:bg-gray-300 transition uppercase shadow-sm text-center"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}