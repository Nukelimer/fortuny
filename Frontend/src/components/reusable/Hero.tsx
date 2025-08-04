import React from "react";
import { useLocation } from "react-router";
import VideoPlayer from "../VideoPlayer";
import Button from "./Button";

interface HeroProps {
        page: string;
}

function Hero({ page }: HeroProps) {
        const path = useLocation();
        console.log(path, page);

        return (
                <section className="">
                        {path.pathname == "/" && (
                                <div className="pointer-events-none relative flex justify-center items-end">
                                        <VideoPlayer src="/hero_video.mp4" />

                                        <div className="absolute bottom-24">
                                                <h1 className="text-white text-center uppercase text-2xl">
                                                        Fortuny + Chahan
                                                </h1>
                                                <h3 className="text-white text-sm uppercase text-center pt-2 mb-6">
                                                        A special collaboration for the design and
                                                        art community.
                                                </h3>
                                                <Button
                                                        text={"Discover More"}
                                                        styling="bg-white w-fit mx-auto py-2 px-7 rounded text-[10px] uppercase"
                                                />
                                        </div>
                                </div>
                        )}
                </section>
        );
}

export default Hero;
