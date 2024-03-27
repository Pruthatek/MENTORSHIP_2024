import React from 'react'

function Navbar() {
    return (
        <div   className=' w-full shadow-lg'>
            <div className="bg-[#FFF] sticky top-0 z-70 w-full h-[70px] flex justify-between items-center px-14">
                <div className="flex flex-row items-center gap-x-4 justify-start  py-2">
                    <img src="/static/img/logo2.png" className="w-[60px] h-[60px]" alt="" />
                    <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Lexend not-italic font-semibold leading-[normal] tracking-[0.7px]">KSV University</h2>
                </div>
                <div className="flex justify-center items-center">
                    {/* <h2 className="text-[#16376E] text-[20px] not-italic font-Poppins font-bold leading-[normal] tracking-[1.1px]">Student Mentoring Form</h2> */}
                </div>
                <div className="flex justify-end items-center gap-x-4 ">
                    <img src="/static/img/logo1.png" className="w-[60px] h-[60px]" alt="" />
                    <div className="flex flex-col justify-center gap-y-1 items-center">
                        <h2 className="text-[color:var(--02,#47A5E4)] text-[26px] font-Lexend not-italic font-bold leading-[normal] tracking-[1.65px]">LDRP</h2>
                        <h2 className=" text-[color:var(--01,#16376E)]  font-medium  tracking-[0.18px]  text-[15px] font-Lexend not-italic  leading-[normal] ">Institute of Technology & research</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
