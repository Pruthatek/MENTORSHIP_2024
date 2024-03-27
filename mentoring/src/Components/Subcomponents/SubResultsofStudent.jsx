import React, { useContext, useEffect, useState } from 'react'
import { FaSortDown } from "react-icons/fa";
import axios from 'axios';
import { mentoringDataContext } from '../../Context/mentoringDataContext';
import TabContent from '../Mentorship/AttendenceDetails/TabContent';
import TabNavItem from '../Mentorship/AttendenceDetails/TabNavItem';
import MentorResults from "../Mentorship/AttendenceDetails/MentorResults";
import MentorSecondResults from "../Mentorship/AttendenceDetails/MentorSecondResults";
import { BiRightArrowAlt } from 'react-icons/bi'
import { FaArrowRight } from "react-icons/fa6";

function SubResultsofStudent() {


  const { dataM, setDataM } = useContext(mentoringDataContext);
  const [activeTab, setActiveTab] = useState("tab1");

  const [curr, setCurr] = useState(0)
  let enrollNo = dataM.studentDetails.enrollment;


  return (

    <>
      <div className="w-full px-2 h-full  overflow-auto">

        <div className="h-full  ">
          <div className="flex flex-row justify-between ">

          </div>
          <div className=" px-[1.2rem]  py-2  bg-white rounded-lg  ">
            <div className="flex flex-row justify-between">
              <h2 className="text-[color:var(--01,#16376E)] text-[20px] font-Poppins not-italic font-bold leading-[normal] tracking-[1.1px]">{dataM.studentDetails.enrollment}</h2>
              <h2 className="text-[color:var(--01,#16376E)] text-[18px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.99px]">{dataM.studentDetails.name}</h2>
            </div>

            <div className="w-full  px-2 ">
              <div className="overflow-hidden rounded-lg   w-full  p-10  pt-5   bg-white ">

                <div className="flex justify-center  items-center ">
                  <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
                    Results Details
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <div className="flex flex-row gap-x-0.5  py-3 ">
                    <ul className="flex flex-row items-start justify-between bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-[3px] overflow-hidden ">
                      <TabNavItem
                        title="Result"
                        id="tab1"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                      <TabNavItem
                        title="Final Result"
                        id="tab2"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                    </ul>
                  </div>

                  <div className=" overflow-auto">
                    <TabContent id="tab1" activeTab={activeTab}>
                      <MentorResults />
                    </TabContent>
                    <TabContent id="tab2" activeTab={activeTab}>
                      <MentorSecondResults />
                    </TabContent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};


export default SubResultsofStudent
