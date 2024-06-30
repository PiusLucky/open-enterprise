import React from "react";

interface IProp {
  imageUrl: string;
  title: string;
  description: string;
}

function ReImagineCard({ imageUrl, title, description }: IProp) {
  return (
    <div className="shadow-lg rounded-[8px] py-[64px] px-[24px] md:w-[calc(100%/3)]">
      <div>
        <img src={imageUrl} alt="icon" />
      </div>
      <p className="my-[24px]">{title}</p>
      <p className="text-accent">{description}</p>
    </div>
  );
}

export default ReImagineCard;
