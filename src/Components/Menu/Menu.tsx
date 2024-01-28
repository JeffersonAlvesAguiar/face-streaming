import React from "react";
import { Button } from "../Button/Button";
import { MdMenu } from "react-icons/md";

const openMenu = () => {
 alert("clicou")
};

export const Menu = () => {
  return (
    <>
      <Button onClick={openMenu}>
        <MdMenu />
      </Button>
    </>
  );
};
