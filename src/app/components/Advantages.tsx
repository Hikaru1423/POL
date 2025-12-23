import { Clock, Award, Users, Shield } from 'lucide-react';

export function Advantages() {
  const advantages = [
    {
      icon: Clock,
      title: 'Работаем без выходных',
      description: 'Клиника работает 7 дней в неделю с 8:00 до 20:00. Запись на удобное время.'
    },
    {
      icon: Award,
      title: 'Опытные специалисты',
      description: 'Врачи высшей категории с опытом работы от 10 лет. Регулярное повышение квалификации.'
    },
    {
      icon: Users,
      title: 'Индивидуальный подход',
      description: 'Персональный план лечения для каждого пациента. Внимание к деталям.'
    },
    {
      icon: Shield,
      title: 'Современное оборудование',
      description: 'Новейшее медицинское оборудование экспертного класса. Точная диагностика.'
    }
  ];

  return (
    <section id="advantages" className="py-8 sm:py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-center mb-6 sm:mb-8 md:mb-10 text-gray-900 tracking-wider uppercase text-2xl sm:text-3xl md:text-4xl font-bold">Наши преимущества</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div key={index} className="bg-white p-6 sm:p-10 md:p-16 lg:p-20 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2 text-base sm:text-lg md:text-xl font-semibold">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{advantage.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
