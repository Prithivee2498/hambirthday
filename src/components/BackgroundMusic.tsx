import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from './ui/button';

interface BackgroundMusicProps {
  isVisible?: boolean;
}

export function BackgroundMusic({ isVisible = true }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Note: Replace this URL with the actual "Aavan Jaavan" song file
  // You can upload the song file to your project or use a streaming URL
  const songUrl = "/Ham birthday song v2.mp3"; // Replace with actual file path

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleError = () => {
      console.log('Audio file not found. Please add the "Aavan Jaavan" song file to your project.');
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Playback failed. User interaction required for autoplay.');
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    const audio = audioRef.current;
    if (audio && !isMuted) {
      audio.volume = newVolume;
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto">
        <source src={songUrl} type="audio/mpeg" />
        <p>Your browser does not support the audio element.</p>
      </audio>

      {/* Floating music controls */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div 
          className="relative"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Main play button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={togglePlay}
              size="lg"
              className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg border-0"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </Button>
          </motion.div>

          {/* Extended controls */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute right-20 bottom-0 bg-white/90 backdrop-blur-md rounded-full p-4 shadow-lg border border-pink-200 flex items-center space-x-3"
              >
                {/* Song info */}
                <div className="flex items-center space-x-2 min-w-0">
                  <Music className="w-4 h-4 text-pink-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 truncate max-w-32">
                    Hamsa Bday Song
                  </span>
                </div>

                {/* Volume control */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-100 p-1 h-8 w-8"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </Button>
                  
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer 
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-500 [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-pink-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
                    style={{
                      background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${(isMuted ? 0 : volume) * 100}%, #fce7f3 ${(isMuted ? 0 : volume) * 100}%, #fce7f3 100%)`
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Music note animation when playing */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                className="absolute -top-2 -right-2 pointer-events-none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <motion.div
                  animate={{ 
                    y: [-5, -15, -5],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-2xl"
                >
                  🎵
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Welcome message for first-time visitors */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="absolute bottom-20 right-0 bg-pink-100 text-pink-700 px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-pink-200"
            >
              <div className="flex items-center space-x-2">
                <Music className="w-4 h-4" />
                <span>Click to play Birthday music! 💕</span>
              </div>
              <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-pink-200 transform translate-y-full"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}