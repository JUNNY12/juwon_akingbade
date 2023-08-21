import AboutContent from "./component/AboutContent"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Juwon Akingbade | About',
  description: 'Juwon Akingbade is a software engineer based in Lagos, Nigeria.',
  keywords:['Juwon', 'Akingbade', 'Junny' ],
  alternates: {
    canonical:'/about',
    languages:{
      'en-US':'/en-US'
    }
  },
  openGraph:{
    title:'Juwon Akingbade | About',
    description:'Juwon Akingbade is a software engineer based in Lagos, Nigeria.',
    url:'/about',
    images: '/Mine.jpg',
    type:'website',
  },
  twitter:{
    card:'summary_large_image',
    title:'Juwon Akingbade | About',
    description: 'Juwon Akingbade is a software engineer based in Lagos, Nigeria.',
    images: '/Mine.jpg'
  }
}

export default function About() {
  return <AboutContent />
}