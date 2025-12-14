import arrowUpIcon from "../assets/icon-arrow-up.svg";
import arrowDownIcon from "../assets/icon-arrow-down.svg";
import { useContext } from "react";
import { TimerContext } from "../context/TimerContex";

export default function InputButton({ title, type }) {
  const { durations, setDurations } = useContext(TimerContext);

  function increase() {
    setDurations((prev) => ({
      ...prev,
      [type]: Math.min(prev[type] + 5, 60),
    }));
  }

  function decrease() {
    setDurations((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] - 5, 5),
    }));
  }

  return (
    <div className="flex justify-between md:flex-col items-center gap-10">
      <label className="font-kumbh text-[12px] font-bold text-blue-850 opacity-40">
        {title}
      </label>

      <div className="relative">
        <input
          className="bg-blue-50 rounded-2xl w-[140px] h-10 px-4 pr-10 font-bold"
          type="number"
          value={durations[type]}
          readOnly
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <button className="hover:cursor-pointer" onClick={increase}>
            <img src={arrowUpIcon} className="w-3" />
          </button>
          <button className="hover:cursor-pointer" onClick={decrease}>
            <img src={arrowDownIcon} className="w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
