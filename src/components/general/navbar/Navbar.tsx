"use client"
import Link from "next/link";
import Logo from "./Logo";
import LinkButton from "../LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

export const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#about", label: "About" },
  { url: "#services", label: "Services" },
  { url: "#resume", label: "Resume" },
  { url: "#projects", label: "Projects" },
  { url: "#skills", label: "Skills" },
  { url: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY >= 90) setNavBackground(true);
      if (window.scrollY < 90) setNavBackground(false);
    }
    window.addEventListener("scroll", navHandler);
    return () => {
      window.removeEventListener("scroll", navHandler);
    };
  }, []);

  return (
    <nav className={`h-16 fixed z-50 w-full transition-all duration-300 ${navBackground ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="flex items-center justify-between w-[90%] mx-auto h-full">
        <Logo />

       
        <ul className="hidden lg:flex space-x-10">
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link
                className="text-gray-200 hover:text-cyan-300 font-medium transition-colors duration-300"
                href={link.url}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        
        <div className="hidden lg:flex items-center gap-4">
          <LinkButton
            href="/document/RatanakDavid CV.pdf"
            text="Download CV"
            download
            icon={LuDownload}
            iconPosition="left"
          />
        </div>

        
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
        >
          {navOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>

        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </nav>
  );
}