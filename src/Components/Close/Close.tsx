import React from "react";
import { Button } from "../Button/Button";
import { IoClose } from "react-icons/io5";

export const Close = () => {
  return (
    <>
      <Button onClick={close}>
        <IoClose />
      </Button>
    </>
  );
};
