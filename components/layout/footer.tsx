import { Button } from "@/components/ui/button"
import { Github, Twitter } from "lucide-react" // Keep these if you still use them for social links
import Link from "next/link"
import Image from "next/image"; // Import Image component

interface FooterProps {
  // brandName: string; // We will no longer need this prop if we're hardcoding the image
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
  // brandName, // Remove brandName from destructuring
  socialLinks,
  copyright,
  mainLinks,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 w-full max-w-7xl m-auto border-x border-dashed border-white/5 ">
      <div className="px-4 lg:px-8">
        <div className="flex items-center justify-between px-6">
          <Link
            href="#home" // Changed to #home to match your navbar's logo link behavior
            className="flex items-center"
            aria-label="logo portfolio" // Good practice for accessibility
          >
            {/* Replaced brandName text with Image component */}
            <Image 
                alt="logo portfolio" 
                src={"/logo/as-dev.png"} 
                width={100} // Adjust width as needed for footer
                height={80} // Adjust height as needed for footer
                // className="invert" // Apply invert if you need it for the footer's background, like in the mobile menu
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
                  <a href={link.href} target="_blank" aria-label={link.label} rel="noopener noreferrer"> {/* Added rel for security */}
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
      // brandName="<as/>" // Remove this prop
      socialLinks={[
        {
          icon: <Twitter className="h-5 w-5 " />,
          href: "https://twitter.com",
          label: "Twitter",
        },
        {
          icon: <Github className="h-5 w-5" />,
          href: "https://github.com",
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