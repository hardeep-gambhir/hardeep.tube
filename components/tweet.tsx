"use client";

import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Tweet: React.FC = ({}) => {
  return (
    <div
      className="flex flex-col border border-dark-divider rounded-xl p-5 w-full h-full gap-3 bg-dark-background-secondary no-underline cursor-pointer transition-all hover:border-dark-dividerContrast"
      onClick={() => {
        window.open(
          "https://twitter.com/rrhoover/status/1654879487014719488",
          "_blank"
        );
      }}
    >
      {/* user detail row */}
      <div className="flex flex-row items-start justify-between gap-3 w-full">
        <div className="flex flex-row gap-2">
          <Image
            src="https://pbs.twimg.com/profile_images/1289046130366406656/-s-fxoLn_400x400.jpg"
            alt="ryan profile picture"
            width={46}
            height={46}
            className="rounded-full bg-dark-background-secondary hover:opacity-80 transition-opacity"
          />

          <div className="flex flex-col leading-snug">
            <span>Ryan Hoover</span>

            <span className="text-dark-text-secondary">@rrhoover</span>
          </div>
        </div>

        <FaXTwitter className="w-6 h-6" />
      </div>

      <p lang="en" dir="ltr" className="text-lg max-sm:text-base">
        <span className="text-[#1DA1F2]">@markrachapoom</span> saw your
        Journal-to-Comic project on Airchat. Impressive. :)
      </p>

      <span className="text-dark-text-secondary">9:03 AM · May 6, 2023</span>
    </div>
  );
};

export default Tweet;
