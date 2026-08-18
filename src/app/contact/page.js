import Navbar from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Contact";
import Copyright from "../components/Copyright";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black dark:bg-gray-900 text-center py-16">
        <h1 className="text-4xl font-bold text-white">Contact us</h1>
        <p className="text-xl text-white mt-4">
          Check out some of my details for contact me.
        </p>
      </div>
      <section className="py-16 px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg relative border-2 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Have a question or want to work together? Connect with me through
              the following details.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faPhone} className="mr-4" />
                <span>+84 943469258</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
                <span>huynhtien9258@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4" />
                <span>Ho Chi Minh City, Viet Nam</span>
              </div>
            </div>
            <div className="border-t dark:border-gray-700 mt-6 pt-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Follow Me
              </h3>
              <div className="flex space-x-6 text-2xl text-gray-600 dark:text-gray-400">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hirdo-nguyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/hirdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 bg-[#f5f5f5] dark:bg-gray-700 rounded-full w-40 h-40 opacity-20"></div>
          </div>

          {/* Google Map */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-lg border-2 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Find Us
            </h2>
            <div className="relative">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.5403816782!2d106.36556114141695!3d10.754666352882103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecb1a8d0dd1%3A0xee5d5aa1773c112b!2zVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s"
                className="w-full h-96 border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Copyright />
    </>
  );
};

export default ContactPage;
