"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  technologies: string[];
  href: string;
  repository: string;
  enableAnimations?: boolean;
  className?: string;
}

const containerVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
  hover: {
    scale: 1.0,
    y: -2,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

const imageVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
};

const overlayVariants: Variants = {
  rest: {
    y: "100%",
    opacity: 0,
    filter: "blur(4px)",
  },
  hover: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 35,
      mass: 1,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const contentVariants: Variants = {
  rest: {
    opacity: 0,
    y: 20,
    scale: 1,
  },
  hover: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.5,
    },
  },
};

function ProjectCard({
  name,
  image,
  description,
  technologies,
  href,
  repository,
  enableAnimations = true,
  className,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  return (
    <motion.div
      initial="rest"
      whileHover={shouldAnimate ? "hover" : "rest"}
      variants={containerVariants}
      className={cn(
        "relative w-full h-full rounded-2xl bg-zinc-900/60 text-card-foreground overflow-hidden",
        "shadow-lg shadow-black/5 cursor-pointer group",
        className
      )}
    >
      <div className="relative overflow-hidden bg-zinc-900/60 rounded-2xl p-2">
        <motion.img
          src={image}
          alt={name}
          className="h-52 w-full object-cover rounded-xl"
          variants={imageVariants}
        />
      </div>

      <div className="p-6 space-y-3">
        <motion.h3
          className="text-xl font-bold leading-tight text-foreground tracking-tight"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h3>
        <p className="text-sm text-foreground leading-relaxed">{description}</p>
      </div>

      {/* VERSIÓN MOBILE: siempre visible debajo del texto, oculta en md+ */}
      <div className="flex flex-col gap-2 p-4 md:hidden">
        <div className="flex flex-wrap gap-2 pb-2 w-full">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-primary/80 rounded-lg px-2 py-1 text-xs text-foreground font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link href={repository} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full flex items-center justify-center gap-2 bg-transparent border border-white text-foreground">
            Repositorio GitHub
            <Github className="w-4 h-4" />
          </Button>
        </Link>
        <Link href={href} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full flex items-center justify-center gap-2 bg-white text-zinc-900">
            Ver Proyecto
            <ExternalLink className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* VERSIÓN DESKTOP: overlay con hover */}
      <motion.div
        variants={overlayVariants}
        className="absolute inset-0 bg-zinc-900 hover:border hover:border-zinc-900 flex-col hidden md:flex"
      >
        <div className="p-8 space-y-3 h-full w-full flex flex-col">
          <motion.div variants={contentVariants} className="w-full h-full pb-2">
            <h4 className="font-semibold mb-2 text-foreground">Detalles del Proyecto</h4>
            <p className="text-sm text-foreground leading-relaxed">{description}</p>
          </motion.div>

          <motion.div variants={contentVariants}>
            <div className="flex flex-wrap gap-2 pb-4 w-full">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-primary/80 rounded-lg px-2 py-1 text-xs text-foreground font-medium transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={contentVariants}>
            <Link href={repository} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full flex items-center justify-center gap-2 bg-transparent border border-white text-foreground">
                Repositorio GitHub
                <Github className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={contentVariants}>
            <Link href={href} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full flex items-center justify-center gap-2 bg-white text-zinc-900">
                Ver Proyecto
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
