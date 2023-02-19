import { useState } from "react";
import pic1 from "../pic.png"
import pic2 from "../pic2.png"


import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


export default function Child1({openChild2, openChild3}) {
    const [heart, setHeart] = useState(false);
  return (
    <div
      style={{
        padding: "20px",
        width: "32vw",
        background: "white",
        height: '42vh',
        borderRadius: '5px'
        
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="w-72 flex ">
            <img className="mr-4" src={heart ? pic1 : pic2} alt='pic' />

            <div className="w-56 ">
              <h2 className="font-bold">Ronny Who</h2>
              <h3>CEO of Corn Kernel Tech</h3>
            </div>
          </div>
          <div>
            {heart ? (
              <AiOutlineHeart
                className="text-3xl"
                onClick={() => {
                  setHeart(false);
                }}
              />
            ) : (
              <AiFillHeart
                style={{ color: "#ff0000" }}
                className=" text-3xl"
                onClick={() => {
                  setHeart(true);
                }}
              />
            )}
          </div>
        </div>

        <div style={{height: '18vh'}}>
          <p
            style={{
              background: "#e5e5e5",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px 0",
            }}
          >
        
            Welcome to the future of Corn3 Security
          </p>
          <p
            style={{
              background: "#e5e5e5",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            Do you wish to go down the rabbit hole of Corn3 with Corn Kernel
            Tech or stay within your own metaverse that is reality?
          </p>
        </div>
        <div className="flex space-x-4 mt-10">
          <button
          onClick={openChild3}
            style={{ backgroundColor: "#0ea5e9" }}
            className="rounded-3xl w-72 h-12  text-white"
          >
            Uhh.. no.
          </button>
          <button
            onClick={openChild2}
            style={{ background: "#ef4444" }}
            className="rounded-3xl w-72 h-12  text-white font-bold"
          >
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
}
