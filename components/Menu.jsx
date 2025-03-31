'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Menu = ({ menuData }) => {
  const [showGallery, setShowGallery] = useState(false);
  if (!menuData?.show) return null;

  return (
    <section className='relative py-12 xl:py-24 bg-menu' id='menu'>
      <div className='container mx-auto'>
        <div className='max-w-[570px] mx-auto text-left'>
          {menuData.subtext?.facebook ? (
            <h2 className='mb-3'>
              Menu dnia {menuData.subtext.date} dostępne jest na naszej stronie na {' '}
              <a
                href="https://www.facebook.com/p/Bar-Ze-Smakiem-61565102367756/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green hover:text-green-hover font-semibold"
              >
                Facebooku
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 ml-2"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 
                    24h11.49v-9.294H9.691V11.01h3.124V8.414c0-3.1 1.893-4.788 4.659-4.788 
                    1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 
                    0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.696h-3.123V24h6.116C23.407 
                    24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </h2>
          ) : (
            <h2 className='mb-3'>{menuData.title}</h2>
          )}

          <button
            onClick={() => setShowGallery(true)}
            className='text-orange mb-16 inline-flex items-center gap-2'
          >
            Zobacz inne nasze dania w galerii
            <IoIosArrowRoundForward className='text-3xl' />
          </button>
        </div>

        <div className='grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4 xl:gap-[10px]'>
          {menuData.oferta.map((item, index) => (
            <div
              key={index}
              className='max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group'
            >
              <div className='overflow-hidden'>
                {item.img ? (
                  <Image
                    src={`${item.img}`}
                    width={270}
                    height={270}
                    alt={item.title}
                    className='group-hover:scale-110 transition-all duration-300'
                  />
                ) : (
                  <div className='w-[220px] h-[320px] bg-gray-100 flex items-center justify-center text-sm text-gray-500 text-center px-2'>
                    Zdjęcie pojawi się wkrótce.
                  </div>
                )}
              </div>
              <div className='pt-[20px] pb-[28px] px-[30px]'>
                <Link href='/'>
                  <h3 className='font-poppins text-black mb-[14px]'>{item.title}</h3>
                </Link>
                <div className='text-xl font-poppins font-semibold text-orange'>
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showGallery && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-3 right-3 text-black text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-center">Galeria</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Image src="/photos/schabowyzjajkiem.jpeg" alt="" width={300} height={200} />
              <Image src="/photos/udkozkurczakazryzem.jpeg" alt="" width={300} height={200} />
              <Image src="/photos/bitkizcebula.jpeg" alt="" width={300} height={200} />
              <Image src="/photos/placekpozbojnicku.jpeg" alt="" width={300} height={200} />
              <Image src="/photos/spaghettibolognese.jpeg" alt="" width={300} height={200} />
              <Image src="/photos/udkozkurczakazmarchewka.jpeg" alt="" width={300} height={200} />
              <Image src="/photos/salatkazjajkiem.jpeg" alt="" width={300} height={200} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
