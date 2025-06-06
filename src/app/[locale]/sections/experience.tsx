"use client";
import Link from "next/link";
import ExperienceTabs from "../components/experience-tabs";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation("t");

  return (
    <section id="experience" className="experience">
      <div className="experience__textarea">
        <h2 className="experience__textarea__title">
          {t("t:experience:title")}
        </h2>
        <p className="experience__textarea__paragraph">
          {t("t:experience:paragraph:text")}
          <span className="experience__textarea__paragraph-highlight">
            {t("t:experience:paragraph:first_highlight")}
          </span>
          {t("t:experience:paragraph:connector")}
          <span className="experience__textarea__paragraph-highlight">
            {t("t:experience:paragraph:second_highlight")}
          </span>
        </p>
        <Link
          className="experience__textarea__button"
          href={`/files/${t("t:experience:file")}`}
          rel="noreferrer"
          download={t("t:experience:file")}
          target="_blank"
        >
          {t("t:experience:cta")}
        </Link>
      </div>
      <div className="experience__showcase">
        <ExperienceTabs />
      </div>
    </section>
  );
}
