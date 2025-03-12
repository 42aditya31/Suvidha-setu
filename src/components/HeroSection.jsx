import { IconCheck } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <section className="relative bg-white text-gray-900 py-12 px-6 overflow-hidden">
      {/* Container */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#22223b]">
            Transforming Governance
            <br />
            <span className="text-[#4a4e69]">Through Digital Innovation</span>
          </h1>

          <p className="text-lg text-gray-700 mt-6 leading-relaxed">
            A cutting-edge, centralized platform for <b>Labour, Skill Development, and Employment Departments</b>, 
            streamlining <b>data management, decision-making, and collaboration</b> with precision.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { title: "Unified Dashboard", desc: "Access and manage cross-departmental data effortlessly." },
              { title: "Real-Time Analytics", desc: "Make informed decisions with live performance tracking." },
              { title: "Secure Role-Based Access", desc: "Ensure data integrity with advanced permissions." }
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <IconCheck className="text-[#4a4e69] w-6 h-6" />
                <span className="text-gray-800 font-medium">
                  <b>{item.title}:</b> {item.desc}
                </span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-10">
            <button className="bg-[#22223b] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#4a4e69] transition-all duration-300">
              Explore Dashboard
            </button>
            <button className="bg-transparent border-2 border-[#4a4e69] text-[#4a4e69] font-semibold py-3 px-8 rounded-lg hover:bg-[#cbc0d3] hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-lg">
          <img
            src="/hero.jpg"
            alt="Hero section"
            className="w-full shadow-xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
