'use client';

const Map = () => {
  return (
    <section
      id='contact'
      className="relative w-full pt-12 xl:pt-20 mt-8"
    >
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-bold text-black mb-4">Kontakt</h2>
        <p className="text-lg text-black">Przyjaciół Żołnierza 39, 71-670 Szczecin</p>
        <p className="text-lg text-black">Telefon: +48 605 133 945</p>
        <p className="text-lg text-black">Email: salata8621@o2.pl</p>
      </div>
      <div className="w-full h-[500px] xl:h-[900px]">
        <iframe
          title="Bar Ze Smakiem Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.499982062029!2d14.5553675!3d53.4530249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa090058ff19f5%3A0xdbdf06369e249ead!2sBar%20Ze%20Smakiem!5e0!3m2!1spl!2spl!4v1711640250212!5m2!1spl!2spl"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
