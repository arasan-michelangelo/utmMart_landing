"use client";

import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BubbleChatFavouriteIcon,
  SquareLock01Icon,
  UserGroupIcon,
  ShieldEnergyIcon,
  EarthIcon,
  FavouriteIcon,
  Menu03Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import DownloadButton from "../download";

const PRIMARY_COLOR = "#0079D3";

export default function WhyCampusApp() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-inter flex flex-col">
      <Head>
        <title>Why CampusApp – Built for Students, by Students</title>
        <meta
          name="description"
          content="Discover why CampusApp exists — empowering students to speak freely, connect safely, and make campus life better."
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
          <HugeiconsIcon
              icon={menuOpen ? Cancel01Icon : Menu03Icon}
              size={24}
            />
        </button>
        </div>

        {/* Mobile Dropdown */}
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

      {/* Hero */}
      <section className="relative w-full py-28 mt-16 flex flex-col items-center text-center px-6 bg-black">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-b from-[#E0E0E0] to-[#6F8099] bg-clip-text text-transparent">
          Why CampusApp Exists
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
          We built CampusApp to fix what’s broken about student life online —
          too many fake profiles, judgment, and stress. Campus is your
          anonymous, authentic home where real voices matter.
        </p>
      </section>

{/* The Story – From Noise to Connection */}
<section className="relative w-full text-white py-40 px-6 overflow-hidden">
  {/* Background Video */}
  <video
    src="/noise.mp4"
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>
      The Noise
    </h3>
    <p className="text-gray-200 text-lg leading-relaxed mb-4">
      Scroll. Like. Post. Repeat.  
      Every day, students drown in endless feeds — voices shouting, filters glowing, hearts racing to keep up.  
      Somewhere between validation and exhaustion, we stopped being <span className="italic">real</span>.
    </p>
    <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
      Behind every “perfect” post is a student just trying to be heard.  
      But the louder the world gets, the quieter our truth becomes.
    </p>
  </div>
</section>

{/* The Spark */}
<section className="relative w-full text-white py-40 px-6 overflow-hidden">
  {/* Background Video */}
  <video
    src="/spark2.mp4"
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Soft gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>
      The Spark
    </h3>
    <p className="text-gray-200 text-lg leading-relaxed mb-4">
      It began with a question:  
      <span className="italic">What if students could speak without fear?</span>  
      No judgment. No pressure. Just honesty — raw, unfiltered, human.
    </p>
    <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
      That question became a whisper.  
      Then a voice.  
      Then a movement — students across Malaysia finding a space that finally feels like home.
    </p>
  </div>
</section>


      {/* What Makes Us Different */}
      <section className="w-full bg-black py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4" style={{ color: PRIMARY_COLOR }}>
            What Makes Us Different
          </h3>
          <p className="text-gray-400 text-lg">
            We’re not just another app. We’re a student movement focused on privacy,
            empathy, and empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              icon: <HugeiconsIcon icon={BubbleChatFavouriteIcon} size={28} color="#fff" />,
              title: "Anonymous, but Real",
              desc: "Share without fear. Be honest. Be authentic. Your voice matters.",
            },
            {
              icon: <HugeiconsIcon icon={SquareLock01Icon} size={28} color="#fff" />,
              title: "Privacy First",
              desc: "Campus is built around your safety — no data selling, no outsiders.",
            },
            {
              icon: <HugeiconsIcon icon={UserGroupIcon} size={28} color="#fff" />,
              title: "Verified Campus Network",
              desc: "Only real students with verified campus emails can join your community.",
            },
            {
              icon: <HugeiconsIcon icon={ShieldEnergyIcon} size={28} color="#fff" />,
              title: "Community Moderation",
              desc: "Students help maintain respectful and supportive discussions.",
            },
            {
              icon: <HugeiconsIcon icon={EarthIcon} size={28} color="#fff" />,
              title: "Expanding Across Malaysia",
              desc: "We’re connecting universities nationwide under one student voice.",
            },
            {
              icon: <HugeiconsIcon icon={FavouriteIcon} size={28} color="#fff" />,
              title: "Built with Empathy",
              desc: "We understand because we’re students too. Every feature is for you.",
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

      {/* Impact / CTA */}
      <section className="w-full bg-white py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4" style={{ color: PRIMARY_COLOR }}>
          Be Part of the Change
        </h3>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
          Join thousands of Malaysian students creating a healthier, safer,
          and more authentic online community. CampusApp isn’t just an app —
          it’s a movement.
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
