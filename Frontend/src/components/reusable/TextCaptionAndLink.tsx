import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface TextCaptionAndLinkProps {
    category?: string;
    url?: string;
    heading?: string;
    sub_heading?: string;
    inverted_heading?: string;
    inverted_heading_styles?: string;
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
    subheading_style?: string
    isShowBtn?: boolean
}

function TextCaptionAndLink({
    inverted_heading,
    inverted_heading_styles,
    body,
    heading,
    sub_heading,
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
    text_style,
    subheading_style,
    isShowBtn
}: TextCaptionAndLinkProps) {
    // console.log(url, text, imgUrl, heading, body, category, btn_text);

    return (
        <div className={`py-12 text-center  max-w-lg mx-auto ${styling}`}>
            <h2 className="uppercase text-[#919191] text-sm">{category}</h2>

            <h3 className={clsx('text-lg', heading_style ?? 'pb-16')}>{heading}</h3>

            {sub_heading && <h3 className={`text-lg pb-16 ${subheading_style}`}>{sub_heading}</h3>
            }
            {img_Url && <img src={img_Url} className={img_styling} />}
            {imgUrl && <img src={imgUrl} className={imgStyling} />}
            {inverted_heading && (
                <h3 className={`text-lg pb- ${inverted_heading_styles}`}>
                    {inverted_heading}
                </h3>
            )}
            {
                (text || body) && (
                    <p
                        className={`text-sm text-center w-fit pb-16 ${text_style}`}
                        dangerouslySetInnerHTML={{ __html: (text || body) ?? '' }}
                    />
                )
            }

            {
               !isShowBtn && 
                <Button
                    styling={` bg-btn-primary text-white hover:text-phc w-fit mx-auto py-2 px-12 rounded text-sm text-5xl uppercase `}
                >
                    {url ? <Link to={url}>{btn_text}</Link> : btn_text}
                </Button>
           }
        </div>
    );
}

export default TextCaptionAndLink;
