'use client';
import Image from 'next/image';

const About = () => {
  return (
    <section
      className='mt-12 grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center'
      id='about'
    >
      {/* text */}
      <div className='xl:pl-[135px]'>
      <h2 className='text-3xl font-bold text-black mb-9'>O Nas</h2>
        <p className='mb-8'>
          Bar ze Smakiem to miejsce, gdzie dobre jedzenie spotyka się z przystępną ceną.
          Gotujemy domowo, prosto i z sercem – tak, jak lubimy najbardziej.
        </p>
        <p className='mb-10'>
          <span className='inline-block mt-4'>
            Bądź na bieżąco z naszym menu — obserwuj nas na{' '}
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
            </a>{' '}
            i wpadnij, gdy tylko zgłodniejesz.
          </span>
        </p>
      </div>

      {/* img */}
      <div>
        <Image
          src='/bar-ze-smakiem/map/barzoom.png'
          width={705}
          height={771}
          alt=''
          className='hidden xl:flex'
        />
      </div>
    </section>
  );
};

export default About;
