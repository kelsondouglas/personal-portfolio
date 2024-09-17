import React from "react";
import ThemeButton from "@/components/theme-button";
import Link from "next/link";
import { Button } from "../ui/button";

const NavbarComponent = () => {
  return (
    <nav className="flex justify-between items-center p-4 fixed top-0 container">
      <Link className="text-2xl font-bold" href="/">
        {"< Kelson Douglas />"}
      </Link>

      <div className="flex gap-8 items-center">
        <ul className="flex gap-8 text-lg">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <ThemeButton />
        <Button>Baixar CV</Button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
