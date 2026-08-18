import Header from '../components/Header';
import Footer from '../components/Contact';
import Copyright from '../components/Copyright';

const Disclaimer = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Disclaimer</h1>
        
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information. Any reliance you place on such information is strictly at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">External Links</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Our website may contain links to external websites. We do not control and are not responsible for the content, privacy policies, or practices of any third-party websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Limitation of Liability</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage arising from the use of this website. This includes any loss or damage caused by viruses or other harmful components.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Changes to Disclaimer</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We reserve the right to update or modify this disclaimer at any time. Please check this page periodically for any changes. Your continued use of this website after changes have been made constitutes your acceptance of those changes.
        </p>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default Disclaimer;
