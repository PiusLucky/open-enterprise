import React from "react";
import MainButton from "../common/MainButton";
import { belyDisplayFont, cn } from "@/lib/utils";

function HeroSection() {
  return (
    <section className="flex justify-between items-center flex-col md:flex-row gap-16">
      <div>
        <p
          className={cn(
            belyDisplayFont.className,
            "text-[30px] md:text-large text-text leading-tight"
          )}
        >
          A new model for
          <br className="hidden xl:block" /> open collaboration
        </p>
        <p className="text-accent font-normal mt-[25px] mb-[40px]">
          Run an organization where members get rewarded for their contributions
          with fractional ownership.
        </p>
        <div>
          <MainButton text="Request early access" />
        </div>
      </div>
      <div>
        <img src="/images/hero.png" alt="hero illustration" />
      </div>
    </section>
  );
}

export default HeroSection;
