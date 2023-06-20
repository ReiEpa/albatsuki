import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import audioFile from "./DBS_Music.mp3";
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

  return (
    <>
      {musicPlaying ? (
        <Button variant="danger" onClick={handleStop}>
          <GiSoundOn />
        </Button>
      ) : (
        <Button variant="secondary" onClick={handlePlay}>
          <GiSoundOff />
        </Button>
      )}
    </>
  );
};

export default MusicPlayer;
