import localFont from "next/font/local";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const notoSerif = Merriweather_Sans({
  weight: ["400","700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata = {
  title: "CampusMart",
  description: "University Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={notoSerif.className}
      >
        {children}
      </body>
    </html>
  );
}
