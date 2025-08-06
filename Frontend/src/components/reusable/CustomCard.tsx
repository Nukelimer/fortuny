import React from 'react'
interface CardProps{
styling?: string
    imgUrl?: string;
    img_hover_Url?:string
}


function CustomCard({imgUrl,img_hover_Url, styling}:CardProps) {
  return (
      <div className={`w-full flex items-center justify-center ${styling}`}>
                  <img src={imgUrl} alt="" />
                  <img src={img_hover_Url} alt="" />
          </div>
  );
}

export default CustomCard