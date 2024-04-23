import Image from "next/image";
import globe from "../../assets/svg/globe.svg";

import './style.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Image src="https://placehold.co/125" alt="Hillary Sousa" width={125} height={125} />
      </div>
      <menu className="header__menu">
        <li className="active"><a href="#home">home</a></li>
        <li><a href="#portfolio">portfólio</a></li>
        <li><a href="#experience">experiência</a></li>
        <li><a href="#contact">contato</a></li>
        <li><Image src={globe} alt="mude o idioma" className="header__menu__icon" /></li>
      </menu>
    </header>
  )
}