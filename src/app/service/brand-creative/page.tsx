
import BrandingSection from '@/components/brand/Brandingsection'
import LogoMarquee from '@/components/brand/LogoMarquee'
import PackagingGrid from '@/components/brand/PackagingGrid'
// import WhatWeDoSection from '@/components/brand/WhatWeDoSection'
import React from 'react'

const BrandCreative = () => {
  return (
     <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 mb-20">
      <main>
        {/* <WhatWeDoSection/> */}
    <LogoMarquee/>
    <BrandingSection/>
    <PackagingGrid/>
      </main>
      </div>
  )
}

export default BrandCreative