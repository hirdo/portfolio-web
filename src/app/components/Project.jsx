import Image from "next/image";
import project1 from "/public/project (5).webp";
import project2 from "/public/project (4).webp";
import project3 from "/public/project (3).webp";
import project4 from "/public/project (6).webp";
import project5 from "/public/project (1).webp";
import project6 from "/public/project.webp";

const ProjectCard = ({ image, title, link}) => {
  return (
    <div>
      <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-transparent hover:border-blue-500 transition-all duration-500">
        <div className="p-[2px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              className="w-full h-64"
              src={image}
              alt={`Image of ${title}`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition duration-400 ease-in-out">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
                <a
                  className="text-white underline hover:no-underline"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {

  const projectData = [
    {
      image: project1,
      title: "E-Commerce Website",
      link: "https://hirdo.github.io/e-commerce-website/",
    },
    {
      image: project2,
      title: "Clinic Website",
      link: "https://hirdo.github.io/clinic_website/",
    },
    {
      image: project3,
      title: "Farm Website",
      link: "https://hirdo.github.io/organic-farm-website-template/",
    },
    {
      image: project4,
      title: "Travel website",
      link: "https://hirdo.github.io/travel-website/",
    },
    {
      image: project5,
      title: "Food Website",
      link: "https://hirdo.github.io/Food-Order/",
    },
    {
      image: project6,
      title: "Blog website",
      link: "https://hirdo.github.io/Blog-website/",
    },
  ];

  return (
    <section id="projects" className="py-4 lg:py-12 px-4 lg:px-12 overflow-hidden">
      <div>
        <h2 className="text-center text-4xl lg:text-5xl font-semibold mb-10">
          MY{" "}
          <span
            className="text-gradient text-4xl capitalize lg:text-6xl font-semibold"
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
