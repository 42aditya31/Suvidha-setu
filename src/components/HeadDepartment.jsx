'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { IconBriefcase, IconUsers, IconShieldCheck, IconBuilding, IconBook, IconSchool } from '@tabler/icons-react';
import Carousel from '../components/Carousel';

const Feature = ({ icon: Icon, title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-6 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      {/* Asymmetrical Overlay Effect */}
      <div className="absolute top-0 left-0 h-24 w-40 bg-blue-100 rounded-br-lg"></div>

      {/* Content */}
      <div className="relative z-10">
        <Icon size={38} stroke={1.5} className="text-blue-600" />
        <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
};

// Define PropTypes for validation
Feature.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const departmentsData = [
  {
    icon: IconBriefcase,
    title: 'Director, Employment and Training',
    description: 'Oversees employment and vocational training programs across the state.',
    link: 'https://talimrojgar.gujarat.gov.in/2014/default.aspx',
  },
  {
    icon: IconUsers,
    title: 'Commissioner of Labour',
    description: 'Ensures labor welfare, compliance, and industrial harmony.',
    link: 'https://col.gujarat.gov.in/',
  },
  {
    icon: IconShieldCheck,
    title: 'Director, Industrial Safety & Health',
    description: 'Regulates workplace safety, health, and industrial hygiene.',
    link: 'https://dish.gujarat.gov.in/',
  },
  {
    icon: IconBuilding,
    title: 'Director of Boilers (Wing of Commissioner of Labour)',
    description: 'Supervises boiler safety, inspections, and regulations.',
    link: 'https://boiler.gujarat.gov.in/',
  },
  {
    icon: IconBook,
    title: 'Mahatma Gandhi Labour Institute',
    description: 'Provides labor-related research, education, and training programs.',
    link: 'https://mgli.gujarat.gov.in/',
  },
  {
    icon: IconSchool,
    title: 'Kaushalya Skill University',
    description: 'Empowers students with skill-based learning and vocational training.',
    link: 'https://kaushalyaskilluniversity.ac.in/',
  },
];

export default function HeadDepartments() {
  return (
    <div className="max-w-6xl mx-auto my-16 px-6">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-10 border-b-4 border-blue-500 pb-2 inline-block">
        Heads of Departments
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {departmentsData.map((dept, index) => (
          <Feature key={index} {...dept} />
        ))}
      </div>

      <div class="p-6 bg-white py-10">
  <ul class="list-disc text-gray-800">
    <li class="font-semibold text-2xl"> Labour, Skill Development and Employment Department</li>
    <ul class="ml-6 my-8 py-10 border-l-2 space-y-3 border-gray-400 pl-10">
      <li class=" list-disc text-[#4a4e69]">
      Labour, Skill Development and Employment Department, Gujarat - The Department 
    activities can be divided broadly into two wings pertaining to Labour and 
    Employment. Labour wing is responsible for the implementation of various Labour 
    Laws to maintaining industrial peace.
      </li>
      <li class="list-disc text-[#4a4e69] mt-2">
      Employment wing is responsible for Registration, Sponsoring and giving Vocational 
    Guidance to the interested candidates and collection of Employment Market 
    Information. Its objective includes deciding rules and regulations for worker welfare, 
    labour training, and human empowerment.
      </li>
    </ul>
  </ul>
</div>
{/* Carousal  */}

      <Carousel />
    
    </div>
  );
}
