import React, { useRef, useEffect } from "react";

interface VideoPlayerProps {
        src: string;
        poster?: string;
        className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, className }) => {
        const videoRef = useRef<HTMLVideoElement>(null);

        useEffect(() => {
                if (videoRef.current) {
                        videoRef.current.muted = true;
                        videoRef.current.play().catch((error) => {
                                console.error("Autoplay failed:", error);
                        });
                }
        }, []);

        return (
                <div className={`w-full  max-w-full flex flex-col bg-black ${className || ""}`}>
                        <video
                                ref={videoRef}
                                src={src}
                                poster={poster}
                                autoPlay
                                muted
                                loop
                                className="w-full h-[70vh] sm:h-screen md:h-[50vh] lg:h-[85vh] 3xl:h-[90vh] object-cover block"
                />
                
             
                </div>
        );
};

export default VideoPlayer;
