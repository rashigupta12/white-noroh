//app/service/[id]/page.tsx
'use client'

import { services } from '@/data/data';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ServiceDetailPage() {
  // const params = useParams();
  const serviceId = "media-sound";
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover "
          priority
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
            <span className="text-sm font-semibold tracking-widest text-white/80 uppercase mb-3 block">
              {service.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">Meet Our Team</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-gray-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Initial Circle at Top */}
              <div className="w-24 h-24 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>

              {/* Name and Designation */}
              <div className="text-center mb-6">
                <h4 className="font-bold text-gray-800 dark:text-white text-2xl mb-2">
                  {member.name}
                </h4>
                <p className="text-primary font-semibold text-lg">
                  {member.designation}
                </p>
              </div>

              {/* Bio */}
              <p className="text-gray-600 dark:text-gray-400 text-center text-base mb-8 leading-relaxed">
                {member.bio}
              </p>

              {/* Specialization Tags */}
              <div className="space-y-3">
                {member.specialization.map((spec, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                    <span className="text-sm">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}