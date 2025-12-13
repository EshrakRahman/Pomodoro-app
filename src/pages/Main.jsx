import { Button, ClockComponent } from "../components";
import settingsIcon from "../assets/icon-settings.svg";
import { Link } from "react-router";

export default function Main() {
  return (
    <div className="bg-blue-850 min-h-screen ">
      <div className="flex items-center flex-col gap-10 pt-10">
        <h1 className="font-kumbh font-bold text-2xl md:text-3xl text-blue-100">
          pomodoro
        </h1>
        <Button />
        <ClockComponent />
        <div className="py-10">
          <Link to="/settings">
            <img src={settingsIcon} alt="Settings icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
