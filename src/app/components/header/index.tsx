'use client';
import Image from "next/image";
import { useHash } from "@/app/hooks";
import Logo from "../../assets/images/logo.png";

import './style.scss';
import { useEffect } from "react";

export default function Header() {
  console.log(window.location.hash, 'pathname >>>')
  const [hash, setHash] = useHash();

  const handleClick = (anchor: string) => {
    return setHash(anchor);
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top > 0 && rect.top < 200) {
          if (!hash.length || hash !== window.location.hash) {
            history.replaceState(null, '', `#${section.id}`);
          }
        }
      });
    }
    document.addEventListener('scroll', handleScroll);
  });

  console.log(window.location.hash, 'hash >>>')
  return (
    <header className="header">
      <div className="header__logo">
        <Image src={Logo} alt="Hillary Sousa" />
      </div>
      <menu className="header__menu">
        <li className={window.location.hash === '#home' || window.location.hash === '' ? 'active' : ''}><a onClick={() => handleClick('#home')}>home</a></li>
        <li className={window.location.hash === '#experience' ? 'active' : ''}><a onClick={() => handleClick('#experience')}>experiência</a></li>
        <li className={window.location.hash === '#contact' ? 'active' : ''}><a onClick={() => handleClick('#contact')}>contato</a></li>
      </menu>
    </header>
  )
}