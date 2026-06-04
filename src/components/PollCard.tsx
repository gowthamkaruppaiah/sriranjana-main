import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  onContinue: () => void;
}

export function PollCard({ title, onContinue }: Props) {
  const [choice, setChoice] = useState<"yes" | "no" | null>(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const dodge = () => {
    setNoPos({
      x: (Math.random() - 0.5) * 280,
      y: (Math.random() - 0.5) * 120,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="glass-rose mx-auto w-full max-w-md rounded-3xl p-6 sm:p-8"
    >
      <h3 className="text-center text-display text-2xl sm:text-3xl text-rose-soft mb-6 leading-snug">
        {title}
      </h3>

      {!choice ? (
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center relative h-32 sm:h-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setChoice("yes")}
            className="btn-romantic w-full sm:w-auto animate-glow-pulse"
          >
            Yes ❤️
          </motion.button>
          <motion.button
            animate={noPos}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={dodge}
            onTouchStart={dodge}
            onClick={dodge}
            className="btn-ghost-rose w-full sm:w-auto"
          >
            No 💔
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-5"
        >
          <p className="text-display text-xl text-rose-soft">
            I knew you'd say yes ❤️
          </p>
          <button onClick={onContinue} className="btn-romantic animate-glow-pulse">
            Continue →
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
