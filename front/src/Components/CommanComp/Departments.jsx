import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSortDown } from 'react-icons/fa';
import { mentoringDataContext } from '../../Context/mentoringDataContext';

function Departments() {

  const [selectedOption, setSelectedOption] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState({});

  let navigation = useNavigate();

  const [departmentData, setDepartmentData] = useState([]);


  const { dataM, setDataM, PagesHandler, setPagesHandler, loggedUserInfo } = useContext(mentoringDataContext);


  async function departmentApi() {
    axios({
      url: process.env.REACT_APP_SERVER + `/faculty/getAnyStructures?college=${PagesHandler?.collegeName}&department=all`,
      method: "GET",
    })
      .then(async (res) => {

        setDepartmentData([...res.data?.data]);
        setisLoading(true)
      })
      .catch((err) => {
        console.log(err);
        setisLoading(true)
      });

  }


  useEffect(() => {

    if (PagesHandler.collegeName) {
      departmentApi();
    }
    else {

    }

  }, [])





  function departmentClicked(e) {

    setPagesHandler({
      ...PagesHandler,
      DepartmentName: e.departmentName

    })

    switch (loggedUserInfo.facultyType) {
      case "chairman":

        navigation('/Chairman/MentorsOfClasses');
        break;
      case "principal":

        navigation('/Principal/MentorsOfClasses');
        break;
      case "hod":

        break;
      case "mentor":

        break;

      default:
        break;
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
          <div className=' flex justify-between  items-start flex-col p-5  w-full h-full bg-white  rounded-lg'>

            {
              isLoading ? <>
                {/* buttons and filters start */}

                <div className='  w-full   flex justify-between items-start'>

                </div>
                {/* buttons and filters end */}

                {/* departmensts section  start*/}
                <div className=' h-full  pt-8 w-full'>
                  <div className=' relative   h-full '>
                    <div className=' h-full absolute overflow-auto   w-full flex  flex-wrap gap-8 gap-y-14 px-12  '>


                      {!departmentData.length == 0 ? <>  {
                        departmentData.map((value, index) => {
                          return (
                            <div className="  " key={index} >
                              <a onClick={() => departmentClicked(value)}>
                                <div className="  relative w-[22rem]    border-[1px] border-[#a7a7a71f] rounded-[11px] bg-[#FFF] transition-all duration-300 shadow-[rgba(200,200,200,0.25)_0px_4px_24px_0px]">
                                  <div className="flex gap-2  ">
                                    {/* img */}

                                    <div className="relative ">
                                      <img src="/static/img/Rectanglehod.png" className="w-[100%] h-auto" alt="image" />
                                      <div className="  ">
                                        <span className="absolute top-[0.5rem] right-[2.5rem]  text-white text-[20px] font-bold leading-[84.72px] tracking-[2%] ">
                                          d
                                        </span>
                                      </div>
                                    </div>


                                    <div className=" py-1 ">
                                      <span className=" font-Inter text-[1rem] not-italic font-bold text-[#101010] leading-normal  ">
                                        {value?.departmentName}
                                      </span>
                                      <div className=' w-full flex flex-row justify-start items-center  overflow-hidden'>
                                        <span className="font-Inter w-fit text-[0.8rem] not-italic font-bold text-[#101010] leading-normal">
                                          HOD :
                                        </span>
                                        <span className="p-1  line-clamp-1 font-Inter text-[0.9rem] not-italic font-medium text-[#101010] leading-normal">
                                          <>
                                            {value?.hodDetails ? <>{value?.hodDetails?.surname} {value?.hodDetails?.facultyName}</> : "No Hod Linked"}
                                          </>

                                        </span>
                                      </div>
                                      <div>
                                        <span className="font-Inter text-[0.8rem] not-italic font-bold text-[#101010] leading-normal">
                                          HOD Email :
                                        </span>
                                        <span className="p-1  font-Inter text-[0.9rem] not-italic font-medium text-[#101010] leading-normal">
                                          {value?.hodDetails?.email}
                                        </span>
                                      </div>

                                      <div>
                                        <span className="  font-Poppins tracking-wide text-[0.8rem] not-italic font-bold text-[#101010] leading-normal">
                                          Semister :
                                        </span>
                                        <span className="p-1 font-Inter text-[0.9rem] not-italic font-medium text-[#101010] leading-normal">
                                          {value?.noOfSemOfDepartment}
                                        </span>
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
                          )
                        })
                      }</> : <>no data</>}

                    </div>

                  </div>
                </div>
                {/* departmensts section end */}

              </> : <>
                <div className=' w-full flex-col gap-7 h-full flex justify-center items-center'>

                  <div className="loader animate-spin   "></div>
                  <p className=' font-Poppins tracking-wide  animate-pulse text-lg text-[#47A5E4]'>Featching Data, Please wait...</p>
                </div>

              </>
            }


          </div>

        </div>
      </div>
    </>
  )
}

export default Departments;

