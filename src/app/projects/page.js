import Header from "../components/Header";
import Footer from "../components/Contact";
import Copyright from "../components/Copyright";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";
import GradientText from "../components/GradientText";

// Import project images
import project_recipe from "/public/project_recipe.png";
import project_icecream from "/public/project_icecream.png";
import project_portfolio from "/public/project_portfolio.png";
import project_taxi from "/public/project_taxi.png";
import project_birdnest from "/public/project_birdnest.png";
import project_gymtrack from "/public/project_gymtrack.jpg";

const projects = [
  {
    image: project_portfolio,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing skills, projects, and blog posts with modern animations.",
    link: "https://portfolio-hirdo.vercel.app/",
    sourceLink: "https://github.com/hirdo/portfolio-web",
    tags: ["Typescript", "Tailwind", "Framer Motion"],
    category: "Portfolio",
  },
  {
    image: project_recipe,
    title: "Recipe Website",
    description:
      "A culinary exploration platform that allows users to search, filter using AI features like and discover authentic food recipes from all around the world from image or voice.",
    link: "https://worldwide-recipe.netlify.app/",
    sourceLink: "https://github.com/hirdo/worldwide-recipes-web",
    tags: ["Firebase Studio", "GenkitAI", "Typescript", "Tailwind CSS"],
    category: "Guide",
  },
  {
    image: project_gymtrack,
    title: "GymTrack Website",
    description:
      "A fitness tracking platform that helps users monitor their workouts, set goals, and achieve their health objectives.",
    link: "https://gym-tracking-only.vercel.app/",
    sourceLink: "https://github.com/hirdo/gymtrack-web",
    tags: ["Angular", "Keycloak" , "Firebase", "Tailwind CSS"],
    category: "Health & Fitness",
  },
  {
    image: project_icecream,
    title: "Icecream Website",
    description:
      "An online storefront designed to showcase artisanal ice cream flavors and dessert offerings for a cozy dessert brand.",
    link: "https://sweethome-icecream.vercel.app/",
    sourceLink: "https://github.com/hirdo/sweethome-icecream-web",
    tags: ["Lovable", "Supabase", "Typescript", "Vite"],
    category: "Food & Beverage",
  },
  {
    image: project_birdnest,
    title: "Bird's nest Selling Website",
    description:
      "An online storefront for Yến Sào Mười Thiết Đào Đào, a Vietnamese brand specializing in premium, 100% pure, and naturally harvested bird's nest products.",
    link: "https://yen-sao-muoi-thiet-dao-dao.vercel.app/",
    sourceLink: "https://github.com/hirdo/daodao-bird-nest-web",
    tags: ["Typescript", "Supabase", "React", "Tailwind CSS"],
    category: "E-Commerce",
  },
  {
    image: project_taxi,
    title: "Taxi Website",
    description:
      "This website serves booking platform for a local taxi service operating in the Go Cong area of Tien Giang province, Vietnam.",
    link: "https://tiengiang-gocong-taxi.vercel.app/",
    sourceLink: "https://github.com/hirdo/gocong-taxi-web",
    tags: ["React", "Typescript", "Vite", "Tailwind CSS"],
    category: "Service",
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
