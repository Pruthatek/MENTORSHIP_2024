import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import fireDb from "../../firebase"
import { toast } from 'react-toastify';
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from "react-router-dom"
import { FaSortDown } from "react-icons/fa";
import axios from 'axios';

const ResultTableHod = ({ handleNextStep }) => {



  const [data, setData] = useState({});

  // for api data----------------
  const [studentData, setStudentData] = useState([]);
  const [localStorageData, setLocalStorageData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  
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


  // function getDataOfLocalStorage() {

  //   setLocalStorageData({
  //     "collegeName": localStorage.getItem('collegeName'),
  //     "principalName": localStorage.getItem('principalName'),
  //     "principalEmail": localStorage.getItem('principalEmail'),
  //     "UserName": localStorage.getItem('UserName'),
  //     "userType": localStorage.getItem('userType'),
  //     "hodName": localStorage.getItem('hodName'),
  //     "departmentName": localStorage.getItem('departmentName'),
  //     "noOfSemister": localStorage.getItem('noOfSemister'),
  //     "nameOfMentor": localStorage.getItem("nameOfMentor"),
  //     "emailOfMentor": localStorage.getItem("emailOfMentor"),
  //     "noOfStudentsinDiv": localStorage.getItem("noOfStudentsinDiv"),
  //     "nameOfDiv": localStorage.getItem("nameOfDiv"),
  //     "address": localStorage.getItem("address"),
  //     "attendence": localStorage.getItem("attendence"),
  //     "caste": localStorage.getItem("caste"),
  //     "city": localStorage.getItem("city"),
  //     "cpi": localStorage.getItem("cpi"),
  //     "department": localStorage.getItem("department"),
  //     "diploma": localStorage.getItem("diploma"),
  //     "division": localStorage.getItem("division"),
  //     "email": localStorage.getItem("email"),
  //     "enrollment": localStorage.getItem("enrollment"),
  //     "father_contact": localStorage.getItem("father_contact"),
  //     "father_name": localStorage.getItem("father_name"),
  //     "father_occupation": localStorage.getItem("father_occupation"),
  //     "father_photo": localStorage.getItem("father_photo"),
  //     "fees_paid": localStorage.getItem("fees_paid"),
  //     "fees_unpaid": localStorage.getItem("fees_unpaid"),
  //     "gender": localStorage.getItem("gender"),
  //     "height": localStorage.getItem("height"),
  //     "hobbies": localStorage.getItem("hobbies"),
  //     "mentor_name": localStorage.getItem("mentor_name"),
  //     "mentoring_started_year": localStorage.getItem("mentoring_started_year"),
  //     "mother_contact": localStorage.getItem("mother_contact"),
  //     "mother_name": localStorage.getItem("mother_name"),
  //     "mother_occupation": localStorage.getItem("mother_occupation"),
  //     "mother_photo": localStorage.getItem("mother_photo"),
  //     "nationality": localStorage.getItem("nationality"),
  //     "overall_10th": localStorage.getItem("overall_10th"),
  //     "overall_12th": localStorage.getItem("overall_12th"),
  //     "pincode": localStorage.getItem("pincode"),
  //     "spi": localStorage.getItem("spi"),
  //     "sport": localStorage.getItem("sport"),
  //     "state": localStorage.getItem("state"),
  //     "student_contact": localStorage.getItem("student_contact"),
  //     "student_photo": localStorage.getItem("student_photo"),
  //     "study_semester": localStorage.getItem("study_semester"),
  //     "weight": localStorage.getItem("weight"),
  //   });

  // }

  useEffect(() => {
    // getDataOfLocalStorage();
    studentDataApi();

  }, []);


  // dhiarj code---------------------------------------------------------------------------------


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


  const Data = [
    {
      Eno: "21BECE30016",
      Fname: "Raj Mehta",
      spi: "7.5",
      Monthly: "-",
      path: "/resultsmentorship/mentorshipresults",
    },
    {
      Eno: "21BECE30017",
      Fname: "Raj Mehta",
      spi: "7.5",
      Monthly: "-",
      path: "/resultsmentorship/mentorshipresults",
    },
    {
      Eno: "21BECE30018",
      Fname: "Raj Mehta",
      spi: "7.5",
      Monthly: "-",
      path: "/resultsmentorship/mentorshipresults",
    },
    {
      Eno: "21BECE30019",
      Fname: "Raj Mehta",
      spi: "7.5",
      Monthly: "-",
      path: "/resultsmentorship/mentorshipresults",
    },
    {
      Eno: "21BECE30021",
      Fname: "Krunal Parmar",
      spi: "7.5",
      Monthly: "-",
      path: "/resultsmentorship/mentorshipresults",
    },
    {
      Eno: "21BECE30020",
      Fname: "Chirag Rajput",
      spi: "7.5",
      Monthly: "-",
      path: "/resultsmentorship/mentorshipresults",
    },
  ]
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

  function studentClick(e) {

    localStorage.setItem("studentName", e.name);
    localStorage.setItem("enrollment", e.enrollment);

  }

  return (
    <>
      <div className='px-2 w-full'>
        <div className=" py-3 px-2 rounded-lg p-10   bg-white ">
          <div className="   ">
            <div className="flex flex-row justify-between items-center px-5">
              <div className="flex flex-row justify-center items-center">
                <label onClick={() => {
                  console.log(studentData)
                }}
                  for="Semester"
                  className="   py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
                >
                  Semester :{" "}
                </label>
                <div className="flex justify-center relative min-w-[198px] px-1 h-[40px]">
                  <select onChange={onOptionChangeHandler} className=" px-9 rounded-[5px] border-none appearance-none p-2 w-[100%] hover:text-[#47A5E4] bg-[#E6E6E6] text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
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
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1615 0C12.4257 0 15.8826 3.42502 15.8826 7.65C15.8826 9.45606 15.2509 11.1159 14.1945 12.4246L17.3471 15.549C17.6821 15.8809 17.6821 16.4191 17.3471 16.751C17.0378 17.0575 16.5512 17.081 16.2147 16.8218L16.1338 16.751L12.9805 13.6275C11.6596 14.6741 9.98434 15.3 8.1615 15.3C3.89727 15.3 0.44043 11.875 0.44043 7.65C0.44043 3.42502 3.89727 0 8.1615 0ZM8.16151 1.70007C4.84489 1.70007 2.15623 4.36398 2.15623 7.65007C2.15623 10.9362 4.84489 13.6001 8.16151 13.6001C11.4781 13.6001 14.1668 10.9362 14.1668 7.65007C14.1668 4.36398 11.4781 1.70007 8.16151 1.70007Z" fill="#211F3B" />
                  </svg></div>
                </div>
                {/* <div className="px-1.5 py-1.5 bg-[#F3F3F3] rounded-[5px] border-[1px] border-grey ">
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
  <path d="M4.83984 7C4.83984 6.44772 5.29172 6 5.84913 6H19.9792C20.5366 6 20.9885 6.44772 20.9885 7C20.9885 7.55228 20.5366 8 19.9792 8H5.84913C5.29172 8 4.83984 7.55228 4.83984 7ZM6.85842 12C6.85842 11.4477 7.3103 11 7.86772 11H17.9606C18.518 11 18.9699 11.4477 18.9699 12C18.9699 12.5523 18.518 13 17.9606 13H7.86772C7.3103 13 6.85842 12.5523 6.85842 12ZM8.87701 17C8.87701 16.4477 9.32888 16 9.8863 16H15.942C16.4995 16 16.9513 16.4477 16.9513 17C16.9513 17.5523 16.4995 18 15.942 18H9.8863C9.32888 18 8.87701 17.5523 8.87701 17Z" fill="#211F3B"/>
</svg>
</div> */}
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
                          <th className="px-[15.2rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                            <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Full Name</p>
                          </th>
                          <th className="px-[2.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                            <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">SPI</p>
                          </th>
                          <th className="px-[2.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                            <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">CPI</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody className=''>
                        {filteredData.map((id, index) => {


                          return (
                            <tr
                              key={index}
                              onClick={() => studentClick(id.fields)}
                              className="table-auto text-sm  h-[55px] rounded-lg py-3 px-3 transition-all duration-300  "

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
                                  <a href={"/resultsmentorship/mentorshipresults"}>
                                    <div className="  text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                      {id.fields.name}

                                    </div>
                                  </a>
                                </div>
                              </td>
                              <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                                <div className="">
                                  <div className="text-center text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                    {id.fields.spi}

                                  </div>
                                </div>
                              </td>
                              <td className="px-[1.2rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                                <div className="">
                                  <div className="text-center text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                    {id.fields.cpi}

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

export default ResultTableHod;
