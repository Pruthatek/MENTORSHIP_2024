import React, { useEffect, useState, useContext } from 'react'
import { mentoringDataContext } from '../../Context/mentoringDataContext';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
function MentorClasses() {


  const navigation = useNavigate();


  const { dataM, setDataM, PagesHandler, setPagesHandler, NavigationFlow, loggedUserInfo, setNavigationFlow } = useContext(mentoringDataContext);
  const [departmentData, setDepartmentData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  async function mentorApi() {


    axios({
      url: process.env.REACT_APP_SERVER + `/faculty/getAnyStructures?college=${PagesHandler?.collegeName}&department=${PagesHandler?.DepartmentName}&division=all`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

    })

      .then(async (res) => {

        console.log("mentor class", res.data.data)
        setDepartmentData([...res.data.data])
        setisLoading(true)

      })
      .catch((err) => {
        console.log(err);
        setisLoading(true)
      });

  }


  useEffect(() => {
    mentorApi();
  }, []);





  function mentorDataHandle(data) {

    setPagesHandler({
      ...PagesHandler,
      subDivisionName: data.subDivisionName,
      departmentId: data.department._id,
      subDivisionId: data._id
    })



    let tempLink = NavigationFlow?.MainNavigation


    if (loggedUserInfo.facultyType == "principal") {

      switch (tempLink) {
        case "Home":
          navigation('/Principal/MentorForm');
          break;
        case "Attendance":
          navigation('/Principal/attendanceprinciple/Attendence');
          break;
        case "Results":
          navigation('/Principal/resultspriciple/Results');
          break;
        case "Fees Details":
          navigation('/Principal/feesprinciple/FeesDetails');
          break;
        case "Passout Students":
          navigation('/Principal/passoutStudentP/passoutStudentDetails');
          break;
        default:

          break;
      }
    }
    else if (loggedUserInfo.facultyType == "chairman") {

      switch (tempLink) {
        case "Home":
          navigation('/Chairman/MentorForm');
          break;
        case "Attendance":
          navigation('/Chairman/attendenceChairman/Attendence');
          break;
        case "Results":
          navigation('/Chairman/resultChairman/Results');
          break;
        case "Fees Details":
          navigation('/Chairman/fessChairman/FeesDetails');
          break;
        case "Passout Students":
          navigation('/Chairman/passoutStudent/passoutStudentDetails');
          break;

        default:

          break;
      }
    }
    else if (loggedUserInfo.facultyType == 'hod') {

      switch (tempLink) {
        case "Home":
          navigation('/Hod/MentorForm');
          break;
        case "Attendance":
          navigation('/Hod/attendancehod/Attendence');
          break;
        case "Results":
          navigation('/Hod/resultshod/Results');
          break;
        case "Fees Details":
          navigation('/Hod/feeshod/FeesDetails');
          break;
        case "Passout Students":
          navigation('/Hod/passoutStudentH/passoutDetailsH');
          break;

        default:

          break;
      }
    }







  }


  return (
    <>
      <div className=' pl-[5px]  flex justify-between items-start flex-col  w-full h-full'>
        <div className="  px-5  text-gray-900 text-[14px] w-full flex flex-row justify-end items-center gap-2">
          <div className=' flex gap-2'>

            <p className=" font-Poppins tracking-wider leading-[21px] font-semibold">Last Login</p> <span className=" font-Poppins">2:00 PM, Sunday 15 Oct 2023</span>
          </div>

        </div>

        <div className=' h-full w-full '>
          <div className=' flex justify-between items-start flex-col p-5  w-full h-full bg-white  rounded-lg'>

            <div className='  w-full py-5   flex justify-center items-start'>
              <h1 onClick={() => {
                console.log(departmentData);
              }} className="font-Raleway text-[#47A5E4] text-center text-[20px] font-bold leading-[23.48px] tracking-[5.5%]">
                Classes Of Computer Engineering{" "}
              </h1>

            </div>


            {
              isLoading ? <>   <div className=' h-full  pt-8 w-full'>
                <div className=' relative   h-full '>
                  <div className=' h-full absolute overflow-auto   w-full flex  flex-wrap gap-8 gap-y-14 px-12  '>


                    {!departmentData.length == 0 ? <> {departmentData.map((value, index) => {
                      return (
                        <div className=" " key={index}>
                          <a onClick={() => mentorDataHandle(value)}>
                            <div className="border-[1px] relative border-[#9a9a9a2a] w-[22rem] h-[6.8rem] rounded-[11px] bg-[#FFF] shadow-[rgba(200,200,200,0.25)_0px_4px_24px_0px]">
                              <div className="flex ">
                                {/* img */}
                                <div className=" ">
                                  <img src='/static/img/Rectanglehod.png' className="w-[100%] h-auto" alt="image" />
                                </div>

                                <div className=" relative ">
                                  <span className="absolute top-[0.5rem] right-[3rem]  text-white text-[20px] font-bold leading-[84.72px] tracking-[2%] ">
                                    AB
                                  </span>
                                </div>


                                <div className=" relative    pl-3 py-0 ">
                                  <div>
                                    {/* mentor name */}
                                    <div className=' '>
                                      <span className="font-Inter text-[1rem] not-italic font-bold text-[#101010]  ">
                                        Mentor :
                                      </span>
                                      <span className="font-Inter line-clamp-1 pl-2 text-[1rem] not-italic font-medium text-[#101010]  ">
                                        {value?.mentorId?.surname} {value?.mentorId?.facultyName}
                                      </span>
                                    </div>

                                    <div>
                                      <span className="font-Inter text-[0.8rem] not-italic font-medium  ">
                                        {value?.mentorId?.email}
                                      </span>
                                    </div>


                                  </div>


                                  {/* middle */}
                                  <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="10" viewBox="0 0 271 2" fill="none">
                                      <path d="M1.06738 1L269.567 1.5" stroke="#D9D9D9" stroke-linecap="round" stroke-dasharray="3 3" />
                                    </svg>
                                  </div>



                                  {/* third */}
                                  <div className=' flex flex-col justify-start items-start gap-0'>

                                    {/* mentor Name */}
                                    <div className=' flex flex-row justify-center items-center gap-2'>
                                      <p className="font-Inter text-[1rem] not-italic font-bold text-[#101010] ">
                                        CC :
                                      </p>
                                      <p className=" line-clamp-1 pl-1 font-Inter text-[1rem] not-italic font-medium text-[#101010] ">
                                        {value?.mentorId?.surname} {value?.mentorId?.facultyName}
                                      </p>
                                    </div>


                                  </div>



                                </div>


                              </div>
                              {/* msg */}
                              <div className=" font-Inter   absolute -bottom-7 flex justify-center items-center w-full  ">
                                <div className=' w-full flex font-semibold justify-center items-center'>

                                  {
                                    value?.thisMonthMentoringStatus == true ?
                                      <>
                                        <button className={'' + "bg-[#bbffc6] w-[90%]   pt-1 py-[0px] px-6 text-center rounded-b-[15px] text-[#297926]"}>
                                          <li>All Done </li>
                                        </button>
                                      </>
                                      :
                                      <>
                                        <button className={'' + "bg-[#FFC2C2] w-[90%]   pt-1 py-[0px] px-6 text-center rounded-b-[15px] text-[#FF0000]"}>
                                          <li>Not Done </li>
                                        </button>
                                      </>
                                  }




                                </div>

                              </div>

                            </div>
                          </a>
                        </div>
                      );
                    })}</> : <>
                      <h1>No Data To show</h1>
                    </>}



                  </div >

                </div >
              </div ></> : <>
                <div className=' w-full flex-col gap-7 h-full flex justify-center items-center'>

                  <div className="loader animate-spin   "></div>
                  <p className=' font-Poppins tracking-wide  animate-pulse text-lg text-[#47A5E4]'>Featching Data, Please wait...</p>
                </div>

              </>
            }





          </div >
        </div>










      </div >
    </>
  )
}

export default MentorClasses
