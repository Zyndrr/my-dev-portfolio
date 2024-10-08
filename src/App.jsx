import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bio from "./sections/Bio";
import Skills from "./sections/Skills";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-md mx-auto grid grid-col01 md:grid-cols-3 gap-4 p-3 md:p-7">
        <div className="">
          <Bio />
          <Skills />
        </div>
        <div className="border border-black col-span-2"> column 2</div>
      </div>
    </>
  );
}

export default App;
