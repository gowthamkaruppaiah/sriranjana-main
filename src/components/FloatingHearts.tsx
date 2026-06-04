import { useEffect, useMemo, useState } from "react";

export function FloatingHearts({ count = 18, intense = false }: { count?: number; intense?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 14,
        size: 12 + Math.random() * 24,
        drift: (Math.random() - 0.5) * 200,
        opacity: 0.4 + Math.random() * 0.6,
        emoji: Math.random() > 0.5 ? "❤️" : "🤍",
      })),
    [count, mounted],
  );

  if (!mounted) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute block"
          style={{
            left: `${h.left}%`,
            bottom: "-40px",
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animation: `float-heart ${h.duration}s linear ${h.delay}s infinite`,
            ["--drift" as string]: `${h.drift}px`,
            filter: intense ? "drop-shadow(0 0 12px rgb(255 180 200 / 0.9))" : "drop-shadow(0 0 6px rgb(255 180 200 / 0.7))",
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}

export function Sparkles({ count = 30 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
        size: 2 + Math.random() * 4,
      })),
    [count, mounted],
  );
  if (!mounted) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            boxShadow: "0 0 8px 2px rgb(255 200 220 / 0.9)",
            animation: `sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
