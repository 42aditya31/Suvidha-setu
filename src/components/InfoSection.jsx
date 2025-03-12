import React from "react";
import { FileText, ArrowRightCircle, ExternalLink, Info } from "lucide-react";

const InfoSection = () => {
  return (
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
      {/* Labour Resources */}
      <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 transition-all hover:shadow-2xl hover:-translate-y-1">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <Info size={22} className="text-[#4a4e69]" />
          Labour Resources
        </h3>
        <img
          src="https://source.unsplash.com/400x200/?workers,construction"
          alt="Labour"
          className="w-full rounded-lg mt-3 mb-4"
        />
        <ul className="space-y-2 text-[#4a4e69]">
          {[
            { name: "Related Laws", link: "#" },
            { name: "Crisis Group", link: "#" },
            { name: "Control Rooms", link: "#" },
            { name: "Medical Facilities", link: "#" },
            { name: "Fire Stations", link: "#" },
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 group">
              <ArrowRightCircle size={16} className="text-gray-600 group-hover:text-[#4a4e69]" />
              <a href={item.link} className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                {item.name} <ExternalLink size={14} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Important Information */}
      <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 transition-all hover:shadow-2xl hover:-translate-y-1">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <Info size={22} className="text-[#4a4e69]" />
          Important Information
        </h3>
        <ul className="mt-4 space-y-2 text-[#4a4e69]">
          {[
            "Right to Information",
            "Act & Rules",
            "Notifications",
            "Government Resolution",
            "Citizen Charter",
            "Forms",
            "Checklist Timelines",
            "Inspection",
          ].map((info, index) => (
            <li key={index} className="flex items-center gap-2 group">
              <ArrowRightCircle size={16} className="text-gray-600 group-hover:text-[#4a4e69]" />
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                {info} <ExternalLink size={14} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Information */}
      <div className="bg-gradient-to-br from-blue-50 to-white shadow-lg rounded-xl p-5 border border-gray-200 transition-all hover:shadow-2xl hover:-translate-y-1">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FileText size={22} className="text-[#4a4e69]" />
          Latest Information
        </h3>
        <ul className="mt-4 space-y-3 text-[#4a4e69]">
          {[
            { date: "January 03, 2025", desc: "Latest Announcement", file: "(3 MB)", link: "#" },
            { date: "December 11, 2024", desc: "Updated Guidelines", file: "(4 MB)", link: "#" },
          ].map((item, index) => (
            <li key={index} className="border-l-4 border-blue-500 pl-3">
              <span className="text-gray-600 text-sm">{item.date}</span>
              <p className="mt-1 flex items-center gap-1">
                <a href={item.link} className="text-blue-600 hover:text-blue-800 font-medium">
                  {item.desc}
                </a>
                <span className="ml-2 text-sm text-gray-500">{item.file} 📄</span>
              </p>
            </li>
          ))}
        </ul>
        <a href="#" className="text-green-700 font-medium hover:underline block mt-4 items-center gap-1">
          + Read All <ArrowRightCircle size={16} />
        </a>
      </div>
    </div>
  );
};

export default InfoSection;
