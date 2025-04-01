import Image from "next/image";
import initTranslations from "@/app/i18n";
import Behance from "../assets/svg/behance.svg";
import GitHub from "../assets/svg/github.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Mail from "../assets/svg/mail.svg";

export default async function Contact({ params: { locale } }: { params: { locale: string } }) {

    const { t } = await initTranslations(locale, ['t']);

    const currentDate = new Date;

    const currentYear = currentDate.getFullYear();

    return (
        <section id="contact" className="contact">
            <div className="contact__textarea">
                <h2 className="contact__textarea__title">{t("t:contact:title")}</h2>
                <ul className="contact__textarea__socials">
                    <li><a href="https://www.linkedin.com/in/hillarysousa/" target="_blank" className="contact__textarea__socials__link">
                        <Image src={LinkedIn} alt="LinkedIn" className="contact__textarea__socials__link__icon" /> hillarysousa
                    </a></li>
                    <li><a href="https://github.com/hillarysousa" target="_blank" className="contact__textarea__socials__link">
                        <Image src={GitHub} alt="GitHub" className="contact__textarea__socials__link__icon" /> hillarysousa
                    </a></li>
                    <li><a href="https://www.behance.net/hillarysousa" target="_blank" className="contact__textarea__socials__link">
                        <Image src={Behance} alt="Behance" className="contact__textarea__socials__link__icon" /> hillarysousa
                    </a></li>
                </ul>
                <div className="contact__textarea__mail">
                    <a href="mailto:contato@hillarysousa.com.br" target="_blank" className="contact__textarea__mail__link">
                        <Image src={Mail} alt="Mail" className="contact__textarea__mail__link__icon" /> contato@hillarysousa.com.br
                    </a>
                </div>
            </div>
            <div className="contact__footer">
                <p>{t("t:contact:footer")}{currentYear}</p>
            </div>
        </section>
    )
}