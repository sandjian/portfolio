"use client";
import { Button } from "@/components/ui/button"
import { Github, Linkedin} from "lucide-react" 
import Link from "next/link"
import Image from "next/image"; 
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

interface FooterProps {
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function FooterModel({
  socialLinks,
  copyright,
  mainLinks,
}: FooterProps) {
  
  const handleNavLinkClick = useSmoothScroll();
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 w-full max-w-7xl m-auto border-x border-dashed border-white/5 ">
      <div className="px-4 lg:px-8">
        <div className="flex items-center justify-between px-6">
          <Link
            href="#home" 
            className="flex items-center"
            aria-label="logo portfolio" 
          >
            <Image 
                alt="logo portfolio" 
                src={"/logo/as-dev.png"} 
                width={100} 
                height={80} 
            />
          </Link>
          <ul className="flex list-none space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full duration-300 transition-all hover:-translate-y-2 bg-neutral-200 hover:bg-white"
                  asChild
                >
                  <a href={link.href} target="_blank" aria-label={link.label} rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center border-t border-white/70 mt-6 pt-6">
          <nav>
            <ul className="list-none flex justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                    href={link.href}
                    className="text-sm font-semibold text-neutral-300 hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="text-sm leading-6 text-foreground whitespace-nowrap">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  )
}


export default function Footer() {
  return (
    <FooterModel
      socialLinks={[
        {
          icon: <Linkedin className="h-5 w-5 " />,
          href: "https://linkedin.com/in/sandjian-alejandro",
          label: "Linkedin",
        },
        {
          icon: <Github className="h-5 w-5" />,
          href: "https://github.com/sandjian",
          label: "GitHub",
        },
      ]}
      mainLinks={[
        { href: "#about-me", label: "About me" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ]}
      copyright={{
        text: "© 2025 Alejandro Sandjian",
      }}
    />
  )
}