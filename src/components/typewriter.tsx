
"use client";

import React, { useState, useEffect } from 'react';
import './typewriter.css';

interface TypewriterProps {
  text: string;
  speed?: number;
}

export function Typewriter({ text, speed = 50 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsTypingComplete(false);
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return (
    <p className="text-foreground/80 md:text-lg h-24">
      {displayedText}
      {!isTypingComplete && <span className="blinking-cursor">|</span>}
    </p>
  );
}
