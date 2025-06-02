import { useState } from "react";
import Header from "./components/Header";
import Onboarding from "./components/Onboarding";
import Chat from "./components/Chat";

type Stage = "onboarding" | "chat";

const App = () => {
  const [stage, setStage] = useState<Stage>("onboarding");

  return (
    <div
      className="
          flex flex-col items-center
          min-h-screen bg-(--main-bg)
          overflow-auto
          px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20
          2xl:px-24
          py-4
          gap-10"
    >
      <Header />

      <main className="flex-grow flex justify-center min-w-full">
        {stage === "onboarding" && (
          <Onboarding onDone={() => setStage("chat")} />
        )}
        {stage === "chat" && <Chat />}
      </main>
    </div>
  );
};

export default App;
