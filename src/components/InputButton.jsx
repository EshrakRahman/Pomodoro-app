import arrowUpIcon from "../assets/icon-arrow-up.svg";
import arrowDownIcon from "../assets/icon-arrow-down.svg";

export default function InputButton() {
  return (
    <>
      <div className=" flex justify-between items-center  gap-10">
        <div className="label">
          <label
            className="font-kumbh text-[12px] font-bold text-blue-850 opacity-40 "
            htmlFor="pomodoro"
          >
            pomodoro
          </label>
        </div>
        <div className="relative">
          <input
            className="bg-blue-50 rounded-2xl w-[140px] text-blue-850 font-bold text-[13px] font-kumbh  h-10 px-4 pr-10"
            type="number"
            id="pomodoro"
            name="pomodoro"
            min="20"
            max="60"
            step="5"
            defaultValue={25}
          />

          <div className="absolute left-25 top-1/2 flex flex-col gap03 -translate-y-1/2 gap-2">
            <img
              src={arrowUpIcon}
              alt="arrow up icon"
              className="w-3 cursor-pointer"
            />
            <img
              src={arrowDownIcon}
              alt="arrow down icon"
              className="w-3 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
