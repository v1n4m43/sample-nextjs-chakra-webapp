import Image from 'next/image'
import { Progress, Spinner } from '@chakra-ui/react'
import Hero from './hero/page'
import Contact from './contact/page'
import TestimonialPage from './testimonial/page'


export default function Home() {
  return (
    <>
    <Hero />
    <TestimonialPage />
  </>
  )
}
