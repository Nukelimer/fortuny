import React from "react";
import { Link, useLocation } from "react-router-dom";
import VideoPlayer from "../VideoPlayer";
import Button from "./Button";

interface HeroProps {
    showInfo?:string
}

function Hero({showInfo}:HeroProps) {
    const path = useLocation();
    console.log(path, );

    return (
        <section className="min-h-screen">
            { (
                <div className="pointer-events-none relative flex justify-center items-end">
                    <VideoPlayer src="/hero_video.mp4" />

                    {!showInfo && <div className="absolute bottom-24">
                        <h1 className="text-white text-center uppercase text-2xl">
                            Fortuny + Chahan
                        </h1>
                        <h3 className="text-white text-sm uppercase text-center pt-2 mb-6 ">
                            A special collaboration for the design and
                            art community.
                        </h3>
                        <Button




                            text={""}
                            styling="bg-white w-fit mx-auto py-2 px-7 rounded text-[10px] uppercase pointer-events-auto"
                        >

                            <Link to={"palazzina-2025"}>Discover More</Link>
                        </Button>
                    </div>}
                </div>
            )}
        </section>
    );
}

export default Hero;
