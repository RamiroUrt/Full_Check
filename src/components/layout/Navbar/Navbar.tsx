"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import routes from "@/lib/routes";
import Logo from "../../../assets/img/LogoCom.png";
import BurgerCheck from "@/components/ui/burger-check/BurgerCheck";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* NAV DESKTOP */}
      <nav className="nav-desktop">
        <div className="logo">
          <Link href={routes.home}>
            <Image src={Logo} alt="Logo" className="logo-image" />
          </Link>
        </div>

        <ul>
          <li>
            <Link href={routes.home}>
              <span className="nav-btn">Inicio</span>
            </Link>
          </li>
          <li>
            <Link href={routes.tienda}>
              <span className="nav-btn">Tienda</span>
            </Link>
          </li>
          <li>
            <Link href={routes.usados}>
              <span className="nav-btn">Nuestros Usados</span>
            </Link>
          </li>
          <li>
            <Link href={routes.sucursales}>
              <span className="nav-btn">Sucursales</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* NAV MOBILE */}
      <nav className="nav-mobile">
        <div className="left-burger" onClick={toggleMenu}>
          <BurgerCheck open={open} />
        </div>

        <div className="center-logo">
          <Link href={routes.home}>
            <Image src={Logo} alt="Logo" className="logo-image" />
          </Link>
        </div>

        {/* MENU SLIDE */}
        <div className={`mobile-menu ${open ? "open" : ""}`}>
          <ul>
            <li onClick={toggleMenu}>
              <Link href={routes.home}>Inicio</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href={routes.tienda}>Tienda</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href={routes.usados}>Nuestros Usados</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href={routes.sucursales}>Sucursales</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
