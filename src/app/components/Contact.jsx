"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");  // Check if this logs in the console
    setStatus("Submitting...");

    // Client-side validation
    if (!/^\d{10,15}$/.test(formData.phone)) {
      setStatus("Phone number must be 10-15 digits long");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Invalid email format");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);  // Log response for debugging

      if (response.status === 201) {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setStatus(result.error || "Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 px-6 lg:px-12 border-t-2 bg-slate-100 dark:bg-gray-800">
      {/* NavLinks Section */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-6 sm:text-xl text-gray-800 dark:text-white">
          Quick links
        </h2>
        <nav className="flex flex-col space-y-6">
          <Link href="/disclaimer" className="font-medium transition duration-300 hover:underline text-gray-700 dark:text-gray-300">
            Disclaimer
          </Link>
          <Link href="/privacypolicy" className="font-medium transition duration-300 hover:underline text-gray-700 dark:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/about" className="font-medium transition duration-300 hover:underline text-gray-700 dark:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="font-medium transition duration-300 hover:underline text-gray-700 dark:text-gray-300">
            Contact
          </Link>
        </nav>
      </div>

      {/* Accounts Section */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-6 sm:text-xl text-gray-800 dark:text-white">
          Chat me!
        </h2>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-800 dark:text-white" />
          <p className="text-base text-gray-700 dark:text-gray-300">+84 943469258</p>
        </div>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-800 dark:text-white" />
          <p className="text-base text-gray-700 dark:text-gray-300">huynhtien9258@gmail.com</p>
        </div>
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faAddressCard} className="mr-2 text-gray-800 dark:text-white" />
          <p className="text-base text-gray-700 dark:text-gray-300">Ho Chi Minh City, Viet Nam</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-6 sm:text-xl text-center md:text-left text-gray-800 dark:text-white">
          For Queries, Fill out the form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="^\d{10,15}$" // Allows 10 to 15 digits
              title="Phone number must be 10-15 digits long"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mt-4 text-center md:text-left">
            <button
              type="submit"
              disabled={status === "Submitting..."}
              className={`relative outline px-6 py-2 rounded-lg font-semibold transition-all duration-500 ease-in-out ${
                status === "Submitting..." ? "bg-gray-400" : "bg-transparent"
              }`}
            >
              Submit
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 opacity-0 hover:opacity-100 hover:translate-x-3 transition-all duration-500 ease-in-out">
                →
              </span>
            </button>
          </div>
        </form>
        {status && (
          <p className={status.startsWith("Failed") ? "text-red-500" : "text-green-500"}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}