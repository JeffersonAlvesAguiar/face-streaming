import { Close, DragMove, Menu } from "../../Components";
import { Container } from "./style";

export const NavBar = () => {
  return (
    <>
      <Container>
        <Menu />
        <Close />
        <DragMove />
      </Container>
    </>
  );
};
