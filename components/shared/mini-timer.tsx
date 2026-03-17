"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTimerStore } from "@/lib/store/ui-store";

export function MiniTimer() {
  const { isRunning, secondsRemaining, start, tick, pause, reset } = useTimerStore();

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => tick(), 1000);
    return () => clearInterval(id);
  }, [isRunning, tick]);

  const minutes = Math.floor(secondsRemaining / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsRemaining % 60).toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-2 text-sm">
      <span>{minutes}:{seconds}</span>
      {!isRunning ? <Button variant="outline" onClick={() => start()}>Start</Button> : <Button variant="outline" onClick={pause}>Pause</Button>}
      <Button variant="ghost" onClick={reset}>Reset</Button>
    </div>
  );
}
