import arrowUpIcon from "../assets/icon-arrow-up.svg";
import arrowDownIcon from "../assets/icon-arrow-down.svg";
import { useContext } from "react";
import { TimerContext } from "../context/TimerContex";

export default function InputButton({ title, type }) {
  const { handleDecrement, handleIncrease, durations } =
    useContext(TimerContext);

  return (
    <>
      <div className=" flex justify-between md:flex-col items-center md:gap-4  gap-10">
        <div className="label">
          <label
            className="font-kumbh text-[12px] font-bold text-blue-850 opacity-40 "
            htmlFor="pomodoro"
          >
            {title}
          </label>
        </div>
        <div className="relative">
          <input
            className="bg-blue-50 rounded-2xl w-[140px] text-blue-850 font-bold text-[13px] font-kumbh  h-10 px-4 pr-10"
            type="number"
            id="pomodoro"
            name={durations[type]}
            max="60"
            value={durations[type]}
            readOnly
          />

          <div className="absolute left-25 top-1/2 flex flex-col gap03 -translate-y-1/2 gap-2">
            <button onClick={() => handleIncrease(type)}>
              <img
                src={arrowUpIcon}
                alt="arrow up icon"
                className="w-3 cursor-pointer"
              />
            </button>
            <button onClick={() => handleDecrement(type)}>
              <img
                src={arrowDownIcon}
                alt="arrow down icon"
                className="w-3 cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
