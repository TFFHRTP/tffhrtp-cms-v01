"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PageWithSlugAndTitle } from "../lib/types";
import { BlogInfo } from "../lib/types";
const wordpressUrl = process.env.WORDPRESS_URL;

export const NavBar = ({
    pages,
    blogInfo,
}: {
    blogInfo: BlogInfo;
    pages: PageWithSlugAndTitle[];
    // This prop is no longer used
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Define your static menu items here
    const menuItems = [
        { href: "/about", text: "About" },
        { href: "https://docs.fhrp.org", text: "Docs Site" },
        { href: "/donate", text: "Donate" },
        { href: "/contribute", text: "Contribute" },
        { href: "volunteer", text: "Volunteer" },
        { href: "/team", text: "Team" },
        { href: "/blog", text: "Blog" },
        { href: "/contact", text: "Contact" },
        { href: "/privacy-policy", text: "Privacy Policy" },
    ];

    return (
        <nav className="bg-indigo-950 overflow-hidden max-h-screen fixed w-full">
            <header className="container mx-auto flex justify-between align-center max-w-6xl p-4">
                <Link href="/">
                    <h1 className="text-2xl text-white font-semibold">{blogInfo.name}</h1>
                </Link>
                <div className="md:hidden flex">
                    <button
                        onClick={toggleNavbar}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"

                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"

                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </header>
            <div
                className={`${isOpen ? "block" : "hidden"
                    } h-screen fixed p-4 bg-slate-700 w-full border-t border-slate-200`}
            >
                <div className="flex flex-col h-full">

                    {menuItems.map((item, index) => (
                        <div className="p-2" key={index}>
                            <a href={item.href} className="text-white text-md">
                                {item.text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}