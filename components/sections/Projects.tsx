"use client";

import { ProjectsContent } from "@/constants";
import ProjectCard from "../ui/project-card";
import { motion, Variants } from "framer-motion"; 

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

export function Projects() {
  const { title, description, projects } = ProjectsContent;
  return (
    <section id="projects" className="w-full py-20 bg-background">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
        >
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col p-4"
            variants={itemVariants} 
          >
            <h2 className="text-4xl text-foreground font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg text-foreground max-w-xl">
              {description}
            </p>
          </motion.div>
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}> 
              <ProjectCard
                name={project.name}
                image={project.image}
                description={project.description}
                technologies={project.technologies}
                href={project.href}
                repository={project.repository}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}