"use client"

import Image from "next/image"
import { Github as GitHub, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

const CodePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
    </pattern>
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </svg>
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
    >
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0029FF] via-indigo-800 to-[#20028a] animate-gradient-x"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0029FF] to-[#8C00FF] dark:from-[#89a6fe] dark:to-[#ffffff]">
              Antonio Carlos
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Desenvolvedor Frontend
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Um desenvolvedor frontend apaixonado, especializado na criação de aplicações web modernas.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/acaj0"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Perfil do GitHub"
              >
                <GitHub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/acaj0"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Perfil do LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:Antoniocarlosjr007@hotmail.com"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Contato por Email"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            <motion.button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0029FF] to-[#8C00FF] text-white rounded-full hover:from-[#0024DB] hover:to-[#7800DB] transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba Mais
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0029FF] to-[#8C00FF] rounded-3xl transform rotate-6 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8C00FF] to-[#0029FF] rounded-3xl transform -rotate-6 opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/eu.jpg" alt="Antonio Carlos" width={384} height={384} className="object-cover" priority />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      

      <motion.div
        className="w-full max-w-6xl mx-auto px-6 mt-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {[
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                alt: "javascript",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
                alt: "typescript",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
                alt: "csharp",
              },
              { src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "tailwind" },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
                alt: "bootstrap",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
                alt: "postgresql",
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
                alt: "react",
              },
              { src: "/nextjs.svg", alt: "nextjs" },
              {
                src: "/shadcn.png",
                alt: "Shadcn",
              },
              { src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "git" },
              
            ].map((tech, index) => (
              <motion.div
                key={tech.alt}
                className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Image
                  src={tech.src || "/placeholder.svg"}
                  alt={tech.alt}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

