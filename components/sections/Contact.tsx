"use client"

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Tag,
  ArrowRight,
  CheckCircle,
  LucideIcon
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; 
import { ContactData, ContactMethodsData } from '@/constants';

const iconComponents: Record<string, LucideIcon | typeof FaWhatsapp> = {
  Mail,
  Phone,
  MapPin,
  FaWhatsapp: FaWhatsapp 
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = ContactData.validation.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = ContactData.validation.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = ContactData.validation.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = ContactData.validation.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = ContactData.validation.messageMinLength;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || ContactData.validation.failedToSend);
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitError((error as Error).message || ContactData.validation.submitError);
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const itemFadeAndSlideUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      }
    }
  };

  const mainStaggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="contact" className="relative py-10 border-y border-dashed border-white/5 text-foreground overflow-hidden">
      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto w-full px-2 sm:px-8"
        variants={mainStaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna del Formulario de Contacto */}
          <motion.div
            className="space-y-8"
          >
            <motion.div variants={itemFadeAndSlideUp} className='w-full pb-8'>
              <h3 className="text-4xl font-bold text-foreground mb-4">{ContactData.formTitle}</h3>
              <p className="text-foreground/60 text-lg">
                {ContactData.formDescription}
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.1 } }}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                >
                  <motion.div variants={itemFadeAndSlideUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/50" />
                      <input
                        type="text"
                        placeholder={ContactData.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 bg-zinc-900 rounded-xl text-foreground placeholder-white/50 focus:outline-none transition-all ${
                          errors.name ? 'border-red-400' : 'border-white/[0.15]'
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/50" />
                      <input
                        type="email"
                        placeholder={ContactData.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 bg-zinc-900 rounded-xl text-foreground placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-all ${
                          errors.email ? 'border-red-400' : 'border-white/[0.15]'
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>

                  <motion.div variants={itemFadeAndSlideUp} className="relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/50" />
                    <input
                      type="text"
                      placeholder={ContactData.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full pl-10 pr-4 py-4 bg-zinc-900 rounded-xl text-foreground placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-all"
                    />
                  </motion.div>

                  <motion.div variants={itemFadeAndSlideUp} className="relative">
                    <MessageSquare className="absolute left-3 top-5 h-5 w-5 text-foreground/50" />
                    <textarea
                      placeholder={ContactData.messagePlaceholder}
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full pl-10 pr-4 py-4 bg-zinc-900 rounded-xl text-foreground placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-all resize-none ${
                        errors.message ? 'border-red-400' : 'border-white/[0.15]'
                      }`}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </motion.div>

                  {submitError && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-center text-sm mt-2"
                    >
                      {submitError}
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden bg-primary/80 text-foreground font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    variants={itemFadeAndSlideUp}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          {ContactData.submitButtonText}
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-10 h-10 text-foreground" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{ContactData.successTitle}</h3>
                  <p className="text-foreground/60 text-lg mb-6">
                    {ContactData.successMessage}
                  </p>
                  <motion.button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-3 bg-zinc-900 border border-white/[0.15] rounded-xl text-foreground hover:bg-white/[0.12] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {ContactData.sendAnotherMessageButton}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Columna de Métodos de Contacto y Respuesta Rápida */}
          <motion.div
            className="space-y-8 pt-4"
          >
            <div className="space-y-4">
              {ContactMethodsData.map((method, index) => {
                const IconComponent = iconComponents[method.iconKey];
                // ¡Asegúrate de que IconComponent exista!
                if (!IconComponent) {
                    console.warn(`IconComponent for key '${method.iconKey}' not found.`);
                    return null;
                }
                return (
                  <motion.a
                    key={index}
                    href={method.link}
                    // Abre en nueva pestaña si es un enlace de WhatsApp
                    target={method.link.startsWith('https://wa.me/') ? '_blank' : '_self'} 
                    rel={method.link.startsWith('https://wa.me/') ? 'noopener noreferrer' : undefined}
                    className="block rounded-2xl transition-all group hover:scale-105"
                    variants={itemFadeAndSlideUp}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className='w-full bg-zinc-900/60 rounded-xl p-4'>
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotateY: 180 }}
                          transition={{ duration: 0.6 }}
                        >
                          {/* Renderiza el icono. Para FaWhatsapp, el color se define por className */}
                          <IconComponent className="w-7 h-7 text-black" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-1">{method.title}</h4>
                          <p className="text-foreground/60 text-sm mb-2">{method.description}</p>
                          <p className="text-foreground font-medium">{method.value}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              className="relative p-6 bg-white/90 rounded-2xl"
              variants={itemFadeAndSlideUp}
            >
              <h4 className="text-lg font-semibold text-zinc-900 mb-3">{ContactData.quickResponseTitle}</h4>
              <p className="text-zinc-900/80 text-sm leading-relaxed">
                {ContactData.quickResponseText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}