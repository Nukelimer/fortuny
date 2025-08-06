import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

interface TextCaptionAndLinkProps {
        category?: string;
        url?: string;
        heading?: string;
        heading_style?: string;
        text_style?: string;
        text?: string;
        body?: string;
        btn_text?: string;
        img_Url?: string;
        imgUrl?: string;
        styling?: string;
        img_styling?: string;
        imgStyling?: string;
}

function TextCaptionAndLink({
        body,
        heading,
        text,
        url,
        category,
        btn_text,
        img_Url,
        imgUrl,
        styling,
        img_styling,
        heading_style,
        imgStyling,
        text_style
}: TextCaptionAndLinkProps) {
        console.log(url, text, imgUrl, heading, body, category, btn_text);

        return (
                <div className={`py-12 text-center max-w-lg mx-auto ${styling}`}>
                        <h2 className="uppercase text-[#919191] text-sm">{category}</h2>
                        <h3 className={`text-lg pb-16 ${heading_style}`}>{heading}</h3>
                        {img_Url && <img src={img_Url} className={img_styling} />}
                        {imgUrl && <img src={imgUrl} className={imgStyling} />}
                        <p className={`text-sm text-center w-fit pb-16 ${text_style}`}>
                                {" "}
                                {text || body}
                        </p>
                        <Button
                                styling={` bg-btn-primary text-white hover:text-phc w-fit mx-auto py-2 px-12 rounded text-sm text-5xl uppercase `}
                        >
                                {url ? <Link to={url}>{btn_text}</Link> : btn_text}
                        </Button>
                </div>
        );
}

export default TextCaptionAndLink;
