import { useDvdScreensaver } from "react-dvd-screensaver";


const MotionDvd = () => {
    const { containerRef, elementRef } = useDvdScreensaver();

  return (
    <div ref={containerRef} style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: -1}}>
        <span ref={elementRef} style={{display: "inline-block"}}>Testando</span> 
    </div>
  );
};

export default MotionDvd;
