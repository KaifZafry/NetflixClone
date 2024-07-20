import React from "react";

const movieVideo = () => {
  return (
    <div>
      <div className="w-36 md:w-48 pr-2">
      <iframe
        className="w-screen h-screen aspect-w-16 aspect-h-9"
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
};

export default movieVideo;
