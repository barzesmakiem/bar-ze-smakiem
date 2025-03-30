'use client';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Nav = ({ containerStyles, linkStyles }) => {
  const [showZamowienia, setShowZamowienia] = useState(false);

  useEffect(() => {
    fetch('/api/oferta')
      .then(res => res.json())
      .then(data => setShowZamowienia(data.show))
      .catch(() => setShowZamowienia(false));
  }, []);

  const links = [
    { path: 'home', name: 'strona główna', offset: -50 },
    { path: 'menu', name: 'menu', offset: -50 },
    showZamowienia && { path: 'zamowienia', name: 'zamówienia', offset: -100 },
    { path: 'about', name: 'o nas', offset: -150 },
    { path: 'contact', name: 'kontakt', offset: -100 },
  ].filter(Boolean); // remove `false` entries if zamowienia is hidden

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          spy={true}
          smooth={true}
          offset={link.offset}
          duration={500}
          className={`${linkStyles}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
