import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const MentorFME = ({}) => {
  const Data = [
    {
      text: "1 January 2023 - 1 Feb 2023 ",
    },
    {
        text: "1 Feb 2023 - 1 March 2023 ",
    },
    {
        text: "1 March 2023 - 1 April 2023 ",
    },
    {
        text: "1 April 2023 - 1 May 2023 ",
    },
    {
        text: "1 May 2023 - 1 June 2023 ",
    },
    {
        text: "1 June 2023 - 1 July 2023 ",
    },
    {
        text: "1 July 2023 - 1 Aug 2023 ",
    },
    {
        text: "1 Aug 2023 - 1 Sep 2023 ",
    },
    {
        text: "1 Sep 2023 - 1 Oct 2023 ",
    },
    {
        text: "1 Oct 2023 - 1 Nov 2023 ",
    },
    {
        text: "1 Nov 2023 - 1 Dec 2023 ",
    },

 ];
  return (
    <>
      <div className="pt-4  ">
      <div className="border-[#47A5E4] border-[2px] rounded-[4px] px-0  ">
        <div className="relative justify-start flex -top-6 left-10  ">
        <h2 className="text-[color:var(--02,#47A5E4)] bg-white text-[20px] font-Poppins px-3  py-2 not-italic font-semibold leading-[normal] tracking-[1.1px]">Lectures</h2>
        </div>
        <div className="flex flex-row gap-x-3 ">
        <div className=" flex flex-row px-7 gap-x-7">
            <div className="flex flex-col gap-y-2 pt-4">
                <div>
                <h2 className="text-[color:var(--black,#101010)] text-center font-Poppins text-[26px] not-italic font-normal leading-[normal]">Attendance All Over</h2>
                </div>
                <div className="pt-10">
                <div className="skill  one">
      <div className="outer bg-[#ECEDEE]">
        <div className="inner bg-white">
          <div id=" text-[#292D30] text-center text-[45px] font-Poppins not-italic font-medium leading-[normal] ">80%</div>
        </div>
      </div>

      <svg className="svgeffect" xmlns="http://www.w3.org/2000/svg" width="253" height="253" viewBox="0 0 279 279" fill="none">
<path d="M64.9892 37.0961C86.138 21.7405 111.447 13.3402 137.425 12.9157C142.717 12.8293 146.75 17.404 146.437 22.6871V22.6871C146.124 27.9703 141.581 31.9545 136.291 32.1121C114.747 32.7541 93.8092 39.8552 76.2497 52.6048C56.096 67.2379 41.6396 88.4063 35.3437 112.503C29.0478 136.6 31.3019 162.135 41.7221 184.756C52.1422 207.377 70.0836 225.686 92.4892 236.562C114.895 247.438 140.378 250.208 164.598 244.401C188.817 238.595 210.274 224.57 225.312 204.717C240.351 184.863 248.04 160.41 247.069 135.523C246.224 113.839 238.851 92.9957 226.028 75.6719C222.88 71.418 223.2 65.3841 227.157 61.8698V61.8698C231.114 58.3555 237.204 58.6945 240.409 62.9057C256.146 83.5791 265.202 108.661 266.22 134.776C267.363 164.094 258.305 192.901 240.59 216.289C222.874 239.677 197.598 256.198 169.066 263.039C140.535 269.879 110.515 266.615 84.12 253.803C57.7254 240.991 36.5898 219.423 24.3146 192.774C12.0393 166.126 9.38383 136.045 16.8006 107.658C24.2174 79.2715 41.2475 54.3343 64.9892 37.0961Z" stroke="#FFC700" stroke-width="24" stroke-linejoin="bevel"/>
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#FFC700" />
            <stop offset="100%" stop-color="#FFC700" />
          </linearGradient>
        </defs>
        {/* <circle cx="70" cy="80" r="70" stroke-linecap="round" /> */}
      </svg>
    </div>

                </div>
            </div>
            <div className="flex flex-col gap-y-14">
            <div>
                <h2 className="text-[color:var(--01,#16376E)] text-center text-[22px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.44px]">Total Attendance</h2>
            </div>
            <div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">Total Lectures Conducted</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">10</h2>
            </div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">Total Lectures Attend By Student</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">8</h2>
</div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">All over Attendance of Month</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">80 %</h2>
            </div>
            </div>
            </div>
            </div>
            <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="1" height="412" viewBox="0 0 1 482" fill="none">
  <path d="M0.5 0.5V481.5" stroke="#BDBDBD" stroke-linecap="round" stroke-dasharray="5 5"/>
</svg>
</div>
<div className="px-5">
<div className="flex flex-col gap-y-3">
<div className="max-w-[22rem] ">
<Swiper
 modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
 navigation={{
    nextEl: ".button-next-slide",
    prevEl: ".button-prev-slide",
  }}
// className="mySwiper "
>
{Data.map((item, index) => (
    <SwiperSlide key={index}>
        <div className="  flex justify-center ">
    <h2 className="absolute py-2  text-[color:var(--02,#47A5E4)]   text-center text-[18px] not-italic font-semibold leading-[normal] tracking-[0.44px] font-inter ">{item.text}</h2>
    </div>
    </SwiperSlide>
  ))}
  <div className=" ">
  <div className="relative  flex flex-row justify-between ">
    <div className=" button-prev-slide z-50  cursor-pointer  ">
    <button className=" bg-[#16376E]  rounded-[3px_0px_0px_3px]" >
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
  <path d="M22.4443 10.7916L13.2393 18.5L22.4443 26.2083L22.4443 10.7916Z" fill="white"/>
</svg></button>
    </div>
    <div className="  button-next-slide z-50 cursor-pointer">
    <button className=" bg-[#16376E] rounded-[0px_3px_3px_0px]  shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset]"  ><svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
    <path d="M15.5557 10.7916L24.7607 18.5L15.5557 26.2083L15.5557 10.7916Z" fill="white"/>
  </svg></button>
    </div>
    </div>
    </div>
</Swiper>
</div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">Total Lectures Conducted</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">4</h2>
            </div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">Total Lectures Attend By Student</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">4</h2>
</div>
            <div>
                <h2 className="text-[color:var(--black,#101010)] text-center text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px]">All over Attendance of Month</h2>
                <h2 className="text-[color:var(--02,#47A5E4)] text-center text-[34px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.68px]">100 %</h2>
            </div>
            </div>
</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MentorFME;
