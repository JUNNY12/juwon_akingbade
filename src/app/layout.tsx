import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/sharedComponents/Nav'
import { Provider } from '@/provider/Provider'
import { ScrollToTop } from '@/sharedComponents/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juwon Akingbade',
  description: 'Juwon Akingbade is a software engineer based in Lagos, Nigeria.',
  icons:{
    icon:'/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen'>
      <Provider>
          <Nav />
          {children}
          <ScrollToTop />
      </Provider>
      </body>
    </html>
  )
}
