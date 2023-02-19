import "./App.css";

import { useState } from "react";

import Child1 from "./components/child1";
import Child2 from "./components/child2";
import Child3 from "./components/child3";

function App() {
  const [showChild2, setShowChild2] = useState(false);
  const [showChild3, setShowChild3] = useState(false);
  console.log(showChild3);
  return (
    <div className="flex items-center justify-center bg-black">
      <div
        style={{ height: "100vh", width: "65vw", background: "#e5e5e5" }}
        className=" flex items-center flex-col justify-center w-10/12 "
      >
        <div style={{ width: "32vw", marginBottom: "10px" }}>
          <div className="flex flex-col justify-start">
            <h1 className="font-bold">Hello Corntek!</h1>
            <p>My name is Hulguu</p>
          </div>
        </div>
        {!showChild2 && !showChild3 ? (
          <Child1
            openChild2={() => setShowChild2(true)}
            openChild3={() => setShowChild3(true)}
          />
        ) : showChild2 ? (
          <Child2
            closeChild2={() => {
              setShowChild2(false);
            }}
          />
        ) : (
          <Child3
            closeChild3={() => {
              setShowChild3(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
