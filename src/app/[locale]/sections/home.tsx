import Image from "next/image";
import Behance from "../assets/svg/behance.svg";
import GitHub from "../assets/svg/github.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import DoubleArrow from "../assets/svg/down_double_arrow.svg";
import initTranslations from "@/app/i18n";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["t"]);

  return (
    <section id="home" className="home">
      <h1 className="home__title">
        {t("t:home:header:greeting")}
        <br />
        {t("t:home:header:identification")}
        <span className="home__title-highlight">{t("t:home:header:name")}</span>
      </h1>
      <div className="home__intro">
        <span className="home__intro-highlight">
          {t("t:home:paragraph:highlight")}
        </span>
        {t("t:home:paragraph:text")}
      </div>
      <div className="home__footer">
        <div className="home__footer__socials">
          <a href="https://www.linkedin.com/in/hillarysousa/" target="_blank">
            <Image src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://github.com/hillarysousa" target="_blank">
            <Image src={GitHub} alt="GitHub" />
          </a>
          <a href="https://www.behance.net/hillarysousa" target="_blank">
            <Image src={Behance} alt="Behance" />
          </a>
        </div>
        <div className="home__footer__scroll">
          <a href="#experience">
            <Image src={DoubleArrow} alt="Scroll" />
          </a>
        </div>
      </div>
    </section>
  );
}
