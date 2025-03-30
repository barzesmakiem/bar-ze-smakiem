'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section
      className='bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0'
      id='home'
    >
      <div className='container mx-auto'>
        {/* text & img */}
        <div className='flex items-center xl:h-[960px]'>
          {/* text */}
          <div className='w-full xl:max-w-[460px] text-center xl:text-left'>
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }}
              className='text-white mb-7'
            >
              Bar Ze Smakiem
            </motion.h1>

            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }}
            >
              <p className='text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0'>
                Przepyszne obiady domowe.
              </p>

              <Button
                onClick={() => {
                  const el = document.getElementById('menu');
                  if (el) {
                    const yOffset = -100; // Adjust this value to control how much above the element to scroll
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="w-full max-w-[300px] px-10 py-5 text-xl mx-auto xl:mx-0 mb-8 bg-orange hover:bg-orange-hover text-white"
              >
                Dzisiejsze menu
              </Button>

              
              <p className='text-white mb-1 max-w-lg mx-auto xl:max-w-none xl:mx-0'>
                <strong>Godziny otwarcia:</strong>
              </p>

              <ul className='text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0 list-disc list-inside'>
                <li>Poniedziałek – Piątek: 12:30 – 17:30</li>
                <li>Sobota: Zamknięte</li>
                <li>Niedziela: Zamknięte</li>
              </ul>

              <p className='text-white mb-2 max-w-lg mx-auto xl:max-w-none xl:mx-0'>
                <a
                  href="https://www.google.com/maps?q=Przyjaciół+Żołnierza+39,+Szczecin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white"
                >
                  Przyjaciół Żołnierza 39, 71-670 Szczecin
                </a>
              </p>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='hidden xl:flex xl:absolute xl:top-[200px] xl:right-0'
          >
            <Image src='/hero/plate.png' width={756} height={682} alt='' />
          </motion.div>
        </div>
      </div>

      {/* coffee img */}
      <motion.div
        variants={fadeIn('up', 1.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
        className='hidden xl:flex xl:relative xl:-top-36'
      >
        <Image src='/bar-ze-smakiem/hero/kompot.png' width={386} height={404} alt='' />
      </motion.div>
    </section>
  );
};

export default Hero;
