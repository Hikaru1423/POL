import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface AppointmentModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AppointmentModal({ isOpen, onOpenChange }: AppointmentModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log('Форма отправлена:', { name, phone });
    onOpenChange(false);
    setName('');
    setPhone('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        className="bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10" 
        style={{ 
          width: 'calc(100% - 2rem)', 
          maxWidth: '600px',
          height: 'auto',
          minHeight: '400px',
          maxHeight: '90vh'
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900">
            Записаться на приём
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
            Заполните заявку. В ближайшее время мы с Вами свяжемся и подберём удобное время для консультации со специалистом
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5 mt-4 sm:mt-6">
          <div>
            <Input
              type="text"
              placeholder="Введите ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-white h-12 sm:h-16 md:h-20 text-sm sm:text-base px-3 sm:px-4"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="+7 (000) 000-00-00"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full bg-white h-12 sm:h-16 md:h-20 text-sm sm:text-base px-3 sm:px-4"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 text-base sm:text-lg md:text-xl rounded-lg mt-4 sm:mt-6"
          >
            Записаться
          </Button>
          <p className="text-[10px] sm:text-xs text-gray-600 text-center mt-2">
            Нажимая на кнопку «ЗАПИСАТЬСЯ», Вы даёте согласие на обработку персональных данных и соглашаетесь с{' '}
            <a href="#" className="text-blue-600 hover:underline">политикой конфиденциальности</a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

