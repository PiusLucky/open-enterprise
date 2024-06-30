import React from "react";
import { belyDisplayFont, cn } from "@/lib/utils";

interface IProp {
  title: string;
  description: string;
  textLeft?: boolean;
}

export default function Header({ title, description, textLeft }: IProp) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[24px] ",
        textLeft ? "justify-start " : "justify-center  items-center"
      )}
    >
      <div
        className={cn(
          "text-[30px] md:text-large text-text leading-tight",
          belyDisplayFont.className,
          textLeft ? "text-left" : "text-center"
        )}
      >
        {title}
      </div>
      <div
        className={cn(" text-accent", textLeft ? "text-left" : "text-center")}
      >
        {description}
      </div>
    </div>
  );
}
