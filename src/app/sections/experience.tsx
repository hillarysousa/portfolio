import ExperienceTabs from "../components/experience-tabs";

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="experience__textarea">
                <h2 className="experience__textarea__title">experiência</h2>
                <p className="experience__textarea__paragraph">mais de 10 anos atuando em desenvolvimento front-end, com ênfase nas tecnologias mais avançadas do mercado em <span className="experience__textarea__paragraph-highlight">JavaScript</span> e <span className="experience__textarea__paragraph-highlight">React</span></p>
                <a className="experience__textarea__button" href="https://media.licdn.com/dms/document/media/C4D2DAQFTHWBCb7fUVg/profile-treasury-document-pdf-analyzed/0/1677440298152?e=1714608000&v=beta&t=LSdn9zx758H4U89McuxTC0w-gFiqoMq0eBF0KeMtLUw" target="_blank">Download CV</a>
            </div>
            <div className="experience__showcase">
                <ExperienceTabs />
            </div>
        </section>
    )
}