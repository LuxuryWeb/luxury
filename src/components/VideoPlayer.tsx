"use client";
import ReactPlayer from "react-player";
import React, { Suspense, useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      {hasWindow && (
        <div className="w-full h-full py-5" onContextMenu={(e) => e.preventDefault()}  >
          <ReactPlayer
            className={`rounded-[30px] md:rounded-[60px] my-5 w-full h-full max-w-[1200px] max-h-[1200px] `}
            url={src}
            width="100%"
            height="100%"
            controls
            muted
          />
        </div>
      )}
    </Suspense>
  );
};

export default VideoPlayer;
