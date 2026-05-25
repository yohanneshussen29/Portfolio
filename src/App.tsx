import React from 'react';
import {
  Phone, Mail, MapPin, Monitor, Smartphone, Video, Code, ArrowRight,
  Image
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import profileImg from "./assets/web-developer.png";

export default function Portfolio() {
  return (
    <div className="bg-[#090E17] text-white min-h-screen font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-3xl font-bold text-cyan-400 tracking-tighter">
          YH<span className="text-white">.</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <li className="text-cyan-400 cursor-pointer">HOME</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">ABOUT ME</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">PORTFOLIO</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">SERVICES</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">EXPERIENCE</li>
        </ul>
        <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-md font-semibold hover:opacity-90 transition">
          CONTACT
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[70vh]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <h1 className="text-[6rem] md:text-[12rem] font-black text-white/5 select-none leading-none text-center">DEVELOPER</h1>
        </div>
        <div className="relative z-10 max-w-3xl">
          <p className="text-xl md:text-2xl text-gray-400 mb-2 font-medium">Hi 👋 I'm Yohannes Hussen</p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-8">
            FULL STACK <br />
            APPLICATION <br />
            DEVELOPER<span className="text-cyan-400">.</span>
          </h1>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-md font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-blue-500/30">
            Previous Projects
          </button>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="relative w-full max-w-md mx-auto md:mx-0">
          <div className="absolute -inset-4 border-4 border-cyan-400 rounded-lg -z-10 translate-x-4 translate-y-4"></div>
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-auto rounded-lg object-cover bg-gray-800"
          />
        </div>
        <div className="w-full max-w-2xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 tracking-wide">ABOUT ME</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-md font-semibold hover:opacity-90 transition">
              HIRE ME
            </button>
            <button className="px-8 py-3 bg-transparent border border-gray-500 rounded-md font-semibold hover:border-cyan-400 transition">
              RESUME
            </button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10 tracking-wide text-center">PORTFOLIO</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-16 text-lg font-medium">
          <span className="text-cyan-400 cursor-pointer border-b-2 border-cyan-400 pb-1">Mobile App</span>
          <span className="text-gray-400 cursor-pointer hover:text-white transition">Website</span>
          <span className="text-gray-400 cursor-pointer hover:text-white transition">Desktop</span>
          <span className="text-gray-400 cursor-pointer hover:text-white transition">Other Projects</span>
        </div>

        {/* Project 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full mb-24">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-cyan-400 text-xl font-medium mb-2">PROJECT 1</h3>
            <h4 className="text-3xl md:text-4xl font-bold mb-6">Dating Mobile App Design</h4>
            <p className="text-gray-400 leading-relaxed mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className="flex items-center justify-center md:justify-start text-sm font-bold tracking-wider hover:text-cyan-400 transition mx-auto md:mx-0">
              <ArrowRight className="mr-2 h-5 w-5" /> Read more
            </button>
          </div>
          <div className="w-full md:w-1/2 relative px-4 md:px-0">
            <div className="absolute -inset-4 border-4 border-cyan-400 rounded-lg -z-10 -translate-x-2 translate-y-2 md:-translate-x-4 md:translate-y-4 hidden md:block"></div>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Project 1" className="w-full rounded-lg object-cover" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-16 tracking-wide text-center">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {[
            { title: "VIDEO EDITING", icon: <Video className="text-purple-500 w-8 h-8" /> },
            { title: "MOBILE APP DEVELOPMENT", icon: <Smartphone className="text-purple-500 w-8 h-8" /> },
            { title: "DESKTOP APP DEVELOPMENT", icon: <Monitor className="text-purple-500 w-8 h-8" /> },
            { title: "PROGRAMMING LANGUAGES", icon: <Code className="text-purple-500 w-8 h-8" /> }
          ].map((service, idx) => (
            <div key={idx} className="p-[2px] rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="bg-[#0B1221] p-8 rounded-xl h-full flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full">{service.icon}</div>
                  <h3 className="text-xl font-bold leading-tight w-full md:w-1/2">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-16 tracking-wide text-center">EXPERIENCE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 md:gap-x-20 gap-y-12 w-full justify-items-center">
          {['AWS', 'CSS3', 'React.JS', 'HTML', 'Java', 'Javascript', 'Node.JS', 'Python'].map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-500 shadow-md">
                {tech[0]}
              </div>
              <span className="text-gray-300 font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#4B3B99] to-[#2E5894] p-8 md:p-16 flex flex-col md:flex-row gap-12">
          {/* Abstract circle backgrounds */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>

          <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Drop Me a Message</h2>
            <p className="text-gray-200 mb-10 text-sm leading-relaxed text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><Phone className="text-white w-5 h-5" /></div>
                <span>+92 3068572831</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><Mail className="text-white w-5 h-5" /></div>
                <span>fazzzi172@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm"><MapPin className="text-white w-5 h-5" /></div>
                <span className="max-w-[200px] md:max-w-[300px]">House No: 07 Rafsar Town, Mirpurkhas, 69000, Sindh Pakistan</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl">
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Name" className="w-full bg-[#111827] text-white px-4 py-4 rounded-lg outline-none border border-transparent focus:border-cyan-400 transition" />
                <input type="email" placeholder="Email" className="w-full bg-[#111827] text-white px-4 py-4 rounded-lg outline-none border border-transparent focus:border-cyan-400 transition" />
                <textarea rows="4" placeholder="Message" className="w-full bg-[#111827] text-white px-4 py-4 rounded-lg outline-none border border-transparent focus:border-cyan-400 transition resize-none"></textarea>
                <button type="submit" className="mt-2 w-full md:w-32 py-3 bg-[#111827] hover:bg-gray-800 text-white font-bold rounded-lg transition md:self-start">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto text-sm text-gray-400">
        <div className="text-2xl font-bold text-white tracking-tighter">
          FS<span className="text-cyan-400">.</span>
        </div>
        <div className="text-center">
          2022 - Fazil Studio, All rights reserved
        </div>
        <div className="flex space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <FaFacebookF className="text-white w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <FaInstagram className="text-white w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <FaLinkedinIn className="text-white w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition font-bold text-white">
            Bē
          </div>
        </div>
      </footer>
    </div>
  );
}