import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-08-29T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsBirthday(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isBirthday) {
    return (
      <section className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <Heart className="w-24 h-24 text-purple-500 fill-purple-500" />
          </motion.div>
          <h1 className="text-6xl md:text-8xl mb-6 text-lavender-600">
            IT'S YOUR BIRTHDAY! 🎉
          </h1>
          <p className="text-2xl text-gray-600">
            Happy Birthday, Hamsa! Today is your special day! 🎂
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Calendar className="w-16 h-16 mx-auto text-lavender-500 mb-6" />
          <h1 className="text-4xl md:text-6xl mb-4 text-lavender-600">
            Countdown to Your Special Day
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            My dear Hamsa, I can't wait to celebrate with you!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            >
              <Card className="bg-gradient-to-br from-lavender-100 to-purple-100 border-lavender-200 shadow-lg">
                <CardContent className="p-6">
                  <motion.div
                    key={item.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl md:text-5xl text-lavender-600 mb-2"
                  >
                    {item.value.toString().padStart(2, '0')}
                  </motion.div>
                  <p className="text-gray-600 uppercase tracking-wide">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-lavender-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Clock className="w-8 h-8 mx-auto text-lavender-500 mb-4" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Every second brings us closer to celebrating another year of your amazing life. 
            I'm already planning something special, and I hope this birthday will be one of your most memorable yet! 💕
          </p>
        </motion.div>
      </div>
    </section>
  );
}