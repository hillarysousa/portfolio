import Image, { StaticImageData } from "next/image";

import './style.scss';

interface PortfolioCardProps {
    image: StaticImageData;
    title: string;
    tags?: Record<string, string>;
}

export default function PortfolioCard({ image, title, tags }: PortfolioCardProps) {
    return (
        <div className="portfolioCard">
            <Image className="portfolioCard__image" src={image} alt={title} />
            <h4 className="portfolioCard__title">{title}</h4>
        </div>
    )
}