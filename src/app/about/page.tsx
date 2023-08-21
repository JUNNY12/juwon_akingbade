import AboutContent from "./component/AboutContent"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Juwon Akingbade - About',
  description: '',
}

export default function About() {
  return <AboutContent />
}