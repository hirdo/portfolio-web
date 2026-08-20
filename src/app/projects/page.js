import Header from '../components/Header';
import Footer from '../components/Contact';
import Copyright from '../components/Copyright';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import GradientText from '../components/GradientText';

// Import project images
import project1 from '/public/project (5).webp';
import project2 from '/public/project (4).webp';
import project3 from '/public/project (3).webp';
import project4 from '/public/project (6).webp';
import project5 from '/public/project (1).webp';
import project6 from '/public/project.webp';

const projects = [
  {
    image: project1,
    title: 'E-Commerce Website',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, checkout, and order management.',
    link: 'https://hirdo.github.io/e-commerce-website/',
    sourceLink: 'https://github.com/hirdo/e-commerce-website',
    tags: ['React', 'Redux', 'Tailwind', 'Stripe'],
    category: 'E-Commerce',
  },
  {
    image: project2,
    title: 'Clinic Website',
    description: 'A professional healthcare clinic website with appointment booking, doctor profiles, and services showcase.',
    link: 'https://hirdo.github.io/clinic_website/',
    sourceLink: 'https://github.com/hirdo/clinic_website',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'Healthcare',
  },
  {
    image: project3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing skills, projects, and blog posts with modern animations.',
    link: 'https://hirdo.github.io/portfolio/',
    sourceLink: 'https://github.com/hirdo/portfolio',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    category: 'Portfolio',
  },
  {
    image: project4,
    title: 'Food Delivery App',
    description: 'A food ordering platform allowing users to browse menus, place orders, and track deliveries in real-time.',
    link: 'https://hirdo.github.io/Food-Order/',
    sourceLink: 'https://github.com/hirdo/Food-Order',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Food & Beverage',
  },
  {
    image: project5,
    title: 'To-Do List App',
    description: 'A productivity app for managing tasks with drag-and-drop, reminders, and category organization.',
    link: 'https://hirdo.github.io/To-Do-List/',
    sourceLink: 'https://github.com/hirdo/To-Do-List',
    tags: ['React', 'LocalStorage', 'CSS3'],
    category: 'Productivity',
  },
  {
    image: project6,
    title: 'Weather Dashboard',
    description: 'A real-time weather application with 7-day forecasts, location search, and beautiful data visualizations.',
    link: 'https://hirdo.github.io/Weather-Dashboard/',
    sourceLink: 'https://github.com/hirdo/Weather-Dashboard',
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    category: 'Dashboard',
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Header />

      <PageHero
        title="My Projects"
        subtitle="Check out some of the amazing projects I have worked on. Each one represents a unique challenge and a creative solution."
      />

      <main>
        <section className="py-16 px-4 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Featured <GradientText className="text-4xl font-bold">Projects</GradientText>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                  Explore my work across different industries and technologies.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <ProjectCard project={project} isFeatured />
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
