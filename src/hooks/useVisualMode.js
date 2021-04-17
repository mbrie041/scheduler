import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    if (!replace) {
      setHistory((prev) => [...prev, mode]);
    } else {
      setHistory((prev) => [...prev.slice(0, prev.length - 1), mode]);
    }
  };

  const back = () => {
    setHistory((prev) => {
      if (prev.length > 1) {
        return [...prev.slice(0, prev.length - 1)];
      } else {
        return prev
      }
    });
  };
  console.log({ history });
  return { mode: history[history.length - 1], transition, back };
}
