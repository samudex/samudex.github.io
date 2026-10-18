import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

function formatTime() {
  return new Intl.DateTimeFormat("es-VE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: profile.timezone,
  }).format(new Date());
}

export function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(formatTime());

    const interval = window.setInterval(() => {
      setTime(formatTime());
    }, 30_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="font-mono tabular-nums" suppressHydrationWarning>
      {time || "--:--"}
    </span>
  );
}
