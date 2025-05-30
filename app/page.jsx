"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  FaShoppingCart,
  FaTags,
  FaUsers,
  FaRecycle,
  FaUtensils,
  FaCar,
  FaCoffee,
  FaStar,
  FaTimes
} from "react-icons/fa";
import DownloadButton from "./download";
const benefits = [
  {
    icon: <FaStar className="text-white text-2xl" />,
    title: "First University Marketplace",
    description:
      "CampusMart is the first all-in-one marketplace built for university students across Malaysia.",
  },
  {
    icon: <FaShoppingCart className="text-white text-2xl" />,
    title: "Easy Buying & Selling",
    description: "Connect with students to buy and sell items hassle-free.",
  },
  {
    icon: <FaTags className="text-white text-2xl" />,
    title: "Affordable Prices",
    description:
      "Get the best deals on second-hand textbooks, gadgets, and more.",
  },
  {
    icon: <FaUsers className="text-white text-2xl" />,
    title: "Student Community",
    description:
      "A marketplace exclusively for university students to trade and exchange items.",
  },
  {
    icon: <FaRecycle className="text-white text-2xl" />,
    title: "Sustainable Shopping",
    description: "Reduce waste by giving pre-loved items a new home.",
  },
  {
    icon: <FaUtensils className="text-white text-2xl" />,
    title: "Food Delivery",
    description:
      "Find student-run food stalls and get meals delivered right to your hostel or class.",
  },
  {
    icon: <FaCar className="text-white text-2xl" />,
    title: "Ride Sharing",
    description:
      "Offer or book rides with fellow students for cheap, safe, and quick transportation.",
  },
  {
    icon: <FaCoffee className="text-white text-2xl" />,
    title: "Café Listings",
    description:
      "Discover and support local university cafés run by students or nearby vendors.",
  },
];

