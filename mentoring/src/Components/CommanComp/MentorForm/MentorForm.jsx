import React, { useEffect, useState, useContext } from 'react'
import { FaSortDown } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { mentoringDataContext } from '../../../Context/mentoringDataContext';
import { useNavigate } from 'react-router';
function MentorForm() {

    const navigation = useNavigate();
    // for api data----------------
    const [studentData, setStudentData] = useState([]);
    const [localStorageData, setLocalStorageData] = useState({});

    const { dataM, setDataM } = useContext(mentoringDataContext);
    const { stepNo, setStepNo } = useContext(mentoringDataContext);
    const [file, setfile] = useState();
    const [file1, setfile1] = useState();
    //search Mentoring table

    const [semesterFillter, setSemesterFillter] = useState('');
    const [searchFillter, setSearchFillter] = useState([]);

    const [semesterFillData, setSemesterFill] = useState([]);


    const options = [
        "1", "2", "3", "4", "5", "6", "7", "8"
    ];

    function semisterChange(e) {
        setSemesterFill(e.target.value);

        setSearchFillter([]);

        function studentDataApi() {
            let mentor = dataM.nameOfMentor
            const formData = new FormData();
            formData.append("mentor", mentor);
            formData.append("semester", e.target.value);



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
                    setSearchFillter(e);
                })
                .catch((err) => {
                    console.log(err);
                });

        }

        studentDataApi()

    }


    function submin() {
        async function fess() {
            const formData = new FormData();
            formData.append("excel_file", file[0]);

            axios({
                url: process.env.REACT_APP_SERVER + "/api/import_from_excel/",
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: formData,
            })
                .then(async (res) => {
                    alert("Students Added Succesfully")
                    return res.data;
                })
                .then((e) => {
                    console.log(e.data);
                })
                .catch((err) => {
                    console.log(err);
                });

        }
        fess();

    }



    function studentDataApi() {
        let mentor = dataM.nameOfMentor
        const formData = new FormData();
        formData.append("mentor", mentor);
        formData.append("semester", "1");



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
                setSearchFillter(e);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    useEffect(() => {
        studentDataApi();


    }, []);



    // for searchfileter for name
    const handleSearchChange = (p) => {
        let term = p.target.value;

        const newFilteredData = studentData.filter((item) => {
            let a = item.fields.name;
            a = a.toLowerCase();
            let b = item.fields.enrollment.toLowerCase();
            b = b.toLowerCase();

            if (a.includes(term) || b.includes(term)) {
                return true;
            }

        }
        );

        setSearchFillter(newFilteredData);
    };

    function subminResult() {
        const formData = new FormData();

        formData.append("excel_file", file1[0]);


        axios({
            url: process.env.REACT_APP_SERVER + "/api/resultExcel/",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data: formData,
        })
            .then(async (res) => {
                alert("Data Fetched Succesfuly");
                return res.data;
            })
            .then((e) => {
                console.log(e.data);
            })
            .catch((err) => {
                console.log(err);
            });



    }


    function mentorFormStudentClicked(e) {
        setStepNo(1)
        setDataM({
            ...dataM,
            studentDetails: { ...e }
        })

        if (dataM.loggedBy == "principal") {
            navigation('/Principal/MentorForm/StudentForm')
        }
        else if (dataM.loggedBy == "chairman") {
            navigation('/Chairman/MentorForm/StudentForm')
        }
        else if (dataM.loggedBy == 'hod') {
            navigation('/Hod/MentorForm/StudentForm')
        }
        else if (dataM.loggedBy == 'mentor') {

            navigation('/MainMentorship/StudentForm')
        }
    }
    return (
        <>
            <div className='w-full overflow-auto h-[88vh]  px-2'>
                <div className="  py-3 px-2 rounded-lg p-10 shadow-xl  bg-white ">
                    <div className="   ">
                        <div className="flex flex-row justify-between items-center px-5">
                            <div className="flex flex-row justify-center items-center">
                                <label onClick={() => { console.log(studentData) }}
                                    for="Semester"
                                    className="   py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
                                >
                                    Semester :{" "}
                                </label>
                                <div className="flex justify-center relative min-w-[108px] px-0 h-[40px]">
                                    <select onChange={(e) => { return semisterChange(e) }} className=" px-3 pl-5 rounded-[5px] border-none appearance-none p-2 w-[100%] hover:text-[#47A5E4] bg-[#E6E6E6] text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
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

                                        onChange={(e) => { return handleSearchChange(e) }}
                                        placeholder="Search" className=" bg-[#F3F3F3] rounded-[5px] px-7 py-1.5 focus:outline-[#47A5E4] border-[1px] border-grey " />
                                    <div className="relative right-10 "><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1615 0C12.4257 0 15.8826 3.42502 15.8826 7.65C15.8826 9.45606 15.2509 11.1159 14.1945 12.4246L17.3471 15.549C17.6821 15.8809 17.6821 16.4191 17.3471 16.751C17.0378 17.0575 16.5512 17.081 16.2147 16.8218L16.1338 16.751L12.9805 13.6275C11.6596 14.6741 9.98434 15.3 8.1615 15.3C3.89727 15.3 0.44043 11.875 0.44043 7.65C0.44043 3.42502 3.89727 0 8.1615 0ZM8.16151 1.70007C4.84489 1.70007 2.15623 4.36398 2.15623 7.65007C2.15623 10.9362 4.84489 13.6001 8.16151 13.6001C11.4781 13.6001 14.1668 10.9362 14.1668 7.65007C14.1668 4.36398 11.4781 1.70007 8.16151 1.70007Z" fill="#211F3B" />
                                    </svg></div>
                                </div>

                            </div>
                        </div>


                        {/* TABLE */}
                        <div className='px-6 py-5'>
                            <div className=' flex justify-center items-center border border-[color:var(--01,#16376E)] rounded-[2px_2px_0px_0px] border-solid bg-[#16376E] py-2.5 '>
                                <h2 className='text-white text-[18px] font-inter not-italic font-bold leading-[normal] tracking-[0.36px] uppercase'>attendance 5th-ce-d Semester -1</h2>
                            </div>
                            <section className="relative  w-[100%] ">

                                <section className=" capitalize ">
                                    <div className="  w-[100%] bg-white ">
                                        <table className="bg-[#F5F5F5] min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden  border-collapse  ">
                                            <thead id="table_fixed">
                                                <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#47A5E4] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                                                    {" "}
                                                    <th className="px-[2.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                                        <p className=" text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">Enrollment No</p>
                                                    </th>
                                                    <th className="px-[10rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                                        <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Full Name</p>
                                                    </th>
                                                    <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                                        <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Student Phone</p>
                                                    </th>
                                                    <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                                        <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Fees</p>
                                                    </th>
                                                    <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                                        <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Action</p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className=''>
                                                {searchFillter.map((item, index) => {

                                                    return (
                                                        <tr
                                                            key={index}
                                                            className="text-sm  h-[55px] rounded-lg py-3 px-3  transition-all duration-300  "
                                                        // key={index}
                                                        >
                                                            <td className=" px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]  ">
                                                                <div className="">
                                                                    <div className=" text-center text-black text-[16px]  font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                                                        {item.fields.enrollment}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                                                                <div className="">

                                                                    <div className="  text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                                                        {item.fields.name}
                                                                        {/* {data[id1].fullname} */}
                                                                    </div>

                                                                </div>
                                                            </td>
                                                            <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                                                                <div className="">
                                                                    {/* text-[#00BE35] */}
                                                                    <div className="  text-center text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                                                        {item.fields.student_contact}
                                                                        {/* {data[id1].mobileno} */}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-[1.2rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                                                                <div className="">
                                                                    <div className=" text-[#00BE35] text-center text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                                                        {item.fields.fees_unpaid}

                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-[2rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                                                                <div className="" onClick={() => mentorFormStudentClicked(item.fields)}>
                                                                    <div className=" text-white text-center shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] text-[16px] font-inter not-italic font-bold leading-[normal] bg-[#159BD6] py-2 px-4 rounded-[5px] tracking-[0.32px] capitalize">

                                                                        show
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
                        <div className=' flex flex-row justify-between items-center px-6 py-5'>
                            <div className=' flex flex-row justify-center gap-5 items-center'>

                                {/* button for result excel */}
                                <div>
                                    <p className='font-inter not-italic font-bold leading-[normal] text-[16px] tracking-[0.32px]'>Add Results</p>
                                    <div className=' pt-3'>

                                        <input type="file" onChange={(e) => {
                                            setfile1(e.target.files)
                                        }} accept=" application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                            class="w-full rounded-lg text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-[#159BD6]   file:text-white " />
                                    </div>
                                </div>



                                {/* button for studnet excel */}
                                <div>
                                    <p className='font-inter not-italic font-bold leading-[normal] text-[16px] tracking-[0.32px]'>Add students form Excel</p>
                                    <div className=' pt-3'>

                                        <input type="file" onChange={(e) => {
                                            setfile(e.target.files)
                                        }} accept=" application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                            class="w-full rounded-lg text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-[#159BD6]   file:text-white " />
                                    </div>
                                </div>

                            </div>

                            <div className=' flex flex-row justify-center gap-5 items-center'>

                                {/* button for result excel */}
                                <div>
                                    <div className={`${!file1 ? "hidden" : ''}`}>
                                        <div onClick={subminResult} className=" text-white text-center shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] text-[16px] font-inter not-italic font-bold leading-[normal] bg-[#159BD6] py-2 px-4 rounded-[5px] tracking-[0.32px] capitalize">
                                            Fetch Result <span className=' font-bold text-[18px]'>→</span>
                                        </div>
                                    </div>
                                </div>



                                {/* button for add student excel */}
                                <div>
                                    <div className={`${!file ? "hidden" : ''}`}>
                                        <div onClick={submin} className=" text-white text-center shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] text-[16px] font-inter not-italic font-bold leading-[normal] bg-[#159BD6] py-2 px-4 rounded-[5px] tracking-[0.32px] capitalize">
                                            Fetch Students <span className=' font-bold text-[18px]'>→</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default MentorForm
