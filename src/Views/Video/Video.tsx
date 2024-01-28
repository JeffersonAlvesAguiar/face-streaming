import Webcam from "react-webcam";
import { Container } from "./style";

export const Video = () => {
  return (
    <>
      <Container>
        <Webcam
          audio={false}
          imageSmoothing={true}
          mirrored={true}
          style={{
            maxWidth: "100%",
            // maxHeight: "100vw",
            borderRadius: 16,
            border: "10px solid rgb(2,0,36)",
          }}
        />
      </Container>
    </>
  );
};
