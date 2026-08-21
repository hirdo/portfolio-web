import Header from '../components/Header';
import Footer from '../components/Contact';
import Copyright from '../components/Copyright';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Header />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Privacy Policy</h1>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website. By using our website, you consent to the data practices described in this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Information We Collect</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We may collect personal information such as your name, email address, phone number, and other details when you fill out forms or interact with our website. Additionally, we may collect non-personal information such as browser type, device type, and usage data for analytical purposes.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">How We Use Your Information</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
          <li>Provide and improve our services</li>
          <li>Respond to inquiries and provide customer support</li>
          <li>Send promotional emails or newsletters (with your consent)</li>
          <li>Analyze website usage to improve user experience</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Cookies and Tracking Technologies</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us track your preferences and activities. You can control cookie settings through your browser, but disabling cookies may affect the functionality of our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Third-Party Services</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We may use third-party services such as Google Analytics, advertising networks, and other platforms to collect data for analytics and marketing purposes. These third parties may collect data about your online activities across different websites and services.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Data Security</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your information.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Your Rights and Choices</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
          <li>Access, update, or delete your personal information</li>
          <li>Opt-out of receiving promotional emails by following the unsubscribe instructions in the emails</li>
          <li>Control cookie settings through your browser</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Changes to This Privacy Policy</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the Last Updated date will be revised. Please review this policy periodically to stay informed about how we protect your data.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Us</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Email: huynhtien9258@gmail.com
        </p>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default PrivacyPolicy;
