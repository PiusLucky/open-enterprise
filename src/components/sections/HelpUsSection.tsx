import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";

function HelpUsSection() {
  const items = [
    {
      title: "Ideate a list of features based on the Sociocracy model",
      description:
        "We're looking for someone interested in business theory and research that'll help us bridge the gap between our s...",
      tag: "5 AUT",
      validUntil: "May 15",
    },
    {
      title: "Update documentation with FAQs",
      description:
        "Review our community chat for the most frequently asked questions and document answers for our product docs.",
      tag: "10 AUT",
      validUntil: "May 18",
    },
    {
      title: "Tutorial video series",
      description:
        "Create a series of video tutorials that cover everything from start to finish on using Open Enterprise.",
      tag: "40 AUT",
      validUntil: "May 20",
    },
  ];
  return (
    <section>
      <div>
        <Header
          title="Help us improve Open Enterprise"
          description="As an Open Enterprise ourselves, we are actively looking for new talent to join our mission of improving and delivering the Open Enterprise model to the world. Apply for open tasks and earn a stake in our success."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[48px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-[24px] rounded-[16px]"
            >
              <p className="font-bold text-text">{item.title}</p>
              <p className="my-4 text-accent">{item.description}</p>
              <div className="flex justify-between gap-4 items-center">
                <div className="uppercase inline  bg-primary rounded-[40px] px-3 py-1 text-white">
                  {item.tag}
                </div>

                <p>Apply by {item.validUntil}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[48px] flex justify-center">
          <MainButton classes="bg-text h-[64px] w-[136px]" text="View more" />
        </div>
      </div>
    </section>
  );
}

export default HelpUsSection;
