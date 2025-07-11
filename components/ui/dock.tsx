"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants, // Asegúrate de importar Variants
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Mail, Github, TwitterIcon, Linkedin, Instagram } from "lucide-react";

export const FloatingDockComponent = ({
  items,
  desktopClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <FloatingDockDesktop items={items} className={desktopClassName} />
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div // motion.div ya que queremos que el efecto de mouseX funcione
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        " flex h-16 items-end gap-4 rounded-2xl bg-white/90 px-4 pb-3 shadow-sm",
        className
      )}
    >
      {items.map((item) => (
        // Los IconContainer no necesitan sus propias variantes de entrada aquí;
        // La animación de entrada la manejará el FloatingDock principal desde el Hero.
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-white/90 shadow-sm"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-white/90 px-2 py-0.5 text-xs whitespace-pre text-neutral-900"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}

export function FloatingDock({ variants }: { variants?: Variants }) { // Acepta `variants` como prop
  const links = [
    {
      title: "Instagram",
      icon: <Instagram className="h-full w-full text-zinc-900" />,
      href: "https://instagram.com/ale.sandjian",
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-zinc-900" />,
      href: "https://github.com/sandjian",
    },
    {
      title: "X",
      icon: <TwitterIcon className="h-full w-full text-zinc-900" />,
      href: "https://x.com/ale.sandjian",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-zinc-900" />,
      href: "https://linkedin.com/in/sandjian-alejandro",
    },
    {
      title: "Gmail",
      icon: <Mail className="h-full w-full text-zinc-900" />,
      href: "mailto:alesandjian@gmail.com",
    },
  ];

  return (
    <motion.div
      className=" flex items-end justify-start w-full mt-6 z-50"
      variants={variants} // Aplica las variantes recibidas al contenedor principal del dock
    >
      <FloatingDockComponent
        desktopClassName=" bg-zinc-900/40 border border-white/10 "
        items={links}
      />
    </motion.div>
  );
}