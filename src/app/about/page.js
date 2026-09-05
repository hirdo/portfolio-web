'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Contact';
import Copyright from '../components/Copyright';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import GradientText from '../components/GradientText';
import Card from '../components/Card';
import CertModal from '../components/CertModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode, faServer, faLanguage,
  faDatabase, faCloud, faShieldAlt, faProjectDiagram, faFileDownload, faEye
} from '@fortawesome/free-solid-svg-icons';
import { faPhp, faPython, faNodeJs, faHtml5, faCss3Alt, faJsSquare, faReact, faJava, faAngular, faFlutter, faDocker, faJenkins } from '@fortawesome/free-brands-svg-icons';

const stats = [
  { target: 3, suffix: '+', label: 'Years Experience' },
  { target: 6, suffix: '+', label: 'Projects Completed' },
  { target: 5, suffix: '+', label: 'Happy Clients' },
  { target: 3, suffix: '+', label: 'Certifications' },
];

const certifications = [
  { icon: faServer, title: 'Frontend Course', image: '/freeCodeCamp_fe.jpeg' },
  { icon: faLaptopCode, title: 'Backend Course' },
  { icon: faDatabase, title: 'Database Course' },
  { icon: faCloud, title: 'DevOps Course' },
  { icon: faShieldAlt, title: 'Security Course' },
  { icon: faProjectDiagram, title: 'AI Course' },
  { icon: faLanguage, title: 'IELTS Course', image: '/IELTS.jpg' },
  { icon: faLanguage, title: 'TOEIC Course', image: '/TOEIC.jpg' },
];

const skills = [
  { name: 'HTML5', icon: faHtml5, col: 'text-orange-500' },
  { name: 'CSS3', icon: faCss3Alt, col: 'text-blue-400' },
  { name: 'JavaScript', icon: faJsSquare, col: 'text-yellow-300' },
  { name: 'React.js', icon: faReact, col: 'text-cyan-400' },
  { name: 'PHP', icon: faPhp, col: 'text-purple-500' },
  { name: 'Node.js', icon: faNodeJs, col: 'text-green-400' },
  { name: 'Python', icon: faPython, col: 'text-blue-400' },
  { name: 'Java', icon: faJava, col: 'text-red-500' },
  { name: 'Angular', icon: faAngular, col: 'text-red-500' },
  { name: 'Flutter', icon: faFlutter, col: 'text-cyan-400' },
  { name: 'Docker', icon: faDocker, col: 'text-blue-500' },
  { name: 'Jenkins', icon: faJenkins, col: 'text-gray-500' },
];

export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <Header />

      <PageHero
        title="About Me"
        subtitle="Discover my journey as a passionate Frontend Developer and how I turn ideas into visually stunning and functional web applications."
      />

      <main className="bg-gray-100 dark:bg-gray-900">
        {/* Story Section */}
        <section className="py-16 px-4 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="flex justify-center">
                  <div className="relative p-3 rounded-full bg-gradient-to-br from-amber-400 via-rose-500 to-purple-600 shadow-2xl shadow-rose-500/20 transition-transform duration-500 hover:scale-105">
                    <div className="rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900 p-2">
                      <Image
                        src="/avatar.png"
                        alt="Hirdo - Frontend Developer"
                        width={400}
                        height={400}
                        className="rounded-full w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Who Am I?
                  </h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      Hello! I am <span className="font-semibold text-gray-900 dark:text-white">Hirdo</span>, a passionate <span className="text-blue-600 dark:text-blue-400 font-medium">Software Engineer</span> with
                      more than <span className="font-bold text-gray-900 dark:text-white">3 years</span> of experience in creating stunning, responsive, and user-friendly app applications and <span className="font-bold text-gray-900 dark:text-white">1 year</span> of <span className="text-blue-600 dark:text-blue-400 font-medium">Security Champion</span> experience.
                    </p>
                    <p>
                      I specialize in transforming creative ideas into visually appealing digital experiences using
                      modern technologies and improve security practices.
                    </p>
                    <p>
                      With a keen eye for design and a love for clean code, I aim to deliver seamless and engaging user experiences
                      that leave a lasting impression.
                    </p>
                  </div>
                  <Link
                    href="/Resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <FontAwesomeIcon icon={faFileDownload} />
                    Download CV
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div>
                    <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 px-4 lg:px-12">
          <div className="max-w-[1400px] w-full mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  My <GradientText className="text-4xl md:text-5xl font-bold">Certifications</GradientText>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                  Continuous learning is key. Here are some of the certifications I have earned to stay ahead in the tech industry.
                </p>
              </div>
            </ScrollReveal>

            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {certifications.map((cert, index) => (
                  <ScrollReveal key={index} delay={index * 80}>
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="w-full text-left group focus:outline-none"
                    >
                      <Card className="relative overflow-hidden bg-white dark:bg-slate-800/90 p-4 pb-5 rounded-2xl flex flex-col items-center shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700/60">

                        <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-xl border border-gray-100 dark:border-slate-600/50 bg-gray-50 dark:bg-slate-700/50">
                          {cert.image ? (
                            <Image
                              src={cert.image}
                              alt={cert.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <FontAwesomeIcon
                                icon={cert.icon}
                                className="text-7xl text-gray-300 dark:text-slate-500"
                              />
                            </div>
                          )}

                          {/* Overlay khi hover */}
                          <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-lg">
                                <FontAwesomeIcon icon={faEye} className="text-gray-900 dark:text-white text-xl" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <div className="w-full text-center px-2">
                          <h3 className="font-bold text-gray-600 dark:text-slate-200 text-lg md:text-xl tracking-wide transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1E90FF] group-hover:to-[#FF1493]">
                            {cert.title}
                          </h3>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1E90FF] to-[#FF1493] opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Card>
                    </button>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Modal */}
        {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}

        {/* Languages & Tools */}
        <section className="py-16 px-4 lg:px-12 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Languages & <GradientText className="text-4xl md:text-5xl font-bold">Tools</GradientText>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                  The technologies and tools I use daily to bring ideas to life.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <ScrollReveal key={index} delay={index * 60}>
                  <div className="flex flex-col items-center p-6 gradient-border-card rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900">
                    <FontAwesomeIcon icon={skill.icon} className={`text-5xl ${skill.col} mb-3`} />
                    <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to work together?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <Copyright />
    </>
  );
}
