import React from "react";
import { MdDragIndicator } from "react-icons/md";
import { Button } from "../Button/Button";
import { Drag } from "./style";

export const DragMove = () => {
  return (
    <>
      <Drag>
        <Button>
          <MdDragIndicator />
        </Button>
      </Drag>
    </>
  );
};
