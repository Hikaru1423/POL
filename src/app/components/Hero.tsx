import React, { useState } from 'react';
import heroImage from '../../assets/123.jpg';
import { Button } from './ui/button';
import { AppointmentModal } from './AppointmentModal';

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="hero" className="relative overflow-hidden bg-gray-200 min-h-[280px] sm:min-h-[340px] md:min-h-[420px] lg:min-h-[600px] xl:min-h-[700px] mx-auto max-w-[1380px]">
        {/* Фоновое изображение */}
        <img
          src={heroImage}
          alt="Врач"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Затемняющий градиент слева направо */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="container pl-4 sm:pl-8 md:pl-[40px] lg:pl-[60px] px-4 relative z-10">
          <div className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="max-w-full sm:max-w-lg md:max-w-xl">
              <h1 className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-bold leading-tight uppercase">
                Приглашаем пройти комплексные программы обследования и лечения
                <br className="hidden sm:block" />
                <span className="hidden sm:inline">в клинике РЖД-Медицина г. Волгоград</span>
              </h1>
              <p className="text-gray-100 mt-2 sm:mt-4 text-3xl sm:text-1xl">
                Современное оборудование, квалифицированные специалисты
                и индивидуальный подход к каждому пациенту
              </p>
              <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsOpen(true)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-lg w-full sm:w-auto"
                >
                  Записаться
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white hover:bg-white/90 text-gray-700 border-gray-300 hover:border-red-500 hover:text-red-600 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-lg w-full sm:w-auto"
                >
                  <a href="#services">Подробнее</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
