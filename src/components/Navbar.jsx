import { FileDown } from "lucide-react";

const Navbar = () => (
  <nav className="p-4 border-b border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
    <h1 className="text-2xl font-extrabold text-white tracking-wide">Niraj</h1>
    <div className="space-x-4 flex items-center">
      <a href="#about" className="hover:text-cyan-400 transition-all">About</a>
      <a href="#skills" className="hover:text-cyan-400 transition-all">Skills</a>
      <a href="#projects" className="hover:text-cyan-400 transition-all">Projects</a>
      <a href="#contact" className="hover:text-cyan-400 transition-all">Contact</a>
      <a href="/resume.pdf" download className="flex items-center gap-1 text-sm text-cyan-400 hover:underline">
        <FileDown className="w-4 h-4" /> Resume
      </a>
    </div>
  </nav>
);

export default Navbar;
