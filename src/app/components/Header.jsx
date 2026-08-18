"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ModeToggle } from "./theme-btn";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="header_wrapper px-4 lg:px-12 z-20 py-4 bg-white lg:bg-background/50 border-b sticky top-0 dark:bg-gray-900/90 lg:backdrop-blur">
      <nav className="w-full">
        <div className="flex justify-between items-center ">
          {/* Brand Name */}
          <Link href="/">
            <div className="text-3xl uppercase font-bold text-primary dark:text-white">
              Hirdo
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              size="xl"
              className="text-primary dark:text-white"
            />
          </button>

          {/* Desktop Navbar */}
          <ul className="hidden lg:flex flex-row space-x-6">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`text-lg pb-2 border-b-2 ${
                    pathname === link.href || (pathname === "/" && link.href === "/")
                      ? "border-primary text-primary dark:text-white"
                      : "border-transparent hover:border-primary dark:hover:border-white"
                  } transition duration-300`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex gap-4">
            <a
              href="/Resume.pdf"
              className="text-base font-semibold py-1 px-3 border-2 bg-transparent border-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-pink-600 transition-all duration-300"
              download
            >
              Download CV
            </a>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navbar */}
        {isOpen && (
          <div className="fixed inset-0 bg-white dark:bg-gray-900 dark:bg-opacity-90 flex flex-col justify-start items-center pt-16 z-50">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-primary dark:text-white"
              onClick={toggleNavbar}
            >
              <FontAwesomeIcon icon={faTimes} size="xl" />
            </button>

            {/* Logo */}
            <div className="text-3xl uppercase font-bold text-primary dark:text-white mb-6">
              Hirdo
            </div>

            {/* Links */}
            <ul className="flex flex-col space-y-6 text-center">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`text-lg font-medium ${
                      pathname === link.href || (pathname === "/" && link.href === "/")
                        ? "text-primary dark:text-white"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                    }`}
                    onClick={toggleNavbar}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Resume.pdf"
                  className="text-base font-semibold py-2 px-4 rounded-lg border-2 bg-transparent border-gradient bg-gradient-to-r from-blue-700 to-pink-700 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:to-pink-700 hover:text-white transition-all duration-300 ease-in-out"
                  download
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
