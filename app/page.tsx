"use client";

import React from "react";
import Image from "next/image";

import { FiArrowUpRight, FiChevronRight, FiLink } from "react-icons/fi";
import {
  FaBook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPlay,
  FaXTwitter,
} from "react-icons/fa6";
import Tweet from "@/components/tweet";
import clsx from "clsx";

const socials = [
  {
    icon: <FaXTwitter cclassName="w-[18px] h-[18px]" />,
    name: "Twitter",
    url: "https://twitter.com/hardeep_gambhir",
  },
  {
    icon: <FaBook className="w-[18px] h-[18px]" />,
    name: "Curius",
    url: "https://curius.app/hardeep-gambhir",
  },
  {
    icon: <FaLinkedinIn className="w-[18px] h-[18px]" />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hardeep-gambhir",
  },
  {
    icon: <FaInstagram className="w-[18px] h-[18px]" />,
    name: "Instagram",
    url: "https://www.instagram.com/hardeep_gambhir",
  },
];

export default function Home() {
  const airchatVideoRef = React.useRef<HTMLVideoElement>(null);
  const [isAirchatVideoPlaying, setIsAirchatVideoPlaying] =
    React.useState(false);

  return (
    <main className="flex flex-col min-h-screen max-w-screen items-center bg-black">
      {/* sticky header */}
      <div className="flex sticky top-0 z-50 items-center justify-between w-full p-3 border-b border-dark-divider bg-[rgb(13,13,13,0.8)] backdrop-blur-xl">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={
              "https://yt3.googleusercontent.com/ytc/AOPolaRemMDdflgqIFmPHAdYnrAuoc_1dyMZdj4d87DsoJs=s900-c-k-c0x00ffffff-no-rj"
            }
            alt="banner"
            width={28}
            height={28}
            className="w-7 h-7 rounded-full bg-dark-background-secondary"
          />

          <span className="max-sm:hidden text-sm">Hardeep Gambhir</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          {socials.map((social) => {
            return (
              <a
                href={social.url}
                target="_blank"
                key={social.name}
                className="opacity-50 hover:opacity-100 transition-opacity text-sm no-underline"
              >
                <span className="max-sm:text-sm">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col w-full p-4 max-w-4xl z-0 h-auto gap-24 py-12">
        <div className="flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-4xl font-medium text-center font-serif">
              Hardeep Gambhir
            </h1>
            <p>
              Hey there, I&apos;m Hardeep Gambhir, a 21-year-old community-builder, software engineer, product-designer, artist, 
              videographer, cinematographer, writer, nespresso addict, human.
            </p>

            <ul className="list-disc list-inside">
              <li>
                Founder of{" "}
                <a href="https://www.livetheresidency.com" target="_blank">
                  The Residency
                </a>
              </li>

              <li>
                Developed Software for the Ministry of Education in Canada at {" "}
                <a
                  href="https://www.uwo.ca/bmi/"
                  target="_blank"
                >
                  The Brain and Mind Institute
                </a>{" "}
        
              </li>

              <li>
                <a
                  href="https://www.mercatus.org/emergent-ventures"
                  target="_blank"
                >
                  Emergent Ventures Fellow
                </a>
              </li>

              <li>
                Host of {" "}
                <a
                  href="https://www.mercatus.org/emergent-ventures"
                  target="_blank"
                >
                  Emerging Innovators Podcast
                </a>
              </li>

              <li>
                Beryl Ivey Full-Ride Scholar @{" "}
                <a href="https://www.uwo.ca/" target="_blank">
                  Western University
                </a>{" "}
                in Canada
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full h-screen">
            <div className="grid grid-rows-2 gap-4 w-full h-screen">
              <div className="relative flex flex-col border-dark-divider h-full overflow-clip group hover:cursor-pointer">
                <Image
                  src={"/gdg-grin.jpeg"}
                  alt={"Mark & Naval"}
                  layout="fill"
                  // layout="fill"
                  // objectFit="cover"
                  // objectPosition="center"
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out bg-dark-background-secondary"
                />

                <div className="py-2 absolute bottom-0 bg-black text-dark-text-secondary text-sm w-full items-center">
                  On the way to {" "}
                  <a href="https://www.buildspace.so/campus" target="_blank">
                    {" "}
                    Buildspace Campus
                  </a>
                </div>
              </div>

              <ImageCard
                src="/Socratica.jpeg"
                alt="Socratica"
                caption="Socratica Toronto Symposium"
              />
            </div>

            <div className="grid grid-rows-3 gap-4 w-full h-screen">
              <ImageCard
                src="/cinematic-hardeep.jpeg"
                alt="Cinematic Scenary"
                objectFit="cover"
                layout ="fill"
                objectPosition="bottom"
                caption="Running up the hill with strangers in May 2023"
              />
              <ImageCard
                src="/yestheory1.jpeg"
                alt="Mark & Naval"
                caption="Organized an event with random strangers on a solo trip to SF"
              />
              <ImageCard
                src="/my-loves.jpg"
                alt="My loves"
                caption="My loves"
                objectFit="cover"
                layout ="fill"
                objectPosition="bottom"
              />
            </div>
          </div>
        </div>


        {/* contact section */}
        <div className="flex flex-col items-start gap-12">
          <h1 className="text-4xl font-medium text-center font-serif underline underline-offset-8 decoration-dark-dividerContrast">
            Contact
          </h1>

          {/* grid contact */}

          <div className="grid grid-cols-2 w-full gap-3">
            {socials.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="group flex flex-row items-center justify-between p-5 max-sm:p-4 w-full bg-dark-background-secondary no-underline hover:opacity-100 border border-dark-divider hover:border-dark-dividerContrast text-dark-text-secondary hover:text-white transition-all"
                  target="_blank"
                >
                  <div className="flex flex-row gap-3 items-center">
                    <div>{social.icon}</div>
                    <span className="text-sm">{social.name}</span>
                  </div>

                  <FiArrowUpRight className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

const ImageCard: React.FC<{
  src: string;
  alt: string;
  caption: string;
  layout?: "fill" | "cover" | "contain" | "responsive" | "intrinsic" | undefined;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down" | undefined;
  objectPosition?: string | undefined;
}> = ({ src, alt, caption }) => {
  return (
    <div className="relative flex flex-col border-dark-divider h-full overflow-clip group hover:cursor-pointer">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="w-full h-full object-cover transition-all duration-500 ease-in-out bg-dark-background-secondary"
      />

      <span className="flex flex-row py-2 absolute bottom-0 bg-black text-dark-text-secondary text-sm w-full justify-between items-center">
        {caption}
      </span>
    </div>
  );
};

const LinkCapsule: React.FC<{
  href: string;
  label: string;
}> = ({ href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex flex-row items-center text-neutral-300 gap-1 pl-4 pr-2 py-1 rounded-full border border-dark-divider hover:border-dark-dividerContrast transition-all no-underline"
    >
      {/* <FiLink className="w-3 h-3"/> */}
      <span className="text-sm line-clamp-1">{label}</span>
      <FiArrowUpRight className="w-[14px] h-[14px] text-dark-text-secondary group-hover:text-white transition-all " />
    </a>
  );
};
