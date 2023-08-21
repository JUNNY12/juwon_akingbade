import './globals.css'
import type { Metadata } from 'next'
import Nav from '@/sharedComponents/Nav'
import { Provider } from '@/provider/Provider'
import { ScrollToTop } from '@/sharedComponents/ScrollToTop'
import { Footer } from '@/sharedComponents/Footer'

export const metadata: Metadata = {
  title: 'Juwon Akingbade',
  description: 'Juwon Akingbade is a software engineer based in Lagos, Nigeria.',
  referrer: 'origin-when-cross-origin',
  keywords:['Juwon', 'Akingbade', 'Junny' ],
  alternates: {
    canonical:'/',
    languages:{
      'en-US':'/en-US'
    }
  },
  openGraph:{
    title:'Juwon Akingbade',
    description:'Juwon Akingbade is a software engineer based in Lagos, Nigeria.',
    url:'/',
    images:'/Mine.jpg',
    type:'website',
  },
  twitter:{
    card:'summary_large_image',
    title:'Juwon Akingbade',
    description:'Juwon Akingbade is a software engineer based in Lagos, Nigeria',
    images:'/Mine.jpg'
  },
  icons:{
    icon:'/favicon.ico',
  },
  robots:{
    index:false,
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      follow:false,
      noimageindex:true,
    }
  },
  verification:{
    google:'google'
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
          <Footer />
      </Provider>
      </body>
    </html>
  )
}
