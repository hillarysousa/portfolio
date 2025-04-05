"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import Globe from "../../assets/svg/globe.svg";

enum availableLanguages {
  PT = "pt",
  EN = "en",
}

export default function LanguageSelectMobile() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [langSelected, setLangSelected] = useState(currentLocale);
  const router = useRouter();
  const currentPathname = usePathname();

  const handleClick = (lang: availableLanguages) => {
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
    <a
      onClick={() =>
        handleClick(
          langSelected === availableLanguages.EN
            ? availableLanguages.PT
            : availableLanguages.EN
        )
      }
      className="languageSelector"
    >
      <Image
        src={Globe}
        alt="globe"
        className="languageSelector_icon"
        width={24}
      />
      {langSelected === "pt" ? "PT-BR" : "EN-US"}
    </a>
  );
}
