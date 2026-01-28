import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  phrases: string[];
  className?: string;
}

const Typewriter = ({ phrases, className }: TypewriterProps) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenPhrases = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases]);

  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <span className={className}>
      {text}
      <motion.span
        animate="blinking"
        className="inline-block w-0.5 h-full bg-gray-400 ml-1"
        style={{ height: "1em", verticalAlign: "text-bottom" }}
      />
    </span>
  );
};

export default Typewriter;
