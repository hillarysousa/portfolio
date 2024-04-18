import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://placehold.co/125" alt="Hillary Sousa" width={125} height={125} />
      </div>
      <menu className="header__menu">
        <li className="active">home</li>
        <li>portfólio</li>
        <li>experiência</li>
        <li>contato</li>
        <li>lang</li>
      </menu>
    </header>
  )
}