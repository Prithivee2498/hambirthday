import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { BackgroundMusic } from './BackgroundMusic';
import heroImage from '../assets/IMG-20250827-WA0007.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Music */}
      <BackgroundMusic />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Hamsa at the beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-200/30 via-purple-200/40 to-violet-200/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <Heart className="w-16 h-16 text-purple-500 fill-purple-500" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl mb-6 text-white drop-shadow-lg">
            Happy Birthday
          </h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl mb-8 text-lavender-100 drop-shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            My Dearest Hamsa! 💕
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 drop-shadow-lg mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Today marks another year of your beautiful existence,<br />
            and I'm so grateful to celebrate this special day with you!
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            >
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              <Heart className="w-8 h-8 text-lavender-300 fill-lavender-300" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            >
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-white/80 text-sm mb-2">Explore my gift for you</p>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full mx-auto">
            <motion.div
              className="w-1 h-2 bg-white/80 rounded-full mx-auto mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}