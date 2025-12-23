import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhenToVisit } from './components/WhenToVisit';
import { Services } from './components/Services';
import { Programs } from './components/Programs';
import { Doctors } from './components/Doctors';
import { Advantages } from './components/Advantages';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhenToVisit />
      <Services />
      <Programs />
      <Doctors />
      <Advantages />
      <Contacts />
      <Footer />
    </div>
  );
}
