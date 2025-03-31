'use client';
import { Link } from 'react-scroll';

const Nav = ({ containerStyles, linkStyles, showZamowienia }) => {
  const links = [
    { path: 'home', name: 'strona główna', offset: -50 },
    { path: 'menu', name: 'menu', offset: -50 },
    showZamowienia && { path: 'zamowienia', name: 'zamówienia', offset: -100 },
    { path: 'about', name: 'o nas', offset: -150 },
    { path: 'contact', name: 'kontakt', offset: -100 },
  ].filter(Boolean); // filter out false if zamówienia shouldn't show

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
          className={`${linkStyles} cursor-pointer hover:text-orange transition-colors`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
