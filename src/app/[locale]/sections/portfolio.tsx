"use client";

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Lightbox, { ModalHandle } from "../components/lightbox";
import PortfolioCard from "../components/portfolio-card";
import ListaAmiga from "../assets/img/listaamiga.png";

export default function Portfolio() {
  const modalRef = useRef<ModalHandle>(null);
  const { t } = useTranslation("t");

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__textarea">
        <h2 className="portfolio__textarea__title">{t("t:portfolio:title")}</h2>
        <p className="portfolio__textarea__paragraph">
          {t("t:portfolio:paragraph")}
        </p>
      </div>
      <div className="portfolio__showcase">
        <Lightbox ref={modalRef}>
          <PortfolioCard
            image={ListaAmiga}
            translationKey="lista-amiga"
            onClick={() => modalRef.current?.open()}
          />
        </Lightbox>
      </div>
    </section>
  );
}
