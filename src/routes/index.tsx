import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import romance1 from "../assets/romance-1.jpg";
import { FloatingHearts } from "../components/FloatingHearts";
import { PollCard } from "../components/PollCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "If There Are Infinite Worlds ❤️" },
      { name: "description", content: "Every version of me chooses you." },
    ],
  }),
  component: Page1,
});

function Page1() {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen overflow-hidden pb-20">
      <FloatingHearts count={14} />
      <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          src={romance1}
          alt="A couple at sunset"
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-script text-3xl text-rose-soft drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
        >
          for you ❤️
        </motion.div>
      </section>

      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mx-auto mt-10 max-w-2xl px-6 text-center"
      >
        <p className="text-display italic text-2xl sm:text-3xl leading-relaxed shimmer-heading">
          "If there are infinite worlds, every version of me chooses you in every one of them."
        </p>
        <p className="mt-3 text-xl">❤️</p>
      </motion.blockquote>

      <section className="mt-12 px-4">
        <PollCard title="Never leave me 😣🫴🏻" onContinue={() => navigate({ to: "/page-two" })} />
      </section>
    </main>
  );
}
