"use client"

import { GraduationCap, Calendar, Award, CheckCircle2 } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
  const mainEducation = {
    degree: "Bacharelado em Sistema de Informação",
    institution: "Estácio",
    period: "Janeiro 2022 - Dezembro 2025",
    status: "Em andamento",
  }

  const certificates = [
    {
      name: "PROGRAMAÇÃO DE ALGORITMOS ESCALÁVEIS",
      institution: "Estácio",
      date: "Junho 2024",
    },
    {
      name: "PROGRAMAÇÃO PARA INTERNET",
      institution: "Estácio",
      date: "Dezembro 2023",
    },
    {
      name: "Complete React Developer",
      institution: "Udemy",
      date: "Novembro 2022",
    },
    {
      name: "The Complete Web Developer Course 3.0",
      institution: "Udemy",
      date: "Novembro 2022",
    },
  ]

  return (
    <section
      id="educacao"
      className="pb-20  text-white overflow-hidden relative"
    >
      <div className="container mx-auto px-6  relative z-10">
        <AnimatedSectionHeader title="Formação Acadêmica" />

        <div className="grid lg:grid-cols-2 gap-8 mx-auto">
          {/* Formação Principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="dark:bg-gray-800 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20 shadow-lg"
          >
            <div className="relative">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                  <h3 className="text-3xl font-bold text-white">{mainEducation.degree}</h3>
                </div>

                <div className="space-y-4">
                  <p className="text-xl text-purple-200">{mainEducation.institution}</p>

                  <p className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                    {mainEducation.period}
                  </p>

                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-200 border border-purple-500/30">
                    {mainEducation.status}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid de Certificados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="dark:bg-gray-800 p-6 rounded-lg backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-2">
                    <Award className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  </div>

                  <h4 className="font-medium text-lg text-white mb-2">{cert.name}</h4>

                  <div className="mt-auto">
                    <p className="text-purple-200 text-sm">{cert.institution}</p>
                    <p className="text-gray-400 text-sm flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Elementos decorativos de fundo */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  )
}

