import { Code, Database, Lightbulb } from "lucide-react";

const Skills = () => (
  <section id="skills" className="mt-16 px-6" data-aos='fade-up'>
    <h3 className="text-3xl font-bold mb-6 text-center">My Skills</h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
      {/* Frontend */}
      <div className="p-6 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-600 transition-all shadow-lg hover:shadow-cyan-500/30">
        <Code className="mx-auto text-cyan-400 mb-3 w-8 h-8" />
        <p className="font-medium">Frontend</p>
        <p className="text-sm text-gray-400">React, Next.js, Tailwind, HTML, CSS, JavaScript, Redux, Framer Motion</p>
      </div>
      {/* Backend */}
      <div className="p-6 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-blue-800 hover:to-gray-700 transition-all shadow-lg hover:shadow-cyan-500/30">
        <Database className="mx-auto text-cyan-400 mb-3 w-8 h-8" />
        <p className="font-medium">Backend</p>
        <p className="text-sm text-gray-400">Node.js, Express.js, MongoDB, REST APIs, JWT, Mongoose, Socket.IO</p>
      </div>
      {/* DSA */}
      <div className="p-6 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-blue-800 hover:to-gray-700 transition-all shadow-lg hover:shadow-cyan-500/30">
        <Lightbulb className="mx-auto text-cyan-400 mb-3 w-8 h-8" />
        <p className="font-medium">Problem Solving</p>
        <p className="text-sm text-gray-400">DSA, Algorithms, LeetCode, Codeforces, Competitive Programming</p>
      </div>
    </div>
  </section>
);

export default Skills;
