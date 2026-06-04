import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import { FloatingHearts, Sparkles } from "../components/FloatingHearts";

export const Route = createFileRoute("/final")({
  head: () => ({
    meta: [
      { title: "Will You Be Mine? 💍❤️" },
      { name: "description", content: "A question only you can answer." },
    ],
  }),
  component: FinalPage,
});

function heartExplosion() {
  const scalar = 2;
  const heart = confetti.shapeFromText({ text: "❤️", scalar });
  const pink = confetti.shapeFromText({ text: "💖", scalar });
  const sparkle = confetti.shapeFromText({ text: "✨", scalar });

  const burst = (originX: number) =>
    confetti({
      particleCount: 60,
      spread: 100,
      startVelocity: 55,
      ticks: 220,
      origin: { x: originX, y: 0.6 },
      shapes: [heart, pink, sparkle],
      scalar,
      gravity: 0.6,
    });

  burst(0.2); burst(0.5); burst(0.8);
  setTimeout(() => { burst(0.3); burst(0.7); }, 350);
  setTimeout(() => burst(0.5), 700);
}

function FinalPage() {
  const [answer, setAnswer] = useState<"yes" | "forever" | null>(null);

  const onYes = () => {
    setAnswer("yes");
    confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
  };
  const onForever = () => {
    setAnswer("forever");
    heartExplosion();
    setTimeout(() => {
      window.location.href =
        "https://wa.me/916374482583?text=Yes%20%E2%9D%A4%EF%B8%8F%20I%20will%20be%20yours%20forever.%20%E2%99%BE%EF%B8%8F%F0%9F%92%95";
    }, 2000);
  };

  return (
    <main className="relative min-h-[100svh] overflow-hidden flex items-center justify-center px-6">
      <Sparkles count={40} />
      <FloatingHearts count={28} intense />

      {/* dreamy glow orbs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-rose/30 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl text-center">
        <AnimatePresence mode="wait">
          {!answer && (
            <motion.div
              key="ask"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-3 text-5xl"
              >
                💍
              </motion.div>
              <h1 className="text-display text-5xl sm:text-7xl leading-tight shimmer-heading">
                Will You Be Mine?
              </h1>
              <p className="mt-3 text-3xl">❤️</p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onYes}
                  className="btn-romantic text-lg animate-glow-pulse"
                >
                  Yes ❤️
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onForever}
                  className="btn-romantic text-lg animate-glow-pulse"
                  style={{ background: "linear-gradient(135deg, oklch(0.92 0.16 350), oklch(0.78 0.2 355))" }}
                >
                  Forever Yes 💖
                </motion.button>
              </div>
            </motion.div>
          )}

          {answer === "yes" && (
            <motion.div
              key="yes"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-rose rounded-3xl p-10"
            >
              <p className="text-display text-3xl sm:text-4xl leading-snug shimmer-heading">
                You just made me the happiest person alive
              </p>
              <p className="mt-4 text-3xl">❤️ ✨</p>
            </motion.div>
          )}

          {answer === "forever" && (
            <motion.div
              key="forever"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-rose rounded-3xl p-10"
            >
              <p className="text-display text-3xl sm:text-4xl leading-snug shimmer-heading">
                Every version of me will always choose you
              </p>
              <p className="mt-4 text-3xl">❤️ ∞</p>
              <p className="mt-6 text-sm text-muted-foreground">opening WhatsApp…</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
