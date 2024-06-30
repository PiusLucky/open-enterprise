"use client";

import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const links = ["Why Open Enterprise", "Features", "Contribute"];
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <div>
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="flex items-center gap-[40px] select-none">
            {links.map((link, index) => (
              <p
                className={`hover:text-primary cursor-pointer font-bold flex items-center gap-2  text-gray`}
                key={index}
              >
                {link}
              </p>
            ))}
            <p
              className={`text-primary cursor-pointer font-bold flex items-center gap-2  text-gray`}
            >
              Request early access
            </p>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo.png" alt="logo" className="w-[12rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <MenuIcon
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <p
                  className={`hover:text-primary cursor-pointer font-bold flex items-center gap-2  text-gray`}
                  key={index}
                >
                  {link}
                </p>
              ))}
              <p
                className={`text-primary cursor-pointer font-bold flex items-center gap-2  text-gray`}
              >
                Request early access
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
