import { useContext } from "react";
import { TimerContext } from "../context/TimerContex";

export default function Button() {
  const { mode, setMode } = useContext(TimerContext);

  const base =
    "font-kumbh font-bold text-[12px] md:text-[14px] leading-[125%] px-5 py-4 rounded-4xl transition";

  const active = "bg-red-400 text-blue-850";
  const inactive = "text-blue-100 hover:opacity-70 cursor-pointer";

  return (
    <div className="bg-blue-900 w-[330px] md:w-[380px] h-[63px] rounded-4xl flex items-center justify-between px-3">
      <button
        onClick={() => setMode("pomo")}
        className={`${base} ${mode === "pomo" ? active : inactive}`}
      >
        pomodoro
      </button>

      <button
        onClick={() => setMode("short")}
        className={`${base} ${mode === "short" ? active : inactive}`}
      >
        short break
      </button>

      <button
        onClick={() => setMode("long")}
        className={`${base} ${mode === "long" ? active : inactive}`}
      >
        long break
      </button>
    </div>
  );
}
