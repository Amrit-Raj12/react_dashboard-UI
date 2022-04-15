import React, { useState } from "react";
import { Button } from "antd";

const AbandonedCart = () => {
  let [pin, setPin] = useState("");

  function pinGenrate() {
    pin = Math.floor(1000 + Math.random() * 9000);
    setPin(pin);
  }

  return (
    <div>
      <Button onClick={pinGenrate}>Generate Pin</Button>
      <h3>{pin}</h3>
    </div>
  );
};

export default AbandonedCart;
