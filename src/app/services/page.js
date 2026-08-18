import Header from '../components/Header';
import Footer from '../components/Contact';
import Copyright from '../components/Copyright';

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      {/* Header Section */}
      <Header />

      <div className="h-60 border-b bg-black dark:bg-gray-900 text-white flex flex-col justify-center items-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold">My Services</h1>
        <p className="text-base lg:text-lg text-gray-200 max-w-3xl text-center px-4">
          Explore the range of professional services I offer, tailored to meet your business needs and drive success.
        </p>
      </div>
      {/* Services Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Web Development Card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-500 text-white text-center py-8">
              <h3 className="text-2xl font-semibold">Web Development</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300">
                We offer custom web development solutions tailored to your business needs. Whether its a basic landing page or a complex web application, our team can help you build a robust online presence.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Pricing:</strong> Starting at $999
              </p>
            </div>
          </div>

          {/* Web Design Card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-500 text-white text-center py-8">
              <h3 className="text-2xl font-semibold">Web Design</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300">
                Our web design service focuses on creating visually appealing and user-friendly websites that engage visitors and improve conversion rates.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Pricing:</strong> Starting at $799
              </p>
            </div>
          </div>

          {/* Blogging Card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-orange-500 text-white text-center py-8">
              <h3 className="text-2xl font-semibold">Blogging</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300">
                We provide comprehensive blogging services to help your business build an audience, establish authority, and drive traffic. From content creation to optimization, we’ve got you covered.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Pricing:</strong> Starting at $499
              </p>
            </div>
          </div>

          {/* API Integration Card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-purple-500 text-white text-center py-8">
              <h3 className="text-2xl font-semibold">API Integration</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300">
                Our API integration services help connect your applications with third-party services to expand functionality and improve user experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Pricing:</strong> Starting at $599
              </p>
            </div>
          </div>

          {/* SEO-Friendly Code Card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-500 text-white text-center py-8">
              <h3 className="text-2xl font-semibold">SEO-Friendly Code</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300">
                We create SEO-friendly websites with clean and optimized code that ensures faster loading times and improved search engine rankings.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Pricing:</strong> Starting at $699
              </p>
            </div>
          </div>

          {/* Performance Optimization Card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-teal-500 text-white text-center py-8">
              <h3 className="text-2xl font-semibold">Performance Optimization</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300">
                Our performance optimization service ensures your website is fast, responsive, and delivers the best user experience possible across all devices.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>Pricing:</strong> Starting at $799
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}

export default ServicesPage;
