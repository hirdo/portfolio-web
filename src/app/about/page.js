import Image from "next/image";
import Header from '../components/Header'
import Footer from '../components/Contact'
import Copyright from '../components/Copyright'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faLaptopCode,
  faDraftingCompass,
  faLayerGroup,
  faDatabase,
  faCloud,
  faShieldAlt,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faSass, faGit, faNodeJs } from '@fortawesome/free-brands-svg-icons'

const page = () => {
  return (
    <>
      <Header />
      <div className="h-60 bg-black text-white flex flex-col justify-center items-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold">About Me</h1>
        <p className="text-base lg:text-lg text-gray-300 max-w-3xl text-center px-4">
          Discover my journey as a passionate Frontend Developer and how I turn ideas into visually stunning and functional web applications.
        </p>
      </div>

      <main className="bg-gray-100 dark:bg-gray-800 py-8 px-4">
        {/* About Section */}
        <section className="bg-white dark:bg-gray-900 rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-6">
            {/* Add the main image here */}
            <Image
              src="/portfolio-image.webp"
              alt="Hirdo"
              width={200}
              height={200}
              className="rounded-full w-full h-96 object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <p className=" leading-relaxed">
                Hello! I am <span className="font-semibold">Hirdo</span>, a passionate Frontend Developer with
                one year of hands-on experience in creating stunning, responsive, and user-friendly web applications.
                I specialize in transforming ideas into visually appealing and functional web designs.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                My expertise includes working with cutting-edge web technologies such as:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-4 ">
                <li><span className="font-medium ">Next.js</span></li>
                <li><span className="font-medium ">Tailwind CSS</span></li>
                <li><span className="font-medium ">HTML, CSS, and Bootstrap</span></li>
                <li><span className="font-medium ">Sass (SCSS)</span></li>
                <li><span className="font-medium ">JavaScript</span></li>
                <li><span className="font-medium ">React.js</span></li>
              </ul>
              <p className=" mt-4">
                I am driven by the challenge of creating seamless user experiences while constantly learning new
                technologies to enhance my skills.
              </p>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="bg-white dark:bg-gray-900 rounded-lg p-12 mb-8">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-6">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { icon: faCode, title: "Web Development", color: "text-blue-500" },
              { icon: faLaptopCode, title: "Frontend Mastery", color: "text-green-500" },
              { icon: faDraftingCompass, title: "UI/UX Design", color: "text-orange-500" },
              { icon: faLayerGroup, title: "Project Management", color: "text-purple-500" },
              { icon: faDatabase, title: "Database Systems", color: "text-red-500" },
              { icon: faCloud, title: "Cloud Computing", color: "text-cyan-500" },
              { icon: faShieldAlt, title: "Cyber Security", color: "text-yellow-500" },
              { icon: faProjectDiagram, title: "Agile Methodologies", color: "text-indigo-500" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-4 p-4 bg-gray-50 dark:bg-gray-700 shadow rounded-lg hover:shadow-md transition">
                <FontAwesomeIcon icon={item.icon} className={`${item.color} text-3xl`} />
                <span className="text-gray-800 dark:text-white font-semibold text-lg">{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Language Section */}
        <section className="bg-white dark:bg-gray-900 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">Languages & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { icon: faHtml5, title: "HTML5", color: "text-orange-500" },
              { icon: faCss3Alt, title: "CSS3", color: "text-blue-500" },
              { icon: faJsSquare, title: "JavaScript", color: "text-yellow-500" },
              { icon: faReact, title: "React.js", color: "text-blue-400" },
              { icon: faBootstrap, title: "Bootstrap", color: "text-purple-500" },
              { icon: faSass, title: "Sass", color: "text-pink-500" },
              { icon: faGit, title: "Git", color: "text-red-500" },
              { icon: faNodeJs, title: "Node.js", color: "text-green-500" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-4 p-4 bg-gray-50 dark:bg-gray-700 shadow rounded-lg hover:shadow-md transition">
                <FontAwesomeIcon icon={item.icon} className={`${item.color} text-5xl mb-2`} />
                <span className="text-gray-800 dark:text-white font-semibold text-lg">{item.title}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Copyright />
    </>
  )
}

export default page
