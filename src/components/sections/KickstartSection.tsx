import React from "react";
import Header from "../common/Header";

function KickstartSection() {
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
    <section className="flex flex-col md:flex-row gap-8 justify-between">
      <div className="md:w-[50%]">
        <div className="mb-[24px]">
          <img src="/images/k_1.png" alt="icon" />
        </div>
        <div>
          <Header
            title="Kickstart an organization with your co-founders"
            description="It's the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You're ready to embark the startup journey."
            textLeft
          />
        </div>
      </div>
      <div className="md:w-[50%]">
        <div className="relative ">
          <div className="py-[32px] px-[40px] border-[3px] border-text rounded-[16px] bg-white">
            <p className="font-bold text-[30px] text-accent pb-[32px]">
              Members
            </p>
            {members.map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-[8px] mb-[24px]"
              >
                <div>
                  <img
                    src={member.avatar}
                    alt="member avatar"
                    className="rounded-full object-cover w-[52px] h-[52px]"
                  />
                </div>

                <div>
                  <p className="text-text font-bold">{member.name}</p>
                  <p className="text-accent text-[12px]">
                    {member.totalShares} SHARES
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="-z-10 absolute bg-primary top-5 left-4 -right-4 -bottom-4 rounded-[16px]"></div>
        </div>
      </div>
    </section>
  );
}

export default KickstartSection;
