import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import romanceVideo from "../assets/romance-video.mp4";
import { FloatingHearts } from "../components/FloatingHearts";

export const Route = createFileRoute("/page-three")({
  head: () => ({
    meta: [
      { title: "I miss you 🤍😭" },
      { name: "description", content: "Wanna cry in your arms." },
    ],
  }),
  component: Page3,
});

function Page3() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingHearts count={12} />

      <div className="relative h-[100svh] w-full overflow-hidden">
        <video
          src={romanceVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center"
        >
          <p className="text-display italic text-2xl sm:text-4xl leading-relaxed text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            "Wanna cry in your arms
            <br className="hidden sm:block" />
            & say how difficult it is without you"
          </p>

          <p className="mt-4 text-2xl">🤍 😭 🤌🏻</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute inset-x-0 bottom-12 flex justify-center"
        >
          <button
            onClick={() => navigate({ to: "/final" })}
            className="btn-romantic animate-glow-pulse text-lg px-10 py-4"
          >
            Continue ❤️
          </button>
        </motion.div>
      </div>
    </main>
  );
}

export default Page3;