import Button from '@/components/reusable/Button'
import CustomCard from '@/components/reusable/CustomCard';
import TextCaptionAndLink from '@/components/reusable/TextCaptionAndLink';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function FortunyHome() {
    const cardData = [

        {
            title: "Fortuny Cushion Alaris",
            description: "The perfect balancing act. Marrying elements from the East and West, this playful shape radiates openness and harmony.",
            image: "https://d3fbvrgj5mtwb0.cloudfront.net/_w2400/168081/SET_01_FORTUNY.webp",
            link: "/products/fortuny-cushion-alaris?textile=delphi-midnight-favo-faded-blue"
        },
        {
            title: "Fortuny Cushion Bricola",
            description: "The pillars of Venice — inspired by the picturesque guiding poles projecting from the city’s lagoon and canals.",
            image: "https://d3fbvrgj5mtwb0.cloudfront.net/_w2400/168138/SET_06_FORTUNY.webp",
            link: "/products/fortuny-cushion-bricola?textile=cuzco-black-tan-silvery-gold"
        },
        {
            title: "Fortuny Cushion Mini Mama",
            description: "Like a mother embraces her child, a single cut of fabric envelops this mini cushion, creating a unique and modern design.",
            image: "https://d3fbvrgj5mtwb0.cloudfront.net/_w2400/168137/SET_03_FORTUNY.webp",
            link: "/products/fortuny-cushion-mini-mama?textile=melagrana-mercury-silver"
        },
    ];

    const location = useLocation()

    // / collections / fortuny - home
    console.log(location);

    return (
        <section className=''>

            <div className="flex border-4 justify-center relative h-[80vh] sm:h-full ">
                <img src="/collections/home/hero.webp" alt="hero" className="w-full object-cover  h-[clamp(60vh,100%,100vh)] md:h-[clamp(200px,60vw,100vh)] " />
                <div className="absolute bottom-16">
                    <h3 className="text-white text-xl text-center pt-2 mb-6 ">
                        Creations that speak to the soul
                    </h3>
                    <Button
                        text={""}
                        styling="bg-white w-fit mx-auto py-2 px-7 rounded text-[10px] uppercase pointer-events-auto"
                    >
                        <Link to={"/collections/fortuny-home#collection"}>Discover More</Link>
                    </Button>
                </div>
            </div>


            <TextCaptionAndLink heading='Fortuny Home' subheading_style='text-sm' sub_heading='Eclectic cushions and throws that reflect the cultural depth and poetic spirit of Venice. Uplift your spaces with extraordinary creations that project beauty and soul.' btm_heading='Fortuny Cushions' btm_heading_styles='pb-16' imgUrl='/collections/home/circular_logo.webp' imgStyling='mx-auto h-10 mb-12' text='Unique and charming cushions to accent the spaces you love.' text_style=' mx-auto' url='fix____me' btn_text='Discover More' />

            <div className="w-full flex justify-center ">
                <img src="/collections/home/cta.webp" alt="CTA_IMG" className="  w-screen border max-w-5xl" />
            </div>

         


            <div className="gap-16 md:gap-4 mt-12 md:grid-cols-3 place-content-start grid md:px-32">

                {cardData.map(({ description, image, link, title }) => {
                    return (
                        <div className="px-12" key={title}>
                            <CustomCard imgUrl={image} styling=" " />
                            <h2 className=" text-xl md:text-2xl text-center pt-5 pb-8">{title}</h2>
                            <p className="text-sm text-center py-4">{description}</p>
                            <Button
                                text={""}
                                styling="bg-[#323732] text-white w-fit mx-auto py-2 px-7 rounded text-[10px] uppercase pointer-events-auto"
                            >
                                <Link to={link}>Shop</Link>
                            </Button>
                        </div>
                    );
                })}
            </div>

            <TextCaptionAndLink  btm_heading='Fortuny Throws' btm_heading_styles='pb-12' text='Exquisite throws handcrafted in Venice with fabrics that feel wonderful to be wrapped in.' text_style=' !pb-6 mx-auto' url='fix____me' btn_text='Discover More' />

            <div className="md:flex-row flex-col flex  gap-6 py-8 md:px-32">

                {cardData.slice(1).map(({ description, image, link, title }) => {
                    return (
                        <div className="px-12 " key={title}>
                            <CustomCard imgUrl={image} styling=" " />
                            <h2 className=" text-xl md:text-2xl text-center pt-5 pb-8">{title}</h2>
                            <p className="text-sm text-center pb-4">{description}</p>
                            <Button
                                text={""}
                                styling="bg-[#323732] text-white w-fit mx-auto py-2 px-7 rounded text-[10px] uppercase pointer-events-auto"
                            >
                                <Link to={link}>Shop</Link>
                            </Button>
                        </div>
                    );
                })


                }



            </div>
        </section>
    )
}

export default FortunyHome