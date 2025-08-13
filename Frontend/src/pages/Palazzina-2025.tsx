import TextCaptionAndLink from "@/components/reusable/TextCaptionAndLink";
import Hero from "../components/reusable/Hero";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
        Carousel,
        CarouselContent,
        CarouselItem,
        CarouselNext,
        CarouselPrevious
} from "@/components/reusable/HomeCarousel/carousel";
import Button from "@/components/reusable/Button";
import { Link } from "react-router-dom";
import Opinion from "@/components/Palazzina/Opinion";
import YoutubePlayer from "@/components/Palazzina/YoutubePlayer";
import CustomCarousel from "@/components/CustomCarousel";
import CustomCard from "@/components/reusable/CustomCard";
function Palazzina2025() {
        return (
                <div className="max-w-full overflow-clip ">
                        <Hero showInfo="true" />
                        <TextCaptionAndLink
                                styling="px-4"
                                heading="FORTUNY + CHAHAN"
                                body="Discover the new installment of FORTUNY + CHAHAN at the Fortuny Palazzina. During Biennale Architettura 2025, experience a private showcase where timeless design and expert curation dialogue with our eternal artistry. 

Step inside the Fortuny Palazzina on the island of Giudecca and immerse yourself in an exclusive installation curated by Chahan Minassian, featuring our legendary textiles, Pierre Sabatier’s monumental sculptural walls, and the refined works of Harumi Klossowska de Rola. 

Private tours are available by appointment for collectors, connoisseurs, and design professionals throughout the Biennale season."
                                btn_text="Book an Appointment"
                                url="book-an-appointment"
                                sub_heading="Reimagining the Palazzina"
                                subheading_style="italic"
                                heading_style="!pb-2 !text-2xl"
                        />

                        <TextCaptionAndLink
                                styling="px-4"
                                heading="The room"
                                text_style="text-start"
                                body="Discover the new installment of FORTUNY + CHAHAN at the Fortuny Palazzina. During Biennale Architettura 2025, experience a private showcase where timeless design and expert curation dialogue with our eternal artistry. <br/>
<br/>
Step inside the Fortuny Palazzina on the island of Giudecca and immerse yourself in an exclusive installation curated by Chahan Minassian, featuring our legendary textiles, Pierre Sabatier’s monumental sculptural walls, and the refined works of Harumi Klossowska de Rola. 
<br/> <br/>
Private tours are available by appointment for collectors, connoisseurs, and design professionals throughout the Biennale season."
                                btn_text="Explore the rooms"
                                url="fix-me"
                                // sub_heading="Reimagining the Palazzina"
                                subheading_style="italic"
                                heading_style="pb-2 pb-4"
                        />

                        <Carousel className="w-full max-w-[100%] mx-auto  flex items-center">
                                <CarouselContent>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                                <CarouselItem key={index} className="">
                                                        <div className="h-full max-h-[70vh] md:max-h-full md:h-screen">
                                                                {" "}
                                                                {/* Ensure the container enforces the height */}
                                                                <Card className="h-full ">
                                                                        {" "}
                                                                        {/* Make Card full height of parent */}
                                                                        <CardContent className="flex h-full p-2 items-end justify-center relative">
                                                                                <img
                                                                                        src="/home/dummy.webp"
                                                                                        alt="carousel"
                                                                                        className="w-full h-full object-contain sm:object-cover " // Use object-contain to fit image
                                                                                />
                                                                                <Button styling="absolute bottom-24 bg-btn-primary text-white hover:!text-phc w-fit mx-auto py-2 px-12 rounded text-sm text-5xl uppercase bg-white !text-black text-xs">
                                                                                        <Link
                                                                                                to={
                                                                                                        "#the-mirror"
                                                                                                }
                                                                                        >
                                                                                                Explore
                                                                                                the
                                                                                                Bodoir
                                                                                        </Link>
                                                                                </Button>
                                                                        </CardContent>
                                                                </Card>
                                                        </div>
                                                </CarouselItem>
                                        ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                        </Carousel>

                        <h3 className="text-center opacity-45 text-sm pb-4 font-light">
                                GALLERY: SEBASTIEN VERONESE IMAGES
                        </h3>

                        <Opinion
                                styling="px-4"
                                opinion={
                                        "The evolution of the Fortuny Palazzina—from its industrial origins to a luxurious residence and gallery—is a living tribute to our legacy of art, craftsmanship, and the enduring soul of beauty."
                                }
                                author={"Mickey Riad, Creative Director and Owner at Fortuny"}
                                opinion_styles={
                                        "text-3xl md:text-4xl lg:text-6xl  text-start px-2 md:px-12 font-light pb-8"
                                }
                                author_styles={
                                        "px-2 md:px-12 text-xl before:content-['-'] before:pr-1"
                                }
                        />

                        <div className=" flex gap-8 flex-col justify-center items-center w-full mx-auto  px-4 md:px-28 py-24 overflow-clip">
                                <YoutubePlayer />

                                <Button styling=" bg-btn-primary text-white hover:!text-phc w-fit mx-auto py-2 px-12 rounded text-sm text-5xl uppercase  !text-white text-xs">
                                        <Link to={"#the-mirror"}>
                                                Explore the Restoration in Depth
                                        </Link>
                                </Button>
                        </div>

                        <div className=" max-w-6xl mx-auto">
                                <img
                                        src="/palazzina/circular_logo.webp"
                                        alt="circle_logo"
                                        className="mx-auto pb-32"
                                />
                                <h3 className="pb-12 mx-auto text-center text-2xl">The Legacy</h3>
                                <div className="flex w-full gap-2 ">
                                        <img
                                                src="/palazzina/first_drawing.webp"
                                                alt="circle_logo"
                                                className="w-1/2"
                                        />
                                        <img
                                                src="/palazzina/first_drawing_r.webp"
                                                alt="circle_logo"
                                                className="w-1/2 border-3 border-black"
                                        />
                                </div>
                                <h3 className="opacity-45 uppercase text-sm pt-2 text-center">
                                        Original drawings of the first restoration project, 1958
                                </h3>
                                <TextCaptionAndLink
                                        btn_text="Learn More"
                                        styling="!max-w-2xl "
                                        url="/stories/news/fortuny-palazzina"
                                        text_style="text-start text-sm md:text-xl px-4 !w-full"
                                        text="
While visiting the Carnavalet Museum in Paris in 1927, New York interior designer Elsie McNeill Lee encountered Fortuny’s fabrics covering the walls of the portrait gallery. Captivated by their beauty, she believed they would be perfect for interior designers and architects in the United States. Upon traveling to Venice, she met and convinced Mariano Fortuny of her vision and became his sole distributor. After his passing in 1949, Elsie managed the company for over forty years at the request of his widow, Henriette Negrin.
<br/>

<br/>

Elsie moved to Venice, making her home in a building facing the canal on the island of Giudecca, adjacent to what is now part of the iconic Fortuny headquarters. She married Italian Count Alvise Gozzi in 1959, becoming Countess Elsie Lee Gozzi. The Palazzina, connected to the factory that remains the heart of the Fortuny ecosystem, was built as her home between 1958 and 1961."
                                />
                        </div>

                        <div className=" max-w-6xl mx-auto">
                                <div className="flex w-full gap-2">
                                        <img
                                                src="/palazzina/palazzina_building_l.webp"
                                                alt="circle_logo"
                                                className="w-1/2"
                                        />
                                        <img
                                                src="/palazzina/palazzina_building_r.webp"
                                                alt="circle_logo"
                                                className="w-1/2 "
                                        />
                                </div>
                                <h3 className="opacity-45 uppercase text-sm pt-2 text-center px-4">
                                        Construction of the Fortuny Palazzina, circa 1958.
                                </h3>
                        </div>

                        <div className="max-w-6xl mx-auto">
                                <TextCaptionAndLink
                                        img_Url="/error/error.webp"
                                        img_styling="mx-auto "
                                        inverted_heading="Foyer"
                                        inverted_heading_styles="!text-2xl pb-12 pt-24"
                                        isShowBtn={!false}
                                        styling="!max-w-2xl"
                                        text_style="text-start text-sm md:text-xl px-4 !w-full"
                                        text="
A graceful bridge between the Palazzina’s façade and the courtyard leading to the factory and garden, the foyer features rare Italian marble floors and elegant fluted columns that frame the distinctive staircase designed by the legendary Venetian architect Luigi Vietti, setting the stage for an immersive experience of the Palazzina."
                                />
                        </div>

                        <div className="">
                                <CustomCarousel />

                                <h3 className="text-center opacity-45 text-sm pb-4 font-light">
                                        GALLERY: SEBASTIEN VERONESE IMAGES
                                </h3>
                        </div>

                        <div className=" py-48 mx-2 ">
                                <h4 className="uppercase text-center pb-4 text-sm ">
                                        Featured textiles
                                </h4>
                                <div className="grid grid-cols-2  md:grid-cols-4 gap-x-2 gap-y-20 ">
                                        {Array.from({ length: 4 }).map(() => {
                                                return (
                                                        <div className="">
                                                                <CustomCard
                                                                        key={Math.random()}
                                                                        imgUrl="/error/error.webp"
                                                                        styling=" h-full min-h-[300px] lg:h-[600px] border"
                                                                        // img_hover_Url="/home/dummy.webp"
                                                                />

                                                                <h4>Hexa Tan black & bronze</h4>
                                                        </div>
                                                );
                                        })}
                                </div>
                        </div>

                        <div className="max-w-6xl mx-auto">
                                <TextCaptionAndLink
                                        img_Url="/error/error.webp"
                                        img_styling="mx-auto "
                                        inverted_heading="The Boudoir"
                                        inverted_heading_styles="!text-2xl pb-12 pt-24"
                                        isShowBtn={!false}
                                        styling="!max-w-2xl"
                                        text_style="text-start text-sm md:text-xl px-4 !w-full"
                                        text="
Formerly the Palazzina's dining room, the Boudoir now offers an intimate retreat, perfect for after-dinner conversation or a quiet moment of reflection"
                                />
                        </div>

                        <CustomCarousel />
                        <h3 className="text-center opacity-45 text-sm pb-4 pt-2 font-light">
                                SEBASTIEN VERONESE (1,3,4) - bRENDA NUSENOVICH (2,5)
                        </h3>
                        <div className=" py-48  mx-2 ">
                                <h4 className="uppercase text-center pb-4 text-sm ">
                                        Featured textiles
                                </h4>
                                <div className="grid grid-cols-2  md:grid-cols-4 gap-x-2 gap-y-20 ">
                                        {Array.from({ length: 4 }).map(() => {
                                                return (
                                                        <div className="">
                                                                <CustomCard
                                                                        key={Math.random()}
                                                                        imgUrl="/error/error.webp"
                                                                        styling=" h-full min-h-[300px] lg:h-[600px] border"
                                                                        // img_hover_Url="/home/dummy.webp"
                                                                />

                                                                <h4>Hexa Tan black & bronze</h4>
                                                        </div>
                                                );
                                        })}
                                </div>
                        </div>

                        <div className="max-w-6xl mx-auto">
                                <TextCaptionAndLink
                                        img_Url="/error/error.webp"
                                        img_styling="mx-auto "
                                        inverted_heading="The Bedroom"
                                        inverted_heading_styles="!text-2xl pb-12 pt-24"
                                        isShowBtn={!false}
                                        styling="!max-w-2xl"
                                        text_style="text-start text-sm md:text-xl px-4 !w-full"
                                        text="
Originally the Countess' dressing room, this space seamlessly blends the intricate beauty of built-in wooden marquetry with the soft tranquility of our fabric, a perfectly cozy environment that evokes both warmth and elegance."
                                />
                        </div>

                        <CustomCarousel />
                        <h3 className="text-center opacity-45 text-sm pb-4 pt-2 font-light">
                                SEBASTIEN VERONESE (1,3,4) - bRENDA NUSENOVICH (2,5)
                        </h3>
                        {/* 
            <CustomCard /> */}

                        <div className=" py-48 mx-2 ">
                                <h4 className="uppercase text-center pb-4 text-sm ">
                                        Featured textiles
                                </h4>
                                <div className="grid grid-cols-2  md:grid-cols-4 gap-x-2 gap-y-20 ">
                                        {Array.from({ length: 4 }).map(() => {
                                                return (
                                                        <div className="">
                                                                <CustomCard
                                                                        key={Math.random()}
                                                                        imgUrl="/error/error.webp"
                                                                        styling=" h-full min-h-[300px] lg:h-[600px] border"
                                                                        // img_hover_Url="/home/dummy.webp"
                                                                />

                                                                <h4>Hexa Tan black & bronze</h4>
                                                        </div>
                                                );
                                        })}
                                </div>
                        </div>

                        <div className="max-w-6xl mx-auto">
                                <TextCaptionAndLink
                                        img_styling="mx-auto "
                                        inverted_heading="The Fumoir"
                                        inverted_heading_styles="!text-2xl pb-12 pt-12"
                                        isShowBtn={!false}
                                        styling="!max-w-2xl"
                                        text_style="text-start text-sm md:text-xl px-4 !w-full"
                                        text="
Once the Palazzina's original bedroom, The Fumoir now provides an inviting space for a post-dinner cordial or a friendly game of cards."
                                />
                        </div>

                        <CustomCarousel />
                        <h3 className="text-center opacity-45 text-sm pb-4 pt-2 font-light">
                                SEBASTIEN VERONESE (1,3,4) - bRENDA NUSENOVICH (2,5)
                        </h3>

                        <div className=" py-48 mx-2 ">
                                <h4 className="uppercase text-center pb-4 text-sm ">
                                        Featured textiles
                                </h4>
                                <div className="grid grid-cols-2  md:grid-cols-4 gap-x-2 gap-y-20 ">
                                        {Array.from({ length: 4 }).map(() => {
                                                return (
                                                        <div className="">
                                                                <CustomCard
                                                                        key={Math.random()}
                                                                        imgUrl="/error/error.webp"
                                                                        styling=" h-full min-h-[300px] lg:h-[600px] border"
                                                                        // img_hover_Url="/home/dummy.webp"
                                                                />

                                                                <h4>Hexa Tan black & bronze</h4>
                                                        </div>
                                                );
                                        })}
                                </div>
                        </div>

                

                <div className="max-w-6xl mx-auto">
                    <TextCaptionAndLink
                        img_styling="mx-auto "
                        inverted_heading="The Mirror room"
                        inverted_heading_styles="!text-2xl pb-12 pt-12"
                        isShowBtn={!false}
                        styling="!max-w-2xl"
                        text_style="text-start text-sm md:text-xl px-4 !w-full"
                        text="
For years, this room served as the Countess' private sitting room, an intimate space for reading and entertaining close friends. Fully reimagined, mirrors now cover the walls, drawing the spectacular view into the room. The sheer window treatments, inspired by the shape of Venetian Gothic windows, filter the morning light and create an illusion of endless space when drawn open."
                    />
                </div>

                <CustomCarousel />
                <h3 className="text-center opacity-45 text-sm pb-4 pt-2 font-light">
                    SEBASTIEN VERONESE (1,3,4) - bRENDA NUSENOVICH (2,5)
                </h3>

                <div className=" py-48 mx-2 ">
                    <h4 className="uppercase text-center pb-4 text-sm ">
                        Featured textiles
                    </h4>
                    <div className="grid grid-cols-2  md:grid-cols-4 gap-x-2 gap-y-20 ">
                        {Array.from({ length: 4 }).map(() => {
                            return (
                                <div className="">
                                    <CustomCard
                                        key={Math.random()}
                                        imgUrl="/error/error.webp"
                                        styling=" h-full min-h-[300px] lg:h-[600px] border"
                                    // img_hover_Url="/home/dummy.webp"
                                    />

                                    <h4>Hexa Tan black & bronze</h4>
                                </div>
                            );
                        })}
                    </div>
                </div>

                

                
                <div className="max-w-6xl mx-auto">
                    <TextCaptionAndLink
                        img_styling="mx-auto "
                        inverted_heading="The Ballroom"
                        inverted_heading_styles="!text-2xl pb-12 pt-12"
                        isShowBtn={!false}
                        styling="!max-w-2xl"
                        text_style="text-start text-sm md:text-xl px-4 !w-full"
                        text="
The only space in the Palazzina to visually connect the Giudecca Canal and the spectacular views of Venice to the north and east with the magical garden on the southern side, the ballroom offers a dramatic crescendo to the experience. It unites the exterior and interior in a seamless blend of luxurious comfort and light."
                    />
                </div>

                <CustomCarousel />
                <h3 className="text-center opacity-45 text-sm pb-4 pt-2 font-light">
                    SEBASTIEN VERONESE (1,2,3) - BRENDA NUSENOVICH (4,5,6,7,8)
                </h3>

                <div className=" py-48 mx-2 ">
                    <h4 className="uppercase text-center pb-4 text-sm ">
                        Featured textiles
                    </h4>
                    <div className="grid grid-cols-2  md:grid-cols-4 gap-x-2 gap-y-20 ">
                        {Array.from({ length: 4 }).map(() => {
                            return (
                                <div className="">
                                    <CustomCard
                                        key={Math.random()}
                                        imgUrl="/error/error.webp"
                                        styling=" h-full min-h-[300px] lg:h-[600px] border"
                                    // img_hover_Url="/home/dummy.webp"
                                    />

                                    <h4>Hexa Tan black & bronze</h4>
                                </div>
                            );
                        })}
                    </div>
                </div>



                
                </div>
        );
}

export default Palazzina2025;
