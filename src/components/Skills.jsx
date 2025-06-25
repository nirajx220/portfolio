import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaGithub
} from "react-icons/fa";
import {
  SiNextdotjs, SiRedux, SiMongodb, SiExpress, SiSocketdotio, SiFramer,
  SiMysql, SiPostgresql, SiSqlite, SiFirebase
} from "react-icons/si";
import "./Skills.css";

const frontend = [
  { name: "React", icon: <FaReact color="#61dafb" />, percent: 90 },
  { name: "Next.js", icon: <SiNextdotjs color="#fff" />, percent: 75 },
  { name: "HTML5", icon: <FaHtml5 color="#e34c26" />, percent: 95 },
  { name: "CSS3", icon: <FaCss3Alt color="#1572b6" />, percent: 90 },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" />, percent: 98 },
  { name: "Redux", icon: <SiRedux color="#764abc" />, percent: 80 },
  { name: "Framer Motion", icon: <SiFramer color="#fff" />, percent: 60 },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs color="#8cc84b" />, percent: 85 },
  { name: "Express.js", icon: <SiExpress color="#fff" />, percent: 80 },
  { name: "Socket.IO", icon: <SiSocketdotio color="#fff" />, percent: 60 },
  { name: "GitHub", icon: <FaGithub color="#fff" />, percent: 95 },
];

const database = [
  { name: "MongoDB", icon: <SiMongodb color="#4db33d" />, percent: 75 },
  { name: "MySQL", icon: <SiMysql color="#00758f" />, percent: 70 },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" />, percent: 65 },
  { name: "SQLite", icon: <SiSqlite color="#003b57" />, percent: 60 },
  { name: "Firebase", icon: <SiFirebase color="#ffcb2b" />, percent: 55 },
  { name: "Database (General)", icon: <FaDatabase color="#f29111" />, percent: 70 },
];

const SkillCard = ({ title, skills }) => (
  <div className="skill-card">
    <div className="skill-title">{title}</div>
    {skills.map((tool, idx) => (
      <div className="skill-row" key={idx}>
        <span className="skill-icon">{tool.icon}</span>
        <span className="skill-name">{tool.name}</span>
        <span className="skill-percent">{tool.percent}%</span>
        <div className="skill-bar-bg">
          <div className="skill-bar-fg" style={{ width: `${tool.percent}%` }} />
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => (
  <section id="skills" className="skills-section">
    <h3 className="skills-title">My Skills & Tools</h3>
    <div className="skills-list">
      <SkillCard title="Frontend" skills={frontend} />
      <SkillCard title="Backend" skills={backend} />
      <SkillCard title="Database & Other" skills={database} />
    </div>
  </section>
);

export default Skills;