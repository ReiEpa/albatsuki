import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import audioFile from "./DB_Music.mp3";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";

const MusicPlayer = () => {
  const [audio] = useState(new Audio(audioFile));
  const [musicPlaying, setMusicPlaying] = useState(false);

  const handlePlay = () => {
    audio.play();
    setMusicPlaying(true);
  };

  const handleStop = () => {
    audio.pause();
    audio.currentTime = 0;
    setMusicPlaying(false);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {musicPlaying ? <>Music Playing</> : <>Music Stopped</>}
    </Tooltip>
  );
  return (
    <>
      {musicPlaying ? (
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant="danger" onClick={handleStop}>
            <GiSoundOn />
          </Button>
        </OverlayTrigger>
      ) : (
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant="secondary" onClick={handlePlay}>
            <GiSoundOff />
          </Button>
        </OverlayTrigger>
      )}
    </>
  );
};

export default MusicPlayer;
