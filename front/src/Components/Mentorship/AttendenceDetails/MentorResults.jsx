import React, { useState, useEffect, useContext } from 'react'
import { FaSortDown } from "react-icons/fa";
import axios from 'axios';
import { mentoringDataContext } from '../../../Context/mentoringDataContext';

function MentorResults() {
  const [data, setData] = useState({});
  let totalMarks = 0;
  let totalObtainmarks = 0;


  const { dataM, setDataM, PagesHandler, setPagesHandler, NavigationFlow, loggedUserInfo, setNavigationFlow, MentorFormData, setMentorFormData } = useContext(mentoringDataContext);

  const [studentData, setStudentData] = useState([]);
  const [examType, setExamType] = useState([]);





  function studentDataApi(semester) {

  
      axios({
        url: process.env.REACT_APP_SERVER + `/students/resultByStudentId/${MentorFormData?._id}/${semester}`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

      })
        .then(async (res) => {


          return res?.data.data
        })
        .then((e) => {
          setStudentData(e);

          if (e?.internal1 == undefined) {
            setExamType([]);
          }
          else {
            setExamType([...e?.internal1])
          }

        })
        .catch((err) => {
          console.log(err);
        });

  }

  useEffect(() => {

    studentDataApi("1");

  }, []);



  const options = [
    "2", "3", "4", "5", "6", "7", "8"
  ];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);

    studentDataApi(event.target.value);

  };


  const onChanageExams = (event) => {

    let temp = event.target.value;
    let prop = temp.toLowerCase();

    switch (prop) {
      case "mid":
        if (studentData?.mid != undefined) {
          setExamType(studentData?.mid)
        }

        break;
      case "internal 1":
        if (studentData?.internal1 != undefined) {
          setExamType(studentData?.internal1)
        }

        break;
      case "internal 2":
        if (studentData?.internal2 != undefined) {
          setExamType(studentData?.internal2)
        }

        break;
      case "internal 3":
        if (studentData?.internal3 != undefined) {
          setExamType(studentData?.internal3)
        }


        break;
      case "external":
        if (studentData?.external != undefined) {
          setExamType(studentData?.external)
        }
        break;

      default:
        break;
    }






  }


  return (
    <>

      <div className='     max-h-[700px]  overflow-y-auto bg-white'>
        <form>
          <div className="flex flex-row justify-between py-5  items-center ">

            <div className="flex">
              <label onClick={() => {
                console.log(examType)
              }}
                for=" Examination"
                className=" px-1  py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Examination :{" "}
              </label>
              <div className="flex flex-row justify-center items-center">
                <div className="flex justify-center relative min-w-[38px] px-1 h-[40px]">
                  <select onChange={onChanageExams} className=" px-12 rounded-[5px] border-none appearance-none p-2 w-[100%] hover:text-[#47A5E4] bg-[#E6E6E6] text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
                    id="12th"
                    name="selectoption"
                    // value={selectoption}
                    // onChange={handleInputChange}
                    //onBlur={validateOne}
                    tabIndex={1}

                  >
                    <option className="">Internal 1</option>
                    <option className="">Internal 2</option>
                    <option className="">Internal 3</option>
                    <option className="">Mid</option>
                    <option className="">External</option>
                  </select>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
                    <span className="text-[20px] text-black  "><FaSortDown /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <label
                for="Semester"
                className=" px-1  py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Semester :{" "}
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
                    <option className="">1</option>
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

          {/* Table  */}
          <div className="relative  w-[100%]">
            <div className=" w-[100%] py-4 flex items-center justify-center relative overflow-x-auto">
              <table className=" ">
                <tr className="text-center ">
                  <th className="border-r-[1px]  w-[550px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Subjects
                  </th>
                  <th className="border-r-[1px] w-[350px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Marks
                  </th>
                  <th className="border-r-[1px] w-[350px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Total Marks
                  </th>

                </tr>

                {examType.length == 0 ? <>
                </> : <>{examType.map((e) => {

                  return (<>
                    <tr className="">
                      <th>
                        <div className=" p-3 table-auto1 w-[ 550px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                          {e?.subjectName}
                        </div>
                      </th>
                      <th>
                        <div className="p-3 table-auto1 w-[350px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                          {e?.marks}
                        </div>
                      </th>
                      <th>
                        <div className="p-3 table-auto1 w-[350px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none">
                          {e?.totalMarks}
                        </div>
                      </th>
                    </tr>
                  </>)
                })}</>

                }


                <tr className="text-center ">
                  <th className="border-r-[1px]  w-[550px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                    Total
                  </th>
                  <th className="border-r-[1px] w-[350px] h-[45px] bg-[#16376E] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[19.36px] tracking-[2%] capitalize">
                    {examType.map((e) => {
                      totalObtainmarks = totalObtainmarks + e.marks;
                    })}
                    {totalObtainmarks}
                  </th>

                  <th className="border-r-[1px] w-[350px] h-[45px] bg-[#16376E] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[19.36px] tracking-[2%] capitalize">
                    {examType.map((e) => {
                      totalMarks = totalMarks + e.totalMarks;
                    })}
                    {totalMarks}
                  </th>

                </tr>
              </table>
            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default MentorResults
