import Header from '../components/Header';
import Footer from '../components/Contact';
import Copyright from '../components/Copyright';
import { buttonVariants } from "@/components/ui/button"; // Import buttonVariants
import Link from "next/link";  // Import the Link component from next/link
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="bg-black dark:bg-gray-900 text-center py-16">
        <h1 className="text-4xl font-bold text-white">My Projects</h1>
        <p className="text-xl text-white mt-4">
          Check out some of the amazing projects I have worked on.
        </p>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Project 1: Food Website */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image src="/project (1).webp" alt="Food Website" width={200}
              height={200} className="w-full h-56 " />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Food Website</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                A food delivery website that allows users to browse menus, place orders, and track deliveries in real-time.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://hirdo.github.io/Food-Order/" className={buttonVariants({ variant: "outline" })}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2: E-Commerce Website */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image src="/project (5).webp" alt="E-Commerce Website" width={200}
              height={200} className="w-full h-56 " />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">E-Commerce Website</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                A fully functional e-commerce web application built with React, Node.js, and MongoDB. It features a shopping cart, user authentication, and a payment gateway integration.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://hirdo.github.io/e-commerce-website/" className={buttonVariants({ variant: "outline" })}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3: Clinic Website */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image src="/project (4).webp" alt="Clinic Website" width={200}
              height={200} className="w-full h-56 " />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Clinic Website</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                A clinic website that enables patients to book appointments, view doctor profiles, and access medical resources.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://hirdo.github.io/clinic_website/" className={buttonVariants({ variant: "outline" })}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Project 4: Farm Website */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image src="/project (3).webp" alt="Farm Website" width={200}
              height={200} className="w-full h-56 " />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Farm Website</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                A farm website that promotes organic produce, provides farm information, and allows online shopping for fresh products.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://hirdo.github.io/organic-farm-website-template/" className={buttonVariants({ variant: "outline" })}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Project 5: Blog Website */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image src="/project.webp" alt="Blog Website" width={200}
              height={200} className="w-full h-56 " />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Blog Website</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                A blogging platform where users can publish posts, comment on articles, and interact with other readers.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://hirdo.github.io/Blog-website/" className={buttonVariants({ variant: "outline" })}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Project 6: Travel Website */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image src="/project (6).webp" alt="Travel Website" width={200}
              height={200} className="w-full h-56 " />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Travel Website</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                A travel website that provides information on destinations, booking services, and travel guides for adventurers.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://hirdo.github.io/travel-website/" className={buttonVariants({ variant: "outline" })}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default ProjectsPage;
