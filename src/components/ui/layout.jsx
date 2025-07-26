import { Inter } from "next/font/google"
import "./globals.css"
import { WhatsAppFloatSimple } from "../components/whatsapp-float-simple"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Leonel Piter - Portfolio",
  description: "Desarrollador Web | Control de Calidad | Soluciones Tecnológicas",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <WhatsAppFloatSimple />
      </body>
    </html>
  )
}
