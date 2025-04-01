'use client';
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { UAParser } from "my-ua-parser";
import Image from "next/image";
import { useHash } from "@/app/[locale]/hooks";
import Logo from "../../assets/svg/logo.svg";
import Menu from "../../assets/svg/menu.svg";
import './style.scss';
import LanguageSelectDesktop from "../languageSelectDesktop";

export default function Header() {
  const [hash, setHash] = useHash();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const { t } = useTranslation('t');
  const userAgent = new UAParser();
  const isDeviceMobile = userAgent.getDevice().type === 'mobile';

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

  // TODO:
  // - Ajustar grid p/ mobile e desktop (header__wrapper-first c 4 colunas no desk e 100% no mobile + header__wrapper-second c 8 colunas no desk e 100% no mobile)
  // - Criar icone de fechar menu
  // - Criar componente de idioma p/ mobile
  // - Criar a logica de abrir/fechar menu


  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper-first">
          <div className="header__logo">
            <Image src={Logo} alt="Hillary Sousa" width={120} />
          </div>
          {isDeviceMobile && <Image src={Menu} alt="Menu" width={24} className="header__menuIcon" />}
        </div>
        <div className="header__wrapper-second">
          <menu className="header__menu">
            <li className={currentSection === '#home' || currentSection === '' ? 'active' : ''}><a onClick={() => handleClick('#home')}>{t("t:menu:home")}</a></li>
            <li className={currentSection === '#experience' ? 'active' : ''}><a onClick={() => handleClick('#experience')}>{t("t:menu:experience")}</a></li>
            <li className={currentSection === '#contact' ? 'active' : ''}><a onClick={() => handleClick('#contact')}>{t("t:menu:contact")}</a></li>
            {!isDeviceMobile && <li id="languageMenu"><LanguageSelectDesktop /></li>}
          </menu>
        </div>
      </div>
    </header>
  )
}