import React, { useState } from "react";
import TabNavItem from "../Mentorship/AttendenceDetails/TabNavItem";
import TabContent from "../Mentorship/AttendenceDetails/TabContent";
import MentorMaths from '../Mentorship/SubAttendenceDetails/MentorMaths';
import MentorBEEE from "../Mentorship/SubAttendenceDetails/MentorBEEE";
import { BiRightArrowAlt } from 'react-icons/bi'
import MentorFME from "../Mentorship/SubAttendenceDetails/MentorFME";
import MentorEG from "../Mentorship/SubAttendenceDetails/MentorEG";
import MentorCivil from "../Mentorship/SubAttendenceDetails/MentorCivil";
import MentorPhysics from "../Mentorship/SubAttendenceDetails/MentorPhysics";

function SubAttendenceStudents() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [curr, setCurr] = useState(0)
  const handleprev = (id) => {
    setCurr((curr) => (curr === 0 ? id.length - 1 : curr - 1))
  }
  const handlenext = (id) => {
    setCurr((curr) => (curr === id.length - 1 ? 0 : curr + 1))

  }
  return (
    <>
      <div className="px-2 w-full">
        <div className=" relative -top-7  ">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-row py-1 gap-x-1 justify-start items-center">
              <h2 className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-bold leading-[normal] tracking-[0.66px]">Attendance </h2>
              <span><BiRightArrowAlt /></span>
              <h2 className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-bold leading-[normal] tracking-[0.66px]">21BECE30000 </h2>
            </div>

          </div>
          <div className=" px-[2rem]  pt-5  bg-white rounded-lg  ">
            <div className="flex flex-row  justify-between">
              <h2 className="text-[color:var(--01,#16376E)] text-[20px] font-Poppins not-italic font-bold leading-[normal] tracking-[1.1px]">21BECE30000</h2>
              <h2 className="text-[color:var(--01,#16376E)] text-[18px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.99px]">Raj Mehta</h2>
            </div>

            <div className="flex justify-center  items-center ">
              <h2 className="text-[color:var(--02,#47A5E4)] text-center py-2 text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
                Attendance Details
              </h2>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-x-0.5 justify-center items-center py-3">

                <ul className="flex flex-row items-center justify-between bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-[3px] overflow-hidden ">
                  <TabNavItem
                    title="Maths"
                    id="tab1"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabNavItem
                    title="BEEE"
                    id="tab2"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabNavItem
                    title="FME"
                    id="tab3"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabNavItem
                    title="EG"
                    id="tab4"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabNavItem
                    title="Civil Engineering"
                    id="tab5"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabNavItem
                    title="Engineering Physics"
                    id="tab6"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </ul>

              </div>
              <div className="">
                <TabContent id="tab1" activeTab={activeTab}>
                  <MentorMaths />
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                  <MentorBEEE />
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                  <MentorFME />
                </TabContent>
                <TabContent id="tab4" activeTab={activeTab}>
                  <MentorEG />
                </TabContent>
                <TabContent id="tab5" activeTab={activeTab}>
                  <MentorCivil />
                </TabContent>
                <TabContent id="tab6" activeTab={activeTab}>
                  <MentorPhysics />
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubAttendenceStudents
