"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import {
  Zap,
  Globe,
  Lightbulb,
  Handshake,
  LucideIcon,
  Search,
  ShoppingCart,
  Cloud,
  Code,
  BookOpenCheck
} from "lucide-react";

import { Aboutme } from "@/constants";
import { SpotlightCard } from "../ui/spotlight-card";
import { BackgroundGradient } from "../ui/background-gradient";

interface AboutmeProps {
  data?: {
    breakout: {
      title: string;
      description: string;
      buttonText?: string;
      buttonUrl?: string;
    };
    spotlightCards: {
      title: string;
      description: string;
    }[];
    images: {
      mainImage: {
        src: string;
        alt: string;
      };
      secondaryImage: {
        src: string;
        alt: string;
      };
    };
    achievementsSection: {
      title: string;
      description: string;
      achievements: {
        label: string;
        value: string;
      }[];
    };
    secondBreakout: {
      title: string;
      description: string;
    };
    secondSpotlightCards: {
      title: string;
      description: string;
    }[];
  };
}

const itemVariants: Variants = {
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,  
      staggerChildren: 0.15,
    },
  },
};

export const AboutMe = ({ data = Aboutme }: AboutmeProps) => {
  const { breakout, images, achievementsSection, spotlightCards, secondBreakout, secondSpotlightCards } = data;

  const firstSpotlightIcons: LucideIcon[] = [
    Globe,
    Lightbulb,
    BookOpenCheck,
    Handshake,
  ]

  const secondSpotlightIcons: LucideIcon[] = [
    Code,
    Cloud,
    ShoppingCart,
    Search,
  ];

  return (
    <section id="about-me" className="relative w-full pt-10 pb-20 bg-background overflow-hidden border-y border-dashed border-white/5">

      <div className="relative z-10 w-full max-w-6xl m-auto px-2 sm:px-8">
        <motion.div
          className="grid gap-6 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="flex flex-col w-full h-full lg:col-span-2"
            variants={itemVariants}
          >
            <div className="flex flex-col justify-between gap-y-3 py-2 w-full">
              <motion.div className="w-full flex flex-col gap-y-3" variants={itemVariants}>
                <h2 className="text-foreground mb-2 text-4xl font-bold">{breakout.title}</h2>
                <p className="text-foreground">{breakout.description}</p>
              </motion.div>

              <motion.div
                className="w-full mt-3 lg:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2 "
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {spotlightCards.map((card, index) => {
                  const IconComponent = firstSpotlightIcons[index] || Zap;
                  return (
                    <motion.div variants={itemVariants} key={index}>
                      <SpotlightCard
                        className="magic-card gap-2 w-full h-full bg-zinc-900/60 flex flex-col items-center text-center p-2 rounded-xl shadow-sm"
                        spotlightColor="#cacaca"
                      >
                        <IconComponent className="size-6 text-primary " />
                        <h4 className="text-xs lg:text-sm font-semibold mt-2 text-foreground">
                          {card.title}
                        </h4>
                        <p className="text-xs lg:text-xs text-foreground leading-relaxed">
                          {card.description}
                        </p>
                      </SpotlightCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2 justify-center overflow-hidden flex items-center ">
            <div className="h-full p-2 bg-zinc-900/60 rounded-3xl flex items-center justify-center">
              <Image
                src={images.mainImage.src}
                alt={images.mainImage.alt}
                width={700}
                height={800}
                className=" h-[500px] lg:h-full object-cover rounded-2xl brightness-75 "
              />
            </div>
          </motion.div>
        </motion.div>


        <motion.div
          className="w-full rounded-2xl my-12 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <BackgroundGradient className="w-full p-10 md:p-16">

            <motion.div
              className="flex flex-col gap-4 text-center md:text-left [mask-image:radial-gradient(#fff,transparent,75%)]"
              variants={itemVariants}
            >

              <h2 className="text-4xl font-bold text-foreground">
                {achievementsSection.title}
              </h2>
              <p className="max-w-screen-sm text-foreground">
                {achievementsSection.description}
              </p>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >

              {achievementsSection.achievements.map((item, idx) => (
                <motion.div
                  className="flex flex-col gap-2 flex-shrink-0"
                  key={item.label + idx}
                  variants={itemVariants}
                >
                  <div className="h-full justify-center flex items-center">
                    <p className="text-base text-foreground ">{item.label}</p>
                  </div>
                  <span className="text-2xl font-semibold text-foreground md:text-3xl">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </BackgroundGradient>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>

        </motion.div>


        <motion.div
          className="grid gap-6 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="w-full lg:col-span-2 flex justify-center items-center">
            <div className="h-full p-2 bg-zinc-900/60 rounded-3xl flex items-center justify-center">

              <Image
                src={images.secondaryImage.src}
                alt={images.secondaryImage.alt}
                width={700}
                height={800}
                className="h-[500px] lg:h-full object-cover rounded-2xl brightness-75 "
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col w-full lg:col-span-2"
            variants={itemVariants}
          >
            <div className="flex flex-col justify-between gap-3 py-2 w-full">
              <motion.div className="w-full flex flex-col gap-y-3" variants={itemVariants}>
                <h2 className="mb-2 text-4xl font-bold text-foreground">{secondBreakout.title}</h2>
                <p className="text-foreground">{secondBreakout.description}</p>
              </motion.div>

              <motion.div
                className="w-full mt-3 lg:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2 "
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {secondSpotlightCards.map((card, index) => {
                  const IconComponent = secondSpotlightIcons[index] || Zap;
                  return (
                    <motion.div variants={itemVariants} key={index}>
                      <SpotlightCard
                        className="magic-card gap-2 w-full h-full bg-zinc-900/60 flex flex-col items-center text-center p-2 rounded-xl shadow-sm "
                        spotlightColor="#cacaca"
                      >
                        <IconComponent className="size-6 text-primary" />
                        <h4 className="text-xs lg:text-sm font-semibold mt-2 text-foreground">
                          {card.title}
                        </h4>
                        <p className="text-xs text-foreground leading-relaxed">
                          {card.description}
                        </p>

                      </SpotlightCard>

                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};