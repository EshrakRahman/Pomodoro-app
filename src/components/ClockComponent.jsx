export default function ClockComponent() {
  return (
    <>
      <div className="relative circle w-[300px] h-[300px] rounded-full bg-gradient-1 shadow-2xl/30 flex items-center justify-center">
        <div className="absolute w-[267px] h-[267px] rounded-full bg-blue-900 "></div>

        <div className="absolute w-[248px] h-[248px] rounded-full border-10 border-red-400 bg-transparent"></div>

        <div className="flex flex-col items-center justify-center z-10">
          <p className="font-kumbh text-blue-100 text-[80px] font-bold leading-[125%] tracking-[-5px]">
            17:59
          </p>
          <button className="font-kumbh font-bold text-[14px] leading-[120%] tracking-[13px] text-blue-100 hover:cursor-pointer">
            Pause
          </button>
        </div>
      </div>
    </>
  );
}
