"use client";

import { useState } from "react";
import Button from "@/app/components/Button";

export default function CounterComp() {
  const [count, setCount] = useState<number>(0);

  const onClickAddHandler = () => {
    setCount(count + 1);
    console.log("Count in onClickAddHandler", count + 1);
  };

  const onClickMinusHandler = () => {
    setCount(count - 1);
    console.log("Count in onClickMinusHandler", count - 1);
  };

  const onClickResetHandler = () => {
    setCount(0);
    console.log("Count in onClickMinusHandler", count);
  };

  return (
    <div>
      <Button title="+" onClick={onClickAddHandler} />
      <p>{count}</p>
      <Button title="-" onClick={onClickMinusHandler} />
      <Button title="Reset" onClick={onClickResetHandler} />
    </div>
  );
}
