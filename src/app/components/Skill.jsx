import Image from "next/image";
const skills = [
  { name: "HTML5", imageSrc: "/html-5.webp" },
  { name: "JavaScript", imageSrc: "/java-script.webp" },
  { name: "Tailwind", imageSrc: "/tailwind-css.webp" },
  { name: "Bootstrap", imageSrc: "/bootstrap.webp" },
  { name: "CSS", imageSrc: "/cascading-style-sheets.webp" },
  { name: "Sass", imageSrc: "/sass.webp" },
  { name: "React JS", imageSrc: "/science.webp" },
  { name: "Next JS", imageSrc: "/next-js.webp" },
];
const MySkills = () => {
  return (
    <section id="skills">
      <div className="px-2 py-4 lg:py-12 text-center bg-gray-100 dark:bg-gray-900">
        <h2
          className="text-center text-4xl lg:text-5xl font-semibold mb-12"
        >
          MY{" "}
          <span
            className="text-gradient text-5xl Capitalize lg:text-6xl font-semibold"
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-2 lg:px-0">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div
                  className="p-6 border-2 rounded-lg flex items-center justify-center h-40 w-40 lg:w-52"
                  style={{
                    borderImage: "linear-gradient(45deg, #1E90FF, #FF1493) 1",
                  }}
                >
                  <Image
                    src={skill.imageSrc}
                    alt={skill.name}
                    width={200}
                    height={200}
                    className="object-contain h-20"
                  />
                </div>
                <p className="mt-2 uppercase text-2xl">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
