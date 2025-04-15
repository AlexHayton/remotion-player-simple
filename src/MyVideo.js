import {
  AbsoluteFill,
  useVideoConfig,
  OffthreadVideo,
  Sequence,
  staticFile,
} from "remotion";
import { FrameCounter } from "./FrameCounter";

export const MyVideo = () => {
  const { fps } = useVideoConfig();

  const secondClipOffset = fps * 10;

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Sequence premountFor={fps * 4} durationInFrames={secondClipOffset}>
        <OffthreadVideo
          data-testid={`offthread-video-id`}
          pauseWhenBuffering
          src={staticFile("framecounter.mp4")}
          muted
          startFrom={0}
          crossOrigin="anonymous"
          acceptableTimeShiftInSeconds={0.08}
          onAutoPlayError={() => {
            console.error("onAutoPlayError");
          }}
        />
      </Sequence>
      <Sequence
        premountFor={fps * 4}
        from={secondClipOffset}
        durationInFrames={secondClipOffset}
      >
        <OffthreadVideo
          data-testid={`offthread-video-id-2`}
          pauseWhenBuffering
          src={staticFile("framecounter.mp4")}
          muted
          startFrom={secondClipOffset}
          crossOrigin="anonymous"
          acceptableTimeShiftInSeconds={0.08}
          onAutoPlayError={() => {
            console.error("onAutoPlayError");
          }}
        />
      </Sequence>
      <Sequence>
        <FrameCounter />
      </Sequence>
    </AbsoluteFill>
  );
};
