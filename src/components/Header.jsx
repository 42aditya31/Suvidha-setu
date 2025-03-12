"use client"
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  {
    link: '#1',
    label: 'About Department',
    links: [
      { link: '/overview', label: 'Overview' },
      { link: '/mission', label: 'Mission & Vision' },
      { link: '/objective', label: 'Objectives' },
      { link: '/organization', label: 'Organization Structure' },
    ],
  },
  {
    link: '#2',
    label: 'Head of the Departments',
    links: [
      { link: '/docs', label: 'Director Employment and Training' },
      { link: '/resources', label: 'Commissioner of Labour' },
      { link: '/community', label: 'Director Industrial Safety and Health' },
      { link: '/blog', label: 'Director of Boilers (Wing of Commissioner of Labour)' },
      { link: '/blog', label: 'Mahatma Gandhi Labour Institute' },
      { link: '/blog', label: 'Kaushalya Skill University' },
    ],
  },
  {
    link: '#3',
    label: 'Board / Corporation',
    links: [
      { link: '/docs', label: 'Gujarat Skill Development Mission' },
      { link: '/resources', label: 'Gujarat State Unorganised Workers Welfare Board' },
      { link: '/community', label: "Building and Other Construction Worker's Welfare Board" },
      { link: '/blog', label: 'Gujarat Rural Workers Welfare Board' },
      { link: '/blog', label: 'Gujarat Labour Welfare Board' },
    ],
  },
  { link: '/about', label: 'E-Shram Seva' },
  {
    link: '#4',
    label: 'E-Citizen',
    links: [
      { link: '/faq', label: 'Act & Rules' },
      { link: '/demo', label: 'Right to Information' },
      { link: '/forums', label: 'Government Resolution' },
      { link: '/forums', label: 'Citizen Charter' },
      { link: '/forums', label: 'Circular' },
      { link: '/forums', label: 'Forms' },
      { link: '/forums', label: 'Process Flow Checklist Timelines' },
      { link: '/forums', label: 'Recruitment Rules' },
      { link: '/forums', label: 'Inspection' },
      { link: '/forums', label: 'Used Links' },
    ],
  },
  {
    link: '#5',
    label: 'Contact',
    links: [
      { link: '/overview', label: 'Officers Information' },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="/logoo.png"
            alt="Welth Logo"
            height={60}
            width={150}
            className="h-[80px] w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            link.links ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center gap-2 text-gray-700 font-medium">
                  {link.label} <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 top-full hidden w-48 bg-white shadow-md group-hover:block">
                  {link.links.map((subLink) => (
                    <Link
                      key={subLink.link}
                      href={subLink.link}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.link}
                className="text-gray-700 font-medium hover:text-blue-500"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          {links.map((link) => (
            link.links ? (
              <div key={link.label} className="mb-4">
                <p className="text-gray-700 font-medium mb-2">{link.label}</p>
                {link.links.map((subLink) => (
                  <Link
                    key={subLink.link}
                    href={subLink.link}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50"
                  >
                    {subLink.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.link}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      )}
    </header>
  );
}
