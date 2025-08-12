import TextCaptionAndLink from "@/components/reusable/TextCaptionAndLink";
import Hero from "../components/reusable/Hero";
import React from "react";

function Palazzina2025() {
    return (
        <div className="itali">
            <Hero showInfo="true" />
            <TextCaptionAndLink
                heading="FORTUNY + CHAHAN"
                body="Discover the new installment of FORTUNY + CHAHAN at the Fortuny Palazzina. During Biennale Architettura 2025, experience a private showcase where timeless design and expert curation dialogue with our eternal artistry. 

Step inside the Fortuny Palazzina on the island of Giudecca and immerse yourself in an exclusive installation curated by Chahan Minassian, featuring our legendary textiles, Pierre Sabatier’s monumental sculptural walls, and the refined works of Harumi Klossowska de Rola. 

Private tours are available by appointment for collectors, connoisseurs, and design professionals throughout the Biennale season."
                btn_text="Book an Appointment"
                url="book-an-appointment"
                sub_heading="Reimagining the Palazzina"
                subheading_style="italic"
                heading_style="!pb-2"
            />


            <TextCaptionAndLink
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
            .
        </div>
    );
}

export default Palazzina2025;
