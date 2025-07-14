'use client';

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';
import { PlusIcon } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

import { TechStackData } from '@/constants/index';

interface TechnologyItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

const mainContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, 
      staggerChildren: 0.15, 
    },
  },
};

const titleBlockVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15, 
    },
  },
};

const cardGridContainerVariants: Variants = {
  hidden: { opacity: 0 }, 
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1, 
      staggerChildren: 0.08, 
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 16,
    },
  },
};

export function TechStack() {
  const { title, description, technologies } = TechStackData;
  return (
    <section className="w-full py-20 bg-background text-foreground">
      <motion.div 
        className="w-full max-w-6xl m-auto px-2 sm:px-8"
        variants={mainContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
      >
        <motion.div 
          className="mb-16 p-4"
          variants={titleBlockVariants}
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="max-w-2xl text-lg text-gray-300">{description}</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 "
          variants={cardGridContainerVariants}
        >
          {technologies.map((tech: TechnologyItem) => (
            <motion.div
              key={tech.id}
              variants={cardItemVariants} 
              className="transition-all duration-300 hover:scale-105 "
            >
              <MorphingDialog
                transition={{
                  type: 'spring',
                  bounce: 0.15,
                  duration: 0.3,
                }}
              >
                <MorphingDialogTrigger
                  style={{
                    borderRadius: '16px',
                  }}
                  className="flex flex-col overflow-hidden bg-zinc-900 rounded-2xl h-full group"
                >
                  <MorphingDialogImage
                    src={tech.image}
                    alt={tech.name}
                    className="h-40 w-full p-6 brightness-75 overflow-hidden bg-white/90"
                  />
                  <div className="w-full flex justify-between p-2 bg-zinc-900/60">
                    <div className="w-full">
                      <MorphingDialogTitle className="text-zinc-50">
                        {tech.name}
                      </MorphingDialogTitle>
                    </div>
                    <button
                      type="button"
                      className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:bg-white/80 dark:text-zinc-900 dark:hover:bg-white dark:focus-visible:ring-zinc-500"
                      aria-label={`Open dialog for ${tech.name}`}
                    >
                      <PlusIcon size={15} />
                    </button>
                  </div>
                </MorphingDialogTrigger>

                <MorphingDialogContainer>
                  <MorphingDialogContent
                    style={{
                      borderRadius: '16px',
                    }}
                    className="pointer-events-auto relative flex rounded-2xl w-full flex-col overflow-hidden border border-zinc-950/10 bg-white/90 dark:border-zinc-50/10 sm:w-[550px]"
                  >
                    <MorphingDialogImage
                      src={tech.image}
                      alt={tech.name}
                      className="h-80 w-full p-4 "
                    />
                    <div className="p-6 bg-zinc-900">
                      <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                        {tech.name}
                      </MorphingDialogTitle>

                      <MorphingDialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: 100 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: 100 },
                        }}
                      >
                        <p className="mt-2 text-zinc-300">{tech.description}</p>
                      </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className="text-zinc-50 cursor-pointer" />
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}