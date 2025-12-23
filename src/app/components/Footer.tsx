import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4">
          <nav className="flex w-full justify-between items-center text-2xl">
            <a href="#hero" className="hover:text-gray-900 transition">О нас</a>
            <span className="text-gray-300">•</span>
            <a href="#services" className="hover:text-gray-900 transition">Медицинские услуги</a>
            <span className="text-gray-300">•</span>
            <a href="#programs" className="hover:text-gray-900 transition">Комплексные программы</a>
            <span className="text-gray-300">•</span>
            <a href="#doctors" className="hover:text-gray-900 transition">Врачи</a>
            <span className="text-gray-300">•</span>
            <a href="#contacts" className="hover:text-gray-900 transition">Контакты</a>
          </nav>
          <div className="text-1xl text-gray-400 text-center">
            © 2025 РЖД-Медицина
          </div>
        </div>
      </div>
    </footer>
  );
}
