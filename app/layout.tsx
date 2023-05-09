import { Nunito } from 'next/font/google'

import './globals.css'
import NavBar from './components/navbar/NavBar'
import RegisterModal from './components/modals/RegisterModal'
import { ToasterProvider } from './providers/ToasterProvider'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'AirBnb',
  description: 'AirBnb Clone ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
