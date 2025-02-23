"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout, GitBranch, Terminal, Globe } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const skills = [
  {
    icon: Code,
    name: "Desenvolvimento Frontend",
    tech: "React.js, Next.js",
    description:
      "Construção de aplicações web modernas com React e Next.js, focando em design responsivo.",
    color: "text-[#0029FF]",
  },
  {
    icon: Terminal,
    name: "Linguagens",
    tech: "JavaScript, TypeScript, C#",
    description: "Proficiente em desenvolvimento moderno com JavaScript, TypeScript e C#.",
    color: "text-[#8C00FF]",
  },
  {
    icon: Layout,
    name: "Estilização",
    tech: "Tailwind CSS, Bootstrap",
    description: "Criação de interfaces bonitas e responsivas usando frameworks CSS modernos.",
    color: "text-[#0029FF]",
  },
  {
    icon: Database,
    name: "Bancos de Dados",
    tech: "MongoDB, PostgreSQL",
    description: "Trabalho com bancos de dados SQL e NoSQL para gerenciamento eficiente de dados.",
    color: "text-[#8C00FF]",
  },
  {
    icon: GitBranch,
    name: "Controle de Versão",
    tech: "Git, GitHub",
    description: "Gerenciamento de versões de código e colaboração efetiva através do Git e GitHub.",
    color: "text-[#0029FF]",
  },
  {
    icon: Globe,
    name: "Tecnologias Web",
    tech: "HTML5, CSS3, Node.js",
    description: "Conhecimento abrangente de tecnologias web fundamentais e desenvolvimento server-side.",
    color: "text-[#8C00FF]",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Habilidades & Especialidades" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-[#0029FF] dark:group-hover:text-[#2B5FFF] transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

