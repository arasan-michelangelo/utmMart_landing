"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import DownloadButton from "./download"; // adjust path if needed
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Copy01Icon,
  UserGroupIcon,
  Calendar01Icon,
  ShoppingBag01Icon,
  Tag01Icon,
  StarIcon,
  Menu03Icon,
  Cancel01Icon,
  InstagramIcon,
  RedditIcon,
} from "@hugeicons/core-free-icons";

const PRIMARY_COLOR = "#0079D3";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: Copy01Icon,
      title: "Anonymous Confessions",
      desc: "Post thoughts, secrets, or memes freely without judgment.",
    },
    {
      icon: UserGroupIcon,
      title: "Student Communities",
      desc: "Join campus-based groups and connect with peers near you.",
    },
    {
      icon: Calendar01Icon,
      title: "Campus Events",
      desc: "Stay updated on your university’s latest activities and club events.",
    },
    {
      icon: ShoppingBag01Icon,
      title: "Marketplace",
      desc: "Buy, sell, or trade items with trusted students easily.",
    },
    {
      icon: Tag01Icon,
      title: "Deals & Discounts",
      desc: "Find the best local student offers and save more.",
    },
    {
      icon: StarIcon,
      title: "Food & Rides",
      desc: "Enjoy student-run food delivery and ride-sharing.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter flex flex-col">
      <Head>
        <title>Campus – Malaysia’s 1st Student Social Media</title>
        <meta
          name="description"
          content="Campus lets students confess, connect, buy, sell, and explore — Malaysia’s 1st Student Social Media & Marketplace."
        />
      </Head>

      {/* ===== Hero Section ===== */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pb-32 px-6 text-center overflow-hidden">
        {/* ===== Header ===== */}
        <header className="flex z-20 items-center justify-between w-full py-4 px-6 md:px-16 border-b border-white/10 fixed top-0  backdrop-blur-lg">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Campus Logo"
              width={40}
              height={40}
            />
            <h1 className="text-xl font-semibold text-[#E0E0E0]">Campus</h1>
          </div>

          {/* ===== Desktop Nav ===== */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/features" className="hover:text-white">
              Features
            </Link>
            <Link href="/why-campusapp" className="hover:text-white">
              Why CampusApp
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </nav>

          {/* ===== Download Button (Desktop) ===== */}
          <div className="hidden md:block">
            <DownloadButton />
          </div>

          {/* ===== Mobile Menu Button ===== */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HugeiconsIcon
              icon={menuOpen ? Cancel01Icon : Menu03Icon}
              size={24}
            />
          </button>

          {/* ===== Mobile Menu ===== */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-full left-0 w-full bg-black/25 border-t border-white/10 md:hidden flex flex-col items-center text-gray-300 py-6 space-y-4  backdrop-blur-lg"
              >
                <Link
                  href="/about"
                  className="hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/features"
                  className="hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/why-campusapp"
                  className="hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Why CampusApp
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>

                <DownloadButton />
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ===== Hero Background ===== */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        ></div> */}

        {/* Background Video */}
  <video
    src="/sky.mp4"
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Soft gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>


        {/* ===== Hero Content ===== */}
        <div className="relative z-10 max-w-2xl mx-auto pt-40 sm:pt-48">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-semibold mb-6 bg-gradient-to-b from-[#E0E0E0] to-[#6F8099] bg-clip-text text-transparent"
          >
            Real People. Real Confessions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8"
          >
            A safe and anonymous space for Malaysia’s students to share stories,
            express thoughts, and build real campus communities.
          </motion.p>

          <DownloadButton />

          {/* <p className="mt-6 text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="#" className="text-[#0079D3] hover:underline">
              Sign In
            </Link>
          </p> */}
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="w-full bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h3
            className="text-3xl font-semibold mb-4"
            style={{ color: PRIMARY_COLOR }}
          >
            What You Can Do on Campus
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Campus isn’t just an app — it’s your digital campus life, all in one
            place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F8F9FA] p-8 rounded-2xl shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <HugeiconsIcon icon={f.icon} size={30} color={PRIMARY_COLOR} />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-[#111]">
                {f.title}
              </h4>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== App Preview Section ===== */}
      <section className="w-full bg-black py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
          <h3
            className="text-3xl font-semibold mb-2"
            style={{ color: PRIMARY_COLOR }}
          >
            See Campus in Action
          </h3>
          <p className="text-gray-400 max-w-2xl mb-6">
            Designed for simplicity and freedom — explore your campus’s social
            world.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {[2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative h-[700px] sm:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-lg hover:scale-[1.02] transition-transform"
              >
                <Image
                  src={`/images/features/${i + 0}.png`}
                  alt={`App Feature ${i}`}
                  fill
                  className="object-contain bg-[#111]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="w-full bg-white py-20 px-6 text-center">
        <h3
          className="text-3xl font-semibold mb-4"
          style={{ color: PRIMARY_COLOR }}
        >
          Be Part of the New Campus Experience
        </h3>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
          Campus is changing how students connect, vent, and collaborate.
          Download now and be part of the movement.
        </p>
        <DownloadButton />
      </section>

      {/* ===== Footer ===== */}
      <footer className="w-full bg-black text-gray-300 py-10 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Logo + Title */}
    <div className="flex items-center mb-4 gap-2">
      <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
      <h1
        className="text-2xl font-semibold"
        style={{ color: PRIMARY_COLOR }}
      >
        Campus
      </h1>
    </div>

    {/* Description */}
    <p className="mb-4 text-gray-400 text-sm max-w-lg">
      Campus connects students through stories, events, and marketplace deals —
      building Malaysia’s most supportive student community.
    </p>

    {/* Footer Links */}
    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
      <Link href="/privacy" className="hover:text-gray-300">
        Privacy
      </Link>
      <Link href="/terms" className="hover:text-gray-300">
        Terms
      </Link>
      <Link href="/help" className="hover:text-gray-300">
        Help
      </Link>
    </div>

    {/* Social Media */}
    <div className="flex items-center gap-4 mt-4">
      <a
        href="https://www.instagram.com/thecmpsapp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <HugeiconsIcon icon={InstagramIcon} size={27} color={PRIMARY_COLOR} />
      </a>
      <a
        href="https://www.reddit.com/r/cmpsapp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <HugeiconsIcon icon={RedditIcon} size={27} color={PRIMARY_COLOR} />
      </a>
    </div>

    {/* Copyright */}
    <p className="mt-6 text-xs text-gray-500">© 2025 Campus</p>
  </div>
</footer>

    </div>
  );
}
