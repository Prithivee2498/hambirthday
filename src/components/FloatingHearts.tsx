import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  size: number;
  color: string;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const colors = ['text-purple-400', 'text-lavender-400', 'text-violet-400', 'text-purple-300', 'text-lavender-300'];
    
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          size: Math.random() * 20 + 20, // 20-40px
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 15000); // Regenerate every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className={`absolute ${heart.color} opacity-70`}
            style={{
              left: `${heart.left}%`,
              bottom: '-50px',
            }}
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={{ 
              y: -window.innerHeight - 100, 
              opacity: [0, 0.7, 0.7, 0],
              scale: [0, 1, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4, // 8-12 seconds
              delay: heart.delay,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 10 + Math.random() * 5
            }}
          >
            <Heart 
              size={heart.size} 
              className="fill-current"
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-yellow-400 opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}