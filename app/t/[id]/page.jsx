"use client";

import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FavouriteIcon,
  BubbleChatFavouriteIcon,
  SquareLock01Icon,
  Menu03Icon,
  Cancel01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import DownloadButton from "../../download";

const PRIMARY_COLOR = "#0079D3";

export default function ConfessionPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-inter flex flex-col">
      <Head>
        <title>Campus Confessions – Download CampusApp</title>
        <meta
          name="description"
          content="Read anonymous student confessions from your campus. Share yours safely — only on CampusApp."
        />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="flex items-center justify-between w-full py-3 px-6 md:px-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Campus Logo" width={40} height={40} />
            <h1 className="text-xl font-semibold text-[#E0E0E0]">Campus</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <DownloadButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu03Icon} size={24} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 flex flex-col items-center py-6 gap-5 text-gray-300 md:hidden animate-slide-down">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-white">Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-white">Contact</Link>
            <div className="pt-2">
              <DownloadButton />
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full py-28 mt-16 flex flex-col items-center text-center px-6 bg-black">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-b from-[#E0E0E0] to-[#6F8099] bg-clip-text text-transparent">
          Confess. Connect. Feel Heard.
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
          Every student has a story — some loud, some quiet, some hidden.  
          CampusApp gives you a place to share yours safely, anonymously, and without judgment.
        </p>
      </section>

      {/* Emotional Section */}
      <section className="relative w-full text-white py-40 px-6 overflow-hidden">
        <video
          src="/confess.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>
            Every Confession Matters
          </h3>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Maybe it’s a secret crush.  
            Maybe it’s a regret.  
            Maybe it’s something you’ve never told anyone.
          </p>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            On CampusApp, thousands of students share their truths — safely, anonymously, and authentically.  
            You’re not alone. Someone out there feels the same.
          </p>
        </div>
      </section>

      {/* Why Use the App */}
      <section className="w-full bg-black py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4" style={{ color: PRIMARY_COLOR }}>
            Why Download CampusApp?
          </h3>
          <p className="text-gray-400 text-lg">
            Confessions are just the beginning. CampusApp connects students through stories,
            laughter, and support — safely within your university network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              icon: <HugeiconsIcon icon={FavouriteIcon} size={28} color="#fff" />,
              title: "Speak Your Heart",
              desc: "Say what you feel — crushes, mistakes, or dreams — without fear of judgment.",
            },
            {
              icon: <HugeiconsIcon icon={SquareLock01Icon} size={28} color="#fff" />,
              title: "Total Anonymity",
              desc: "Your identity stays safe. Only your truth is shared.",
            },
            {
              icon: <HugeiconsIcon icon={UserGroupIcon} size={28} color="#fff" />,
              title: "For Students Only",
              desc: "Every user is verified with a campus email, keeping it real and secure.",
            },
            {
              icon: <HugeiconsIcon icon={BubbleChatFavouriteIcon} size={28} color="#fff" />,
              title: "Relatable Stories",
              desc: "Read confessions from your campus — funny, emotional, inspiring.",
            },
            {
              icon: <HugeiconsIcon icon={SquareLock01Icon} size={28} color="#fff" />,
              title: "No Ads, No Tracking",
              desc: "We value your privacy. No creepy algorithms or sold data — ever.",
            },
            {
              icon: <HugeiconsIcon icon={FavouriteIcon} size={28} color="#fff" />,
              title: "Built with Empathy",
              desc: "Made by students who understand what it feels like to need a safe space.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="bg-[#111] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="mb-4">{v.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-white">{v.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4" style={{ color: PRIMARY_COLOR }}>
          Ready to Confess?
        </h3>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
          Download CampusApp today to share your story, listen to others,  
          and be part of Malaysia’s most real student community.
        </p>
        <DownloadButton />
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4 gap-2">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="text-2xl font-semibold" style={{ color: PRIMARY_COLOR }}>
              Campus
            </h1>
          </div>

          <p className="mb-4 text-gray-400 text-sm max-w-lg">
            Campus connects students through stories, events, and marketplace deals —
            building Malaysia’s most supportive student community.
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
