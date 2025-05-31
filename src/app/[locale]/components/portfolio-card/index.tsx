import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";

import "./style.scss";

interface PortfolioCardProps {
  image: StaticImageData;
  translationKey: string;
  onClick: () => void;
}

export default function PortfolioCard({
  image,
  translationKey,
  onClick,
}: PortfolioCardProps) {
  const { t } = useTranslation("t");

  const renderGithubLinks = () => {
    const linksArray = t(`t:portfolio:items:${translationKey}:github:links`, {
      returnObjects: true,
    }) as unknown as [];

    return linksArray.map((link: { url: string; text: string }, index) => (
      <li key={index}>
        {link.text}
        <a key={index} href={link.url} target="__blank">
          {link.url}
        </a>
      </li>
    ));
  };

  return (
    <div className="portfolioCard" onClick={onClick}>
      <Image
        className="portfolioCard__image"
        src={image}
        alt={t(`t:portfolio:items:${translationKey}:title`)}
      />
      <div className="portfolioCard__content">
        <h4 className="portfolioCard__title">
          {t(`t:portfolio:items:${translationKey}:title`)}
        </h4>
        <p className="portfolioCard__text">
          {t(`t:portfolio:items:${translationKey}:text`)}
        </p>
        <p className="portfolioCard__link">
          {t(`t:portfolio:items:${translationKey}:link:text`)}
          <a href={t(`t:portfolio:items:${translationKey}:link:url`)}>
            {t(`t:portfolio:items:${translationKey}:link:url`)}
          </a>
        </p>
        {t(`t:portfolio:items:${translationKey}:github:title`).length > 0 && (
          <div className="portfolioCard__github">
            {t(`t:portfolio:items:${translationKey}:github:title`)}
            <br />
            <ul>{renderGithubLinks()}</ul>
          </div>
        )}
      </div>
    </div>
  );
}
