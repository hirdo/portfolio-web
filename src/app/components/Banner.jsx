"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import portfolio from "/public/avatar.png";
import ScrollReveal from "./ScrollReveal";
import GradientText from "./GradientText";

export default function MainPage() {
  const [currentRole, setCurrentRole] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = useMemo(
    () => [
      "Frontend Developer",
      "React Developer",
      "UI/UX Designer",
      "Blogger",
    ],
    []
  );
  useEffect(() => {
    let typingTimeout;
    const typeRole = () => {
      if (!isDeleting && charIndex < roles[index].length) {
        setCurrentRole((prev) => prev + roles[index][charIndex]);
        setCharIndex((prev) => prev + 1);
        typingTimeout = setTimeout(typeRole, 100);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(roles[index].substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        typingTimeout = setTimeout(typeRole, 50);
      } else if (!isDeleting && charIndex === roles[index].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };
    typingTimeout = setTimeout(typeRole, 100);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, index, roles]);

  return (
    <section id="home" className="relative overflow-hidden flex flex-col justify-center items-center text-center px-4 py-24 sm:py-32 md:py-40 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(30,144,255,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255,20,147,0.10) 0%, transparent 50%)',
          }}
        />
      </div>
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-[12%] w-8 h-8 border-2 border-blue-400/20 dark:border-blue-400/10 rotate-12 animate-pulse" />
        <div className="absolute top-1/3 right-[8%] w-10 h-10 border-2 border-pink-400/15 dark:border-pink-400/10 -rotate-6 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-[15%] w-6 h-6 border-2 border-blue-400/15 dark:border-blue-400/10 rotate-45 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-[18%] w-12 h-12 border-2 border-pink-400/10 dark:border-pink-400/5 -rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Profile Image with Gradient Ring */}
        <div className="mb-10 flex justify-center">
          <div className="relative p-2 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl">
            <div className="rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900 p-1.5">
              <Image
                src={portfolio}
                alt="Hirdo Profile Picture"
                width={240}
                height={240}
                priority
                className="rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 text-gray-900 dark:text-white">
            Hirdo
          </h1>
        </ScrollReveal>

        {/* Typing Role */}
        <ScrollReveal delay={100}>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4">
            I am a{' '}
            <GradientText className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              {currentRole}
            </GradientText>
            <span className="text-blue-500 animate-pulse">|</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Passionate about designing and developing digital solutions that
            resonate. Let&apos;s collaborate to create impactful experiences that
            inspire and connect.
          </p>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={300}>
          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: faFacebookF, link: "#", label: "Facebook", bg: "hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white" },
              { icon: faInstagram, link: "#", label: "Instagram", bg: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 dark:hover:bg-gradient-to-tr dark:hover:from-yellow-400 dark:hover:via-red-500 dark:hover:to-purple-600 hover:text-white dark:hover:text-white" },
              { icon: faGithub, link: "https://github.com/hirdo", label: "GitHub", bg: "hover:bg-gray-900 dark:hover:bg-gray-900 hover:text-white dark:hover:text-white" },
              { icon: faLinkedinIn, link: "https://www.linkedin.com/in/hirdo-nguyen/", label: "LinkedIn", bg: "hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white dark:hover:text-white" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target={social.link !== '#' ? "_blank" : undefined}
                rel={social.link !== '#' ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-0.5 ${social.bg}`}
              >
                <FontAwesomeIcon icon={social.icon} className="text-sm" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="https://flowcv.com/resume/4gbv23ihjp9u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full font-semibold text-base sm:text-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              My CV
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
