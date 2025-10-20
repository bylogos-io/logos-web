'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Mail } from 'lucide-react';
import logoImage from '@public/logos.svg';

import { GlowOrb } from './ui/glow-orb';

export function Hero({heroRef}: {heroRef: React.RefObject<HTMLElement | null>}) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] 
        dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] 
        bg-[size:50px_50px]"
      />

      {/* Glowing orb */}
      <GlowOrb containerRef={heroRef} />

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-disabled"
          >
            <Image
              src={logoImage}
              alt="LogOS Logo"
              className="h-16 w-auto mx-auto mb-4"
            />
          </motion.div>

          {/* Main title */}
          <div className="flex justify-center items-center gap-2 text-sm text-primary font-medium mb-4 text-disabled">
            Energía inteligente, procesos eficientes.
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl mb-6"
          >
            <span className='bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent text-disabled'>Tu plataforma de energía{' '}</span>
            <span className="text-primary text-disabled">Inteligente</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-disabled"
          >
            Visualización, monitoreo y gestión de sistemas eléctricos en tiempo real.
            Solución híbrida edge-cloud con IA integrada para análisis industrial avanzada.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mb-10 text-muted-foreground text-disabled"
          >
            <div className="text-center text-disabled">
              <div className="text-2xl text-primary">99.9%</div>
              <div className="text-sm">Uptime Garantizado</div>
            </div>
            <div className="text-center text-disabled">
              <div className="text-2xl text-primary">Seguridad</div>
              <div className="text-sm">Arquitectura local-first</div>
            </div>
            <div className="text-center text-disabled">
              <div className="text-2xl text-primary">{"<"}1s</div>
              <div className="text-sm">Latencia mínima</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 h-auto rounded-lg group transition-all duration-300 hover:scale-105 "
            >
              <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span className='flex flex-col relative'>
                <span>Probar demo</span>
                <span className='text-[.56em] absolute bottom-[-10px] mx-auto'>
                  (Próximamente)
                </span>
              </span>
            </Button>
            <Link href='#contact'>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary text-foreground px-8 py-4 h-auto rounded-lg group transition-all duration-300 hover:scale-105 "

              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-15 transition-transform" />
                Contacto
              </Button></Link>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-muted-foreground mt-8 text-disabled"
          >
            Probado en industrias críticas • Acoplado a normativas RIC para SEN{/*• ISO 27001 • IEC 61850*/}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}