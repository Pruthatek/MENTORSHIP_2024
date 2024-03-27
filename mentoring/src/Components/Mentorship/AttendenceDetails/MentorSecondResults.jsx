// import TabNavItem from "../AttendenceDetails/TabNavItem";
// import TabContent from "../TabContent/TabContent";
// import Result from './MentorResults'
// import ResultSection from "./MentorResultSection";
import React, { useState } from 'react'
import { FaSortDown } from "react-icons/fa";

// import Examinationdropdown from '../Results/Examinationdropdown'
const MentorSecondResults = () => {
  // const [selected, setSelected] = useState("Results")
  const [data, setData] = useState({});
  const options = [
    "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"
  ];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };


  return (
    <>
      <div className="top-8 h-full w-full right-0 px-4 py-5 bg-white overflow-auto">


        <form className=' overflow-auto '>
          <div className="flex space-x-[8rem] py-5 h-full overflow-auto  items-center justify-center">
            <div>
              <button
                type="button"
                class=" mr-2 text-white text-[16px] font-inter   bg-[#159BD6] rounded-[5px]  font-bold px-4 py-2 mb-2 leading-[19.36px] tracking-[2%] capitalize"
              >
                Upload Result Copy
              </button>
            </div>
            <div className="flex">
              {/* <ResultSection/> */}

              {/* <Examinationdropdown selected={selected} setSelected={setSelected} /> */}

            </div>
            <div className="flex">

            </div>

            <div className="flex">
              <label
                for=" Examination"
                className=" px-1  py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Semester:{" "}
              </label>
              <div className="flex flex-row justify-center items-center">
                <div className="flex justify-center relative min-w-[38px] px-1 h-[40px]">
                  <select onChange={onOptionChangeHandler} className=" px-9 rounded-[5px] border-none appearance-none p-2 w-[100%] hover:text-[#47A5E4] bg-[#E6E6E6] text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
                    id="12th"
                    name="selectoption"
                    // value={selectoption}
                    // onChange={handleInputChange}
                    //onBlur={validateOne}
                    tabIndex={1}

                  >
                    <option className="">Semester 1</option>
                    {options.map((option, index) => {
                      return (
                        <option key={index}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1 right-2 flex items-center justify-center ">
                    <span className="text-[20px] text-black  "><FaSortDown /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-2  items-center justify-center">
            <div>
              <div className="py-4 flex items-center justify-center">
                <table className=" ">
                  <tr className="text-center ">
                    <th className="border-r-[1px]  w-[321px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Subjects
                    </th>
                    <th className="border-r-[1px] w-[176px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Course Credit
                    </th>

                    <th className="border-r-[1px] w-[176px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Grade
                    </th>
                  </tr>

                  <tr className="">
                    <th>
                      <div className="  table-auto1 w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        computer
                      </div>
                    </th>
                    <th>
                      <div className=" table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        CB012
                      </div>
                    </th>

                    <th>
                      <div className=" table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        A+
                      </div>
                    </th>
                  </tr>

                  <tr className="">
                    <th>
                      <div className="   w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        computer
                      </div>
                    </th>
                    <th>
                      <div className="  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        CB012
                      </div>
                    </th>

                    <th>
                      <div className="  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        A+
                      </div>
                    </th>
                  </tr>
                  <tr className="">
                    <th>
                      <div className="  table-auto1 w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        computer
                      </div>
                    </th>
                    <th>
                      <div className=" table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        CB012
                      </div>
                    </th>

                    <th>
                      <div className=" table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        A+
                      </div>
                    </th>
                  </tr>
                  <tr className="">
                    <th>
                      <div className="   w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        computer
                      </div>
                    </th>
                    <th>
                      <div className="  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        CB012
                      </div>
                    </th>

                    <th>
                      <div className="  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        A+
                      </div>
                    </th>
                  </tr>

                  <tr className="">
                    <th>
                      <div className="  table-auto1 w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        computer
                      </div>
                    </th>
                    <th>
                      <div className="p-3 table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        CB012
                      </div>
                    </th>

                    <th>
                      <div className=" table-auto1 w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        A+
                      </div>
                    </th>
                  </tr>
                  <tr className="">
                    <th>
                      <div className="  w-[ 379px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        computer
                      </div>
                    </th>
                    <th>
                      <div className="  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        CB012
                      </div>
                    </th>

                    <th>
                      <div className="  w-[179px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                        A+
                      </div>
                    </th>
                  </tr>
                  <tr className="text-center ">
                    <th className="border-r-[1px]  w-[321px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Total Credit
                    </th>
                    <th className="border-r-[1px] w-[176px] h-[45px] bg-[#16376E] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">

                    </th>


                  </tr>



                </table>


              </div>
            </div>

            <div>
              <div className=" ">
                <div className="py-2" >
                  <h2 className="text-[color:var(--02,#16376E)] text-[18px] font-inter not-italic font-bold leading-[21.78px] tracking-[2px]">

                    Remarks
                  </h2>
                </div>
                <div className="flex space-x-5 items-center justify-center py-2">
                  <div>
                    <h1 className="text-[14px] font-semibold font-Poppins leading-[21px] tracking-[2%] ">Grading<br /> Scheme</h1>
                  </div>


                  <div>
                    <h1 className="text-[14px] font-semibold font-Poppins leading-[21px] tracking-[2%]  ">Percentage <br /> According to Grade </h1>
                  </div>
                  <div>
                    <h1 className="text-[14px] font-semibold font-Poppins leading-[21px] tracking-[2%]  ">Grade<br /> Points</h1>
                  </div>
                </div>

                <div className="flex space-x-10 items-center justify-center py-[5px]">



                  <div className="  w-[90px]  text-[#47A5E4]  text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    A+
                  </div>

                  <div className="  w-[90px]  text-[#47A5E4] text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    90-100
                  </div>

                  <div className=" w-[80px]  text-[#101010] text-center text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%]">
                    10
                  </div>


                </div>


                <div className="flex space-x-10 items-center justify-center py-[5px]">
                  <div className="  w-[90px]  text-[#47A5E4]  text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    A+
                  </div>

                  <div className=" w-[90px] text-[#47A5E4] text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    80-89
                  </div>

                  <div className=" w-[80px] text-[#101010] text-center text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%]">
                    9
                  </div>


                </div>

                <div className="flex space-x-10 items-center justify-center  py-[5px]">
                  <div className="  w-[90px] text-[#47A5E4]  text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    A-
                  </div>

                  <div className="  w-[90px] text-[#47A5E4] text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    70-79
                  </div>

                  <div className=" w-[80px]  text-[#101010] text-center text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%]">
                    8
                  </div>

                </div>
                <div className="flex space-x-10 items-center justify-center  py-[5px]">
                  <div className="   w-[90px] text-[#47A5E4]  text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    B+
                  </div>

                  <div className="  w-[90px] text-[#47A5E4] text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    60-69
                  </div>

                  <div className=" w-[80px]  text-[#101010] text-center text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%]">
                    7
                  </div>


                </div>
                <div className="flex space-x-10 items-center justify-center  py-[5px]">
                  <div className="  w-[90px]  text-[#47A5E4]  text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    B-
                  </div>

                  <div className=" w-[90px]  text-[#47A5E4] text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    50-59
                  </div>

                  <div className=" w-[80px]  text-[#101010] text-center text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%]">
                    6
                  </div>

                </div>
                <div className="flex space-x-10 items-center justify-center  py-[5px]">
                  <div className="  w-[90px]  text-[#47A5E4]  text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    B-
                  </div>

                  <div className=" w-[90px] text-[#47A5E4] text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    40-49
                  </div>

                  <div className="  w-[80px] text-[#101010] text-center text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%]">
                    5
                  </div>

                </div>
                <div className="flex space-x-10 items-center justify-center  py-[5px]">
                  <div className="  w-[90px] text-[#47A5E4]  text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    F+
                  </div>

                  <div className=" w-[90px]  text-[#47A5E4] text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%] ">
                    40
                  </div>

                  <div className=" w-[80px]  text-[#101010] text-center text-[18px] font-semibold font-Poppins leading-[27px] tracking-[2%]">
                    0
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* =============================== */}
          <div className="flex items-center justify-center px-2 py-2">
            <button
              type="button"
              class="text-white text-[16px] font-inter    bg-[#16376E] rounded-[5px]  font-bold w-[100%] py-2 mb-2 leading-[19.36px] tracking-[2%] capitalize"
            >
              Current Semester Performance
            </button>
          </div>

        </form>
      </div>
    </>
  );
};

export default MentorSecondResults;
