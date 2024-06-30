import { belyDisplayFont, cn } from "@/lib/utils";
import React from "react";
import MainButton from "../common/MainButton";

function StartupSection() {
  return (
    <section className="flex justify-between items-center flex-col md:flex-row gap-16">
      <div>
        <p
          className={cn(
            belyDisplayFont.className,
            "text-[30px] md:text-large text-text leading-tight"
          )}
        >
          Start an Open Enterprise
        </p>
        <p className="text-accent font-normal mt-[25px] mb-[40px]">
          If you can&apos;t wait to run a new or existing organization on Open
          Enterprise and are willing to explore and navigate the beta, we&apos;d
          love to get you started.
        </p>
        <div>
          <MainButton text="Request early access" />
        </div>
      </div>
      <div>
        <img src="/images/bottom_illustration.png" alt="bottom illustration" />
      </div>
    </section>
  );
}

export default StartupSection;
