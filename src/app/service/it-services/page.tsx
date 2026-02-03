"use client";

import ClientMarquee from "@/components/ClientMarquee";
import { services } from "@/data/data";
import {
  ArrowLeft,
  CheckCircle,
  Code,
  Globe,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Search,
  Shield,
  Smartphone,
  Tag,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useRef } from "react";

// Updated projects with images and details
const ourProjects = {
  "Web Portal": [
    {
      name: "GST Prime",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      description: "Comprehensive GST management and compliance platform",
      year: "2024",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "The Three Across",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      description: "Enterprise resource planning solution",
      year: "2024",
      tags: ["Next.js", "PostgreSQL"],
    },
    {
      name: "ALB",
      image: "/logos/6.png",
      description: "Advanced business analytics dashboard",
      year: "2023",
      tags: ["React", "D3.js", "AWS"],
    },
    {
      name: "LCA",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
      description: "Legal case management system",
      year: "2023",
      tags: ["Vue.js", "Laravel"],
    },
    {
      name: "FutureTek",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      description: "Technology innovation platform",
      year: "2024",
      tags: ["React", "TypeScript"],
    },
    {
      name: "VastuTek",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
      description: "Real estate and construction management",
      year: "2023",
      tags: ["Next.js", "Prisma"],
    },
  ],
  "Work Flow App": [
    {
      name: "PIMS",
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop",
      description: "Project information management system",
      year: "2024",
      tags: ["Angular", "MongoDB"],
    },
    {
      name: "Recruitment",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop",
      description: "AI-powered recruitment platform",
      year: "2023",
      tags: ["React", "Python", "ML"],
    },
    {
      name: "Pensive.one",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop",
      description: "Mindfulness and productivity tracker",
      year: "2024",
      tags: ["Next.js", "Tailwind"],
    },
  ],
  "Mobile Application": [
    {
      name: "LCA Mobile",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
      description: "On-the-go legal case management",
      year: "2024",
      tags: ["React Native", "Firebase"],
    },
    {
      name: "EITS",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
      description: "Enterprise IT services mobile suite",
      year: "2023",
      tags: ["Flutter", "Dart"],
    },
    {
      name: "NOFA",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
      description: "Network operations and facilities app",
      year: "2024",
      tags: ["React Native", "AWS"],
    },
  ],
  "Compliance & Audits": [
    {
      name: "ITGC",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
      description: "IT General Controls audit framework",
      year: "2024",
      tags: ["Security", "Compliance"],
    },
    {
      name: "Experience Audit",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
      description: "User experience compliance auditing",
      year: "2023",
      tags: ["UX", "Analytics"],
    },
    {
      name: "RBI Audit",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop",
      description: "Reserve Bank of India compliance system",
      year: "2024",
      tags: ["Finance", "Regulatory"],
    },
    {
      name: "DPDP Audit",
      image:
        "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&auto=format&fit=crop",
      description: "Data protection and privacy audit tool",
      year: "2024",
      tags: ["Privacy", "GDPR"],
    },
    {
      name: "SOC Audit",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
      description: "Service Organization Control auditing",
      year: "2023",
      tags: ["SOC 2", "Security"],
    },
  ],
};

