import {
  AbsoluteFill,
  useVideoConfig,
  Audio,
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
          src={staticFile("e51173b4-93d2-4a6f-b470-710eb7248643-360p.mp4")}
          volume={0.5}
          // muted
          startFrom={0}
          crossOrigin="anonymous"
          // acceptableTimeShiftInSeconds={0.08}
          onAutoPlayError={() => {
            console.error("onAutoPlayError");
          }}
        />
        <Audio
          data-testid={`audio-id`}
          pauseWhenBuffering
          src={staticFile("IMG_0025.mp3")}
          volume={0.5}
          // muted
          startFrom={0}
          crossOrigin="anonymous"
          // acceptableTimeShiftInSeconds={0.08}
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