const faqs = [
  {
    question: "What is CampusMart?",
    answer:
      "CampusMart is a platform for students to buy and sell items easily within their community.",
  },
  {
    question: "How do I list an item for sale?",
    answer:
      "Simply create an account, navigate to the 'Sell' section, and upload details of your item.",
  },
  {
    question: "Is CampusMart free to use?",
    answer:
      "Yes! Listing and browsing items are completely free. We do not charge any commission on sales.",
  },
  {
    question: "How do I contact a seller?",
    answer:
      "You can message the seller directly through our in-app chat feature once you find an item you like.",
  },
  {
    question: "Can I order food through CampusMart?",
    answer:
      "Yes! You can explore food options from student vendors and have them delivered right to your hostel or faculty.",
  },
  {
    question: "Is there a ride-sharing feature?",
    answer:
      "Absolutely. CampusMart lets students offer or book rides within campus or nearby towns—making travel cheaper and easier.",
  },
  {
    question: "Is CampusMart only for UTM students?",
    answer:
      "CampusMart is currently focused on UTM students, but we plan to expand to other universities soon.",
  },
  {
    question: "How do I know if it’s safe to buy or ride with someone?",
    answer:
      "Each user has a profile, and we encourage verified accounts and ratings. Always meet in safe locations and trust your instincts.",
  },
  {
    question: "What can I sell on CampusMart?",
    answer:
      "You can sell almost anything student-friendly—textbooks, electronics, clothes, event tickets, food, and more.",
  },
  {
    question: "Is there a way to report suspicious users?",
    answer:
      "Yes, you can report users or listings directly within the app, and our team will take action immediately.",
  },
  {
    question: "Can I suggest new features?",
    answer:
      "We’d love that! Just head to the feedback section in the app or message us on Telegram or Instagram.",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center px-6">
      <Head>
        <title>CampusMart - Campus Marketplace</title>
        <meta
          name="description"
          content="A sleek mobile landing page for students"
        />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-md py-6">
        <h1 className="text-2xl font-bold mt-7">CampusMart</h1>
        <DownloadButton />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.3, y: -20 }} // Start larger and slightly above
          animate={{ opacity: 1, scale: 1, y: 0 }} // Shrink down to normal size
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
        >
          <Image
            src="/images/logo.png"
            width={120}
            height={120}
            alt="UTMart Logo"
            className="mb-4"
          />
        </motion.div>

        <h1 className="text-4xl font-bold">CampusMart</h1>
        <p className="text-lg mt-4 max-w-sm text-gray-700">
          CampusMart is a campus marketplace where students can buy, sell, and
          trade essentials easily. Find what you need, save money, and connect
          with others—all in one place!
        </p>
        <div className="flex flex-row">
          <motion.img
            src="/images/store.webp"
            alt="Download App"
            className="w-120 mt-8 hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              const userAgent =
                navigator.userAgent || navigator.vendor || window.opera;

              if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                // iOS device
                window.location.href =
                  "https://apps.apple.com/app/campus-mart/id6746312127";
              } else if (/android/i.test(userAgent)) {
                // Android device
                window.location.href =
                  "https://play.google.com/store/apps/details?id=com.artist1711.campusapp";
              } else {
                // Fallback: send to website or show a message
                window.location.href = "https://utmmart.netlify.app/";
              }
            }}
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="flex justify-center py-14 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          className="flex items-center left-0 transform -translate-x-1/2 z-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/product2.png"
            width={150}
            height={150}
            alt="Product 2"
          />
        </motion.div>

        {/* Center Image (on top) */}
        <motion.div
          className="absolute z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/product1.png"
            width={200}
            height={200}
            alt="Product 1"
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex items-center right-0 transform translate-x-1/2 z-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/product3.png"
            width={150}
            height={150}
            alt="Product 3"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="text-center pt-10 mt-12 w-full max-w-md mx-auto overflow-hidden">
        {/* Title from Right to Left */}
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="text-l font-bold text-red-800"
        >
          EXPERIENCE
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
          className="text-4xl font-extrabold mt-7 mx-10"
        >
          an app unlike any other
        </motion.h2>

        {/* Image rises from the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ amount: 0.3 }}
        >
          <Image
            src="/images/product1.png"
            width={300}
            height={300}
            className="rounded-lg shadow-md mx-auto mt-7"
            alt="Product Image"
          />
        </motion.div>
      </section>

      <section className="text-center py-10 mt-12 w-full max-w-md mx-auto overflow-hidden">
        {/* Title from Right to Left */}
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="text-l font-bold text-red-800"
        >
          FEATURES
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
          className="text-4xl font-extrabold mt-7 mx-10"
        >
          powerful features
        </motion.h2>
      </section>
      {/* Call to Action Sections */}
      {[1, 2, 3, 4, 5].map((num) => (
        <section
          key={num}
          className="text-center py-10 mt-12 w-full max-w-md mx-auto overflow-hidden"
        >
          {/* Title - Slide from Left */}
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-xl font-bold"
          >
            {num === 1
              ? "Start Selling & Buying Today!"
              : num === 2
              ? "Add to Wishlist Today!"
              : num === 3
              ? "Chat with the Seller!"
              : num === 4
              ? "Start Selling Today!"
              : "Check Your Products Today!"}
          </motion.h3>

          {/* Description - Slide from Left */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            className="text-gray-600 mt-2 text-sm max-w-xs mx-auto"
          >
            {num === 1
              ? "Easily list your items for sale or browse through a variety of student essentials available at great prices."
              : num === 2
              ? "Save your favorite items and keep track of them by adding them to your wishlist for quick access later."
              : num === 3
              ? "Connect directly with sellers through our in-app chat feature to negotiate deals and ask questions."
              : num === 4
              ? "Sell unused or pre-loved items within the student community and make extra cash effortlessly."
              : "All the items details in one place."}
          </motion.p>

          {/* Button - Fade in */}
          
            <DownloadButton />

          {/* Image - Rise from Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.3 }}
          >
            <Image
              src={`/images/product${num}.png`}
              width={300}
              height={300}
              className="rounded-lg shadow-md mx-auto mt-7"
              alt={`Feature ${num}`}
            />
          </motion.div>
        </section>
      ))}

      <section className="text-center py-8 mt-12 w-full max-w-md mx-auto overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="text-l font-bold text-red-800"
        >
          BENEFITS
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
          className="text-4xl font-extrabold mt-7 mx-10"
        >
          it does a lot of things
        </motion.h2>
        
          <DownloadButton />
      </section>
      <motion.section
        className="py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }, // Stagger effect for each benefit
          },
        }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="max-w-md mx-auto mb-10"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-red-800 w-14 h-14 flex items-center justify-center rounded-lg mx-auto shadow-md">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-bold mt-4">{benefit.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.section>

      <section className="max-w-2xl mx-auto py-10 px-6">
        <section className="text-center py-16 mt-12 w-full max-w-md mx-auto overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-l font-bold text-red-800"
          >
            FAQ
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            className="text-4xl font-extrabold mt-7 mx-10"
          >
            Frequently Asked Questions
          </motion.h2>
        </section>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-3 mb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center font-medium text-lg"
            >
              {faq.question}
              <span className="text-red-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                openIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden text-gray-700 mt-2"
            >
              {openIndex === index && <p>{faq.answer}</p>}
            </motion.div>
          </div>
        ))}
      </section>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white text-gray-700 py-6 mt-10 w-full text-center"
      >
        <p className="text-sm">
          Developed by <span className="font-semibold">MALAIARASAN</span>
        </p>

        <p className="text-sm mt-1">
          Contact:
          <a
            href="mailto:arasanmalai123@gmail.com"
            className="text-red-400 hover:text-red-500 transition ml-1"
          >
            arasanmalai123@gmail.com
          </a>
        </p>

        <div className="mt-4 flex justify-center space-x-4 text-sm ">
          <a
            href="https://utmmart.netlify.app/about"
            className="text-blue-700 transition underline"
          >
            About
          </a>
          <a
            href="https://utmmart.netlify.app/privacy"
            className="text-blue-700 transition underline"
          >
            Privacy Policy
          </a>
          <a
            href="https://utmmart.netlify.app/terms"
            className="text-blue-700 transition underline"
          >
            Terms & Conditions
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Malaiarasan. All rights reserved.
        </p>
      </motion.footer>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full sm:w-96 sm:h-auto text-center relative flex flex-col justify-center items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <FaTimes className="text-2xl" />
            </button>
            <h2 className="text-xl font-bold mb-2 mt-12 sm:mt-0">
              🎉 CampusMart is Now Live!
            </h2>
            <p className="text-gray-700 mb-4 px-4">
              Download CampusMart today and start buying, selling, and exploring
              your campus marketplace.
            </p>

            <div className="flex justify-center gap-4 mt-4 px-4">
              {/* Play Store Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=com.artist1711.campusapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/playstore.png"
                  alt="Get it on Play Store"
                  className="w-36 h-12 hover:scale-105 transition-transform"
                />
              </a>

              {/* App Store Badge */}
              <a
                href="https://apps.apple.com/app/campus-mart/id6746312127"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/appstore.png"
                  alt="Download on App Store"
                  className="w-36 h-12 hover:scale-105 transition-transform"
                />
              </a>
            </div>

            <p className="text-gray-500 mt-6 text-sm px-4">
              Prefer desktop? Visit our{" "}
              <a
                href="https://utmmart.netlify.app"
                className="text-blue-600 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                web version
              </a>
              too.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
