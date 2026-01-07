'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="w-full pt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0  mx-auto">
        {/* First Image */}
        <div className="relative group overflow-hidden bg-black h-64 md:h-80">
          <Image
            alt="Silver vase detail dark"
            className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcxNuvIctpmPeSDZKs5GnM_pBiopSFe-1yjzi5gEXrj5fsqVAJDq5We84hJ4cUEi54sX2ut7laqK9Mp7KHxj3LfFsk5sNkVk6DbkTlEZl6coFfPy_usSIMWhggcqaADRd0jX1IUh7EXItpcgII7S4k1ovd93IYY8IezIsMoodN_jQatzP08DyuroxutCcYbFwVCJ4dHHtdPxvv-BSmzf8qSOFIWG-8Ant1udFhD_j8878nMekWA3uty2neBCFQDT52s68ceiVpjxs"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 z-10">
            <h2 className="font-display text-4xl italic mb-2">art</h2>
            <p className="text-xs text-center max-w-xs font-light text-gray-300">
              The light of joy shaped in silver lines gives pleasure of vases filled with wines with Royal Legacy of the Indian art from histories silver feels in our hearts.
            </p>
          </div>
        </div>
        
        {/* Second Image */}
        <div className="relative bg-gray-200 dark:bg-gray-800 h-64 md:h-80">
          <Image
            alt="Silver vases collection"
            className="object-cover w-full h-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4ynlZy3cHZYJA1cKs3jupG3n_EnN0yhbYYcZfVKn3s8zXxuPCe8Rcajs0FZavFHdsUMr3c_6BPi9_6hSibgiXF7pXiQvj-baZKQsUc2Fed_1zEyPOzuZLVgedICEMK0FqmJbe3hStx64EM1Wnb_Bn6UnCTPPQsMveTCAxz2fmbCaUQbByCT6913HZgon34vw3k965sbz7Mkk9pUrECLDcqKOXFeL6iMzBQu8pB-8dGxxssherKbjsQhjbRRN0bJLTuKEsiXmRlKE"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Third Image - Full width */}
        <div className="relative group overflow-hidden bg-black h-64 md:h-80 col-span-1 md:col-span-2 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-full bg-gray-100 dark:bg-gray-800 relative">
            <Image
              alt="Silver artifacts grid"
              className="object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6VXm5lFPiVkw-z_mTfCtuS6rJthcjz7YNknhWHfR5z-CsKqbFzxgRglqtaS-Qam-tN8QXWIBZLE61Rp32YefCixWG7BPuJYc3xMxtQDcVqZ94Xlb85zPFOvvTx1SGhtf4JBpb4aXfofjrL6b4yNDZ24yZqhtBUmGsgRD2hsGY80pcxCx24_AsWLEunttXEJsVlK_PxmCvxDxoWIorTerDl_AfgoHVUxa4u8tt445zgf-DvaqfEkI0N6Gi0khE77GOh8Dt6fmjyGw"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="w-full md:w-1/2 relative h-full">
            <Image
              alt="Silver pot detail"
              className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPQYRhraqtXNG8y_OTmsDCBdvHFGtjK7FCwOKOsUCFbZWnfB2dYIJo9dsh98DcdrslKsBdit5cVUiZ-AjgwOW2FzrVSb9Xlg8mEK5zsX7vWWyYzPSZGd08jUmBwCScxGGPwdVHhVpLFpOj30ATv6iGvWvPbs6ycKx-5ZT6UnRbj3YrE-vwwx8cESdhH01L3jbzrOlPAVs5RTd5HjjuwNiJFFcZ-FBOtiQp_sqrMh8rPhRvMOvhkGjMotIwR9Eqwn7HcMblXwnPHvY"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 z-10">
              <h2 className="font-display text-4xl italic mb-2">metamorphosis</h2>
              <p className="text-xs text-center max-w-xs font-light text-gray-300">
                We transform the metal to magical forms from design to forge silver in mystical norms. Touched by passionate hands of our master craftsmen to make every artifact the best it can.
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}