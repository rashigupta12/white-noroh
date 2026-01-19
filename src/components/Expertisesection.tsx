//components/expertisesection.tsx
"use client";

import {
  ArrowRight,
  BarChart3,
  Camera,
  Check,
  FileEdit,
  Palette,
  Printer,
  Store,
  Terminal,
  TrendingUp,
  Video,
  Volume2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/data"; // Import the services data

export default function ExpertiseSection() {
  // Function to find service by image URL or title
  const getServiceSlug = (imageUrl: string, title: string) => {
    // Try to find by image URL first
    const service = services.find(
      (s) =>
        s.heroImage === imageUrl ||
        s.title.toLowerCase().includes(title.toLowerCase()),
    );
    return service ? `/service/${service.id}` : "/services";
  };

  return (
    <>
      <main id="service" className="pt-24 pb-20">
        <section className="max-w-5xl mx-auto px-6 text-center mb-20 fade-in-up">
          {/* Use font-futura-md class for "Our Expertise" */}
          <h2 className="font-futura-md text-4xl md:text-5xl text-text-main-light mb-6 font-medium tracking-tight">
            Our Expertise
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-4xl mx-auto text-base md:text-lg font-sans">
            We craft digital experiences and brand identities with a focus on
            simplicity, elegance, and purpose. From technical foundations to
            creative storytelling, we offer a holistic suite of services to
            elevate your brand.
          </p>
        </section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Brand & Creative Card */}
            <div className="group service-card bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 fade-in-up delay-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <Link
                  href={getServiceSlug(
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDoPXfvQeboRXEs_DKX_L5_OOrJ39OXg-3XJGjYL8NolgtmGCuTHuhI9xsdwc4OWQG3IMvM0AlBtp2AIb0bHSxfK1h518TTDyMcEFCbAG43JWIIXfaZlqSnrcW6BDRjsffZlcDaMoXx692ZV8-hQ2tVk0D23zrnPesJLl8kz0MpMtMLMLJD6DglnbP9QnfAnOxxN06z_DL-PSIZV2FHyctdbIeBpyklAugAlwGpkC6-EmSli3bPSNhHy-cR-CCjljEj3IiRTJm4lU4",
                    "Brand & Creative",
                  )}
                  className="block w-full h-full relative"
                >
                  <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                  <Image
                    alt="Various branding materials laid out on a table"
                    className="card-img w-full h-full object-cover transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 hover:scale-105"
                    src="/Banner.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-6 left-6 z-20 bg-white dark:bg-surface-dark/90 backdrop-blur-sm p-3 rounded-xl border border-gray-100 dark:border-zinc-700 shadow-sm">
                    <Palette className="text-text-main-light w-6 h-6" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </Link>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-text-muted-light text-xs font-extrabold tracking-[0.2em] uppercase mb-3 block">
                  Identity & Vision
                </span>
                <h3 className="font-display text-2xl md:text-2xl mb-4 text-text-main-light dark:text-white font-semibold">
                  Brand & Creative
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-8 text-sm leading-relaxed flex-1">
                  Transforming abstract ideas into tangible visual languages.
                  Our design philosophy centers on minimalism and timeless
                  aesthetics.
                </p>
                <div className="border-t border-gray-100 dark:border-zinc-800 pt-6 mt-auto">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-main-light dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check className="text-text-muted-light w-4 h-4" /> Logo &
                      Identity
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-text-muted-light w-4 h-4" /> Art
                      Direction
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-text-muted-light w-4 h-4" />{" "}
                      Packaging
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IT Services Card */}
            <div className="group service-card bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 fade-in-up delay-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <Link
                  href={getServiceSlug("/itservice/hero.jpeg", "IT Services")}
                  className="block w-full h-full relative"
                >
                  <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                  <Image
                    alt="Minimalist coding setup on a laptop"
                    className="card-img w-full h-full object-cover transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 hover:scale-105"
                    src="/itservice/hero.jpeg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-6 left-6 z-20 bg-white dark:bg-surface-dark/90 backdrop-blur-sm p-3 rounded-xl border border-gray-100 dark:border-zinc-700 shadow-sm">
                    <Terminal className="text-text-main-light w-6 h-6" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </Link>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-text-muted-light text-xs font-extrabold tracking-[0.2em] uppercase mb-3 block">
                  Technical Foundation
                </span>
                <h3 className="font-display text-2xl md:text-2xl mb-4 text-text-main-light dark:text-white font-semibold">
                  IT Services
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-8 text-sm leading-relaxed flex-1">
                  Building the backbone of your digital presence. We specialize
                  in creating robust, scalable, and secure web architectures
                  tailored to your specific business needs.
                </p>
                <div className="border-t border-gray-100 dark:border-zinc-800 pt-6 mt-auto">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-main-light dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check className="text-text-muted-light w-4 h-4" /> Custom
                      Web Dev
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-text-muted-light w-4 h-4" />{" "}
                      E-commerce
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-text-muted-light w-4 h-4" /> CMS
                      Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Media & Sound Card - Full Width */}
          {/* Media & Sound Card - Full Width */}
          <div className="group w-full mb-10 bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 fade-in-up delay-200">
            {/* Image Section */}
            <div className="relative w-full h-55 md:h-65 overflow-hidden">
              <Link
                href={getServiceSlug(
                  "/Media and Sound banner.png",
                  "Media & Sound",
                )}
                className="block w-full h-full relative"
              >
                {/* Add the overlay effect */}
                <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>

                <Image
                  src="/Media and Sound banner.png"
                  alt="Media and sound equipment"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />

                {/* Add the icon on top left */}
                <div className="absolute top-6 left-6 z-20 bg-white dark:bg-surface-dark/90 backdrop-blur-sm p-3 rounded-xl border border-gray-100 dark:border-zinc-700 shadow-sm">
                  <Video className="text-text-main-light w-6 h-6" />
                </div>

                {/* Add the dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </Link>
            </div>

            {/* Content Section */}
            <div className="px-8 py-10 md:px-10">
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-text-muted-light block mb-3">
                Media & Visual
              </span>

              <h3 className="font-display text-2xl md:text-2xl font-semibold text-text-main-light dark:text-white mb-4">
                Media & Sound
              </h3>

              <p className="text-text-muted-light dark:text-text-muted-dark text-sm md:text-base leading-relaxed max-w-3xl mb-8">
                Captivate your audience through immersive media. From crisp
                photography to professional sound engineering, we ensure your
                message is seen and heard clearly with cinematic quality.
              </p>

              {/* Services */}
              <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-text-main-light dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Video className="text-text-muted-light w-5 h-5" />
                  Video Production
                </div>

                <div className="flex items-center gap-2">
                  <Volume2 className="text-text-muted-light w-5 h-5" />
                  Sound Design
                </div>

                <div className="flex items-center gap-2">
                  <Camera className="text-text-muted-light w-5 h-5" />
                  Product Photography
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Exhibition Design Card */}
            <div className="group service-card bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 fade-in-up delay-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <Link
                  href={getServiceSlug(
                    "/Exhibition/Exhibition Approach.png",
                    "Exhibition Design",
                  )}
                  className="block w-full h-full relative"
                >
                  <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                  <Image
                    alt="Modern art gallery exhibition space"
                    className="card-img w-full h-full object-cover transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 hover:scale-105"
                    src="/Exhibition/Exhibition Approach.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-4 left-4 z-20 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-sm p-2 rounded-lg border border-gray-100 dark:border-zinc-700 shadow-sm">
                    <Store className="text-text-main-light w-5 h-5" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </Link>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-text-muted-light text-xs font-extrabold tracking-[0.2em] uppercase mb-2 block">
                  Spatial
                </span>
                <h3 className="font-display text-xl md:text-2xl mb-4 text-text-main-light dark:text-white font-semibold">
                  Exhibition Design
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-6 text-sm leading-relaxed flex-1">
                  We create memorable spatial experiences for trade shows and
                  events. Merging functionality with aesthetic appeal.
                </p>
                <div className="border-t border-gray-100 dark:border-zinc-800 pt-4 mt-auto">
                  <ul className="space-y-2 text-sm text-text-main-light dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-text-muted-light w-4 h-4" />{" "}
                      Stall Design
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-text-muted-light w-4 h-4" />{" "}
                      Spatial Planning
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="group service-card bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 fade-in-up delay-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <Link
                  href={getServiceSlug("/social media.jpg", "Social Media")}
                  className="block w-full h-full relative"
                >
                  <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply"></div>
                  <Image
                    alt="Smartphone displaying social media apps"
                    className="card-img w-full h-full object-cover transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 hover:scale-105"
                    src="/Social Media banner for homepage.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-4 left-4 z-20 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-sm p-2 rounded-lg border border-gray-100 dark:border-zinc-700 shadow-sm">
                    <TrendingUp className="text-text-main-light w-5 h-5" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </Link>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-text-muted-light text-xs font-extrabold tracking-[0.2em] uppercase mb-2 block">
                  Growth
                </span>
                <h3 className="font-display text-xl md:text-2xl mb-4 text-text-main-light dark:text-white font-semibold">
                  Social Media
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-6 text-sm leading-relaxed flex-1">
                  Establish your authority. Strategic approach to LinkedIn and
                  social media for consistent brand growth.
                </p>
                <div className="border-t border-gray-100 dark:border-zinc-800 pt-4 mt-auto">
                  <ul className="space-y-2 text-sm text-text-main-light dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <FileEdit className="text-text-muted-light w-4 h-4" />{" "}
                      Content Strategy
                    </li>
                    <li className="flex items-center gap-2">
                      <BarChart3 className="text-text-muted-light w-4 h-4" />{" "}
                      Analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Printing Solutions Card */}
            <div className="group service-card bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 fade-in-up delay-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                <Link
                  href={getServiceSlug(
                    "/printing-solutions/homeprintingsolutionimage.png",
                    "Printing Solutions",
                  )}
                  className="block w-full h-full relative"
                >
                  <Image
                    alt="Smartphone displaying social media apps"
                    className="card-img w-full h-full object-cover transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 hover:scale-105"
                    src="/printing-solutions/homeprintingsolutionimage.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {/* <Printer className="text-text-muted-light/30 w-16 h-16" /> */}
                  <div className="absolute top-4 left-4 z-20 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-sm p-2 rounded-lg border border-gray-100 dark:border-zinc-700 shadow-sm">
                    <Printer className="text-text-main-light w-5 h-5" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </Link>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-text-muted-light text-xs font-extrabold tracking-[0.2em] uppercase mb-2 block">
                  Tangible
                </span>
                <h3 className="font-display text-xl md:text-2xl mb-4 text-text-main-light dark:text-white font-bold">
                  Printing Solutions
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-6 text-sm leading-relaxed flex-1">
                  High-quality printing services for all your branding
                  collateral. We bring your digital designs into the physical
                  world with precision.
                </p>
                <div className="border-t border-gray-100 dark:border-zinc-800 pt-4 mt-auto">
                  <ul className="space-y-2 text-sm text-text-main-light dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check className="text-text-muted-light w-4 h-4" />{" "}
                      Brochures & Flyers
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-text-muted-light w-4 h-4" />{" "}
                      Business Cards
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
