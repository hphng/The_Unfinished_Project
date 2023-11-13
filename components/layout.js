import { Inter } from 'next/font/google'
import Header from './base/Header'
import SideBar from './base/SideBar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
