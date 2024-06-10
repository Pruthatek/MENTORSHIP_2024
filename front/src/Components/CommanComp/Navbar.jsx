import React, { useContext } from 'react'
import { mentoringDataContext } from '../../Context/mentoringDataContext';
function Navbar() {
    const { dataM, setDataM } = useContext(mentoringDataContext);

    return (
        <div className=' w-full shadow-md relative rounded-lg'>
            <div className="bg-[#FFF] sticky top-0 z-70 w-full rounded-lg  h-[70px] flex justify-between    items-center px-14">
                <div className="flex  flex-row items-center gap-x-4 justify-start  py-2 space-x-5">
                    <img src="/static/img/svkm.png" className="w-[60px] h-[55px]" alt="" />
                    <img src="/static/img/logo2.png" className="w-[60px] h-[60px]" alt="" />

                </div>
                <div className="flex justify-start items-start w-[20%]">
                    <h2 className="text-[color:var(--02,#47A5E4)] text-[26px] font-Lexend not-italic font-bold leading-[normal] tracking-[1.65px]">Mentorship</h2>
                    {/* <h2 className="text-[#16376E] text-[20px] not-italic font-Poppins font-bold leading-[normal] tracking-[1.1px]">Student Mentoring Form</h2> */}

                </div>

                <div className=" h-full   ">
                    <div className={`${!dataM.loggedBy==''?'block':'hidden'}`}>
                        <img src="/static/img/Ldrp.png" className="w-[80px] h-[80px]" alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar;
