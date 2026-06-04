import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

import music from "../assets/music.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.volume = 0.35;
    a.loop = true;

    a.play()
      .then(() => setPlaying(true))
      .catch((err) => {
        console.log("Autoplay blocked:", err);
      });
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;

    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;

    a.muted = !a.muted;
    setMuted(a.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={music}
        autoPlay
        loop
        preload="auto"
      />

      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 glass rounded-full px-3 py-2">
        <button
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
          className="grid h-9 w-9 place-items-center rounded-full bg-rose/80 text-background transition hover:scale-110"
        >
          {playing ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>

        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="grid h-9 w-9 place-items-center rounded-full text-rose-soft hover:bg-white/10 transition"
        >
          {muted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>
      </div>
    </>
  );
}