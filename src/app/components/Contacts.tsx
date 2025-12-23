import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { AppointmentModal } from './AppointmentModal';

export function Contacts() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="contacts" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center mb-6 sm:mb-8 md:mb-10 text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold">Контакты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-gray-900 mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl">Как нас найти</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 text-sm sm:text-base font-medium">Адрес:</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">г. Волгоград, ул. Ленина, д. 123</p>
                </div>
              </div>
              
              <div className="flex gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 text-sm sm:text-base font-medium">Телефон:</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">+7 (495) 123-45-67</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">+7 (495) 765-43-21</p>
                </div>
              </div>
              
              <div className="flex gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 text-sm sm:text-base font-medium">Email:</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base break-all">rhdMedic@gmail.com</p>
                </div>
              </div>
              
              <div className="flex gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 text-sm sm:text-base font-medium">Режим работы:</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">Пн-Пт: 8:00 - 20:00</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">Сб-Вс: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(true)}
              className="w-full mt-4 sm:mt-6 bg-red-500 text-white py-2.5 sm:py-3 rounded hover:bg-red-600 transition text-sm sm:text-base"
            >
              Записаться на прием
            </button>
          </div>
          
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[300px] sm:h-[400px] md:h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4164845!2d37.617635!3d55.755825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIxLjAiTiAzN8KwMzcnMDMuNSJF!5e0!3m2!1sru!2sru!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта"
            />
          </div>
        </div>
      </div>
      <AppointmentModal isOpen={isOpen} onOpenChange={setIsOpen} />
    </section>
  );
}
