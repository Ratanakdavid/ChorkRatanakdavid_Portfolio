"use client"
import Link from "next/link";
import Logo from "./Logo";
import LinkButton from "../LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";


export const navLinks = [
    {url:"#home",label:"Home"},
    {url:"#services",label:"Services"},
    {url:"#resume",label:"Resume"},
    {url:"#project",label:"Projects"},  
    {url:"#skills",label:"Skills"},  
    {url:"#testimonials",label:"Testimonials"},  
    {url:"#contact",label:"Contact"},  

]

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const [navBackground, setNavBackground] = useState(false);
    
    useEffect(() => {
        const navHandler = () => {
            if(window.scrollY >= 90) setNavBackground(true);
            if(window.scrollY < 90) setNavBackground(false);
        }

        window.addEventListener("scroll", navHandler);
        return () => {
            window.removeEventListener("scroll", navHandler);
        };
    }, []);

    return (
        <nav className={`h-18 fixed z-50 w-full transition-all duration-300 ${navBackground ? "bg-slate-900 shadow" : ""}`}>
            <div className="flex items-center justify-between w-[90%] mx-auto">
                <Logo />

                <ul className="hidden lg:flex space-x-10">
                    {navLinks.map((link) => {
                        return (
                            <li key={link.url}>
                                <Link
                                    className="text-gray-200 hover:text-cyan-300 font-medium transition-colors duration-300"
                                    href={link.url}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-4">
                    <LinkButton
                        href="/document/David CV.pdf"
                        text="Download CV"
                        download
                        icon={LuDownload}
                        iconPosition="left"
                    />
                </div>

                <button
                    className="w-8 h-8 cursor-pointer text-white z-100 lg:hidden"
                    onClick={() => setNavOpen(!navOpen)}
            
                >
                    {navOpen ? <LuX size={30}/> : <LuMenu size={30}/>}
                </button>

                <MobileNav navOpen={navOpen} />
            </div>
        </nav>
    );
}
