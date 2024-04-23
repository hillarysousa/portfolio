import Image from "next/image";
import Behance from "../assets/svg/behance.svg";
import GitHub from "../assets/svg/github.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Mail from "../assets/svg/mail.svg";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact__textarea">
                <h2 className="contact__textarea__title">entre em contato comigo</h2>
                <div className="contact__textarea__socials">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/hillarysousa/" target="_blank">
                            <Image src={LinkedIn} alt="LinkedIn" /> hillarysousa
                        </a></li>
                        <li><a href="https://github.com/hillarysousa" target="_blank">
                            <Image src={GitHub} alt="GitHub" /> hillarysousa
                        </a></li>
                        <li><a href="https://www.behance.net/hillarysousa" target="_blank">
                            <Image src={Behance} alt="Behance" /> hillarysousa
                        </a></li>
                    </ul>
                </div>
                <div className="contact__textarea__mail">
                    <a href="mailto:contato@hillarysousa.com.br" target="_blank">
                        <Image src={Mail} alt="Mail" /> contato@hillarysousa.com.br
                    </a>
                </div>
            </div>
        </section>
    )
}