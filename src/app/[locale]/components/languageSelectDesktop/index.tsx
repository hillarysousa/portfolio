"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import Globe from "../../assets/svg/globe.svg";

export default function LanguageSelectDesktop() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [langSelected, setLangSelected] = useState(currentLocale);
  const router = useRouter();
  const currentPathname = usePathname();

  const handleClick = (lang: string) => {
    const newLocale = lang;
    setLangSelected(lang);

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <>
      <Image src={Globe} alt="globe" className="languageSelector_icon" />

      <ul className="languageSelector" id="languageSelector">
        <li
          onClick={() => handleClick("pt")}
          className={langSelected === "pt" ? "active" : ""}
        >
          PT-BR
        </li>
        <li
          onClick={() => handleClick("en")}
          className={langSelected === "en" ? "active" : ""}
        >
          EN-US
        </li>
      </ul>
    </>
  );
}
