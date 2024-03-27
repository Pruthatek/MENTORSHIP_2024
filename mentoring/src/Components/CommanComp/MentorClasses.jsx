import React, { useEffect, useState, useContext } from 'react'
import { mentoringDataContext } from '../../Context/mentoringDataContext';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
function MentorClasses() {


  const navigation = useNavigate();


  const { dataM, setDataM } = useContext(mentoringDataContext);
  const [departmentData, setDepartmentData] = useState([]);


  async function mentorApi() {

    const formdata = new FormData();
    formdata.append("college", dataM.collegeName);
    formdata.append("department", dataM.department_title);

    axios({
      url: process.env.REACT_APP_SERVER + "/api/mentors/",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formdata
    })

      .then(async (res) => {

        let a = JSON.parse(`${res.data.data}`);
        let b = [...a];
        return b;
      })
      .then((e) => {

        setDepartmentData(e);
      })
      .catch((err) => {
        console.log(err);
      });

  }


  useEffect(() => {
    mentorApi();
  }, []);





  function mentorDataHandle(data) {

    if (dataM.loggedBy == "principal") {

      setDataM({ ...dataM, ...data });

      let tempLink = dataM.principalStatus;
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

        default:
          break;
      }
    }
    else if (dataM.loggedBy == "chairman") {

      setDataM({ ...dataM, ...data });

      let tempLink = dataM.chairmanStatus;
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

        default:
          break;
      }
    }
    else if (dataM.loggedBy == 'hod') {
      setDataM({ ...dataM, ...data });

      let tempLink = dataM.hodStatus;
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

        default:
          break;
      }
    }

    let tempLink = dataM.hodStatus;





  }


  return (
    <>
      <div className="pl-2  w-full">
        {/* bg-[#F9FAFA] */}
        <div className=" rounded-[6px] py-5 w-full shadow-lg border-[1px] border-[#dfdfdf]   bg-gradient-to-br from-[#ffffff] via-[#ffffffce] to-[#e6e6e61c]   ">

          <div className="py-5 px-8 w-full
          ">
            <h1 onClick={() => {
              console.log(dataM);
            }} className="font-Raleway text-[#47A5E4] text-center text-[20px] font-bold leading-[23.48px] tracking-[5.5%]">
              Classes Of Computer Engineering{" "}
            </h1>
          </div>


          {/* =======================second row ===================== */}

          <div className="relative px-2 py-10 w-full">
            <div className="grid grid-cols-3  gap-2 gap-y-20 items w-full-center justify-center">
              {departmentData.map((value, index) => {

                return (


                  <div className=" " key={index}>
                    <a onClick={() => mentorDataHandle({
                      "nameOfMentor": value.fields.name, "emailOfMentor": value.fields.email, "noOfStudentsinDiv": value.fields.
                        number_of_students, "nameOfDiv": value.fields.mentoring_class
                    })}>
                      <div className="border w-[22rem] h-[6.8rem] rounded-[11px] bg-[#FFF] shadow-[rgba(200,200,200,0.25)_0px_4px_24px_0px]">
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
                          <div className=" relative  ">
                            <span className={'' + "absolute top-[4.5rem] right-[9rem] text-[#FFF] text-[14px]"}>
                              idon't know
                            </span>
                            <div>
                              <span className="font-Inter text-[1rem] not-italic font-bold text-[#101010] leading-normal">
                                Mentor :
                              </span>
                              <span className="font-Inter text-[1rem] not-italic font-medium text-[#101010] leading-normal">
                                {value.fields.name}
                              </span>
                            </div>
                            <div>
                              <span className="font-Inter text-[0.8rem] not-italic font-medium leading-normal">
                                {value.fields.email}
                              </span>

                            </div>
                            {/* line */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="220" height="10" viewBox="0 0 271 2" fill="none">
                              <path d="M1.06738 1L269.567 1.5" stroke="#D9D9D9" stroke-linecap="round" stroke-dasharray="3 3" />
                            </svg>

                            <div>
                              <span className="font-Inter text-[1rem] not-italic font-bold text-[#101010] leading-normal">
                                CC :
                              </span>
                              <span className=" p-1 font-Inter text-[1rem] not-italic font-medium text-[#101010] leading-normal">
                                mentor Name..
                              </span>
                            </div>
                            <div>

                              <span className="font-Inter text-[0.8rem] not-italic font-medium leading-normal text-[#101010]">
                                mentor email..
                              </span>
                            </div>
                          </div>


                        </div>
                        {/* msg */}
                        <div className="pl-4 ">
                          <div>
                            <button className={'' + 'bg-[#FFC2C2] border px-6 text-center rounded-[10px] text-[#FF0000]'}>All Done</button>
                          </div>

                        </div>

                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          {/* =====================end ============================= */}
        </div>
      </div>
    </>
  )
}

export default MentorClasses
