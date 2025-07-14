"use client";

import { BackgroundGradient } from "../ui/background-gradient";
import { CTAData } from "@/constants";
import Link from "next/link";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Phone } from "lucide-react";
import { motion, Variants } from "framer-motion"; 

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50, 
      damping: 15,   
    },
  },
};

export function CTA({
  title = CTAData.title,
  description = CTAData.description,
  buttonText = CTAData.buttonText,
  buttonUrl = CTAData.buttonUrl,
}: CTAProps) {
  const handleContactButtonClick = useSmoothScroll();
  return (
    <section className="py-20 w-full bg-background px-2 sm:px-8 border-y border-white/5 border-dashed">
      <div className="relative w-full mx-auto max-w-6xl rounded-3xl overflow-hidden">
        <BackgroundGradient className="w-full p-6">
          <motion.div 
            className="relative z-10 flex flex-col items-start justify-between gap-8 rounded-3xl py-10 px-4"
            variants={ctaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} 
          >
            <div className="w-full text-foreground">
              <h4 className="mb-1 text-3xl font-bold md:text-4xl">{title}</h4>
              <p className="max-w-md">{description}</p>
              <Link
                onClick={(e) => handleContactButtonClick(e, buttonUrl)}
                href={buttonUrl}
                className="w-full md:w-44 h-12 mt-6 rounded-xl bg-zinc-900/40 border border-white/10 text-foreground text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                {buttonText}
              </Link>
            </div>
          </motion.div>
        </BackgroundGradient>
      </div>
    </section>
  );
}