"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DownloadButton from "../download"; // adjust path if needed
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  UserIcon,
  Message01Icon,
  MapPinIcon,
  Menu03Icon,
  Cancel01Icon,
  InstagramIcon,
  RedditIcon,
} from "@hugeicons/core-free-icons";

const PRIMARY_COLOR = "#0079D3";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-inter flex flex-col">
      <Head>
        <title>Contact Us – Campus</title>
        <meta
          name="description"
          content="Get in touch with the Campus team. Whether you're a student, partner, or campus representative, we’d love to hear from you."
        />
      </Head>

      {/* Header */}
      <header className="relative flex items-center justify-between w-full py-3 px-6 md:px-16 bg-black border-b border-white/10 z-50">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Campus Logo" width={40} height={40} />
          <h1 className="text-xl font-semibold text-[#E0E0E0]">Campus</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/why-campusapp" className="hover:text-white transition-colors">
            Why CampusApp
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Download Button (Desktop) */}
        <div className="hidden md:block">
          <DownloadButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <HugeiconsIcon
              icon={menuOpen ? Cancel01Icon : Menu03Icon}
              size={24}
            />
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 flex flex-col items-center py-4 md:hidden animate-fadeIn">
            <Link
              href="/"
              className="py-2 text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-2 text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/features"
              className="py-2 text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/why-campusapp"
              className="py-2 text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Why CampusApp
            </Link>
            <Link
              href="/contact"
              className="py-2 text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-3">
              <DownloadButton />
            </div>
          </div>
        )}
      </header>

      {/* Contact Hero */}
      <section className="w-full py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-b from-[#E0E0E0] to-[#6F8099] bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Have questions, feedback, or partnership ideas? Our team would love to
          hear from you. Reach out and let’s make campus life better — together.
        </p>
      </section>

      {/* Contact Form */}
      <section className="w-full bg-white text-black py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: PRIMARY_COLOR }}>
              Send us a message
            </h3>
            <form className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <HugeiconsIcon icon={UserIcon} size={18} color="#555" />
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full ml-2 outline-none bg-transparent text-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <HugeiconsIcon icon={Mail01Icon} size={18} color="#555" />
                  <input
                    type="email"
                    placeholder="you@university.edu"
                    className="w-full ml-2 outline-none bg-transparent text-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <HugeiconsIcon icon={Message01Icon} size={18} color="#555" />
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full ml-2 outline-none bg-transparent text-gray-700 resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#0079D3] text-white py-3 rounded-lg font-medium hover:bg-[#0062b3] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: PRIMARY_COLOR }}>
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <HugeiconsIcon icon={Mail01Icon} size={20} color={PRIMARY_COLOR} />
                <a href="mailto:cmps.app.official@gmail.com" className="hover:underline">
                  cmps.app.official@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HugeiconsIcon icon={MapPinIcon} size={20} color={PRIMARY_COLOR} />
                <span>Malaysia</span>
              </li>
            </ul>

            
          </div>
        </div>
      </section>

     

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
        href="https://www.instagram.com/campusapp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <HugeiconsIcon icon={InstagramIcon} size={20} color={PRIMARY_COLOR} />
      </a>
      <a
        href="https://www.reddit.com/r/CampusApp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <HugeiconsIcon icon={RedditIcon} size={20} color={PRIMARY_COLOR} />
      </a>
    </div>

    {/* Copyright */}
    <p className="mt-6 text-xs text-gray-500">© 2025 Campus</p>
  </div>
</footer>


      {/* Simple animation for menu */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
