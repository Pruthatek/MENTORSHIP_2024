import React, { useEffect, useState, useContext } from 'react'
import { FaSortDown } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { mentoringDataContext } from '../../../Context/mentoringDataContext';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import ResultButton from '../../ExcelsButtons/ResultButton';
import ExcelButtons from '../../ExcelsButtons/ExcelButtons';



function MentorForm() {

    const navigation = useNavigate();
    // for api data----------------
    const [studentData, setStudentData] = useState([]);
    const [isLoading, setisLoading] = useState(false);



    const { dataM, setDataM, PagesHandler, setPagesHandler, NavigationFlow, loggedUserInfo, setNavigationFlow, MentorFormData, setMentorFormData } = useContext(mentoringDataContext);
    const { stepNo, setStepNo } = useContext(mentoringDataContext);

    //search Mentoring table



    const options1 = [
        { value: '1', label: 'semister 1' },
        { value: '2', label: 'semister 2' },
        { value: '3', label: 'semister 3' },
        { value: '4', label: 'semister 4' },
        { value: '5', label: 'semister 5' },
        { value: '6', label: 'semister 6' },
        { value: '7', label: 'semister 7' },
        { value: '8', label: 'semister 8' }
    ]

    const [semesterFillter, setSemesterFillter] = useState('');
    const [searchFillter, setSearchFillter] = useState([]);
    const [semesterFillData, setSemesterFill] = useState(options1[0].value);



    function semesterChange(ele) {

        setSemesterFill(ele.value);

        setSearchFillter([]);

        function studentDataApi() {


            axios({
                url: process.env.REACT_APP_SERVER + `/students/getStudentByDivisionId/${PagesHandler?.subDivisionId}`,
                method: "get",
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            })
                .then(async (res) => {
                    let tempS = [];
                    tempS = res.data.data.filter((e) => {
                        if (e.currentSem == ele.value) {
                            return true
                        }
                        else {
                            return false
                        }
                    })

                    setStudentData([...tempS]);
                    setSearchFillter([...tempS]);

                })

                .catch((err) => {

                    console.log(err);
                });

        }

        studentDataApi()

    }



    function studentDataApi() {


        axios({
            url: process.env.REACT_APP_SERVER + `/students/getStudentByDivisionId/${PagesHandler?.subDivisionId}`,
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then(async (res) => {

                let tempS = [];
                tempS = res.data.data.filter((e) => {
                    if (e.currentSem == 1) {
                        return true
                    }
                    else {
                        return false
                    }
                })



                setStudentData([...tempS]);
                setSearchFillter([...tempS]);
                setisLoading(true)
            })

            .catch((err) => {
                console.log(err);
                setisLoading(true)
            });

    }

    useEffect(() => {
        studentDataApi();


    }, []);



    // for searchfileter for name
    const handleSearchChange = (p) => {
        let term = p.target.value;

        const newFilteredData = studentData.filter((item) => {
            let a = item.fullName;
            a = a.toLowerCase();
            let b = item.EnrollmentNumber.toLowerCase();
            b = b.toLowerCase();

            if (a.includes(term) || b.includes(term)) {
                return true;
            }

        }
        );

        setSearchFillter(newFilteredData);
    };




    function mentorFormStudentClicked(e) {
        setStepNo(1)
        setMentorFormData({
            ...e
        })

        if (loggedUserInfo.facultyType == "principal") {
            navigation('/Principal/MentorForm/StudentForm')
        }
        else if (loggedUserInfo.facultyType == "chairman") {
            navigation('/Chairman/MentorForm/StudentForm')
        }
        else if (loggedUserInfo.facultyType == 'hod') {
            navigation('/Hod/MentorForm/StudentForm')
        }
        else if (loggedUserInfo.facultyType == 'mentor') {

            navigation('/MainMentorship/StudentForm')
        }
    }


    return (
        <>

            <div className=' pl-[5px]  flex justify-between items-start flex-col  w-full h-full'>
                <div className="   text-gray-900 text-[14px] flex flex-row justify-end w-full items-start gap-2">
                    <div className=' w-fit flex justify-start items-start gap-2  '>

                        <p className=" font-Poppins tracking-wider leading-[21px] font-semibold">Last Login</p> <span className=" font-Poppins">2:00 PM, Sunday 15 Oct 2023</span>

                    </div>
                </div>

                {isLoading ? <><div className=' h-full w-full flex flex-col justify-between items-start rounded-lg bg-white '>

                    {/* semester and other button start */}
                    <div className="flex flex-row py-3 w-full justify-between items-center  px-5">

                        <div className="flex flex-row justify-center items-center">
                            <label onClick={() => { console.log(studentData) }}
                                for="Semester"
                                className="   py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
                            >
                                Semester :{" "}
                            </label>
                            <div className="flex justify-center relative pl-2 min-w-[108px] px-0 h-[40px]">
                                <Select
                                    styles={{
                                        option: (baseStyles, state) => ({
                                            ...baseStyles,
                                            height: '100%',
                                            padding: "5px 0px",
                                            textAlign: "center",
                                            fontSize: "15px",
                                            backgroundColor: state.isFocused ? "#47A5E4" : "white",
                                            color: state.isFocused ? "white" : "black",
                                            fontFamily: "Poppins",
                                            border: state.isFocused ? "5px solid white" : "none",
                                            borderRadius: state.isFocused ? "10px" : '0px'

                                        }),
                                        indicatorSeparator: (baseStyles) => ({
                                            alignSelf: 'start',
                                            backgroundColor: 'transparent',
                                            width: -1,
                                        }),
                                    }}
                                    className="basic-single w-full"
                                    classNamePrefix="select"
                                    defaultValue={options1[0]}
                                    name="color"
                                    options={options1}
                                    onChange={(e) => semesterChange(e)}
                                />

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
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.1615 0C12.4257 0 15.8826 3.42502 15.8826 7.65C15.8826 9.45606 15.2509 11.1159 14.1945 12.4246L17.3471 15.549C17.6821 15.8809 17.6821 16.4191 17.3471 16.751C17.0378 17.0575 16.5512 17.081 16.2147 16.8218L16.1338 16.751L12.9805 13.6275C11.6596 14.6741 9.98434 15.3 8.1615 15.3C3.89727 15.3 0.44043 11.875 0.44043 7.65C0.44043 3.42502 3.89727 0 8.1615 0ZM8.16151 1.70007C4.84489 1.70007 2.15623 4.36398 2.15623 7.65007C2.15623 10.9362 4.84489 13.6001 8.16151 13.6001C11.4781 13.6001 14.1668 10.9362 14.1668 7.65007C14.1668 4.36398 11.4781 1.70007 8.16151 1.70007Z" fill="#211F3B" />
                                </svg></div>
                            </div>

                        </div>
                    </div>
                    {/* semester and other button end */}

                    <div className=' h-full  relative w-full    '>

                        <div className=' w-full h-full absolute overflow-auto px-4 py-2'>
                            <div className='  rounded-t-lg bg-[#16376e] text-white py-3  uppercase w-full font-Inter font-bold text-[18px] flex justify-center items-center'>
                                <p>Mentor Forms 5th-ce-d Semester -1 </p>
                            </div>


                            <table className="bg-[#F5F5F5] min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden  border-collapse  ">
                                <thead id="table_fixed">
                                    <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#47A5E4] px-3   z-20 max-h-[70px]  h-[10px]">
                                        {" "}
                                        <th className="px-[2.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                            <p className=" text-white text-[16px] font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">Enrollment No</p>
                                        </th>
                                        <th className="px-[10rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                            <p className="text-white text-[16px] font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Full Name</p>
                                        </th>
                                        <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                            <p className="text-white text-[16px] font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                                                 Mentoring Status
                                            </p>
                                        </th>

                                        <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                            <p className="text-white text-[16px] font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Action</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='  '>
                                    {!searchFillter.length == 0 ? <>   {searchFillter.map((item, index) => {

                                        return (
                                            <tr
                                                key={index}
                                                className="text-sm  even:bg-white  h-[55px] rounded-lg py-3 px-3  transition-all duration-300  "

                                            >
                                                <td className=" px-[1rem] whitespace-nowrap    ">
                                                    <div className="">
                                                        <div className=" text-center text-black text-[16px]  font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                                            {item?.EnrollmentNumber}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-[1rem] whitespace-nowrap  ">
                                                    <div className="">

                                                        <div className="  text-black text-[16px] font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                                            {item?.fullName}
                                                            {/* {data[id1].fullname} */}
                                                        </div>

                                                    </div>
                                                </td>
                                                <td className="px-[1rem] whitespace-nowrap  ">
                                                    <div className="">
                                                        {/* text-[#00BE35] */}
                                                        <div className="  text-center text-black text-[16px] font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                                            {item?.thisMonthMentoringStatus ? <span className=' text-green-500'>True</span> : <span className=' text-red-500'>False</span>}
                                                            {/* {data[id1].mobileno} */}
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-[2rem] whitespace-nowrap  ">
                                                    <div className="" onClick={() => mentorFormStudentClicked(item)}>
                                                        <div className=" text-white text-center shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] text-[16px] font-Inter not-italic font-bold leading-[normal] bg-[#159BD6] py-2 px-4 rounded-[5px] tracking-[0.32px] capitalize">

                                                            show
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}</> : <>
                                        <tr className=' bg-white'>
                                            <td colSpan={52} className=' bg-white'>
                                                <div className=' bg-white font-Inter w-full py-5 text-center text-xl'>
                                                    No Students Available !
                                                </div>
                                            </td>
                                        </tr>
                                    </>}

                                </tbody>
                            </table>
                        </div>

                    </div>


                    {/* excels upload buttons start */}
                    <div className='  w-full '>

                        <ExcelButtons />

                    </div>
                    {/* excels upload buttons end */}


                </div></> : <>
                    <div className=' w-full flex-col gap-7 h-full flex justify-center items-center'>

                        <div className="loader animate-spin   "></div>
                        <p className=' font-Poppins tracking-wide  animate-pulse text-lg text-[#47A5E4]'>Featching Data, Please wait...</p>
                    </div>

                </>}




            </div >




        </>
    )
}

export default MentorForm



//         {/* TABLE */}
//         <div className='px-6 py-5'>
//             <div className=' flex justify-center items-center border border-[color:var(--01,#16376E)] rounded-[2px_2px_0px_0px] border-solid bg-[#16376E] py-2.5 '>
//                 <h2 className='text-white text-[18px] font-Inter not-italic font-bold leading-[normal] tracking-[0.36px] uppercase'>attendance 5th-ce-d Semester -1</h2>
//             </div>
//             <section className="relative  w-[100%] ">

//                 <section className=" capitalize ">
//                     <div className="  w-[100%] bg-white ">
//
//                     </div>
//                 </section>
//             </section>
//         </div>
//
//     </div>
// </div>
// </div >