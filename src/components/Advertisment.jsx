"use client";

import React from "react";
import Image from "next/image";
import { IconShieldCheck, IconBuildingFactory } from "@tabler/icons-react";

// Card Component
const Card = ({ icon: Icon, title, description, gradient }) => {
  return (
    <div className="relative flex p-6 bg-white/80 backdrop-blur-lg shadow-lg rounded-xl border border-gray-300 transition-all transform hover:shadow-2xl w-full sm:w-[400px]">
      {/* Left Gradient Border */}
      <div className={`absolute inset-y-0 left-0 w-2 rounded-lg ${gradient}`}></div>

      {/* Icon & Content */}
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${gradient} text-white shadow-md`}>
          <Icon size={28} stroke={1.5} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Officials Data
const officials = [
  {
    name: "Shri Bhupendra Patel",
    role: "Hon'ble Chief Minister, Government of Gujarat",
    img: "https://labour.gujarat.gov.in/images/Bhupendra-Patel.png",
  },
  {
    name: "Shri Balvantsinh Rajput",
    role: "Hon'ble Minister, Labour, Skill Development and Employment Department Gujarat State",
    img: "https://labour.gujarat.gov.in/images/Balvasinh-Rajput.png",
  },
  {
    name: "Shri Kunvarjibhai Halapati",
    role: "Hon'ble Minister of State, Labour, Skill Development and Employment Department Gujarat State",
    img: "https://labour.gujarat.gov.in/Portal/Document/1_647_1_Kunvarjibhai_Halpati__Minister_of_state_Tribal_Development__Labour___Employment___Rural_Development_-2.png",
  },
  {
    name: "Dr. Vinod R. Rao, IAS",
    role: "Principal Secretary, Labour, Skill Development and Employment Department",
    img: "https://labour.gujarat.gov.in/Portal/Document/1_1861_1_Vinod_rao-IAS.jpg",
  },
];

// Advertisment Component
export default function Advertisment() {
  return (
    <div className="max-w-7xl mx-auto my-16 px-6">
      {/* Section Title */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Welfare Initiatives
      </h1>

      {/* Welfare Cards Grid (Responsive) */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        <Card
          icon={IconShieldCheck}
          title="Shramik Suraksha"
          description="Rs. 1,00,000 for accidental death or permanent disablement. Rs. 50,000 for partial disablement. Available for agricultural & unorganized labour (14-70 years)."
          gradient="bg-gradient-to-r from-[#4a4e69] to-[#9a8c98]"
        />
        <Card
          icon={IconBuildingFactory}
          title="Salt Workers"
          description="Scheme for 45,801 salt workers in 35 Talukas. 90% of workers in India & Gujarat are unorganized. Legal protective provisions in place."
          gradient="bg-gradient-to-r from-[#feeafa] to-[#dee2ff]"
        />
        <Card
          icon={IconShieldCheck}
          title="Shramik Suraksha"
          description="Rs. 1,00,000 for accidental death or permanent disablement. Rs. 50,000 for partial disablement. Available for agricultural & unorganized labour (14-70 years)."
          gradient="bg-gradient-to-r from-[#4a4e69] to-[#9a8c98]"
        />
      </div>

      {/* Government Officials Grid (Responsive) */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-center mt-16">
        {officials.map((official, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 bg-white shadow-lg rounded-lg border border-gray-300 w-full">
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src={official.img}
                alt={official.name}
                width={64}
                height={64}
                className="rounded-full object-cover border border-gray-200"
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-base font-semibold text-gray-900">{official.name}</h3>
              <p className="text-sm text-gray-600 leading-tight">{official.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
