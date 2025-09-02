"use client";
import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <span className="text-xl">
      <Typewriter
        words={[
          "Software Engineer (SDE II)",
          "Frontend Lead",
          "React • Next.js • TypeScript",
        ]}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </span>
  );
}
