import React from "react";

function FooterSection() {
  return (
    <section className="flex justify-between gap-8 flex-col md:flex-row pb-[59px]">
      <div>
        <p className="font-bold text-text">Open Enterprise</p>
      </div>
      <div className="flex  flex-col md:flex-row gap-4  md:gap-[40px]">
        <p
          className={`hover:text-primary cursor-pointer font-bold flex items-center gap-2  text-gray`}
        >
          Documentation
        </p>
        <p
          className={`hover:text-primary cursor-pointer font-bold flex items-center gap-2  text-gray`}
        >
          Github
        </p>
        <p
          className={`hover:text-primary cursor-pointer font-bold flex items-center gap-2  text-gray`}
        >
          Twitter
        </p>
        <p
          className={`hover:text-primary cursor-pointer font-bold flex items-center gap-2  text-gray`}
        >
          Contact us
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
