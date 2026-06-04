import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import romance2 from "../assets/romance-2.jpg";
import { FloatingHearts } from "../components/FloatingHearts";
import { PollCard } from "../components/PollCard";

export const Route = createFileRoute("/page-two")({
  head: () => ({
    meta: [
      { title: "Our Safe Place 🫂❤️" },
      { name: "description", content: "We break each other, yet we are home." },
    ],
  }),
  component: Page2,
});

function Page2() {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen overflow-hidden pb-20">
      <FloatingHearts count={16} />
      <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={romance2}
          alt="Hands intertwined with petals"
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      </section>

      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mx-auto mt-10 max-w-2xl px-6 text-center"
      >
        <p className="text-display italic text-2xl sm:text-3xl leading-relaxed shimmer-heading">
          "We break each other every time, yet somehow we're still each other's safe place."
        </p>
        <p className="mt-3 text-xl">🫂 ❤️</p>
      </motion.blockquote>

      <section className="mt-12 px-4">
        <PollCard
          title="Can we start again over tears and fights?"
          onContinue={() => navigate({ to: "/page-three" })}
        />
      </section>
    </main>
  );
}
