import "../App.css";
import React, { useEffect, useState } from "react";
import "../index.css";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Solutions";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-blue-500 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold flex items-center justify-center">
        <img
          src="./img/jamsolutions-icon.png"
          alt="Logo"
          className="max-w-[60px]"
        />
        <span className="font-mono font-bold bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent leading-right">
          JAM
        </span>
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
