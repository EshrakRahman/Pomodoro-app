import { Link, Links } from "react-router";
import closeIcon from "../assets/icon-close.svg";
import InputButton from "./InputButton";

export default function SettingsPage() {
  return (
    <>
      <div className=" relative w-[330px] md:w-[540px] pb-10 px-4 md:px-6  bg-white rounded-lg py-5 shadow-lg">
        <div className="border-b border-gray-200 flex justify-between p-4 items-center  ">
          <p className="font-kumbh font-bold text-3xl leading-[125%] text-blue-900  ">
            Settings
          </p>
          <div className="">
            <Link to="/">
              <img
                className="hover:cursor-pointer"
                src={closeIcon}
                alt="Close icon"
              />
            </Link>
          </div>
        </div>
        <div className="input-area py-4 flex flex-col justify-between ">
          <p className="font-kumbh text-blue-900 font-bold text-[11px] text-center mb-6 tracking-[5px] uppercase">
            time (minutes)
          </p>
          <div className="flex flex-col md:flex-row md:justify-center gap-4 border-b pb-6 border-gray-200">
            <InputButton title="pomodoro" type="pomo" />
            <InputButton title="short break" type="short" />
            <InputButton type="long" title="long break" />
          </div>
        </div>

        <div className="font-option mb-6">
          <p className="font-kumbh text-blue-900 font-bold text-[11px] text-center mb-6 tracking-[5px] uppercase">
            Font
          </p>
          <div className="opitions border-b border-gray-200 pb-5  flex items-center justify-center gap-4">
            <p className=" h-10 w-10 rounded-full font-kumbh flex  items-center justify-center text-white bg-blue-900">
              Aa
            </p>
            <p className="h-10 w-10 bg-blue-50 flex font-rslab text-blue-850 opacity-70 items-center justify-center rounded-full font-kumbh">
              Aa
            </p>
            <p className="h-10 w-10 bg-blue-50 flex  text-blue-850 font-space opacity-70 items-center justify-center rounded-full font-kumbh">
              Aa
            </p>
          </div>
        </div>

        <div className="colors-option border-b border-gray-200 pb-5">
          <p className="font-kumbh text-blue-900 font-bold text-[11px] text-center mb-6 tracking-[5px] uppercase">
            Colors
          </p>
          <div className="flex gap-6 justify-center items-center">
            <div className=" bg-red-400 h-10 w-10  items-center justify-center rounded-full font-kumbh"></div>
            <div className="h-10 w-10 bg-cyan-300  items-center justify-center rounded-full font-kumbh"></div>
            <div className="h-10 w-10 bg-purple-400 items-center justify-center rounded-full font-kumbh"></div>
          </div>
        </div>
        <div className="absolute left-[30%] md:left-[38%] top-[98%]">
          <Link
            to="/"
            className="px-10  hover:cursor-pointer  py-3 bg-red-400 rounded-4xl text-white font-kumbh"
          >
            Apply
          </Link>
        </div>
      </div>
    </>
  );
}
