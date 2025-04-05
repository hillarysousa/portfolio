"use client";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { UAParser } from "my-ua-parser";
import Image from "next/image";
import { useHash } from "@/app/[locale]/hooks";
import Logo from "../../assets/svg/logo.svg";
import "./style.scss";
import LanguageSelectDesktop from "../languageSelectDesktop";
import MenuSwitcher from "./menuSwitcher";
import LanguageSelectMobile from "../languageSelectMobile";

export default function Header() {
  const [hash, setHash] = useHash();
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { t } = useTranslation("t");
  const userAgent = new UAParser();
  const isDeviceMobile = userAgent.getDevice().type === "mobile";

  const handleClick = (anchor: string) => {
    setCurrentSection(anchor);
    return setHash(anchor);
  };

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top > 0 && rect.top < 160) {
        if (currentSection !== window.location.hash) {
          history.replaceState(null, "", `#${section.id}`);
          setCurrentSection(window.location.hash);
        }
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, [currentSection, handleScroll, hash]);

  return (
    <header className="header">
      <div
        className={`header__wrapper ${
          isMenuOpen ? "header__wrapper--open" : ""
        }`}
      >
        <div className="header__wrapper-first">
          <div className="header__logo">
            <Image src={Logo} alt="Hillary Sousa" width={120} />
          </div>
          {isDeviceMobile && (
            <MenuSwitcher
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          )}
        </div>
        <div className="header__wrapper-second">
          <menu className="header__menu">
            <li
              className={
                currentSection === "#home" || currentSection === ""
                  ? "active"
                  : ""
              }
            >
              <a onClick={() => handleClick("#home")}>{t("t:menu:home")}</a>
            </li>
            <li className={currentSection === "#experience" ? "active" : ""}>
              <a onClick={() => handleClick("#experience")}>
                {t("t:menu:experience")}
              </a>
            </li>
            <li className={currentSection === "#contact" ? "active" : ""}>
              <a onClick={() => handleClick("#contact")}>
                {t("t:menu:contact")}
              </a>
            </li>
            <li id="languageMenu">
              {isDeviceMobile ? (
                <LanguageSelectMobile />
              ) : (
                <LanguageSelectDesktop />
              )}
            </li>
          </menu>
        </div>
      </div>
    </header>
  );
}
