import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSortDown } from 'react-icons/fa';
import { mentoringDataContext } from '../../Context/mentoringDataContext';

function Departments() {

  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState({});

  let navigation = useNavigate();

  const [departmentData, setDepartmentData] = useState([]);


  const { dataM, setDataM } = useContext(mentoringDataContext);


  async function departmentApi() {

    const formData = new FormData();
    formData.append("college", dataM.collegeName);

    axios({
      url: process.env.REACT_APP_SERVER + "/api/department/",
      method: "POST",
      data: formData
    })
      .then(async (res) => {
        let a = JSON.parse(`${res.data.data}`);
        let b = [...a]
        return b;
      })
      .then((e) => {

        console.log(e);
        setDepartmentData(e);

      })
      .catch((err) => {
        console.log(err);
      });
  }


  useEffect(() => {
    departmentApi();
  }, [])



  const options = [
    "2021", "2022", "2023", "2024",
  ];
  const options2 = [
    "Semester 2", "Semester 3", "Semester 4",
  ];
  const options3 = [
    "MCA", "BCA", "MCA",
  ];

  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
  };




  function redirectToDepartment(e) {


    setDataM({ ...dataM, ...e })
    if (dataM.loggedBy == "principal") {

      navigation('/Principal/MentorsOfClasses');
    }
    else if (dataM.loggedBy == "chairman") {
      navigation('/Chairman/MentorsOfClasses');

    }

  }

  return (
    <>
      <div className='px-2 w-full'>
        <div className=" rounded-[6px]  py-5 overflow-y-auto  bg-[#FFF]  ">
          {/* section 1 */}
          <div className="flex justify-between  mx-auto px-4">
            {/* ==========year============= */}
            <div className="flex gap-2 ">

              <label className="py-2 font-Poppins text-[16px] not-italic font-semibold leading-normal text-[#101010]">
                Year
              </label>

              <div className="flex justify-center relative min-w-[120px] px-1 h-[40px]">
                <select onChange={onOptionChangeHandler} className="focus:outline-none  pl-5 rounded-[5px] border-none appearance-none p-2 w-[100%]  text-white text-[18px]  font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize bg-[#47A5E4] "
                  id="12th"
                  name="selectoption"
                  // value={selectoption}
                  // onChange={handleInputChange}
                  //onBlur={validateOne}
                  tabIndex={1}

                >
                  <option className="">2020</option>
                  {options.map((option, index) => {
                    return (
                      <option key={index}>
                        {option}
                      </option>
                    );
                  })}
                </select>
                <div className="icon-container pointer-events-none w-[20px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
                  <span className="text-[20px] text-white  "><FaSortDown /></span>
                </div>
              </div>
            </div>

            {/* ===========year end =========== */}


            {/* ==========Semester============= */}
            <div className="flex gap-2 ">

              <label className="py-2 font-Poppins text-[16px] not-italic font-semibold leading-normal text-[#101010]">
                Semester
              </label>
              <div className="flex justify-center relative min-w-[170px] px-1 h-[40px]">
                <select onChange={onOptionChangeHandler} className=" focus:outline-none pl-5 rounded-[5px] border-none appearance-none p-2 w-[100%]  text-white text-[18px]  font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize bg-[#47A5E4] "
                  id="12th"
                  name="selectoption"

                  tabIndex={1}

                >
                  <option className="">Semester 1</option>
                  {options2.map((option, index) => {
                    return (
                      <option key={index}>
                        {option}
                      </option>
                    );
                  })}
                </select>
                <div className="icon-container pointer-events-none w-[20px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
                  <span className="text-[20px] text-white  "><FaSortDown /></span>
                </div>
              </div>

            </div>

            {/* ===========Semester1 end =========== */}

            {/* ==========Department============= */}



          </div>

          {/* section 2 */}
          <div className="relative px-2 py-10">
            <div className="grid grid-cols-3  gap-2 gap-y-20 items-center justify-center">
              {
                departmentData.map((value, index) => {
                  console.log(value.fields)
                  return (
                    <div className=" " key={index} >
                      <a onClick={() => redirectToDepartment(value.fields)}>
                        <div className="border w-[22rem] h-[6.8rem] rounded-[11px] bg-[#FFF] shadow-[rgba(200,200,200,0.25)_0px_4px_24px_0px]">
                          <div className="flex ">
                            {/* img */}
                            <div className=" ">
                              <img src="/static/img/Rectanglehod.png" className="w-[100%] h-auto" alt="image" />
                            </div>

                            <div className=" relative ">
                              <span className="absolute top-[0.5rem] right-[2.5rem]  text-white text-[20px] font-bold leading-[84.72px] tracking-[2%] ">
                                d
                              </span>
                            </div>
                            <div className=" ">
                              <span className=" font-Inter text-[1rem] not-italic font-bold text-[#101010] leading-normal  ">
                                {value.fields.department_title}
                              </span>
                              <div>
                                <span className="font-Inter text-[0.8rem] not-italic font-bold text-[#101010] leading-normal">
                                  HOD :
                                </span>
                                <span className="p-1  font-Inter text-[0.7rem] not-italic font-medium text-[#101010] leading-normal">
                                  {value.fields.department_hod_name}
                                </span>
                              </div>
                              <div>
                                <span className="font-Inter text-[0.8rem] not-italic font-bold text-[#101010] leading-normal">
                                  HOD Email :
                                </span>
                                <span className="p-1  font-Inter text-[0.7rem] not-italic font-medium text-[#101010] leading-normal">
                                  Here email of hod
                                </span>
                              </div>

                              <div>
                                <span className="font-Inter text-[0.8rem] not-italic font-bold text-[#101010] leading-normal">
                                  Semister :
                                </span>
                                <span className="p-1 font-Inter text-[0.7rem] not-italic font-medium text-[#101010] leading-normal">
                                  {value.fields.number_of_semesters}
                                </span>
                              </div>
                            </div>


                          </div>
                          {/* msg */}
                          <div className="pl-4 my-1">
                            <div>
                              <button className={'' + "bg-[#FFC2C2] border px-6 text-center rounded-[10px] text-[#FF0000]"}>All Done</button>
                            </div>

                          </div>

                        </div>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Departments;