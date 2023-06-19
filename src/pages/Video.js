import React, { useRef, useState, useEffect } from 'react';
import VideoFooter from './components/footer/VideoFooter';
import VideoSidebar from './components/sidebar/VideoSidebar';
import Videoheader from './components/header/Videoheader';
import './video.css';

function Video({ likes, messages, shares, nome, descricao, musica, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (play) {
        videoRef.current.pause();
        setPlay(false);
      }
    }

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [play]);

  function handleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src={url}
      ></video>
      <Videoheader />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter nome={nome} descricao={descricao} musica={musica} />
    </div>
  );
}

export default Video;
