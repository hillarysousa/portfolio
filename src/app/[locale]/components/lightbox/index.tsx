"use client";

import {
  useRef,
  useState,
  useImperativeHandle,
  useEffect,
  forwardRef,
} from "react";
import Image from "next/image";
import Close from "../../assets/svg/close.svg";
import "./style.scss";

export type ModalHandle = {
  open: () => void;
  close: () => void;
};

interface LightboxProps {
  children: React.ReactNode;
}

export const Lightbox = forwardRef<ModalHandle, LightboxProps>(
  ({ children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        setIsOpen(true);
      },
      close: () => {
        setIsOpen(false);
      },
    }));

    useEffect(() => {
      if (!isOpen) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };

      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen]);

    return (
      <div className={`${isOpen ? "lightbox lightbox--open" : "lightbox"}`}>
        <span ref={containerRef} className="lightbox__children">
          <span className="lightbox__close" onClick={() => setIsOpen(false)}>
            <Image src={Close} alt="LinkedIn" />
          </span>
          {children}
        </span>
      </div>
    );
  }
);

Lightbox.displayName = "PortfolioCard";

export default Lightbox;
