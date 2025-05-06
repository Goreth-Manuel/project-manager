import { useDvdScreensaver } from "react-dvd-screensaver";
import {
  Span,
  DivContainer
} from "./style"

const MotionDvd = () => {
    const { containerRef, elementRef } = useDvdScreensaver();

  return (
    <DivContainer ref={containerRef} style={{ top: 0, left: 0, zIndex: -1}}>
        <Span ref={elementRef}>Testando</Span> 
    </DivContainer>
  );
};

export default MotionDvd;
