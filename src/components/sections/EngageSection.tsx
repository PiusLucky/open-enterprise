import React from "react";
import Header from "../common/Header";
import { StarIcon } from "lucide-react";
import MainButton from "../common/MainButton";

function EngageSection() {
  const members = [
    {
      avatar: "/images/ap_1.png",
      name: "Jason Kwon",
      rate: 4.8,
    },
    {
      avatar: "/images/ap_2.png",
      name: "Alex Rose",
      rate: 4.5,
    },
    {
      avatar: "/images/ap_3.png",
      name: "Lizzie Ulrich",
      rate: 4.2,
    },
  ];
  return (
    <section className="flex flex-col md:flex-row gap-8 justify-between">
      <div className="md:w-[50%]">
        <div className="mb-[24px]">
          <img src="/images/e_1.png" alt="icon" />
        </div>
        <div>
          <Header
            title="Engage highly committed contributors"
            description="You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares."
            textLeft
          />
        </div>
      </div>
      <div className="md:w-[50%]">
        <div className="relative ">
          <div className="py-[32px] px-[40px] border-[3px] border-text rounded-[16px] bg-white">
            <div className="flex justify-between items-center">
              <p className="font-bold text-text">
                Write a how-to on Open Enterprise
              </p>
              <div className="uppercase  bg-primary rounded-[40px] px-3 py-1 text-white">
                1 Share
              </div>
            </div>
            <p className="mt-4">
              Looking for an amazing copywriter using Open Enterprise to help us
              write an article on how to get started.
            </p>
          </div>

          <div className="-z-10 absolute bg-primary top-5 left-4 right-4 -bottom-2 rounded-[16px]"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:gap-8 mt-6">
          <div className="relative flex-grow">
            <div className="py-[32px] px-[40px] border-[3px] border-text rounded-[16px] bg-[#F3F0EA] md:min-w-[300px]">
              <p className="font-bold text-[30px] text-accent pb-[32px]">
                3 applicants
              </p>
              {members.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-[8px] mb-[24px]"
                >
                  <div className="flex gap-6 items-center">
                    <div>
                      <img
                        src={member.avatar}
                        alt="member avatar"
                        className="rounded-full object-cover w-[52px] h-[52px]"
                      />
                    </div>

                    <div>
                      <p className="text-text font-bold">{member.name}</p>
                    </div>
                  </div>

                  <div className="text-accent text-[12px] flex items-center gap-2">
                    <StarIcon fill="#F5C64F" stroke="#F5C64F" />
                    <p className="text-accent text-[1.4rem]">{member.rate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex-grow mt-[24px]">
            <div className="py-[32px] px-[40px] border-[3px] border-primary rounded-[16px] bg-white">
              <div className="flex justify-center">
                <img
                  src={members[1].avatar}
                  alt="member avatar"
                  className="rounded-full object-cover w-[72px] h-[72px]"
                />
              </div>

              <p className="font-bold text-[30px] text-text my-2 text-center">
                {members[1].name}
              </p>

              <p className="font-bold text-[30px] text-accent text-center">
                UX Writer
              </p>
              <div className="flex gap-6 items-center justify-between mb-4">
                <div className="flex gap-6 items-center justify-between">
                  <div>
                    <p className="text-text font-bold text-[18px]">4 commits</p>
                  </div>
                </div>

                <div className="text-accent text-[12px] flex items-center gap-2">
                  <StarIcon fill="#F5C64F" stroke="#F5C64F" />
                  <p className="text-accent text-[1.4rem]">{members[1].rate}</p>
                </div>
              </div>

              <MainButton
                text="View profile"
                classes="bg-text w-full rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngageSection;
