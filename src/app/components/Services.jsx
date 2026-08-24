"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faPlug,
  faRobot,
  faLaptopCode,
  faMobileScreen,
  faShieldHalved,
  faServer,
  faCloudArrowUp
} from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "./ScrollReveal";
import GradientText from "./GradientText";

const servicesData = [
  {
    icon: faLaptopCode,
    title: "Web Development",
    description:
      "Professional web development services, creating responsive and visually appealing websites tailored to your business needs.",
  },
  {
    icon: faMobileScreen,
    title: "Mobile Development",
    description:
      "Custom mobile applications for iOS and Android, providing seamless user experiences across all devices.",
  },
  {
    icon: faShieldHalved,
    title: "Security & Maintenance",
    description:
      "Integrated login management like SSO, MFA to ensure security and regular maintenance to keep your website safe and performing at its best.",
  },
  {
    icon: faCloudArrowUp,
    title: "Cloud & DevOps Deployment",
    description:
      "Setting up automated CI/CD pipelines, cloud environments, and hosting configurations to ensure seamless, reliable, and fast software releases.",
  },
  {
    icon: faRobot,
    title: "AI & Automation Integration",
    description:
      "Integrating smart AI capabilities and automation technologies to streamline processes and enhance user experience.",
  },
  {
    icon: faServer,
    title: "Backend & Database Architecture",
    description:
      "Designing scalable backend systems, secure database schemas, and serverless architectures to power complex application logic efficiently.",
  },
  {
    icon: faPalette,
    title: "App Design",
    description:
      "Visually engaging and responsive app designs that align with your brand, providing a user-friendly experience.",
  },
  {
    icon: faPlug,
    title: "API Integration",
    description:
      "Integrating APIs to enhance functionality and connect with external services using clean and efficient code.",
  },
];

const INITIAL_COUNT = 6;

const Services = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="services" className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              My <GradientText className="text-4xl sm:text-5xl font-bold">Services</GradientText>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Professional solutions tailored to your business needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, INITIAL_COUNT).map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 80}>
              <div className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-blue-500 dark:text-blue-400 text-2xl"
                    aria-label={`${service.title} Icon`}
                  />
                </div>
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
          {expanded && servicesData.slice(INITIAL_COUNT).map((service, index) => (
            <ScrollReveal key={`expanded-${service.title}`} delay={index * 80}>
              <div className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-blue-500 dark:text-blue-400 text-2xl"
                    aria-label={`${service.title} Icon`}
                  />
                </div>
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {servicesData.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
            >
              {expanded ? "Show less" : "View more services"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default Services;
