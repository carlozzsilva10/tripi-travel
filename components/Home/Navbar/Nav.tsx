"use client";

import React, { useEffect, useState } from "react";
import { TbAirBalloon } from "react-icons/tb";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            }

            if (window.scrollY < 90) {
                setNavBg(false);
            }
        }
        window.addEventListener("scroll", handler);
        return () => {
            window.removeEventListener("scroll", handler);
        }
    }, []);

    return (
        <div className = {`${ navBg ? "bg-blue-950 shadow-md" : "fixed" } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
            <div className = "flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
                {/* Logo */}
                <div className = "flex items-center space-x-2">
                    <div className = "w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
                        <TbAirBalloon className = "w-6 h-6 text-white" />
                    </div>
                    <h1 className = "text-xl md:text-2xl text-white uppercase font-bold">
                        Tripi
                    </h1>
                </div>
                {/* NavLinks */}
                <div className = "hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => {
                        return (
                            <Link key = {link.id} href = {link.url} className = "group">
                                <p className = "relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 group-hover:after:scale-x-100 after:transition duration-300 after:origin-right">
                                    {link.label}
                                </p>
                            </Link>
                        )
                    })}
                </div>
                {/* Buttons */}
                <div className = "flex items-center space-x-4">
                    <button className = "md:px-12 md:py-2.5 px-5 py-1.5 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                        Reservar ahora
                    </button>
                    {/* Burger menu */}
                    <HiBars3BottomRight className = "w-8 h-8 text-white lg:hidden cursor-pointer" onClick = {openNav} />
                </div>
            </div>
        </div>
    )
}

export default Nav;