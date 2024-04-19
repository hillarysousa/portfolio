import Image from "next/image";
import Behance from "../assets/svg/behance.svg";
import GitHub from "../assets/svg/github.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import DoubleArrow from "../assets/svg/down_double_arrow.svg";

export default function Home() {
    return (
        <section id="home" className="home">
            <h1 className="home__title">olá!<br />sou a <span className="home__title-highlight">Hillary</span></h1>
            <div className="home__intro"><span className="home__intro-highlight">desenvolvedora front-end</span> apaixonada por criar experiências cativantes e funcionais, combinando habilidades técnicas com criatividade e inovação</div>
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
                    <a href="#portfolio">
                        <Image src={DoubleArrow} alt="Scroll" />
                    </a>
                </div>
            </div>
        </section>
    )
}