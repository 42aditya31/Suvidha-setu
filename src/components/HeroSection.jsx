import { IconCheck } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <section className="relative bg-white text-gray-900 py-12 px-6 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden border-2 border-red-500">
  <div className="area w-full h-full border-2 border-blue-500">
    <ul className="circles border-2 border-green-500">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <li key={index} className="border border-yellow-500"></li>
        ))}
    </ul>
  </div>
</div>


      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-6xl font-extrabold leading-tight text-[#22223b]">
            Transforming Governance
            <br />
            <span className="text-[#4a4e69]">Through Digital Innovation</span>
          </h1>

          <p className="text-lg text-gray-700 mt-6 leading-relaxed">
            A cutting-edge, centralized platform for <b>Labour, Skill Development, and Employment Departments</b>, 
            streamlining <b>data management, decision-making, and collaboration</b> with precision.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-4">
              <IconCheck className="text-[#4a4e69] w-6 h-6" />
              <span className="text-gray-800 font-medium">
                <b>Unified Dashboard:</b> Access and manage cross-departmental data effortlessly.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <IconCheck className="text-[#4a4e69] w-6 h-6" />
              <span className="text-gray-800 font-medium">
                <b>Real-Time Analytics:</b> Make informed decisions with live performance tracking.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <IconCheck className="text-[#4a4e69] w-6 h-6" />
              <span className="text-gray-800 font-medium">
                <b>Secure Role-Based Access:</b> Ensure data integrity with advanced permissions.
              </span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-[#22223b] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#4a4e69] transition-all duration-300">
              Explore Dashboard
            </button>
            <button className="bg-transparent border-2 border-[#4a4e69] text-[#4a4e69] font-semibold py-3 px-8 rounded-lg hover:bg-[#cbc0d3] hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src="/hero.jpg"
            alt="Hero section"
            className="max-w-lg shadow-xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
