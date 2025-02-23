import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Antonio Carlos - Desenvolvedor Frontend",
  description:
    "Portfólio de Antonio Carlos, um desenvolvedor frontend apaixonado do Brasil especializado em tecnologias web modernas.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'