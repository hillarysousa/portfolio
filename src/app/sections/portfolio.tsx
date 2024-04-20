import PortfolioCard from "../components/portfolio-card";
import Placeholder from '../assets/images/placeholder.png';

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio__textarea">
                <h2 className="portfolio__textarea__title">portfólio</h2>
                <p className="portfolio__textarea__paragraph">alguns dos meus projetos<br />mais recentes</p>
            </div>
            <div className="portfolio__showcase">
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
                <PortfolioCard image={Placeholder} title="Nome do Projeto" />
            </div>
        </section>
    )
}