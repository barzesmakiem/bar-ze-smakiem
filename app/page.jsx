import StyleGuide from '@/components/StyleGuide';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Zamowienia from '@/components/Zamowienia';
import Reservation from '@/components/Reservation';
import About from '@/components/About';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
      <Header />
      <Hero />
      <Menu />
      <Zamowienia />
      <About />
      <Map />
      <Footer />
      {/* <StyleGuide /> */}
      {/* <div className='h-[4000px]'></div> */}
    </main>
  );
}
