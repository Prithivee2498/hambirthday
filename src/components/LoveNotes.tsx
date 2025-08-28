import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function LoveNotes() {
  const [currentNote, setCurrentNote] = useState(0);
  const [showNote, setShowNote] = useState(false);

  const loveNotes = [
    {
      title: "Your Beautiful Smile",
      content: "Every time you smile, my world becomes brighter. Your happiness is my greatest joy, Princess. 😊💕",
      emoji: "😊"
    },
    {
      title: "Your Caring Heart",
      content: "The way you care for everyone around you shows what an amazing person you are. Your kindness inspires me every day. 💝",
      emoji: "💝"
    },
    {
      title: "Your Laughter",
      content: "Your laugh is my favorite sound in the world. It's like music that makes everything better. 🎵",
      emoji: "😄"
    },
    {
      title: "Your Intelligence",
      content: "I'm constantly amazed by how smart and thoughtful you are. Every conversation with you is a treasure. 🧠✨",
      emoji: "✨"
    },
    {
      title: "Your Strength",
      content: "You handle challenges with such grace and determination. You're stronger than you know, my lady. 💪",
      emoji: "💪"
    },
    {
      title: "Your Uniqueness",
      content: "Your uniqueness isn't just in what you create,but in how you see the world differently. 🌟",
      emoji: "🌟"
    },
    {
      title: "Your Love",
      content: "The love you give makes me feel like the luckiest person alive. The way you threaten my to eat or to takecare of myself is crazy 'I will kill you'. ❤️",
      emoji: "❤️"
    },
    {
      title: "Our Future",
      content: "I can't wait to create more beautiful memories with you. Here's to many more birthdays together! 🥂",
      emoji: "🥂"
    }
  ];

  const nextNote = () => {
    setCurrentNote((prev) => (prev + 1) % loveNotes.length);
  };

  const prevNote = () => {
    setCurrentNote((prev) => (prev - 1 + loveNotes.length) % loveNotes.length);
  };

  const openNote = () => {
    setShowNote(true);
  };

  const closeNote = () => {
    setShowNote(false);
  };

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MessageCircle className="w-16 h-16 mx-auto text-lavender-500 mb-6" />
          <h1 className="text-4xl md:text-6xl mb-4 text-lavender-600">
            Love Notes for You
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Little reasons why you're so special to me, Ham 💕
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="bg-gradient-to-br from-lavender-50 to-purple-50 rounded-lg p-8 shadow-lg border border-lavender-200 min-h-[400px] flex flex-col justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {!showNote ? (
                <motion.div
                  key="envelope"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                  onClick={openNote}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-8xl mb-4"
                  >
                    💌
                  </motion.div>
                  <h3 className="text-2xl mb-4 text-lavender-600">
                    {loveNotes[currentNote].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Click to open this love note
                  </p>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles className="w-6 h-6 mx-auto text-yellow-500" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="note"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-6xl mb-6">
                    {loveNotes[currentNote].emoji}
                  </div>
                  <h3 className="text-3xl mb-6 text-lavender-600">
                    {loveNotes[currentNote].title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {loveNotes[currentNote].content}
                  </p>
                  <Button
                    onClick={closeNote}
                    variant="outline"
                    className="border-lavender-300 text-lavender-600 hover:bg-lavender-50"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Close Note
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={prevNote}
              variant="outline"
              size="lg"
              className="border-lavender-300 text-lavender-600 hover:bg-lavender-50"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>

            <div className="flex space-x-2">
              {loveNotes.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentNote ? 'bg-lavender-500' : 'bg-lavender-200'
                  }`}
                  onClick={() => setCurrentNote(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <Button
              onClick={nextNote}
              variant="outline"
              size="lg"
              className="border-lavender-300 text-lavender-600 hover:bg-lavender-50"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <motion.p
            className="text-sm text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {currentNote + 1} of {loveNotes.length} love notes
          </motion.p>
        </div>
      </div>
    </section>
  );
}