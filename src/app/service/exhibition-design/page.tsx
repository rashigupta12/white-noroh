import ExhibitionHeroSection from '@/components/Exhibitionpage/herosection'
import HowWeDoSection from '@/components/Exhibitionpage/HowWeDoSectio'
import Somework from '@/components/Exhibitionpage/Somework'
import WhatWeDoSection from '@/components/Exhibitionpage/WhatWeDoSection'
import React from 'react'

const Exhibition = () => {
  return (
     <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 mb-20">
      <main>
        <ExhibitionHeroSection/>
        <HowWeDoSection/>
        <WhatWeDoSection/>
        <Somework/>
      </main>
      </div>
  )
}

export default Exhibition