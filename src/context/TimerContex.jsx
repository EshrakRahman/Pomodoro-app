import { useState, createContext } from "react";

export const TimerContext = createContext(null);

export function TimerProvider({ children }) {
  const [mode, setMode] = useState("pomodoro");

  const [durations, setDurations] = useState({
    pomo: 5,
    short: 5,
    long: 15,
  });

  const time = durations[mode] * 60;

  function handleIncrease(type) {
    setDurations((prev) => ({
      ...prev,
      [type]: Math.min(prev[type] + 5, 60),
    }));
  }

  function handleDecrement(type) {
    setDurations((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] - 5, 5),
    }));
  }

  return (
    <TimerContext.Provider
      value={{
        mode,
        setMode,
        durations,
        time,
        handleIncrease,
        handleDecrement,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
