export default function Button() {
  return (
    <>
      <div className="bg-blue-900   w-[330px] md:w-[380px] h-[63px] rounded-4xl flex items-center justify-between px-3">
        <a className=" font-kumbh text-blue-850 font-bold text-[12px] md:text-[14px] leading-[125%] px-5 py-4 bg-red-400 rounded-4xl">
          pomodoro
        </a>
        <a className="font-kumbh text-blue-100 font-bold text-[12px] md:text-[14px] leading-[125%]">
          short break
        </a>
        <a className="font-kumbh text-blue-100 font-bold text-[12px] md:text-[14px] leading-[125%]">
          long break
        </a>
      </div>
    </>
  );
}
