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
  faCode, faPaintBrush, faMobileAlt, faSearch,
  faServer, faRocket
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faCode,
    title: 'Web Development',
    description: 'Building robust, scalable web applications tailored to your business needs using modern frameworks and best practices.',
    techs: ['React', 'Next.js', 'Node.js'],
    features: [
      'Responsive & mobile-first design',
      'SEO-friendly architecture',
      'Performance optimization',
      'Cross-browser compatibility',
    ],
  },
  {
    icon: faPaintBrush,
    title: 'Web Design',
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
    icon: faMobileAlt,
    title: 'Responsive Design',
    description: 'Ensuring your website looks and functions perfectly across all devices, from mobile phones to large desktop screens.',
    techs: ['Tailwind', 'Bootstrap', 'CSS Grid'],
    features: [
      'Mobile-first approach',
      'Fluid layouts',
      'Touch-friendly interactions',
      'Device testing',
    ],
  },
  {
    icon: faSearch,
    title: 'SEO Optimization',
    description: 'Improving your website visibility on search engines to drive organic traffic and grow your online presence.',
    techs: ['Next.js', 'Schema', 'Analytics'],
    features: [
      'On-page SEO audit',
      'Meta tags optimization',
      'Page speed improvements',
      'Keyword research & integration',
    ],
  },
  {
    icon: faServer,
    title: 'Backend Development',
    description: 'Developing reliable server-side solutions and APIs to power your applications with secure and efficient data handling.',
    techs: ['Node.js', 'Express', 'MongoDB'],
    features: [
      'RESTful API development',
      'Database design & management',
      'Authentication & security',
      'Server optimization',
    ],
  },
  {
    icon: faRocket,
    title: 'Performance Optimization',
    description: 'Analyzing and enhancing your website speed and performance to ensure the best user experience and higher conversion rates.',
    techs: ['Lighthouse', 'Webpack', 'SSR'],
    features: [
      'Core Web Vitals optimization',
      'Image & asset optimization',
      'Code splitting & lazy loading',
      'Caching strategies',
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
    question: 'What technologies do you prefer working with?',
    answer: 'I primarily work with React, Next.js, and Tailwind CSS for frontend, and Node.js with MongoDB for backend. However, I am flexible and adapt to your specific project requirements.',
  },
  {
    question: 'Can you work with existing codebases?',
    answer: 'Absolutely. I can jump into existing projects, review the codebase, and add features or fix issues while following your established coding patterns and conventions.',
  },
];

// Placeholder testimonials - can be replaced with real data later
const testimonials = [
  {
    quote: 'Working with Hirdo was a fantastic experience. The attention to detail and responsiveness throughout the project were outstanding. Our website turned out better than we imagined.',
    name: 'Sarah Mitchell',
    role: 'CEO, TechStart Inc.',
  },
  {
    quote: 'Hirdo delivered our e-commerce platform on time and within budget. The site is fast, beautiful, and has significantly improved our conversion rates.',
    name: 'David Chen',
    role: 'Founder, ShopEase',
  },
  {
    quote: 'I was impressed by the modern design and clean code. Communication was clear and the whole process felt very professional from start to finish.',
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Bloom Agency',
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
