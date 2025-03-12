import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suvidha-Setu",
  description: "**Suvidha-Setu** – An SSIP project aimed at creating a **Centralized Dashboard** for Labour, Skill Development, and Employment Departments. This platform streamlines data management, enhances decision-making with real-time insights, and improves coordination among departments. Built with **React.js, Node.js, MongoDB, and PostgreSQL**, it ensures secure, scalable, and efficient governance. 🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
