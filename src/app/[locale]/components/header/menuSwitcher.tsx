import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Menu from "../../assets/svg/menu.svg";
import Close from "../../assets/svg/close.svg";

interface MenuSwitcherProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MenuSwitcher({
  isMenuOpen,
  setIsMenuOpen,
}: MenuSwitcherProps) {
  return (
    <button
      className="header__menuButton"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {!isMenuOpen ? (
        <Image
          src={Menu}
          alt="Open menu"
          width={24}
          className="header__menuIcon--open"
        />
      ) : (
        <Image
          src={Close}
          alt="Close menu"
          width={20}
          className="header__menuIcon--close"
        />
      )}
    </button>
  );
}
