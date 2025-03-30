'use client';
import { useEffect, useState } from 'react';

const Zamowienia = () => {
  const [data, setData] = useState({ show: false, title: '', subtext: '', oferta: [] });

  useEffect(() => {
    fetch('/api/oferta')
      .then(res => res.json())
      .then(setData)
      .catch(() => setData({ show: false }));
  }, []);

  if (!data.show) return null;

  return (
    <section className="relative pt-0 pb-12 xl:pt-12 xl:pb-24 bg-menu" id="zamowienia">
      <div className="container mx-auto max-w-3xl">
        <div className="max-w-[570px] mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-6">{data.title}</h2>
        </div>
        <div className="mt-12 text-center text-black text-lg leading-relaxed">
          <p>{data.subtext}</p>
        </div>
        <ul className="space-y-4 text-lg text-black mt-8">
          {data.oferta.map(([item, price], i) => (
            <li key={i} className="flex justify-between border-b pb-2">
              <span>{item}</span>
              <span className="font-semibold">{price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Zamowienia;
