"use client"
import { useRef } from "react";

export default function Glitch() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      onTimeUpdate={() => {
        if (videoRef.current && videoRef.current.currentTime >= 3) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }}
      className="w-[450px] h-[450px] object-contain"
    >
      <source src="/videos/glitch.webm" type="video/webm" />
    </video>
  );
}