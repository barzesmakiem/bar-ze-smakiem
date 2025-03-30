import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Zamowienia from '@/components/Zamowienia';
import Reservation from '@/components/Reservation';
import About from '@/components/About';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import { readMenuExcel } from '@/lib/readMenuExcel';

export default async function Home() {
  const menuData = await readMenuExcel();

  return (
    <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
      <Header />
      <Hero />
      <Menu menuData={menuData} />
      <Zamowienia />
      <About />
      <Map />
      <Footer />
    </main>
  );
}
