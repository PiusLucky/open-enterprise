import React from "react";
import Header from "../common/Header";
import ReImagineCard from "../cards/ReImagineCard";

function ReimagineSection() {
  const items = [
    {
      imageUrl: "/images/r_1.png",
      title: "Modern workforce",
      description:
        "Multistakeholder governance aligns employees with the organization's wider community.",
    },
    {
      imageUrl: "/images/r_2.png",
      title: "Meriticratic by design",
      description:
        "Tokenized ownership aligns deeply committed individuals with the organization's success.",
    },
    {
      imageUrl: "/images/r_3.png",
      title: "Engineered for resilience",
      description:
        "Open Enterprise supports best practices in sociocratic management.",
    },
  ];
  return (
    <section>
      <div>
        <Header
          title="Reimagining what it means to work"
          description="Teams and communities using Open Enterprise fundamentally unlock a reality of work that reimagines how people engage in economic opportunity, meeting the demands and expectations of a modern organization."
        />

        <div className="flex flex-col md:flex-row gap-[23px] justify-between mt-[48px]">
          {items.map((item, index) => (
            <ReImagineCard {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReimagineSection;
