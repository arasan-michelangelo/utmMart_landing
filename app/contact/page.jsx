"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DownloadButton from "../download";
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
import { createClient } from "@supabase/supabase-js";

const PRIMARY_COLOR = "#0079D3";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);

export default  function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
   

  const handleSubmit = async (e) => {
    
  e.preventDefault();
  setLoading(true);
  setSuccess(false);

  try {
    const { error } = await supabase.from("landing_messages").insert([
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Error sending message: " + error.message);
    } else {
      setForm({ name: "", email: "", message: "" });
      setSuccess(true);
    }
  } catch (err) {
    console.error(err);
    alert("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
};


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
      <header className="sticky top-0 flex items-center justify-between w-full py-3 px-6 md:px-16 bg-black/80 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Campus Logo" width={40} height={40} />
          <h1 className="text-xl font-semibold text-[#E0E0E0]">Campus</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Download Button */}
        <div className="hidden md:block">
          <DownloadButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu03Icon} size={24} />
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 flex flex-col items-center py-4 md:hidden animate-fadeIn">
            {["Home", "About", "Contact"].map((name) => (
              <Link
                key={name}
                href={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                className="py-2 text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <div className="mt-3">
              <DownloadButton />
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="w-full py-28 px-6 text-center bg-gradient-to-b from-black via-[#0A0A0A] to-[#101010]">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-b from-[#E0E0E0] to-[#6F8099] bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Have questions, feedback, or partnership ideas? Our team would love to
          hear from you. Let’s make campus life better — together.
        </p>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: PRIMARY_COLOR }}>
              Send us a message
            </h3>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <HugeiconsIcon icon={UserIcon} size={18} color="#555" />
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full ml-2 outline-none bg-transparent text-gray-700"
                    required
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
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full ml-2 outline-none bg-transparent text-gray-700"
                    required
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
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full ml-2 outline-none bg-transparent text-gray-700 resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#0079D3] text-white py-3 rounded-lg font-medium hover:bg-[#0062b3] transition-all duration-200"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : success
                  ? "Message Sent ✅"
                  : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center">
            <div className="bg-[#F9FAFB] p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6" style={{ color: PRIMARY_COLOR }}>
                Contact Info
              </h3>
              <ul className="space-y-5 text-gray-700">
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

              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.instagram.com/campusapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#E1306C] transition-colors"
                >
                  <HugeiconsIcon icon={InstagramIcon} size={24} />
                </a>
                <a
                  href="https://www.reddit.com/r/CampusApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#FF4500] transition-colors"
                >
                  <HugeiconsIcon icon={RedditIcon} size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4 gap-2">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="text-2xl font-semibold" style={{ color: PRIMARY_COLOR }}>
              Campus
            </h1>
          </div>
          <p className="mb-6 text-gray-400 text-sm max-w-md">
            Campus connects students through stories, events, and marketplace deals —
            building Malaysia’s most supportive student community.
          </p>

          <div className="flex flex-wrap gap-5 text-sm text-gray-500 mb-6">
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

          <p className="text-xs text-gray-500">© 2025 Campus. All rights reserved.</p>
        </div>
      </footer>

      {/* Animation */}
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
          animation: fadeIn 0.25s ease-in-out;
        }
      `}</style>
    </div>
  );
}
