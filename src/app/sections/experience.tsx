import Link from "next/link";
import ExperienceTabs from "../components/experience-tabs";

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="experience__textarea">
                <h2 className="experience__textarea__title">experiência</h2>
                <p className="experience__textarea__paragraph">mais de 7 anos atuando em desenvolvimento front-end, com ênfase nas tecnologias mais avançadas do mercado em <span className="experience__textarea__paragraph-highlight">JavaScript</span> e <span className="experience__textarea__paragraph-highlight">React</span></p>
                <Link className="experience__textarea__button" href="/files/Curriculo_HillarySousa.pdf" rel="noreferrer" download="Curriculo_HillarySousa.pdf" target="_blank">Download CV</Link>
            </div>
            <div className="experience__showcase">
                <ExperienceTabs />
            </div>
        </section>
    )
}