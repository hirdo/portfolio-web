"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-6 lg:px-12 border-t-2 bg-slate-100 dark:bg-gray-800">
      {/* NavLinks Section */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-6 sm:text-xl text-gray-800 dark:text-white">
          Quick links
        </h2>
        <nav className="flex flex-col space-y-6">
          <Link href="/disclaimer" className="font-medium transition duration-300 hover:underline text-gray-700 dark:text-gray-300">
            Disclaimer
          </Link>
          <Link href="/privacypolicy" className="font-medium transition duration-300 hover:underline text-gray-700 dark:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/about" className="font-medium transition duration-300 hover:underline text-gray-700 dark:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="font-medium transition duration-300 hover:underline text-gray-700 dark:text-gray-300">
            Contact
          </Link>
        </nav>
      </div>

      {/* Accounts Section */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-6 sm:text-xl text-gray-800 dark:text-white">
          Chat me!
        </h2>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-800 dark:text-white" />
          <p className="text-base text-gray-700 dark:text-gray-300">+84 943469258</p>
        </div>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-800 dark:text-white" />
          <p className="text-base text-gray-700 dark:text-gray-300">huynhtien9258@gmail.com</p>
        </div>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faAddressCard} className="mr-2 text-gray-800 dark:text-white" />
          <p className="text-base text-gray-700 dark:text-gray-300">Ho Chi Minh City, Viet Nam</p>
        </div>
      </div>

      {/* Follow Me / Social Section */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-6 sm:text-xl text-gray-800 dark:text-white">
          Follow me
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Stay connected and follow my latest work and updates on social media.
        </p>
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/huynhtien..."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
          </a>
          <a
            href="https://github.com/hirdo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-900 dark:hover:bg-gray-900 hover:text-white dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 dark:hover:bg-gradient-to-tr dark:hover:from-yellow-400 dark:hover:via-red-500 dark:hover:to-purple-600 hover:text-white dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-lg" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
