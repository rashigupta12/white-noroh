
import BrandingSection from '@/components/brand/Brandingsection'
import LogoMarquee from '@/components/brand/LogoMarquee'
import PackagingGrid from '@/components/brand/PackagingGrid'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// import WhatWeDoSection from '@/components/brand/WhatWeDoSection'
import React from 'react'

const BrandCreative = () => {
  return (
     <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 mb-20">

      <main>
        {/* <WhatWeDoSection/> */}
           <div className="relative h-[60vh] overflow-hidden bg-gray-50">
                <Image
                  src="/Banner.png"
                  alt="Printing Solutions"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 flex items-end">
            <div className="w-full p-6 md:p-12">
              <div className="max-w-7xl mx-auto">
                <Link
                  href="/#service"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Brand & Creative
                </h1>

                <p className="text-sm md:text-base text-white/90 max-w-3xl">
                  Transforming abstract ideas into tangible visual languages.
                  <br />
                  Our design philosophy centers on minimalism and timeless aesthetics.
                </p>
              </div>
            </div>
          </div>
              </div>
    <LogoMarquee/>
    <BrandingSection/>
    <PackagingGrid/>
      </main>
      </div>
  )
}

export default BrandCreative