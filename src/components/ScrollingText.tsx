import { useEffect, useState } from "react";

const quotes = [
  "Innovation distinguishes between a leader and a follower - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams - Eleanor Roosevelt", 
  "Trust is built with consistency - Lincoln Chafee",
  "Artificial Intelligence is the new electricity - Andrew Ng",
  "The best way to predict the future is to create it - Peter Drucker",
  "Technology is best when it brings people together - Matt Mullenweg",
  "In God we trust, all others must bring data - W. Edwards Deming",
  "The only way to make sense out of change is to plunge into it - Alan Watts",
  "Innovation is taking two things that exist and putting them together in a new way - Tom Freston",
  "Trust, but verify - Ronald Reagan",
  "AI will augment human intelligence, not replace it - Fei-Fei Li",
  "The future is not some place we are going, but one we are creating - John Schaar"
];

interface ScrollingTextProps {
  direction: "rtl" | "ltr";
  delay?: number;
}

export const ScrollingText = ({ direction, delay = 0 }: ScrollingTextProps) => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }, 8000); // Change quote every 8 seconds

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`scrolling-text ${direction}`}>
      {quotes[currentQuote]}
    </div>
  );
};