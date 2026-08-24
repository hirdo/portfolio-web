"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3,
    faJs,
    faReact,
    faNode,
    faAngular,
    faPhp,
    faPython,
} from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from "./ScrollReveal";
import GradientText from "./GradientText";

const data = [
    { title: "HTML", icon: faHtml5, col: "text-orange-500", desc: "Structure & semantics" },
    { title: "CSS", icon: faCss3, col: "text-blue-400", desc: "Styling & animations" },
    { title: "JavaScript", icon: faJs, col: "text-yellow-300", desc: "Interactivity" },
    { title: "React", icon: faReact, col: "text-cyan-400", desc: "UI components" },
    { title: "Node.js", icon: faNode, col: "text-green-400", desc: "Server-side JS" },
    { title: "Angular", icon: faAngular, col: "text-red-500", desc: "Framework" },
    { title: "PHP", icon: faPhp, col: "text-purple-500", desc: "Server-side scripting" },
    { title: "Python", icon: faPython, col: "text-blue-400", desc: "Scripting & data" },
];

const INITIAL_COUNT = 4;

export default function Skills() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="skills" className="py-16 lg:py-20 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                            My <GradientText className="text-4xl sm:text-5xl font-bold">Skills</GradientText>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                            Technologies and tools I use daily to build amazing products.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {data.slice(0, INITIAL_COUNT).map((item, index) => (
                        <ScrollReveal key={item.title} delay={index * 60}>
                            {/* 1. Wrapper ngoài: Tạo nền gradient, p-[2px] để làm độ dày viền, bọc các hiệu ứng hover/shadow */}
                            <div className="group h-full p-[1.2px] rounded-2xl bg-gradient-to-r from-[#1E90FF] to-[#FF1493] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                                {/* 2. Thẻ Card bên trong: Nền trắng/dark, bo góc nhỏ hơn một chút (rounded-[14px]) để khớp với viền ngoài */}
                                <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-[16px] p-6 h-full w-full">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-700/50 mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <FontAwesomeIcon
                                            icon={item.icon}
                                            className={`text-3xl ${item.col}`}
                                        />
                                    </div>
                                    <h2 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1">{item.title}</h2>
                                    <p className="text-gray-500 dark:text-gray-500 text-xs">{item.desc}</p>
                                </div>

                            </div>
                        </ScrollReveal>
                    ))}

                    {expanded && data.slice(INITIAL_COUNT).map((item, index) => (
                        <ScrollReveal key={`expanded-${item.title}`} delay={index * 60}>
                            {/* 1. Wrapper ngoài: Tạo nền gradient, p-[2px] để làm độ dày viền */}
                            <div className="group h-full p-[2px] rounded-2xl bg-gradient-to-r from-[#1E90FF] to-[#FF1493] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                                {/* 2. Thẻ Card bên trong */}
                                <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-[14px] p-6 h-full w-full">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-700/50 mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <FontAwesomeIcon
                                            icon={item.icon}
                                            className={`text-3xl ${item.col}`}
                                        />
                                    </div>
                                    <h2 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1">{item.title}</h2>
                                    <p className="text-gray-500 dark:text-gray-500 text-xs">{item.desc}</p>
                                </div>

                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {data.length > INITIAL_COUNT && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
                        >
                            {expanded ? "Show less" : "View more skills"}
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
}
