import CustomCarousel from "@/components/CustomCarousel";
import Button from "@/components/reusable/Button";
import CustomCard from "@/components/reusable/CustomCard";
import TextCaptionAndLink from "@/components/reusable/TextCaptionAndLink";
import React from "react";
import { Link } from "react-router-dom";

function Armonia() {
    const cardData = [
        {
            title: "Hexa",
            description:
                "Inspired by the lines in Fortuny’s MAYAN pattern, HEXA’s dramatic scale creates a bold, architectural, and graphic design.",
            image: "https://d3fbvrgj5mtwb0.cloudfront.net/_default/172927/Hexa-mare-monotones_Job_1133_2025-01-15-093907_aepv.webp",
            link: "/textiles/hexa?color=charcoal-silver"
        },
        {
            title: "Kyma",
            description:
                "Based on a Murano glass design by Chahan, KYMA’s small-scale wave motif brings movement to fabric with a vintage texture for added depth.",
            image: "https://d3fbvrgj5mtwb0.cloudfront.net/_default/172936/Kyma-chocolate-silver_Job_1507_2025-01-15-094105_wlwv.webp",
            link: "/textiles/kyma?color=chocolate-silver"
        },
        {
            title: "Linea",
            description:
                "By reimagining Fortuny’s MALMAISON stripes, LINEA illustrates how varying line widths create form, rhythm, and movement.",
            image: "https://d3fbvrgj5mtwb0.cloudfront.net/_default/172965/Linea-dark-brown-gold-on-camel_Job_1206_2025-01-15-094231_ligq.webp",
            link: "/textiles/linea?color=charcoal-silver-on-polar-grey-texture"
        },
        {
            title: "Vera",
            description:
                "Developed from a Fortuny pattern referencing ancient Peruvian culture, the ripple-like scrolls symbolize continuity and growth.",
            image: "https://d3fbvrgj5mtwb0.cloudfront.net/_default/172988/Vera-bordeaux-gold_Job_1330.webp",
            link: "/textiles/vera?color=dark-brown-gold"
        },
        {
            title: "Delphia",
            description:
                "Imbued with calming and ethereal qualities, DELPHIA equalizes the two curves of the DELPHI pattern, echoing the fluid pleating of Fortuny’s iconic Delphos dress.",
            image: "https://d3fbvrgj5mtwb0.cloudfront.net/_default/173018/Delphia-celadon-monotones_Job_1402.webp",
            link: "/textiles/delphia?color=aqua-green-gold-texture"
        },
        {
            title: "Cushions",
            description:
                "Introducing a state of harmony and composition to your environment has never been easier to achieve than with this collection of ARMONIA cushions.",
            image: "https://d3fbvrgj5mtwb0.cloudfront.net/_default/178642/Armonia-Cushions_LR-5_2025-02-28-153930_eygb.webp",
            link: "/products?category=cushions&search=armonia"
        }
    ];

    return (
        <section>
            <div className="flex relative justify-center flex-col items-center">
                <img
                    src="/collections/armonia/hero.webp"
                    alt="hero img"
                    className="w-full object-cover h-[clamp(70vh,100%,100vh)] md:h-[clamp(200px,60vw,100vh)] "
                />

                <div className="absolute bottom-16">
                    <h3 className="text-white text-xl text-center pt-2 mb-6 ">
                        A new chapter in artistic collaboration.
                    </h3>
                    <Button
                        text={""}
                        styling="bg-white w-fit mx-auto py-2 px-7 rounded text-[10px] uppercase pointer-events-auto"
                    >
                        <Link to={"#collection"}>Discover The Harmony</Link>
                    </Button>
                </div>
            </div>
            <img
                src="/home/amonia.webp"
                alt="armonia"
                className="w-56 mx-auto py-16 object-contain "
            />

            <TextCaptionAndLink
                heading_style="hidden"
                styling="!pt-0"
                isShowBtn
                text_style="text-[16px] "
                text="Reinterpreting heritage through the lens of contemporary artistry. Iconic Fortuny motifs are reimagined with designer Chahan Minassian’s unique approach to color and scale, resulting in five patterns that can be combined in countless ways.
            <br/>
             <br/>

Merging rhythm, structure, and Chahan’s signature palette of natural materials, ARMONIA invites layering and mixing, offering designers endless possibilities to create striking, unified spaces."
            />

            <CustomCarousel />
            <h3 className="text-center uppercase opacity-45 text-[11px] mx-auto pb-4 max-w-[250px] pt-2 font-light">
                BRENDA NUSENOVICH (1) – Agence Phar (2,3,4,5)
            </h3>

            <img
                src="/home/amonia_logo.webp"
                alt="armonia"
                className="w-28 mx-auto py-16 md:py-24 object-contain "
            />

            <div className="gap-16 md:grid-cols-2 place-content-start grid">
                
                {cardData.map(({ description, image, link, title }) => {
                    return (
                        <div className="px-12">
                            <CustomCard imgUrl={image} styling=" " />
                            <h2 className=" text-xl md:text-2xl text-center pt-5 pb-8">{title}</h2>
                            <p className="text-xs text-center py-4">{description}</p>
                            <Button
                                text={""}
                                styling="bg-[#323732] text-white w-fit mx-auto py-2 px-7 rounded text-[10px] uppercase pointer-events-auto"
                            >
                                <Link to={link}>Discover More</Link>
                            </Button>
                        </div>
                    );
                })}
            </div>

            <div className="">
            
                <img
                    src="/collections/armonia/join.webp"
                    alt="armonia"
                    className="w-28 mx-auto py-16 md:py-24 object-contain "
                />
            </div>


            <div className="md:flex gap-6">
                <TextCaptionAndLink text="We invite you to join Professional, a virtual studio where you can create and share moodboards, request samples, and connect with us about your projects." heading="ARE YOU A CREATIVE PROFESSIONAL?" heading_style="uppercase text-sm pb-6" btn_text="Join Professionals"/>
                
                <TextCaptionAndLink text="Join Fortuny’s newsletter and stay up to date on our events, collaborations, products and more." heading_style="uppercase text-sm pb-6" heading="Subscribe to our newsletter" url="https://fortuny.com/menus/follow/newsletter" btn_text="Subscribe"/>

            
            
            
            </div>
        </section>
    );
}

export default Armonia;
