import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function OnboardSection() {
  const members = [
    {
      avatar: "/images/ki_1.png",
      name: "Dillion Kydd",
      totalShares: 100,
    },
    {
      avatar: "/images/ki_2.png",
      name: "Anna Olsen",
      totalShares: 100,
    },
    {
      avatar: "/images/ki_3.png",
      name: "Kas Moss",
      totalShares: 100,
    },
  ];
  return (
    <section className="flex flex-col items-center md:flex-row-reverse gap-8 md:gap-32 justify-between">
      <div className="md:w-[50%]">
        <div className="mb-[24px]">
          <img src="/images/o_1.png" alt="icon" />
        </div>
        <div>
          <Header
            title="Onboard users, investors and advisors as you grow"
            description="You've bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success."
            textLeft
          />
        </div>
      </div>
      <div className="md:w-[50%]">
        <div className="relative ">
          <div className="py-[32px] px-[40px] border-[3px] border-text rounded-[16px] bg-white">
            <div className="flex items-center gap-[8px] mb-[24px]">
              <div>
                <img
                  src={"/images/oi_1.png"}
                  alt="member avatar"
                  className="rounded-full object-cover w-[52px] h-[52px]"
                />
              </div>

              <div>
                <p className="text-text font-bold text-[25px]">Jassir Jonis</p>
                <p className="text-accent text-[15px]">
                  Pre-seed angel investor
                </p>
              </div>
            </div>

            <p className="mb-[24px]">
              Hey guys, love what you&apos;re doing and I&apos;m convinced that
              together we&apos;ll achieve amazing things.
            </p>

            <div className="flex gap- md:gap-16  mb-[32px]">
              <div>
                <p className="uppercase text-accent mb-4">Commit</p>
                <p className="font-bold text-text text-[30px]">10,000 DAI</p>
              </div>

              <div>
                <p className="uppercase text-accent mb-4">Shares</p>
                <p className="font-bold text-text text-[30px]">20</p>
              </div>
            </div>

            <MainButton text="Go to vote" classes="bg-text" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnboardSection;
