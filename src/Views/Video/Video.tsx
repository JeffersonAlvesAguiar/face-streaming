import Webcam from "react-webcam";
import { Container } from "./style";
import { NavBar } from "../NavBar";

export const Video = () => {
  console.log(Container);

  return (
    <>
      <Container>
        <Webcam
          audio={false}
          imageSmoothing={true}
          mirrored={true}
          style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
            borderRadius: 16,
            objectFit: "cover",
            border: "10px solid rgb(2,0,36)",
          }}
        />
      </Container>
    </>
  );
};
