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
import portfolio from "/public/portfolio-image.webp";

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
    <section id="home" className="main_page py-8 lg:py-16 relative overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="animated-squares absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`square square-${i + 1}`}></div>
        ))}
      </div>
      <div className="px-4 lg:px-8 py-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="mt-5 text-center md:text-left">
            <h3 className="text-2xl font-medium">Hello, I am</h3>
            <h1 className="text-4xl lg:text-6xl">Hirdo</h1>
            <h3 className="text-xl lg:text-2xl mt-2">
              I am a{" "}
              <span
                className="text-gradient text-3xl font-semibold"
                style={{
                  backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {currentRole}
              </span>
            </h3>
            <p className="mt-4 text-lg text-justify mx-2 lg:mx-0">
              Passionate about designing and developing digital solutions that
              resonate. Lets collaborate to create impactful experiences that
              inspire and connect.
            </p>
            <div className="social_links flex justify-center md:justify-start mt-4 space-x-6">
              {[
                {
                  icon: faFacebookF,
                  link: "",
                },
                {
                  icon: faInstagram,
                  link: "",
                },
                { icon: faGithub, link: "https://github.com/hirdo" },
                {
                  icon: faLinkedinIn,
                  link: "https://www.linkedin.com/in/hirdo-nguyen/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.icon.iconName}
                  className="border-1 rounded-full p-3 transition-transform transform hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-500 hover:text-white"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center relative mt-10 mx-4 md:mt-0">
            <Image
              src={portfolio}
              alt="Hirdo Profile Picture"
              width={340}
              height={340}
              priority
              className="rounded-full profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
