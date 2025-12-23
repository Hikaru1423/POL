import { useState } from 'react';
import { AlertCircle, Thermometer, HeartPulse, Stethoscope } from 'lucide-react';
import { AppointmentModal } from './AppointmentModal';

export function WhenToVisit() {
  const [isOpen, setIsOpen] = useState(false);
  const reasons = [
    {
      icon: Thermometer,
      title: 'Повышенная температура',
      description: 'Температура выше 38°C в течение более 3 дней'
    },
    {
      icon: HeartPulse,
      title: 'Боли в груди',
      description: 'Острые или тянущие боли в области сердца'
    },
    {
      icon: Stethoscope,
      title: 'Хронические заболевания',
      description: 'Обострение хронических заболеваний'
    },
    {
      icon: AlertCircle,
      title: 'Общее недомогание',
      description: 'Слабость, головокружение, потеря аппетита'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-center mb-6 sm:mb-8 md:mb-10 text-gray-900 tracking-wider uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl">
          НЕОБХОДИМО ЗАПИСАТСЬЯ К ВРАЧУ, ЕСЛИ:
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-gray-200 shadow-md w-full max-w-full md:max-w-[647px] min-h-[200px] sm:min-h-[240px] md:h-[261px] flex flex-col mx-auto">
                <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-4 md:mt-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{reason.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">{reason.description}</p>
                  </div>
                </div>
                <div className="mt-auto flex justify-center pt-4">
                  <button className="w-full sm:w-[200px] md:w-[253px] h-[36px] sm:h-[40px] md:h-[42px] rounded-[20px] bg-[#D9D9D9] text-black text-sm sm:text-base">Читать подробнее</button>
                </div>
              </div>
            );
          })}
        </div>
        
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-500 mt-4 sm:mt-6 px-4">Риск развития аллергии имеет каждый человек независимо от наследственности. Узнайте о своей предрасположенности и обратитесь к врачу при наличии симптомов.</p>

        <div className="text-center mt-4 sm:mt-6">
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
