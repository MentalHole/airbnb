import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Modal from './components/Modals/Modal'
import RegisterModal from './components/Modals/RegisterModal'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <RegisterModal />
          <Navbar />
          <div className="pb-20 pt-20">
            {children}
          </div>
        </body>
    </html>
  )
}
