"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import {
  StarIcon,
  ShoppingBag01Icon,
  Tag01Icon,
  Copy01Icon,
  UserGroupIcon,
  Calendar01Icon,
  Home01Icon,
  Search01Icon,
  Notification01Icon,
  UserIcon,
  MenuIcon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import DownloadButton from "./download";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const PRIMARY_COLOR = "#0079D3";

const benefits = [
  {
    icon: (
      <HugeiconsIcon
        icon={Copy01Icon}
        size={22}
        color={"#fff"}
        strokeWidth={1.5}
      />
    ),
    title: "Confessions",
    description: "Post thoughts, memes, or secrets anonymously.",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={UserGroupIcon}
        size={22}
        color={"#fff"}
        strokeWidth={1.5}
      />
    ),
    title: "Communities",
    description: "Join groups, connect with peers, and share campus life.",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={Calendar01Icon}
        size={22}
        color={"#fff"}
        strokeWidth={1.5}
      />
    ),
    title: "Events",
    description: "Discover campus events & club activities.",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={ShoppingBag01Icon}
        size={22}
        color={"#fff"}
        strokeWidth={1.5}
      />
    ),
    title: "Marketplace",
    description: "Buy & sell items easily with students.",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={Tag01Icon}
        size={22}
        color={"#fff"}
        strokeWidth={1.5}
      />
    ),
    title: "Deals",
    description: "Find the best student prices.",
  },
  {
    icon: (
      <HugeiconsIcon
        icon={StarIcon}
        size={22}
        color={"#fff"}
        strokeWidth={1.5}
      />
    ),
    title: "Food & Rides",
    description: "Student-run delivery & ride-sharing.",
  },
];

const dummyPosts = [
  {
    id: 1,
    title: "Just saw my crush at the library!",
    description: "Anonymous post by student, 2h ago",
  },
  {
    id: 2,
    title: "Selling my old textbooks, DM me",
    description: "Marketplace post, 5h ago",
  },
  {
    id: 3,
    title: "Who else is stressed with finals?",
    description: "Confession, 1d ago",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-white text-black font-inter flex flex-col relative">
      <Head>
        <title>Campus - Malaysia’s 1st Student Social Media</title>
        <meta
          name="description"
          content="Campus lets students confess, connect, buy, sell, and explore — Malaysia’s 1st Student Social Media & Marketplace."
        />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center w-full py-3 px-4 border-b border-gray-200 sticky top-0 bg-white z-30 md:px-16 lg:px-24">
        <button
          className="p-1 sm:p-2 md:p-3 lg:p-4"
          onClick={() => setIsOpenMenu(true)}
        >
          <HugeiconsIcon
            icon={MenuIcon}
            size={24}
            className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10"
            color={PRIMARY_COLOR}
          />
        </button>

        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={112}
            height={112}
            className="w-12 sm:w-14 md:w-16 lg:w-20 h-auto"
          />
        </div>
      </header>

      {/* Sidebar Menu */}
      {isOpenMenu && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpenMenu(false)}
          ></div>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white w-64 h-full shadow-lg p-6 flex flex-col"
          >
            <button
              className="absolute top-4 right-4 p-1"
              onClick={() => setIsOpenMenu(false)}
            >
              <HugeiconsIcon
                icon={Cancel01Icon}
                size={24}
                color={PRIMARY_COLOR}
              />
            </button>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: PRIMARY_COLOR }}
            >
              Menu
            </h2>
            <nav className="flex flex-col gap-4 text-lg font-medium">
              {[
                "Home",
                "Confessions",
                "Communities",
                "Events",
                "Marketplace",
                "Deals",
                "Food & Rides",
                "Profile",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-blue-600 transition"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] ">
        {/* Full-width background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between px-4 pt-12 md:pt-0 md:px-16 min-h-[70vh]">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-centermt-8">
            <div className="flex items-center mb-4 gap-2">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={112}
                height={112}
                className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto -mx-3"
              />
              <h1
                className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium"
                style={{ color: PRIMARY_COLOR }}
              >
                Campus
              </h1>
            </div>

            <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed max-w-md md:max-w-none font-normal">
              Anonymous voices. <br />
              Real campus talk. <br />
              Best student marketplace.
            </p>

            <DownloadButton />
          </div>

          {/* Right Image / Mockup */}
          <div className="flex-1 mt-8 md:mt-0 flex justify-center md:justify-end w-full">
            {/* Mobile / small screen image */}
            <Image
              src="/images/example2.png"
              alt="App Mockup Small"
              width={300}
              height={600}
              className="w-full max-w-[320px] h-auto md:hidden"
            />

            {/* Medium and larger screen image */}
            <Image
              src="/images/example.png"
              alt="App Mockup"
              width={500}
              height={1000}
              className="
    hidden md:block
    w-full 
    md:max-w-[480px] lg:max-w-[600px] xl:max-w-[720px] 2xl:max-w-[820px] 
    h-auto
  "
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-black pb-12 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="relative backdrop-blur-xl 
                   shadow-lg flex items-center justify-center
                   hover:shadow-xl hover:scale-[1.03] 
                   transition-transform duration-300 overflow-hidden 
                   w-full h-[48rem]" // <-- added fixed height
      >
        <Image
          src={`/images/features/${i + 2}.png`}
          alt={`Feature ${i + 2}`}
          fill
          className="object-contain"
        />
      </div>
    ))}
  </div>
</section>

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - text */}
          <div>
            <h2
              className="text-3xl font-medium mb-6"
              style={{ color: PRIMARY_COLOR }}
            >
              Get Started with Campus
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Open the app and log in to your student account. In just a few
              clicks, you’ll unlock a world of anonymous campus voices, real
              conversations, and the best student marketplace.
            </p>

            <div className="flex">
              <DownloadButton />
            </div>

            <p className="mt-6 text-sm text-gray-500">
              New here?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Learn more
              </a>
            </p>
          </div>

          {/* Right side - image */}
          <div className="flex   lg:justify-end">
            <Image
  src="/images/mobiledemo.png"
  alt="Campus Mockup"
  width={340}         // largest width you want to support
  height={340}        // can be adjusted based on aspect ratio
  className="object-contain w-full max-w-[340px] h-auto"
/>
          </div>
        </div>
      </section>

      <footer className="w-full bg-black text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex-1 flex flex-col justify-centermt-8">
            <div className="flex items-center mb-4 gap-2">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={112}
                height={112}
                className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto -mx-3"
              />
              <h1
                className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-medium"
                style={{ color: PRIMARY_COLOR }}
              >
                Campus
              </h1>
            </div>

          </div>
          <p className="mb-4 text-lg">
  Connect, share, and explore with <strong>Campus</strong>. Post anonymously, chat with fellow students, or find and sell items in the student marketplace—all in one place. Try it today.
</p>


          <div className="flex flex-wrap gap-4 mb-6">
            <DownloadButton/>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
  <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
  <Link href="/terms" className="hover:text-gray-700">Terms</Link>
  <Link href="/help" className="hover:text-gray-700">Help</Link>
</div>

          <p className="mt-6 text-xs text-gray-500">© 2025 Campus</p>
        </div>
      </footer>
    </div>
  );
}
