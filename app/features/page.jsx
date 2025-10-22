"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
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
  Message01Icon,
} from "@hugeicons/core-free-icons";
import DownloadButton from "../download";

const PRIMARY_COLOR = "#0079D3";

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

export default function Features() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-inter flex flex-col">
      <Head>
        <title>Features – Campus Student App</title>
        <meta
          name="description"
          content="Explore all the features that make Campus Malaysia’s 1st student social media — confessions, marketplace, events, deals, and more."
        />
      </Head>

      {/* ====== Header ====== */}
      <header className="flex items-center justify-between w-full py-3 px-6 md:px-16 bg-black border-b border-white/10 relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Campus Logo" width={40} height={40} />
          <h1 className="text-xl font-semibold text-[#E0E0E0]">Campus</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/why-campusapp" className="hover:text-white">Why CampusApp</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>

        {/* Download button (Desktop) */}
        <div className="hidden md:block">
          <DownloadButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <HugeiconsIcon
              icon={menuOpen ? Cancel01Icon : Menu03Icon}
              size={24}
            />
        </button>

        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 flex flex-col items-center py-6 gap-5 text-gray-300 md:hidden animate-slide-down">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-white">Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white">About</Link>
            <Link href="/why-campusapp" onClick={() => setMenuOpen(false)} className="hover:text-white">Why CampusApp</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-white">Contact</Link>
            <div className="pt-2">
              <DownloadButton />
            </div>
          </div>
        )}
      </header>

      {/* ====== Hero ====== */}
      <section className="w-full text-center py-24 px-6 bg-black">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-b from-[#E0E0E0] to-[#6F8099] bg-clip-text text-transparent">
          Everything You Need, On Campus
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Campus isn’t just another social app — it’s your all-in-one student life hub.
          Confess, connect, trade, and explore with ease.
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
            <HugeiconsIcon icon={f.icon} size={26} color={PRIMARY_COLOR} />
            <h3 className="text-xl font-semibold">{f.title}</h3>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">{f.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* ====== CTA Section ====== */}
      <section className="w-full bg-black text-center py-24 px-6">
        <h3 className="text-3xl font-semibold mb-4" style={{ color: PRIMARY_COLOR }}>
          Ready to Explore?
        </h3>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Download Campus today and experience a student community that’s real, fun, and supportive.
        </p>
        <DownloadButton />
      </section>

      {/* ====== Footer ====== */}
      <footer className="w-full bg-black text-gray-300 py-10 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4 gap-2">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="text-2xl font-semibold" style={{ color: PRIMARY_COLOR }}>
              Campus
            </h1>
          </div>

          <p className="mb-4 text-gray-400 text-sm max-w-lg">
            Campus connects students through stories, events, and marketplace deals — building
            Malaysia’s most supportive student community.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms</Link>
            <Link href="/help" className="hover:text-gray-300">Help</Link>
          </div>

          <p className="mt-6 text-xs text-gray-500">© 2025 Campus</p>
        </div>
      </footer>
    </div>
  );
}
