import { useContext, useEffect, useState } from "react";
import { TimerContext } from "../context/TimerContex";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ClockComponent() {
  const { mode, durations } = useContext(TimerContext);

  const [secondsLeft, setSecondsLeft] = useState(() => {
    return (durations?.[mode] ?? 25) * 60;
  });

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!durations || !durations[mode]) return;

    setSecondsLeft(durations[mode] * 60);
    setIsRunning(false);
  }, [mode, durations]);

  useEffect(() => {
    if (!isRunning) return;
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const timeText = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  const totalSeconds = (durations?.[mode] ?? 25) * 60;
  const progressValue = totalSeconds
    ? ((totalSeconds - secondsLeft) / totalSeconds) * 100
    : 0;

  return (
    <div className="relative circle w-[300px] md:w-[410px] md:h-[410px] h-[300px] rounded-full bg-gradient-1 shadow-2xl/30 flex items-center justify-center">
      <div className="absolute w-[267px] md:w-[366px] md:h-[366px] h-[267px] rounded-full bg-blue-900" />

      {/* <div className="absolute w-[248px] h-[248px] md:w-[339px] md:h-[339px] rounded-full border-10 border-red-400 bg-transparent" /> */}
      <div className="absolute w-[248px] h-[248px] md:w-[339px] md:h-[339px]">
        <CircularProgressbar
          value={progressValue}
          strokeWidth={6}
          styles={buildStyles({
            pathColor: "#F87070", 
            trailColor: "transparent", 
            strokeLinecap: "round",
            rotation: 0, 
          })}
        />
      </div>

      <div className="flex flex-col items-center justify-center z-10">
        <p className="font-kumbh text-blue-100 text-[80px] md:text-[100px] font-bold leading-[125%] tracking-[5px]">
          {timeText}
        </p>

        <button
          onClick={() => setIsRunning((r) => !r)}
          className="font-kumbh font-bold text-[14px] md:text-base leading-[120%] tracking-[13px] text-blue-100 hover:cursor-pointer"
        >
          {isRunning ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
}
