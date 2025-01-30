import { useState } from "react"
import Demo, { DemoType } from "./demo"
import Install from "./install"
import Introduction from "./intro"
import { cn } from "./lib"

type pages = "intro" | "install" | "demo"

function App() {
  const [player, setPlayer] = useState<DemoType | undefined>(undefined)
  const [current, setCurrent] = useState<pages>('demo')

  return (
    <>
      {player ?
        <div className="relative">
          <div className="absolute top-2 left-2 z-20 border rounded text-white bg-slate-600 cursor-pointer px-2" onClick={() => setPlayer(undefined)}>Back</div>
          {player.component}
        </div>
        :
        <div className="w-screen h-screen overflow-hidden bg-gray-900 text-white flex">
          <div className="w-48 h-screen overflow-auto bg-slate-950">
            <div className="p-4 text-lg">Smart TV Player</div>
            <div className="flex flex-col gap-4 p-4">
              <div
                className={cn("px-3 py-1 cursor-pointer rounded-lg hover:bg-stone-800", current === "intro" && "bg-slate-700")}
                onClick={() => setCurrent("intro")}
              >Introduction</div>
              <div
                className={cn("px-3 py-1 cursor-pointer rounded-lg hover:bg-stone-800", current === "install" && "bg-slate-700")}
                onClick={() => setCurrent("install")}
              >Installation</div>
              <div
                className={cn("px-3 py-1 cursor-pointer rounded-lg hover:bg-stone-800", current === "demo" && "bg-slate-700")}
                onClick={() => setCurrent("demo")}
              >Demo</div>
            </div>
          </div>
          <div className="flex-1">
            {current === "intro" && <Introduction />}
            {current === "install" && <Install />}
            {current === "demo" && <Demo setPlayer={setPlayer} />}
          </div>
        </div>}
    </>
  )
}

export default App
