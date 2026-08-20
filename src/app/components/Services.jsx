import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faPlug,
  faSearch,
  faChartSimple,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from "./ScrollReveal";
import GradientText from "./GradientText";

const Services = () => {
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
          {[
            {
              icon: faLaptopCode,
              title: "Web Development",
              description:
                "Professional web development services, creating responsive and visually appealing websites tailored to your business needs.",
            },
            {
              icon: faPalette,
              title: "Web Design",
              description:
                "Visually engaging and responsive web designs that align with your brand, providing a user-friendly experience.",
            },
            {
              icon: faBlogger,
              title: "Blogging",
              description:
                "Responsive blog layouts that enhance readability and user interaction, ensuring seamless performance across devices.",
            },
            {
              icon: faPlug,
              title: "API Integration",
              description:
                "Integrating APIs to enhance website functionality and connect with external services using clean and efficient code.",
            },
            {
              icon: faSearch,
              title: "SEO-Friendly Code",
              description:
                "SEO-friendly code to improve your website&apos;s visibility on search engines, ensuring better indexing and higher rankings.",
            },
            {
              icon: faChartSimple,
              title: "Performance Optimization",
              description:
                "Performance optimization techniques to enhance website speed and efficiency, creating fast and responsive sites.",
            },
          ].map((service, index) => (
            <ScrollReveal key={index} delay={index * 80}>
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
      </div>
    </section>
  );
};
export default Services;
