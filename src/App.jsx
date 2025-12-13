import { BrowserRouter, Route, Routes } from "react-router";
import { Main, Settings } from "./pages";
import { TimerProvider } from "./context/TimerContex";

function App() {
  return (
    <>
      <TimerProvider>
        <div className="">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TimerProvider>
    </>
  );
}

export default App;
