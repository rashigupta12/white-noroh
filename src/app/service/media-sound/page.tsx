

import MusicProductionSection from '@/components/media-sound/MusicProductionSection'
import PhotoGallery from '@/components/media-sound/PhotoGallery'
import VideographySection from '@/components/media-sound/Videography'
import WhatWeDoSection from '@/components/media-sound/WhatWeDoSection'
import React from 'react'

const BrandCreative = () => {
  return (
     <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 mb-20">
      <main>
        <WhatWeDoSection/>
        <PhotoGallery/>
        <VideographySection/>
        <MusicProductionSection/>
 
      </main>
      </div>
  )
}

export default BrandCreative