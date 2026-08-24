import Header from '../components/Header';
import Footer from '../components/Contact';
import Copyright from '../components/Copyright';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import FAQAccordion from '../components/FAQAccordion';
import TestimonialCard from '../components/TestimonialCard';
import ScrollReveal from '../components/ScrollReveal';
import GradientText from '../components/GradientText';
import {
  faLaptopCode, faPalette, faShieldHalved, faCloudArrowUp,
  faServer, faRobot, faMobileScreen, faPlug
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faLaptopCode,
    title: 'Web Development',
    description: 'Building robust, scalable web applications tailored to your business needs using modern frameworks and best practices.',
    techs: ['React', 'Angular', 'TypeScript', 'Node.js'],
    features: [
      'Responsive design',
      'SEO-friendly architecture',
      'Performance optimization',
      'Cross-browser compatibility',
    ],
  },
  {
    icon: faMobileScreen,
    title: 'Mobile Development',
    description: 'Creating custom mobile applications for iOS and Android platforms, ensuring seamless user experiences across all devices.',
    techs: ['Flutter', 'Spring Boot'],
    features: [
      'Cross-platform development',
      'Native performance',
      'Push notifications',
    ],
  },
  {
    icon: faShieldHalved,
    title: 'Security & Maintenance',
    description: 'Implementing robust security measures, including SSO and MFA, along with regular maintenance to keep your applications secure and up-to-date.',
    techs: ['Keycloak', 'OAuth2', 'JWT'],
    features: [
      'Single Sign-On (SSO) integration',
      'Multi-Factor Authentication (MFA)',
      'Regular security audits',
      'System updates and patches',
    ],
  },
  {
    icon: faCloudArrowUp,
    title: 'Cloud & DevOps Deployment',
    description: 'Deploying and managing your applications in the cloud with efficient DevOps practices for seamless updates and scaling.',
    techs: ['Azure', 'Docker', 'Jenkins'],
    features: [
      'Containerization with Docker',
      'CI/CD pipeline setup',
      'Domain and SSL management',
      'Monitoring and logging',
    ],
  },
  {
    icon: faRobot,
    title: 'AI & Automation Integration',
    description: 'Integrating artificial intelligence and automation tools to streamline your workflows and enhance productivity.',
    techs: ['Python', 'n8n', 'OpenAI'],
    features: [
      'AI-driven analytics',
      'Automated task workflows',
      'Process optimization',
      'Custom AI solutions',
    ],
  },
  {
    icon: faServer,
    title: 'Backend Development',
    description: 'Designing and implementing robust backend systems, including APIs and database architectures, to support your applications efficiently.',
    techs: ['Microservices', 'Superbase', 'Oracle', 'Elasticsearch'],
    features: [
      'RESTful API development',
      'Database design & management',
      'Authentication & security',
      'Server optimization',
    ],
  },
  {
    icon: faPalette,
    title: 'App Design',
    description: 'Creating visually stunning and user-centric designs that captivate your audience and elevate your brand identity.',
    techs: ['Figma', 'Tailwind', 'CSS3'],
    features: [
      'Custom UI/UX design',
      'Brand-aligned aesthetics',
      'Wireframing & prototyping',
      'Design system creation',
    ],
  },
  {
    icon: faPlug,
    title: 'API Integration',
    description: 'Seamlessly integrating third-party APIs to enhance functionality and create a more robust application.',
    techs: ['REST', 'Postman'],
    features: [
      'API design and documentation',
      'Integration testing',
      'Error handling and logging',
      'Performance optimization',
    ],
  },
];

const faqs = [
  {
    question: 'What is your typical development process?',
    answer: 'My process starts with understanding your goals, followed by wireframing and design, development with regular check-ins, and finally testing and deployment. I keep you involved at every step.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines vary based on complexity. A simple landing page might take 1-2 weeks, while a full web application could take 4-8 weeks. I always provide a clear timeline before starting.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes! I include up to 3 rounds of revisions in every project to ensure the final product meets your expectations. Additional revisions can be arranged if needed.',
  },
  {
    question: 'Can you work with existing codebases?',
    answer: 'Absolutely. I can jump into existing projects, review the codebase, and add features or fix issues while following your established coding patterns and conventions.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in modern web technologies including React, Angular, Node.js, and cloud platforms like Azure. I also have experience with mobile development using Flutter and backend systems with microservices architecture.',
  }
];

// Placeholder testimonials - can be replaced with real data later
const testimonials = [
  {
    quote: 'Working with Hirdo was a fantastic experience. The attention to detail and responsiveness throughout the project were outstanding. Our website turned out better than we imagined.',
    name: 'Huynh Thi Nga',
    role: 'Business Owner',
  },
  {
    quote: 'Hirdo delivered our e-commerce platform on time and within budget. The site is fast, beautiful, and has significantly improved our conversion rates.',
    name: 'Tran Phuc Loi',
    role: 'Business Owner',
  },
  {
    quote: 'I was impressed by the modern design and clean code. Communication was clear and the whole process felt very professional from start to finish.',
    name: 'Nguyen Huynh Vu Duc',
    role: 'Client',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Header />

      <PageHero
        title="My Services"
        subtitle="Explore the range of professional services I offer, tailored to meet your business needs and drive success."
      />

      <main>
        {/* Services Grid */}
        <section className="py-16 px-4 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  What I <GradientText className="text-4xl font-bold">Offer</GradientText>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                  From concept to deployment, I provide end-to-end web solutions that help your business grow online.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 lg:px-12 bg-white dark:bg-gray-800">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Frequently Asked <GradientText className="text-4xl font-bold">Questions</GradientText>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Got questions? I have answers.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <FAQAccordion items={faqs} />
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  What Clients <GradientText className="text-4xl font-bold">Say</GradientText>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Feedback from people I have had the pleasure of working with.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <TestimonialCard {...t} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Copyright />
    </div>
  );
}
