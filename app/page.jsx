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
  Message01Icon,
} from "@hugeicons/core-free-icons";

const PRIMARY_COLOR = "#0079D3";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      title: "Confessions",
      desc: "Share your thoughts, secrets, or memes anonymously. Stay real, stay safe, and let your voice be heard.",
      icon: Copy01Icon,
      image: "/confession.mp4",
    },
    // {
    //   title: "Communities",
    //   desc: "Join student-led groups, clubs, and societies. Connect over shared passions or campus vibes.",
    //   icon: UserGroupIcon,
    //   image: "/images/features/2.png",
    // },
    // {
    //   title: "Events",
    //   desc: "Discover what’s happening around campus — from club fairs to concerts and academic meetups.",
    //   icon: Calendar01Icon,
    //   image: "/images/features/3.png",
    // },
    {
      title: "Marketplace",
      desc: "Buy, sell, or trade items easily with students on your campus. Textbooks, gadgets, dorm essentials — all in one place.",
      icon: ShoppingBag01Icon,
      image: "/marketplace.mp4",
    },
    // {
    //   title: "Deals",
    //   desc: "Find exclusive student discounts on food, transport, and more — verified by real users.",
    //   icon: Tag01Icon,
    //   image: "/spark.mp4",
    // },
    // {
    //   title: "Food & Rides",
    //   desc: "Order student-run food deliveries or ride-sharing services at affordable campus-friendly prices.",
    //   icon: StarIcon,
    //   image: "/images/features/6.png",
    // },
    {
      title: "Chat & Connect",
      desc: "Start real conversations with other students — whether it’s deep talks, group chats, or casual DMs. Stay anonymous or go public when you’re ready.",
      icon: Message01Icon,
      image: "/chat.mp4",
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
              About Us
            </Link>
            {/* <Link href="/features" className="hover:text-white">
              Features
            </Link> */}
            {/* <Link href="/why-campusapp" className="hover:text-white">
              Why CampusApp
            </Link> */}
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
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors "
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
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full md:hidden flex flex-col items-center py-6 space-y-4 bg-black/25 backdrop-blur-lg border-t border-white/10 rounded-b-xl shadow-xl z-50"
              >
                <Link
                  href="/about"
                  className="w-full text-center py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About us
                </Link>

                <Link
                  href="/contact"
                  className="w-full text-center py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact us
                </Link>

                <DownloadButton className="mt-2" />
              </motion.div>
            )}
          </AnimatePresence>
        </header>

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
        </div>
      </section>

      <div className="relative w-full mx-auto h-[300px] sm:h-[500px] rounded-xl shadow-lg">
        <Image
          src={`/images/landing.png`}
          alt="Campus App Preview"
          fill
          className="object-contain bg-[#111]"
          priority
        />
      </div>

      <section className="w-full text-center py-24 px-6 bg-black">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-b from-[#E0E0E0] to-[#6F8099] bg-clip-text text-transparent">
          Everything You Need, On Campus
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Campus isn’t just another social app — it’s your all-in-one student
          life hub. Confess, connect, trade, and explore with ease.
        </p>
      </section>
      {/* ====== Features Grid ====== */}
      <section className="w-full text-black  px-6">
        <div className=" mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden "
            >
              {/* Full video background */}
              <video
                src={f.image}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content overlay */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-64 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <HugeiconsIcon
                    icon={f.icon}
                    size={26}
                    color={PRIMARY_COLOR}
                  />
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
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
            Campus connects students through stories, events, and marketplace
            deals — building Malaysia’s most supportive student community.
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
              <HugeiconsIcon
                icon={InstagramIcon}
                size={27}
                color={PRIMARY_COLOR}
              />
            </a>
            <a
              href="https://www.reddit.com/r/cmpsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <HugeiconsIcon
                icon={RedditIcon}
                size={27}
                color={PRIMARY_COLOR}
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-6 text-xs text-gray-500">© 2025 Campus</p>
        </div>
      </footer>
    </div>
  );
}
