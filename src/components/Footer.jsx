"use client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Useful Links */}
        <h2 className="text-lg font-semibold text-blue-700 mb-4">Useful Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              href: "https://labour.gov.in/",
              src: "https://labour.gujarat.gov.in/images/ledmain/min-lab-emp-logo.png",
              alt: "Ministry of Labour & Employment",
              text: "Ministry of Labour & Employment",
            },
            {
              href: "https://labourbureau.gov.in/",
              src: "https://labour.gujarat.gov.in/images/ledmain/lab-bureaw-logo.png",
              alt: "Labour Bureau Government of India",
              text: "Labour Bureau Government of India",
            },
            {
              href: "https://vvgnli.gov.in/",
              src: "https://labour.gujarat.gov.in/images/ledmain/v-v-giri-national-logo.png",
              alt: "V. V. Giri National Labour Institute",
              text: "V. V. Giri National Labour Institute",
            },
            {
              href: "https://amritmahotsav.nic.in/",
              src: "https://labour.gujarat.gov.in/images/ledmain/azadi-logo.jpg",
              alt: "Azadi Ka Amrit Mahotsav",
              text: "Azadi Ka Amrit Mahotsav",
            },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-sm bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              <Image src={link.src} alt={link.alt} width={140} height={140} unoptimized />
              <p className="mt-2 font-medium">{link.text}</p>
            </a>
          ))}
        </div>

        {/* Last Updated & Visitors */}
        <div className="mt-6 text-sm bg-blue-800 text-white py-2 px-4 rounded-md shadow-md">
          <p>
            <strong>Page last updated on:</strong> 11/3/2025
          </p>
          <p>
            <strong>Visitors:</strong>{" "}
            <span className="font-bold">5,219,758</span>
          </p>
        </div>

        {/* Policies */}
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm">
          {[
            "Terms & Conditions",
            "Privacy Policy",
            "Copyright Policy",
            "Hyperlinking Policy",
            "Accessibility Statement",
            "Disclaimer",
            "Help",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              {item} <FaExternalLinkAlt size={10} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm mt-4 text-gray-600 text-center">
          <p>
            Copyright &copy; 2022 Labour, Skill Development and Employment
            Department. All Rights Reserved.
          </p>
        </div>

        {/* Bottom Logos */}
        <div className="flex justify-center items-center gap-8 mt-6 flex-wrap">
          {[
            {
              href: "https://www.india.gov.in/",
              src: "https://labour.gujarat.gov.in/images/ledmain/india_gov.jpg",
              alt: "India Gov",
            },
            {
              href: "https://digilocker.gov.in/",
              src: "https://labour.gujarat.gov.in/images/digilocker.jpg",
              alt: "DigiLocker",
            },
            {
              href: "https://india.gov.in/acts-rules",
              src: "https://labour.gujarat.gov.in/images/India-Code-logo.jpg",
              alt: "India Code",
            },
          ].map((logo, index) => (
            <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer">
              <Image src={logo.src} alt={logo.alt} width={120} height={50} unoptimized />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
