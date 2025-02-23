"use client"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const projects = [

  {
    id: 1,
    title: "Duzzi Totaline Refrigeração",
    description: "Landing page para uma das maiores empresas de Refrigeração do Mato-Grosso.",
    image: "/duzzicapa.jpg",
    link: "https://www.duzziclimatizacao.com",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Marx's Cleaning",
    description: "Website responsivo focado em conversão, com alto desempenho em SEO",
    image: "/6.jpg",
    link: "https://www.marxscleaning.com",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    title: "Top Pro Painting",
    description: "Landing Page responsiva focada em conversão, com alto desempenho em SEO",
    image: "/topprocapa.jpg",
    link: "https://www.toppropaint.com",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 4,
    title: "A9 Logística",
    description: "Website institucionais com Blog para empresa de logística do Mato Grosso.",
    image: "/a9capa.jpg",
    link: "https://www.a9logistica.com.br",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 5,
    title: "Anjo Salva Brigada de Emergência",
    description: "Landing page para a empresa de de atendimento de emergência em eventos.",
    image: "/5.jpg",
    link: "https://www.anjosalva.com.br",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 6,
    title: "Banda Digito Zero",
    description: "Site para banda de rock, com uma implementação de blog e SEO otimizado.",
    image: "/digitozerocapa.jpg",
    link: "https://www.bandadigitozero.com.br",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
]
 // {
  //   id: 7,
  //   title: "Zafaloon Filmmaker",
  //   description: "Portifolio responsivo com um painel para alteração dos dados em tempo real",
  //   image: "/duzzicapa.jpg",
  //   link: "/portfolio/zafalon",
  // },

export default function Portfolio() {
  return (
    <div id="portfolio" className="min-h-screen flex flex-col justify-between bg-gradient-to-br relative overflow-hidden from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-[#346399]">
      <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="skill-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M50 30 L50 70 M30 50 L70 50"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#skill-pattern)"
            />
          </svg>
        </div>

      <div className="pb-12 mt-20 px-4 text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">Portfólio</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Veja um pouco do meu trabalho. Confira alguns dos meus projetos
          recentes.
        </p>
      </div>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-black/20 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-0 pb-[56.25%] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      quality={90}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm bg-white/10 text-white rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent border-white text-white hover:bg-white hover:text-[#0c0817] transition-all duration-300 ease-in-out"
                      >
                        Ver Projeto
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

