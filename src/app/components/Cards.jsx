const Image = ({ src, alt, className }) => (
  <div
    className={`${className} bg-cover bg-center`}
    style={{ backgroundImage: `url(${src})` }}
    alt={alt}
  ></div>
);

const CardSection = () => {
  const cards = [
    {
      title: "Responsive Design",
      description:
        "Learn to use modern CSS frameworks and techniques to make your site look perfect on desktops, tablets, and mobile phones.",
      image: "/design.webp",
      link: "https://micrologicx.net/web-development/introduction-to-css",
    },
    {
      title: "JavaScript Fundamentals",
      description:
        "Explore core concepts, syntax, and create interactive, dynamic user experiences that bring your websites to life.",
      image: "/masterjs.webp",
      link: "https://micrologicx.net/web-development/mastering-javascript-basics-a-beginner-s-guide-to-core-concepts",
    },
    {
      title: "Next.js Framework",
      description:
        "Dive into server-side rendering, static site generation, and advanced React concepts to elevate your development skills.",
      image: "/nextjs.webp",
      link: "https://nextjs.org/docs",
    },
  ];

  return (
    <section id="blogs">
      <div className="py-12 px-6 md:px-12 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-center text-4xl lg:text-5xl font-semibold pb-10">
          MY{" "}
          <span
            className="text-gradient capitalize text-5xl lg:text-6xl font-semibold"
            style={{
              backgroundImage: "linear-gradient(45deg, #1E90FF, #FF1493)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Blogs
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} card={card} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => (
  <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl">
    <Image src={card.image} alt={card.title} className="w-full h-48" />
    <div className="p-4 bg-gray-100 dark:bg-gray-700 text-justify">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{card.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block bg-gray-700 text-white font-semibold px-4 py-2 text-sm rounded-lg hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-500 transition-all duration-200 focus:outline-none"
      >
        Learn More
      </a>
    </div>
  </div>
);

export default CardSection;
