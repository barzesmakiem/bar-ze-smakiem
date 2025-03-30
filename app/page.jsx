import fs from 'fs';
import path from 'path';

import { readMenuExcel } from '@/lib/readMenuExcel';
import { readOfertaExcel } from '@/lib/readExcel'; 

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Zamowienia from '@/components/Zamowienia';
import About from '@/components/About';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default async function Home() {
  const menuData = await readMenuExcel();

  const ofertaPath = path.join(process.cwd(), 'public', 'oferta.xlsx');
  const buffer = fs.readFileSync(ofertaPath);
  const ofertaData = readOfertaExcel(buffer);

  return (
    <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
      <Header showZamowienia={ofertaData.show} />
      <Hero />
      <Menu menuData={menuData} />
      <Zamowienia data={ofertaData} />
      <About />
      <Map />
      <Footer />
    </main>
  );
}

