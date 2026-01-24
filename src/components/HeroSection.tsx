'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section  className="w-full pt-5">
      <div className="grid grid-cols-1 gap-0  mx-auto">
        {/* First Image */}
       <div className="relative overflow-hidden bg-black 
                h-[70vh] md:h-80">

          <Image
            alt="Silver vase detail dark"
            className="object-cover "
            src="/Home 2 (5).png"
            fill
          />
    
        </div>
        
     
      </div>
    </section>
  );
}