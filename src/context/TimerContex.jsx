import { createContext, useState } from "react";

export const TimerContext = createContext(null);

export function TimerProvider({ children }) {
  const [mode, setMode] = useState("pomo");

  const [durations, setDurations] = useState({
    pomo: 25,
    short: 5,
    long: 15,
  });

  return (
    <TimerContext.Provider
      value={{
        mode,
        setMode,
        durations,
        setDurations,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
