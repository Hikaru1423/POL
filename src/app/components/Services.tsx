import React, { useState } from 'react';
import { AppointmentModal } from './AppointmentModal';

export function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const services = [
    {
      title: 'Консультативный прием',
      description: 'Первичная консультация специалиста с осмотром',
      price: 'от 2 500 ₽'
    },
    {
      title: 'Консультативный прием',
      description: 'Повторная консультация и корректировка лечения',
      price: 'от 2 000 ₽'
    },
    {
      title: 'Консультативный прием',
      description: 'Консультация узкого специалиста',
      price: 'от 3 000 ₽'
    },
    {
      title: 'Консультативный прием',
      description: 'Комплексное обследование организма',
      price: 'от 5 000 ₽'
    },
    {
      title: 'Консультативный прием',
      description: 'Консультация по результатам анализов',
      price: 'от 1 800 ₽'
    },
    {
      title: 'Консультативный прием',
      description: 'Профилактический осмотр',
      price: 'от 2 200 ₽'
    }
  ];

  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-center mb-6 sm:mb-8 md:mb-10 text-gray-900 tracking-wider uppercase text-2xl sm:text-3xl md:text-4xl font-bold">
          Наши медицинские услуги
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4">
          Мы предлагаем широкий спектр медицинских услуг для диагностики, 
          лечения и профилактики различных заболеваний
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-gray-200 shadow-md w-full max-w-full md:max-w-[647px] min-h-[200px] sm:min-h-[240px] md:h-[261px] flex flex-col mx-auto">
              <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-4 md:mt-6">
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">{service.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">{service.description}</p>
                </div>
              </div>
              <div className="mt-auto flex justify-center pt-4">
                <button className="w-full sm:w-[200px] md:w-[253px] h-[36px] sm:h-[40px] md:h-[42px] rounded-[20px] bg-[#D9D9D9] text-black text-sm sm:text-base md:text-lg font-medium">Читать подробнее</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 sm:mt-8">
          <button 
            onClick={() => setIsOpen(true)}
            className="inline-block bg-red-500 text-white px-6 sm:px-10 md:px-15 py-3 sm:py-4 md:py-5 rounded hover:bg-red-600 transition"
          >
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center">Записаться</h1>
          </button>
        </div>
      </div>
      <AppointmentModal isOpen={isOpen} onOpenChange={setIsOpen} />
    </section>
  );
}
