import { AbsoluteFill, useCurrentFrame } from "remotion";

export const FrameCounter = () => {
  const currentFrame = useCurrentFrame();
  console.log("currentFrame", currentFrame);
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "black",
        }}
      >
        <span>{currentFrame.toString()}</span>
      </div>
    </AbsoluteFill>
  );
};
