import { useState } from "react";
import play from "../../assets/icons/play.svg";

interface VideoProps {
  videoSrc: string;
  cover: string;
}

export const Video = ({ videoSrc, cover }: VideoProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-1/3 group cursor-pointer">
      {showVideo ? (
        <div className="h-[200px] w-full">
          <iframe
            src={videoSrc}
            frameBorder="0"
            allow="autoplay; fullscreen;"
            className="absolute size-full top-0 left-0 object-cover"
            title="istockphoto-1937378454-640_adpp_is"
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      ) : (
        <div>
          <img
            src={cover}
            alt="preview video thumbnail"
            className="w-full h-[200px] object-cover"
          />
          <img
            src={play}
            alt="play video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <div
            onClick={() => setShowVideo(true)}
            className="size-full bg-black absolute top-0 left-0 opacity-30 group-hover:opacity-0 transition-all duration-300"
          />
        </div>
      )}
    </div>
  );
};
