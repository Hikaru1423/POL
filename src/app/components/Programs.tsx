import React from 'react';    
import programImage from '../../assets/123.jpg';

export function Programs() {
  return (
    <section id="programs" className="py-8 sm:py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-center mb-4 sm:mb-6 text-gray-900 tracking-wider uppercase text-2xl sm:text-3xl md:text-4xl font-bold">Комплексные программы и акции</h1>
        <p className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4">
          Воспользуйтесь нашими специальными предложениями и комплексными 
          программами медицинского обслуживания со скидкой
        </p>
        
        <div className="rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold">Хорошее здоровье — залог успеха</h2>
              <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl">Комплексная программа обследования. Выгода до 25%.</p>
              <a href="#contacts" className="inline-block bg-red-500 text-white px-6 sm:px-10 md:px-15 py-3 sm:py-4 md:py-5 rounded hover:bg-red-600 transition">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center">Подробнее</h1>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-200 order-1 md:order-2">
              <img 
                src={programImage} 
                alt="Комплексная программа обследования" 
                className="w-full h-full object-cover aspect-[21/9]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
