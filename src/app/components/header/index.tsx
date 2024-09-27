'use client';
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useHash } from "@/app/hooks";
import Logo from "../../assets/svg/logo.svg";
import './style.scss';

export default function Header() {
  const [hash, setHash] = useHash();
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleClick = (anchor: string) => {
    setCurrentSection(anchor);
    return setHash(anchor);
  }

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top > 0 && rect.top < 160) {
        if (currentSection !== window.location.hash) {
          history.replaceState(null, '', `#${section.id}`);
          setCurrentSection(window.location.hash);
        }
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
  }, [currentSection, handleScroll, hash]);


  return (
    <header className="header">
      <div className="header__logo">
        <Image src={Logo} alt="Hillary Sousa" width={120} />
      </div>
      <menu className="header__menu">
        <li className={currentSection === '#home' || currentSection === '' ? 'active' : ''}><a onClick={() => handleClick('#home')}>home</a></li>
        <li className={currentSection === '#experience' ? 'active' : ''}><a onClick={() => handleClick('#experience')}>experiência</a></li>
        <li className={currentSection === '#contact' ? 'active' : ''}><a onClick={() => handleClick('#contact')}>contato</a></li>
      </menu>
    </header>
  )
}