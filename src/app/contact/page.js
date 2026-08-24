import Navbar from '../components/Header';
import Footer from '../components/Contact';
import Copyright from '../components/Copyright';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ContactInfoCard from '../components/ContactInfoCard';
import ScrollReveal from '../components/ScrollReveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const contactInfo = [
  {
    icon: faPhone,
    label: 'Phone',
    value: '+84 943469258',
    href: 'tel:+84943469258',
  },
  {
    icon: faEnvelope,
    label: 'Email',
    value: 'huynhtien9258@gmail.com',
    href: 'mailto:huynhtien9258@gmail.com',
  },
  {
    icon: faMapMarkerAlt,
    label: 'Location',
    value: 'Ho Chi Minh City, Viet Nam',
    href: 'https://maps.google.com/?q=Ho+Chi+Minh+City,Viet+Nam',
  },
];

const socialLinks = [
  { icon: faLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hirdo-nguyen/' },
  { icon: faGithub, label: 'GitHub', href: 'https://github.com/hirdo' },
  { icon: faInstagram, label: 'Instagram', href: 'https://www.instagram.com/hirdo_tien' },
  { icon: faFacebook, label: 'Facebook', href: 'https://www.facebook.com/hirdo.nguyen' }, 
];

export default function ContactPage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />

      <PageHero
        title="Get In Touch"
        subtitle="Have a question or want to collaborate? Drop me a message."
      />

      <main className="py-16 px-4 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Left */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 border border-gray-200 dark:border-gray-700 shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Send a Message
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Fill out the form below and I will get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info - Right */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={100}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
              </ScrollReveal>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ScrollReveal key={index} delay={150 + index * 80}>
                    <ContactInfoCard {...info} />
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={400}>
                <div className="pt-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                    Follow Me
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const brandClasses = {
                        LinkedIn: 'hover:bg-blue-600 dark:hover:bg-blue-600',
                        GitHub: 'hover:bg-gray-900 dark:hover:bg-gray-900',
                        Facebook: 'hover:bg-blue-700 dark:hover:bg-blue-700',
                        Instagram: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 dark:hover:bg-gradient-to-tr dark:hover:from-yellow-400 dark:hover:via-red-500 dark:hover:to-purple-600',
                      }[social.label];
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className={`w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center ${brandClasses} hover:text-white dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5`}
                        >
                          <FontAwesomeIcon icon={social.icon} className="text-sm" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="px-4 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <iframe
                title="My Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501575.5639084257!2d106.45938137226563!3d10.980612700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded570258fe00!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-72 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <Copyright />
    </div>
  );
}
