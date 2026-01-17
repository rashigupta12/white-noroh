

import MusicProductionSection from '@/components/media-sound/MusicProductionSection'
import PhotoGallery from '@/components/media-sound/PhotoGallery'
import VideographySection from '@/components/media-sound/Videography'
import WhatWeDoSection from '@/components/media-sound/WhatWeDoSection'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MediaSound = () => {
  return (
     <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 mb-20">
      <main>
         <div className="relative h-[53vh] overflow-hidden bg-gray-50">
                <Image
                  src="/Media and Sound banner.png"
                  alt="Printing Solutions"
                  fill
                  priority
                  className="object-contain"
                />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/#service"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <h1 className="text-5xl  font-bold text-white mb-4">
              Media & Sound
            </h1>
            <p className="text-md text-white/90 max-w-3xl">
              Captivate your audience through immersive media.{" "}
              <br />
              From crisp photography to professional sound engineering, we ensure your message is seen and heard clearly with cinematic quality.
            </p>
          </div>
        </div>
              </div>
        <WhatWeDoSection/>
        <PhotoGallery/>
        <VideographySection/>
        <MusicProductionSection/>
 
      </main>
      </div>
  )
}

export default MediaSound