import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Gift, Sparkles, Calendar, MessageCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { HeroSection } from './components/HeroSection';
import { CountdownTimer } from './components/CountdownTimer';
import { LoveNotes } from './components/LoveNotes';
import { PhotoGallery } from './components/PhotoGallery';
import { FloatingHearts } from './components/FloatingHearts';
import surprisePhoto from './assets/IMG-20250825-WA0025.jpg';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home', icon: Heart },
    { id: 'countdown', label: 'Countdown', icon: Calendar },
    { id: 'love-notes', label: 'Love Notes', icon: MessageCircle },
    { id: 'memories', label: 'Memories', icon: Sparkles },
    { id: 'surprise', label: 'Surprise', icon: Gift },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-purple-50 to-violet-50 relative overflow-hidden">
      <FloatingHearts />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-lavender-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={currentSection === id ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentSection(id)}
                className={`${
                  currentSection === id 
                    ? 'bg-lavender-500 hover:bg-lavender-600 text-white' 
                    : 'text-lavender-600 hover:text-lavender-700 hover:bg-lavender-100'
                }`}
              >
                <Icon className="w-4 h-4 mr-1" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {currentSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <HeroSection />
            </motion.div>
          )}

          {currentSection === 'countdown' && (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CountdownTimer />
            </motion.div>
          )}

          {currentSection === 'love-notes' && (
            <motion.div
              key="love-notes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <LoveNotes />
            </motion.div>
          )}

          {currentSection === 'memories' && (
            <motion.div
              key="memories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PhotoGallery />
            </motion.div>
          )}

          {currentSection === 'surprise' && (
            <motion.div
              key="surprise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="container mx-auto px-4 py-12"
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <Gift className="w-24 h-24 mx-auto text-lavender-500 mb-6" />
                </motion.div>
                <h1 className="text-4xl md:text-6xl mb-6 text-lavender-600">
                  Happy Birthday, Hamsa! 🎉
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  This website is my gift to you - filled with all my love, memories, and wishes for your special day!
                </p>
                <div className="relative w-full max-w-md mx-auto">
                  <img 
  src={surprisePhoto} 
  alt="My sweet Hamsa with her favorite treats" 
  className="w-full h-auto rounded-lg shadow-lg" 
/>
                </div>
                <motion.p 
                  className="text-lg text-gray-600 mt-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Just like your favorite DBC treats bring a smile to your face, you bring endless sweetness and joy to my life! 🍦💕
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}