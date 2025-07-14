"use client";

import Link from "next/link"; 
import { heroContent } from "@/constants";
import { FloatingDock } from "../ui/dock";
import { ArrowDownToLine } from 'lucide-react';
import { motion, Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; 

const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 30,
            damping: 12,
        },
    },
};

export function Hero() {
    const { newFeatureLinkText, newFeatureLinkHref, headline, subheadline,  button2 } = heroContent;

    const handleDownloadCV = () => {
        const cvPath = '/cv/ASCV.pdf';

        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'AlejandroSandjian_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleWhatsAppClick = () => {

        const phoneNumber = '+5492235685711';
        const message = encodeURIComponent('Hola Alejandro, vi tu portfolio y me gustaría contactarte.');

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank', 'noopener noreferrer');
    };

    return (
        <section id="home" className="w-full pb-10 ">
            <div className="relative bg-cover bg-center bg-[url('/backgrounds/bg-sm.webp')] lg:bg-[url('/backgrounds/1.webp')] md:-top-20 flex items-center ">
                <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background z-0"></div>
                <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-0"></div>
                <div className="w-full mx-auto max-w-6xl z-10 mt-20 md:mt-44 px-2 sm:px-8">
                    <div className="flex">
                        <motion.div
                            className="relative max-w-lg text-left text-foreground py-4"
                            initial="hidden"
                            animate="visible"
                            variants={textContainerVariants}
                        >
                            <motion.div variants={itemVariants}>
                                <Link
                                    href={newFeatureLinkHref}
                                    className="rounded-full flex w-fit items-center gap-2 px-6 lg:ml-0 border border-zinc-700/60 backdrop-blur-sm transition-all p-1 text-foreground/80 hover:border-white/70 duration-300 hover:shadow hover:shadow-white/30"
                                >
                                    <span className="relative flex h-3 w-3 items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                                    </span>
                                    <span className="text-xs">{newFeatureLinkText}</span>
                                </Link>
                            </motion.div>

                            <motion.h1
                                className="mt-4 text-balance text-5xl font-bold"
                                variants={itemVariants}
                            >
                                {headline}
                            </motion.h1>

                            <motion.p
                                className="mt-4 text-md sm:text-lg opacity-90"
                                variants={itemVariants}
                            >
                                {subheadline}
                            </motion.p>

                            <FloatingDock variants={itemVariants} />

                            <motion.div
                                className="w-full flex flex-col sm:flex-row pt-6 gap-x-4 gap-y-4"
                                variants={itemVariants}
                            >
                                <motion.button
                                    onClick={handleWhatsAppClick} 
                                    className="w-full h-12 rounded-xl bg-zinc-900/40 border border-white/10 hover:border-white text-foreground text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                                    whileHover={{ scale: 1.02 }} 
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                    Contactar
                                </motion.button>

                                <button
                                    onClick={handleDownloadCV}
                                    className="w-full h-12 rounded-xl bg-white text-zinc-900 text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-primary/80 hover:text-foreground"
                                >
                                    {button2.text}
                                    <ArrowDownToLine className="w-4 h-4" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}