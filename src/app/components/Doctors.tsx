export function Doctors() {
  const doctors = [
    {
      name: 'Гарина Мария Викторовна',
      specialty: 'Аллерголог-иммунолог',
      experience: '23 года опыта',
      image: 'https://prodoctorov.ru/media/photo/volgograd/doctorimage/521908/1477557-521908-garina_square.jpg',
      description: 'Высшая квалификационная категория',
      profileUrl: 'https://prodoctorov.ru/volgograd/vrach/521908-garina/' // ← ссылка на профиль
    },
    {
      name: 'Шаталин Андрей Викторович',
      specialty: 'Аллерголос-иммунолог',
      experience: '20 лет опыта',
      image: 'https://prodoctorov.ru/media/photo/volgograd/doctorimage/166185/1320409-166185-shatalin_square.jpg',
      description: 'Кандидат медицинских наук',
      profileUrl: 'https://prodoctorov.ru/volgograd/vrach/166185-shatalin/'
    },
    {
      name: 'Михайлова Лариса Васильевна',
      specialty: 'Аллерголог-иммунолог',
      experience: '12 лет опыта',
      image: 'https://prodoctorov.ru/media/photo/volgograd/doctorimage/48582/1320402-48582-mihaylova_square.jpg',
      description: 'Специалист по детским заболеваниям',
      profileUrl: 'https://prodoctorov.ru/volgograd/vrach/48582-mihaylova/'
    }
  ];

  return (
    <section id="doctors" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center mb-6 sm:mb-8 md:mb-10 text-gray-900 tracking-wider uppercase text-2xl sm:text-3xl md:text-4xl font-bold">
          Наши врачи
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 max-w-full mx-auto sm:max-w-none">
              <div className="relative w-full aspect-square bg-gray-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-24">
                <h3 className="text-gray-900 mb-1 font-medium text-base sm:text-lg md:text-xl">{doctor.name}</h3>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  {doctor.experience} · {doctor.description}
                </p>
                <a
                  href={doctor.profileUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-red-600 transition duration-200 text-sm sm:text-base md:text-lg">
                  Подробнее
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}











