import React from "react";
import Hero from "../components/reusable/Hero";
import TextCaptionAndLink from "../components/reusable/TextCaptionAndLink";
import CustomCarousel from "@/components/CustomCarousel";
import CustomCard from "@/components/reusable/CustomCard";
import SplashImage from "@/components/BriefTextInHomePage";

function Home() {
    return (
        <section className="bg-[#f8f8f8]">

            <SplashImage />
            <Hero />
            <TextCaptionAndLink
                url={"pallazina-2025"}
                heading={"Experience the art of Venetian living"}
                text={
                    "Fortuny presents FORTUNY + CHAHAN, a special collaboration for the design and art community that transformed the former house of Countess Gozzi adjacent to the iconic Fortuny Factory into an innovative store that blends contemporary artwork and furniture within the historical setting."
                }
                category={"news"}
                btn_text="discover more"
            />

            <CustomCarousel />

            <TextCaptionAndLink
                url={"textiles"}
                category={"OUR TEXTILES"}
                text={
                    "From our original factory on the island of Giudecca in Venice, we continue our deep rooted tradition of art and alchemy, proudly carrying forward the inventive methods created by our founder over a century ago."
                }
                heading={"From Giudecca, with love"}
                btn_text="View All Textiles"
            />
            <div className="grid grid-cols-2 place-items-center w-full lg:grid-cols-4 gap-y-24 gap-x-1 ">
                {Array.from({ length: 4 }).map(() => {
                    return (
                        <CustomCard
                            imgUrl="/error/error.webp"
                            key={Math.random()}
                            styling="min-h-[300px] h-full lg:h-[600px] border"
                        // img_hover_Url="/home/dummy.webp"
                        />
                    );
                })}
            </div>

            <TextCaptionAndLink
                url={"collections/armonia"}
                imgUrl="/home/amonia.webp"
                img_Url="/home/amonia_logo.webp"
                styling="flex flex-col item-center justify-center"
                img_styling="h-[120px] w-[80px] mx-auto my-24"
                text={
                    "Explore the elements of composition with bold, graphic designs and create harmonious spaces with the new collection by Fortuny and designer Chahan Minassian."
                }
                imgStyling="mb-20"
                btn_text="discover more"
            />

            <CustomCarousel />

            <TextCaptionAndLink
                url={"collections/fortuny-home"}
                category={"OUR products"}
                text={
                    "Eclectic cushions and throws that reflect the cultural depth and poetic spirit of Venice. Uplift your spaces with extraordinary creations that project beauty and soul."
                }
                heading={"Creations that speak to the soul"}
                btn_text="Discover the collection"
            />

            <div className=" lg:flex  justify-between gap-56">
                <div className="px-12">
                    {Array.from({ length: 1 }).map(() => {
                        return (
                            <CustomCard
                                imgUrl="/home/dummy.webp"
                                key={Math.random()}
                                styling="min-h- [300px] h- full lg:h- [600px] "
                            // img_hover_Url="/home/dummy.webp"
                            />
                        );
                    })}

                    <TextCaptionAndLink
                        url={"collections/fortuny-home"}
                        text={
                            "Unique and charming cushions to accent the spaces you love. Handcrafted by artisans in Venice."
                        }
                        heading_style="!pb-6"
                        text_style="!pb-6"
                        heading={"Cushions"}
                        btn_text="Discover More"
                    />
                </div>

                <div className="px-12">
                    {Array.from({ length: 1 }).map(() => {
                        return (
                            <CustomCard
                                imgUrl="/home/dummy.webp"
                                key={Math.random()}
                                styling="min-h- [300px] h- full lg:h- [600px] "
                            // img_hover_Url="/home/dummy.webp"
                            />
                        );
                    })}

                    <TextCaptionAndLink
                        url={"collections/fortuny-home"}
                        text={
                            "Style statements in the finest Italian fabrics with all the warming qualities of your favorite throw."
                        }
                        heading_style="!pb-6"
                        text_style="!pb-6"
                        heading={"Throws"}
                        btn_text="Discover More"
                    />
                </div>
            </div>

            <div className=" p-6">
                <TextCaptionAndLink
                    url={"discover-bespoke"}
                    text={
                        "Create true originals with Fortuny Bespoke. A rare opportunity to join an elite circle of designers who demand nothing less than true originality and unparalleled craftsmanship."
                    }
                    img_Url="logo/bespoke_logo.webp"
                    img_styling="mx-auto h-10 !py-0"
                    inverted_heading={"Fortuny Bespoke"}
                    inverted_heading_styles="!pb-3 pt-14"
                    btn_text="Discover Bespoke"
                    text_style="font-[500] !py-6"
                    styling="!bg-[#FFFFFF] fill-white  !pt-0"
                />
            </div>
        </section>
    );
}

export default Home;
