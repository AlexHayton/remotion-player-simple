import { Player } from "@remotion/player";
import { MyVideo } from "./MyVideo";
import { useRef } from "react";

export const App = () => {
  const playerRef = useRef(null);

  const durationInFrames = 405;

  return (
    <div>
      <button
        onClick={() => {
          const isPlaying = playerRef.current.isPlaying();
          console.log("isPlaying", isPlaying);
          if (!isPlaying) {
            playerRef.current.play();
          } else {
            playerRef.current.pause();
          }
        }}
      >
        Play
      </button>
      <Player
        ref={playerRef}
        component={MyVideo}
        durationInFrames={durationInFrames}
        compositionWidth={426}
        compositionHeight={360}
        fps={30}
        logLevel="trace"
        spaceKeyToPlayOrPause={true}
        moveToBeginningWhenEnded={false}
        allowFullscreen={false}
        browserMediaControlsBehavior={{
          mode: "prevent-media-session",
        }}
        style={{
          borderRadius: "16px",
        }}
        showVolumeControls={false}
        acknowledgeRemotionLicense
      />
    </div>
  );
};

export default App;
