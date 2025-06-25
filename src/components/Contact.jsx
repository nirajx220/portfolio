import { Mail, Phoneap, Github, Linkedin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="mt-16 px-6 pb-12" data-aos='fade-up'>
    <h3 className="text-3xl font-bold mb-6 text-center">Contact Me</h3>
    <div className="max-w-lg mx-auto bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-cyan-500/30 transition-all">
      <p className="text-gray-400 mb-4">Let's connect and build something awesome together!</p>
      <div className="text-gray-300 space-y-3">
        <p className="flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /> nirajx220@example.com</p>
        <p className="flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /> +91 9876543210</p>
        
      </div>
      <div className="flex gap-6 justify-center mt-6">
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
          <Github className="hover:text-cyan-400 transition w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
          <Linkedin className="hover:text-cyan-400 transition w-6 h-6" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