// Core Services Data
const coreServices = {
  "IT Consultancy": [
    "IT Advisory and Consulting",
    "ISO 27001 Gap Analysis",
    "IT Contract Reviews",
    "IT Strategy Consulting",
    "Digital Transformation",
    "System Integration",
  ],
  "IT Audits": ["ITGC (IT General Controls)", "IT and Cyber Security Audits"],
  "Application Development": [
    "Web Application Development & Maintenance",
    "E-commerce Solutions",
    "Mobile App Development (Android, iOS, Hybrid)",
    "SMS Solutions",
    "UI/UX Design",
    "Hosting Solutions",
    "Email Solutions",
  ],
};

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = (params.id as string) || "it-services";

  const service = services.find((s) => s.id === serviceId);

  // Refs for smooth scrolling
  const overviewRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const coreServicesRef = useRef<HTMLDivElement>(null);

  const teamRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  if (!service) {
    notFound();
  }

  // Helper functions for email functionality
  const generateServiceInquiryEmail = () => {
    const recipientEmail = "amit.gupta@gennextit.com";
    const subject = `Service Inquiry: ${service?.title || "IT Services"}`;
    const body = `Hello GenNext IT Team,

I am interested in learning more about your ${service?.title || "IT Services"} offerings.

Please provide me with more information about:
1. Service offerings and capabilities
2. Pricing structure
3. Implementation process
4. Timeline for delivery
5. Case studies or references

You can reach me at: [Your Email/Phone]

Thank you!

Best regards,
[Your Name]`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    return `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const generateGmailServiceLink = () => {
    const recipientEmail = "amit.gupta@gennextit.com";
    const subject = `Service Inquiry: ${service?.title || "IT Services"}`;
    const body = `Hello GenNext IT Team,

I am interested in learning more about your ${service?.title || "IT Services"} offerings.

Please provide me with more information about:
1. Service offerings and capabilities
2. Pricing structure
3. Implementation process
4. Timeline for delivery
5. Case studies or references

You can reach me at: [Your Email/Phone]

Thank you!

Best regards,
[Your Name]`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodedSubject}&body=${encodedBody}`;
  };

  const isMobileDevice = () => {
    if (typeof window === "undefined") return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };

  const openServiceInquiryEmail = () => {
    if (typeof window === "undefined") return;

    if (isMobileDevice()) {
      // Mobile: Use mailto to open default email app
      const mailtoLink = generateServiceInquiryEmail();
      window.location.href = mailtoLink;
    } else {
      // Desktop: Open Gmail in new tab
      const gmailLink = generateGmailServiceLink();
      window.open(gmailLink, "_blank");
    }
  };

  // Contact Information
  const contactInfo = {
    email: "amit.gupta@gennextit.com",
    website: "www.gennextit.com",
    phone: "+91-78400 79095",
    address:
      "H-213, Sector 63 Rd, Electronic City, H Block, Sector 63, Noida, Uttar Pradesh 201309",
  };
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-primary/10 to-transparent z-10"></div>
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
            <span className="text-sm font-semibold tracking-widest text-primary/80 uppercase mb-3 block">
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

      <ClientMarquee />

      {/* Main Content with sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-32">
        {/* Overview Section */}
        <div ref={overviewRef} className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                About Our {service.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {service.fullDescription}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Industry-leading expertise
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Custom solutions for unique needs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Proven track record of success
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/itserviceaboutsection.png"
                alt="Technology"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Core Services Section */}
        <div ref={coreServicesRef} className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Core Services Offered
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT solutions covering consultancy, audits, and
              application development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(coreServices).map(
              ([category, servicesList], index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-zinc-800 rounded-xl p-6 border border-gray-200 dark:border-zinc-700 hover:border-primary/50 transition-all hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {category === "IT Consultancy" && (
                        <Users className="w-6 h-6 text-primary" />
                      )}
                      {category === "IT Audits" && (
                        <Search className="w-6 h-6 text-primary" />
                      )}
                      {category === "Application Development" && (
                        <Code className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {servicesList.map((serviceItem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {serviceItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our {service.title} Offerings
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.services.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 border border-gray-200 dark:border-zinc-700 hover:border-primary/50 transition-all group hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Professional services delivered with excellence and precision
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div ref={projectsRef} className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Portfolio & Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Real-world solutions we&apos;ve delivered
            </p>
          </div>

          {Object.entries(ourProjects).map(([category, projects], index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                {category === "Web Portal" && (
                  <Monitor className="w-7 h-7 text-primary" />
                )}
                {category === "Work Flow App" && (
                  <Smartphone className="w-7 h-7 text-primary" />
                )}
                {category === "Mobile Application" && (
                  <Smartphone className="w-7 h-7 text-primary" />
                )}
                {category === "Compliance & Audits" && (
                  <Shield className="w-7 h-7 text-primary" />
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-linear-to-r from-gray-300 dark:from-gray-700 to-transparent ml-4"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    </div>

                    {/* Details Section */}
                    <div className="p-6 space-y-4">
                      {/* Project Name */}
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="h-1 bg-linear-to-r from-primary via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div ref={teamRef} className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {service.team.length} professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {service.team.map((member, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {member.designation.split(" ").pop()}
                  </div>
                </div>

                {/* Details */}
                <div className="text-center mb-6">
                  <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium text-sm mb-4">
                    {member.designation}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Expertise
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialization.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                    {member.specialization.length > 3 && (
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        +{member.specialization.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

 
      </div>
    </div>
  );
}
