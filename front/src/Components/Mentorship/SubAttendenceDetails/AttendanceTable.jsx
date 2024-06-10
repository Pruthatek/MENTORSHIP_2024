import React, { useEffect, useContext, useState } from 'react'
import { useLocation } from "react-router-dom"
import fireDb from "../../firebase"
import { toast } from 'react-toastify';
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from "react-router-dom"
import { FaSortDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';
import { mentoringDataContext } from '../../Context/mentoringDataContext';
const AttendanceTablementor = ({ handleNextStep }) => {
  
  const { dataM, setDataM } = useContext(mentoringDataContext);
  const [localStorageData, setLocalStorageData] = useState({});
  
  const [data, setData] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  
  const [studentData, setStudentData] = useState([]);
  
  
  function studentDataApi() {
    let mentor = localStorage.getItem('nameOfMentor');
    const formData = new FormData();
    formData.append("mentor", mentor);
    formData.append("semester", 1);


    axios({
      url: process.env.REACT_APP_SERVER + "/api/studentsmentor/",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then(async (res) => {


        let a = JSON.parse(`${res.data.data}`);
        let b = [...a];
        return b;
      })
      .then((e) => {
        setStudentData(e);
        setFilteredData(e);


      })
      .catch((err) => {
        console.log(err);
      });

  }
  useEffect(() => {
    studentDataApi();


  }, []);






  const options = [
    '1', "2", "3", "4", "5", "6", "7", "8"
  ];


  const onOptionChangeHandler = (event) => {
    setData(event.target.value);

    setStudentData([]);

    function studentDataApi() {
      let mentor = localStorage.getItem('nameOfMentor');
      const formData = new FormData();
      formData.append("mentor", mentor);
      formData.append("semester", event.target.value);


      axios({
        url: process.env.REACT_APP_SERVER + "/api/studentsmentor/",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      })
        .then(async (res) => {


          let a = JSON.parse(`${res.data.data}`);
          let b = [...a];
          return b;
        })
        .then((e) => {
          setStudentData(e);
          setFilteredData(e);


        })
        .catch((err) => {
          console.log(err);
        });

    }
    studentDataApi();
  };





  //search Mentoring table

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);



    const newFilteredData = studentData.filter(id => {
      let a = id.fields.name;
      let b = id.fields.enrollment;
      if (a.toLowerCase().includes(term.toLowerCase()) || b.toString().includes(term)) {
        return true
      }

    }
    );

    setFilteredData(newFilteredData);
  };



  function onStudentAttendenceClick(e) {

    localStorage.setItem("studentName", e.name);

    // localStorage.setItem("address", e.address);
    // localStorage.setItem("attendence", e.attendence);
    // localStorage.setItem("caste", e.caste);
    // localStorage.setItem("city", e.city);
    // localStorage.setItem("cpi", e.cpi);
    // localStorage.setItem("department", e.department);
    // localStorage.setItem("diploma", e.diploma);
    // localStorage.setItem("division", e.division);
    // localStorage.setItem("email", e.email);
    // localStorage.setItem("enrollment", e.enrollment);
    // localStorage.setItem("father_contact", e.father_contact);
    // localStorage.setItem("father_name", e.father_name);
    // localStorage.setItem("father_occupation", e.father_occupation);
    // localStorage.setItem("father_photo", e.father_photo);
    // localStorage.setItem("fees_paid", e.fees_paid);
    // localStorage.setItem("fees_unpaid", e.fess_unpaid);
    // localStorage.setItem("gender", e.gender);
    // localStorage.setItem("height", e.height);
    // localStorage.setItem("hobbies", e.hobbies);
    // localStorage.setItem("mentor_name", e.mentor_name);
    // localStorage.setItem("mentoring_started_year", e.mentoring_started_year);
    // localStorage.setItem("mother_contact", e.mother_contact);
    // localStorage.setItem("mother_name", e.mother_name);
    // localStorage.setItem("mother_occupation", e.mother_occupation);
    // localStorage.setItem("mother_photo", e.mother_photo);
    // localStorage.setItem("nationality", e.nationality);
    // localStorage.setItem("overall_10th", e.overall_10th);
    // localStorage.setItem("overall_12th", e.overall_12th);
    // localStorage.setItem("pincode", e.pincode);
    // localStorage.setItem("spi", e.spi);
    // localStorage.setItem("sport", e.sport);
    // localStorage.setItem("state", e.state);
    // localStorage.setItem("student_contact", e.student_contact);
    // localStorage.setItem("student_photo", e.student_photo);
    // localStorage.setItem("study_semester", e.study_semester);
    // localStorage.setItem("weight", e.weight);


  }
  return (
    <>
      <div className='w-full px-2'>

        <div className="  py-3 px-2 rounded-lg p-10   bg-white ">
          <div className="   ">
            <div className="flex flex-row justify-between items-center px-5">
              <div className="flex flex-row justify-center items-center">
                <label
                  for="Semester"
                  className="   py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
                >
                  Semester :{" "}
                </label>
                <div className="flex justify-center relative min-w-[198px] px-1 h-[40px]">
                  <select onChange={(e) => onOptionChangeHandler(e)} className=" px-9 rounded-[5px] border-none appearance-none p-2 w-[100%] hover:text-[#47A5E4] bg-[#E6E6E6] text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
                    id="12th"
                    name="selectoption"

                    tabIndex={1}

                  >

                    {options.map((option, index) => {
                      return (
                        <option key={index}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
                    <span className="text-[20px] text-black  "><FaSortDown /></span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center  items-center">
                <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
                  All Students Of Class
                </h2>
              </div>
              <div className="flex justify-end  ">
                <div className="flex flex-row justify-center items-center">
                  <input

                    type="text"
                    id="searchInput"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search" className=" bg-[#F3F3F3] rounded-[5px] px-7 py-1.5 focus:outline-[#47A5E4] border-[1px] border-grey " />
                  <div className="relative right-10 "><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.1615 0C12.4257 0 15.8826 3.42502 15.8826 7.65C15.8826 9.45606 15.2509 11.1159 14.1945 12.4246L17.3471 15.549C17.6821 15.8809 17.6821 16.4191 17.3471 16.751C17.0378 17.0575 16.5512 17.081 16.2147 16.8218L16.1338 16.751L12.9805 13.6275C11.6596 14.6741 9.98434 15.3 8.1615 15.3C3.89727 15.3 0.44043 11.875 0.44043 7.65C0.44043 3.42502 3.89727 0 8.1615 0ZM8.16151 1.70007C4.84489 1.70007 2.15623 4.36398 2.15623 7.65007C2.15623 10.9362 4.84489 13.6001 8.16151 13.6001C11.4781 13.6001 14.1668 10.9362 14.1668 7.65007C14.1668 4.36398 11.4781 1.70007 8.16151 1.70007Z" fill="#211F3B" />
                  </svg></div>
                </div>

              </div>
            </div>

            {/* TABLE */}
            <div className='px-6 py-5'>
              <div className=' flex justify-center items-center border border-[color:var(--01,#16376E)] rounded-[2px_2px_0px_0px] border-solid bg-[#16376E] py-2.5 '>
                <h2 className='text-white text-[18px] font-inter not-italic font-bold leading-[normal] tracking-[0.36px] uppercase'>attendance 5th-ce-d Semester -1 </h2>
              </div>

              <section className="relative  w-[100%] ">

                <section className=" capitalize ">
                  <div className="  w-[100%] bg-white ">
                    <table className="table-auto1 table-auto min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden  border-collapse  ">
                      <thead id="table_fixed">
                        <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#47A5E4] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                          {" "}
                          <th className="px-[2.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                            <p className=" text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">Enrollment No</p>
                          </th>
                          <th className="px-[12rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                            <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Full Name</p>
                          </th>
                          <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                            <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">All Over Attendance</p>
                          </th>
                          <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                            <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Monthly</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody className=''>
                        {filteredData.map((id, index) => {
                          return (
                            <tr onClick={() => onStudentAttendenceClick(id.fields)}
                              key={index}
                              className="table-auto text-sm  h-[55px] rounded-lg py-3 px-3 transition-all duration-300  "
                            // key={index}
                            >
                              <td className="border-[2px] border-[#47A5E4] px-[1rem] whitespace-nowrap">
                                <div className="">
                                  <div className="text-center  text-black text-[16px]  font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                    {id.fields.enrollment}
                                  </div>
                                </div>
                              </td>
                              <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                                <div className="">
                                  <a href={id.path}>
                                    <div className="  text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                                      {/* {localStorage.getItem('Full Name')
                        ? localStorage.getItem('Full Name')
                        : "Raj Maheta"
                        } */}
                                      {id.fields.name}
                                      {/* {data[id1].fullname} */}
                                    </div>
                                  </a>
                                </div>
                              </td>
                              <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                                <div className="">
                                  <div className="text-center text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                                    {id.fields.attendence}
                                  </div>
                                </div>
                              </td>
                              <td className="px-[1.2rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                                <div className="">
                                  <div className="text-center text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                                    {id.fields.attendence}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceTablementor;
