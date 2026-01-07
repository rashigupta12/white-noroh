'use client'

import { services } from '@/data/data';
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle hash navigation on homepage
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [isHomePage]);

  const handleHomePageScroll = (e: React.MouseEvent, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsServicesOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 sm:py-5">

          {/* Logo */}
          <Link href="/" className="flex items-center mb-3 sm:mb-0">
            <Image
              src="/logo.png"
              alt="White Noroh Studio Logo"
              width={140}
              height={40}
              className="object-contain w-30 sm:w-35"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-5 sm:gap-8 text-xs sm:text-sm uppercase tracking-widest font-semibold text-text-main-light">
            
            {/* Home */}
            <Link 
              href="/#home"
              onClick={(e) => handleHomePageScroll(e, 'home')}
              className="hover:text-gray-500 transition-colors"
            >
              Home
            </Link>

            {/* About */}
            <Link 
              href="/#about"
              onClick={(e) => handleHomePageScroll(e, 'about')}
              className="hover:text-gray-500 transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <Link 
                href="/#service"
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    const element = document.getElementById('service');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                  setIsServicesOpen(!isServicesOpen);
                }}
                className="bg-transparent p-0 font-semibold cursor-pointer underline-offset-4 hover:underline focus:outline-none flex items-center gap-1"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {isServicesOpen && (
                <div className="absolute top-full -left-5 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-3 z-50">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    All Services
                  </div>
                  <div className="border-t border-gray-100">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/service/${service.id}`}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="flex-1">{service.title}</span>
                        <ChevronDown className="w-4 h-4 rotate-90 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 px-4 py-3">
                    <Link
                      href="/#service"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsServicesOpen(false);
                        if (isHomePage) {
                          const element = document.getElementById('service');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          window.location.href = '/#service';
                        }
                      }}
                      className="text-sm text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-2"
                    >
                      <span>View All Services</span>
                      <ChevronDown className="w-4 h-4 rotate-90" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Work */}
            <Link 
              href="/#work"
              onClick={(e) => handleHomePageScroll(e, 'work')}
              className="hover:text-gray-500 transition-colors"
            >
              Work
            </Link>

            {/* Contact */}
            <Link 
              href="/#contact"
              onClick={(e) => handleHomePageScroll(e, 'contact')}
              className="hover:text-gray-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}