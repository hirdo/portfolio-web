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
  faCode, faLaptopCode, faDraftingCompass, faLayerGroup,
  faDatabase, faCloud, faShieldAlt, faProjectDiagram, faFileDownload, faEye
} from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faSass, faGit, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const stats = [
  { target: 1, suffix: '+', label: 'Years Experience' },
  { target: 6, suffix: '+', label: 'Projects Completed' },
  { target: 5, suffix: '+', label: 'Happy Clients' },
  { target: 8, suffix: '+', label: 'Certifications' },
];

const certifications = [
  { icon: faCode, title: 'JavaScript Course', image: '/certificate.jpg' },
  { icon: faLaptopCode, title: 'React.js Course', image: '/certificate.jpg' },
  { icon: faDraftingCompass, title: 'Tailwind CSS Course', image: '/certificate.jpg' },
  { icon: faLayerGroup, title: 'Modern HTML Course', image: '/certificate.jpg' },
  { icon: faDatabase, title: 'MongoDB Course', image: '/certificate.jpg' },
  { icon: faCloud, title: 'Git & GitHub Course', image: '/certificate.jpg' },
  { icon: faShieldAlt, title: 'SEO for Beginners', image: '/certificate.jpg' },
  { icon: faProjectDiagram, title: 'Generative AI Course', image: '/certificate.jpg' },
];

const skills = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJsSquare },
  { name: 'React.js', icon: faReact },
  { name: 'Bootstrap', icon: faBootstrap },
  { name: 'Sass', icon: faSass },
  { name: 'Git', icon: faGit },
  { name: 'Node.js', icon: faNodeJs },
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
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl opacity-20 blur-xl" />
                  <Image
                    src="/hirdo.png"
                    alt="Hirdo - Frontend Developer"
                    width={400}
                    height={500}
                    className="relative w-full max-w-md mx-auto rounded-2xl object-cover shadow-xl aspect-[4/5]"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Who Am I?
                  </h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      Hello! I am <span className="font-semibold text-gray-900 dark:text-white">Hirdo</span>, a passionate Frontend Developer with
                      one year of hands-on experience in creating stunning, responsive, and user-friendly web applications.
                    </p>
                    <p>
                      I specialize in transforming creative ideas into visually appealing digital experiences using
                      <span className="text-blue-600 dark:text-blue-400 font-medium"> HTML</span>,
                      <span className="text-blue-600 dark:text-blue-400 font-medium"> CSS</span>,
                      <span className="text-blue-600 dark:text-blue-400 font-medium"> JavaScript</span>,
                      and modern frameworks like
                      <span className="text-blue-600 dark:text-blue-400 font-medium"> React</span> and
                      <span className="text-blue-600 dark:text-blue-400 font-medium"> Next.js</span>.
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
          <div className="max-w-6xl mx-auto">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full text-left group"
                  >
                    <Card className="text-center p-0 overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                      <div className="relative w-full h-48 overflow-hidden">
                        {cert.image ? (
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/5 to-pink-500/5">
                            <FontAwesomeIcon
                              icon={cert.icon}
                              className="text-5xl text-blue-500/20 dark:text-blue-400/20"
                            />
                          </div>
                        )}
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 flex items-center justify-center shadow-lg">
                              <FontAwesomeIcon icon={faEye} className="text-gray-900 dark:text-white text-sm" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{cert.title}</h3>
                      </div>
                    </Card>
                  </button>
                </ScrollReveal>
              ))}
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
                    <FontAwesomeIcon icon={skill.icon} className="text-5xl text-blue-600 dark:text-blue-400 mb-3" />
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
