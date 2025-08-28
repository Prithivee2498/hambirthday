import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Camera, Heart, X } from 'lucide-react';
import { Button } from './ui/button';
import photo1 from '../assets/1000069775.jpg';
import photo2 from '../assets/1000072139.jpg';
import photo3 from '../assets/1000072141.jpg';
import photo4 from '../assets/1000071693.jpg';
import photo5 from '../assets/1000068379.jpg';
import photo6 from '../assets/1000072134.jpg';
import photo7 from '../assets/1000071121.jpg';
import photo8 from '../assets/IMG_2373.jpg';
import photo9 from '../assets/IMG_2340.jpg';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Beautiful memories of Hamsa
  const memories = [
    {
      id: 1,
      src: photo1,
      // title: "Two Rays of Sunshine",
      // description: "Your Smile lights up the room, and the little one makes it even brighter. Pure love in single frame 🍦✨"
      title: "Kiddo Goddess",
      description: "Absolutely breathtaking by the cuteness! You look like a vision of pure happiness and beauty 😍🍼"
    },
    {
      id: 2,
      src: photo2,
      //title: "Every Click , Every Story",
      //description: "Her clicks tell stories,but her presence is already a masterpeice! 🥘😋"
      title: "Together is Our Favorite Place to Be",
      description: "By the sea,with smiles that shine brighter than the waves. A family the laughs together, stays together! 🧑‍🧑‍🧒‍🧒😘"
    },
    {
      id: 3,
      src: photo3,
      //title: "Two Rays of Sunshine",
      //description: "Absolutely breathtaking by the cuteness! You look like a vision of pure happiness and beauty 🏖️💙"
      title: "From Giggles to Secrets, Some Bonds Never Change",
      description: "Not sisters by blood, but soulmates by choice. Childhood made us friends, life made us family. 👭💙"
    },
    {
      id: 4,
      src: photo4,
      //title: "Home Sweet Home",
      //description: "! Your joy in trying new places makes every moment special 🍽️💕"
      title: "Every Click , Every Story",
      description: "Her clicks tell stories,but her presence is already a masterpeice! 📸🎞️"
    },
    {
      id: 5,
      src: photo5,
      //title: "Effortlessly Stunning",
      //description: "Your natural style and confidence shine through in every photo. You're absolutely gorgeous, Kitty! 😎💖"
      title: "When Art Speaks,Hearts Listen",
      description: "Every Stipple tells a story, and her smile completes the masterpiece! 🎨🖌️"
    },
    {
      id: 6,
      src: photo6,
      title: "Two Rays of Sunshine",
      description: "Absolutely breathtaking by the cuteness! You look like a vision of pure happiness and beauty!👩🏻‍🍼💕"
    },
    {
      id: 7,
      src: photo7,
      title: "Effortlessly Stunning",
      description: "Your natural style and confidence shine through in every photo. You're absolutely gorgeous, Kitty! 😎💖"
    },
    {
      id: 8,
      src: photo8,
      title: "Where Friendship Feels Like Home",
      description: "Good vibes,great company, and memories that last forever! ♾️😍"
    },
    {
      id: 9,
      src: photo9,
      title: "Cheers to Us",
      description: "Your radiant smile and infectious laughter - this is what pure happiness looks like! 🥂🌟"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <Camera className="w-16 h-16 mx-auto text-lavender-500 mb-6" />
        <h1 className="text-4xl md:text-6xl mb-4 text-lavender-600">
          Our Beautiful Memories
        </h1>
        <p className="text-xl text-gray-600">
          Every picture tells a story... , Cute Lil Puppy 📸💕
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="cursor-pointer group"
            onClick={() => setSelectedPhoto(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
              <ImageWithFallback
                src={memory.src}
                alt={memory.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-medium mb-1">{memory.title}</h3>
                <p className="text-sm text-white/90">{memory.description}</p>
              </div>
              <motion.div
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <Heart className="w-6 h-6 text-purple-500 fill-purple-500" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for full-size image */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="w-4 h-4" />
              </Button>
              
              <ImageWithFallback
                src={memories[selectedPhoto].src}
                alt={memories[selectedPhoto].title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              
              <div className="p-6">
                <h3 className="text-2xl mb-2 text-lavender-600">
                  {memories[selectedPhoto].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {memories[selectedPhoto].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-lavender-200 max-w-2xl mx-auto">
          <Sparkles className="w-8 h-8 mx-auto text-yellow-500 mb-4" />
          <p className="text-lg text-gray-700 leading-relaxed">
            "Every memory of you is like a precious gem that I treasure in my heart. 
            Here's to creating countless more beautiful moments, my dearest sunshine! 💎"
          </p>
        </div>
      </motion.div>
    </section>
  );
}