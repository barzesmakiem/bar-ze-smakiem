'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0 }}
      className='bg-footer bg-cover bg-no-repeat text-white pt-16'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between xl:flex-row'>
          {/* logo */}
          <div className='w-[300px] mb-8 xl:mb-0'>
            <Image
              src="/logo.png"
              alt="Bar ze Smakiem logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-[120px] md:h-[180px] xl:h-[220px]"
            />
          </div>

          {/* grid items */}
          <div className='flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16'>
            {/* kontakt */}
            <div>
              <h4 className='font-semibold mb-5'>Kontakt</h4>
              <ul className='flex flex-col gap-y-4 text-sm'>
                <li>Przyjaciół Żołnierza 39</li>
                <li>71-670 Szczecin</li>
                <li>
                  <a href="mailto:salata8621@o2.pl" className="hover:underline">
                    salata8621@o2.pl
                  </a>
                </li>
                <li>
                  <a href="tel:+48000000000" className="hover:underline">
                    +48 605 133 045
                  </a>
                </li>
              </ul>
            </div>

            {/* informacje */}
            <div>
              <h4 className='font-semibold mb-5'>Godziny otwarcia</h4>
              <ul className='flex flex-col gap-y-4 text-sm'>
                <li>Pon–Pt: 12:30 – 17:30</li>
                <li>Sobota: Zamknięte</li>
                <li>Niedziela: Zamknięte</li>
              </ul>
            </div>

            {/* socials */}
            <div>
              <h4 className='font-semibold mb-5'>Media społecznościowe</h4>
              <ul className='flex flex-col gap-y-4 text-sm'>
                <li>
                  <a
                    href="https://www.facebook.com/p/Bar-Ze-Smakiem-61565102367756/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* copyright text */}
        <div className='py-4 border-t border-white/10'>
          <p className='text-white/60 text-center text-sm'>
            &copy; {new Date().getFullYear()} Bar Ze Smakiem – Wszelkie prawa zastrzeżone
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
