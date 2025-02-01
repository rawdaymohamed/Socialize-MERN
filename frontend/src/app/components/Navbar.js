"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`flex w-full items-center bg-white dark:bg-black  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64`}>
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-96 max-w-full px-4">
                        <Link href="/#" className="block w-full py-5 text-slate-300 text-xl font-bold">
                            Socialize MERN
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-blue-500 focus:ring-2 lg:hidden"
                            >
                                <span className={`relative my-[6px] block h-[2px] w-[30px] bg-slate-900 dark:bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-[8px]" : ""}`}></span>
                                <span className={`relative my-[6px] block h-[2px] w-[30px] bg-slate-900 dark:bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`}></span>
                                <span className={`relative my-[6px] block h-[2px] w-[30px] bg-slate-900 dark:bg-white transition-all duration-200 ${open ? "-rotate-45 translate-y-[-8px]" : ""}`}></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-slate-900 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                                    } `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem NavLink="/#">Friends</ListItem>
                                    <ListItem NavLink="/#">Stories</ListItem>

                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <Link
                                href="/#"
                                className="px-7 py-3 text-base font-medium text-dark hover:text-white dark:text-slate-300"
                            >
                                Sign in
                            </Link>

                            <Link
                                href="/#"
                                className="rounded-md bg-blue-500 px-7 py-3 text-base font-medium text-white hover:bg-blue-700"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
    return (
        <li>
            <Link
                href={NavLink}
                className="flex py-2 text-base font-medium text-slate-300 hover:text-dark dark:text-white dark:hover:text-white lg:ml-12 lg:inline-flex"
            >
                {children}
            </Link>
        </li>
    );
};