import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { mentoringDataContext } from '../../Context/mentoringDataContext';
import Select from 'react-select';

function RetiredStudent() {

    const navigation = useNavigate();
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



    const [semesterFillData, setSemesterFill] = useState(options1[0].value);

    const { dataM, setDataM, PagesHandler, setPagesHandler, NavigationFlow, loggedUserInfo, setNavigationFlow } = useContext(mentoringDataContext);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const [isLoading, setisLoading] = useState(false);
    const [studentData, setStudentData] = useState([]);





    // semester change button
    const onOptionChangeHandler = (event) => {
        setSemesterFill(event.value);

        setStudentData([]);

        function studentDataApi() {

            axios({
                url: process.env.REACT_APP_SERVER + `/students/getStudentByDivisionId/${PagesHandler?.subDivisionId}`,
                method: "get",
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            })
                .then(async (res) => {

                    let a = res.data.data.filter((e) => {
                        if (e.currentSem == event.value && e.isPassedOutStudent == true) {
                            return true
                        } else {
                            return false
                        }
                    });

                    let b = [...a];
                    console.log(b)
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
            let a = id.fullName;
            let b = id.EnrollmentNumber;
            if (a.toLowerCase().includes(term.toLowerCase()) || b.toString().includes(term)) {
                return true
            }

        }
        );

        setFilteredData(newFilteredData);
    };



    let tempData = []



    function studentDataApi() {
        let mentor = dataM.nameOfMentor



        axios({
            url: process.env.REACT_APP_SERVER + `/students/getStudentByDivisionId/${PagesHandler?.subDivisionId}`,
            method: "get",
            headers: {
                "Content-Type": "multipart/form-data",
            },

        })
            .then(async (res) => {

                let a = res.data.data.filter((e) => {
                    if (e.isPassedOutStudent == true) {
                        return true
                    } else {
                        return false
                    }
                });

                let b = [...a];
                console.log(b)
                return b;

            })
            .then((e) => {

                setisLoading(true)
                setStudentData(e);
                setFilteredData(e);

            })
            .catch((err) => {
                console.log(err);
                setisLoading(true)
            });



    }
    useEffect(() => {
        studentDataApi();


    }, []);



    return (
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
                        <label
                            for="Semester"
                            className="   py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
                        >
                            Semester :{" "}
                        </label>

                        <div className="flex justify-center relative min-w-[148px] px-1 h-[40px]">
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
                                onChange={(e) => onOptionChangeHandler(e)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center  items-center">
                        <h2 onClick={() => {
                            console.log(dataM)
                        }} className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
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
                {/* semester and other button end */}

                <div className=' h-full  relative w-full    '>

                    <div className=' w-full h-full absolute overflow-auto px-4 py-2'>
                        <div className='  rounded-t-lg bg-[#16376e] text-white py-3  uppercase w-full font-Inter font-bold text-[18px] flex justify-center items-center'>
                            <p>PassOut Students</p>
                        </div>
                        <table className="bg-[#F5F5F5] font-Inter min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden  border-collapse  ">
                            <thead id="table_fixed">
                                <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#47A5E4] px-3   z-20 max-h-[70px]  h-[10px]">
                                    {" "}
                                    <th className="px-[2.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                        <p className=" text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">Enrollment No</p>
                                    </th>
                                    <th className="px-[12rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                        <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Full Name</p>
                                    </th>
                                    <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                        <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Joining Year</p>
                                    </th>
                                    <th className="px-[1.5rem] py-2.5 border-[2px] border-[#47A5E4] whitespace-nowrap">
                                        <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">DOB</p>
                                    </th>

                                </tr>
                            </thead>
                            <tbody className='  '>
                                {!filteredData.length == 0 ? <>   {filteredData.map((id, index) => {


                                    return (
                                        <tr onClick={() => alert("expired student clickd")}
                                            key={index}
                                            className="table-auto text-sm  font-Inter  odd:bg-white  h-[55px] rounded-lg py-3 px-3 transition-all duration-300  "

                                        >
                                            <td className=" ] px-[1rem] whitespace-nowrap">
                                                <div className="">
                                                    <div className="text-center  text-black text-[16px]  font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                                        {id.EnrollmentNumber}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-[1rem] whitespace-nowrap  ]">
                                                <div className="">
                                                    <a href={id.path}>
                                                        <div className="  text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">

                                                            {id.fullName}
                                                            {/* {data[id1].fullname} */}
                                                        </div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="px-[1rem] whitespace-nowrap  ]">
                                                <div className="">
                                                    <div className="text-center text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                                                        {/* {id.attendence}<span>%</span> */}
                                                        {id?.mentoringStartingYear}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-[1rem] whitespace-nowrap  ]">
                                                <div className="">
                                                    <div className="text-center text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                                                        {/* {id.attendence}<span>%</span> */}

                                                        {id?.dateOfBirth}
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


            </div></> : <>
                <div className=' w-full flex-col gap-7 h-full flex justify-center items-center'>

                    <div className="loader animate-spin   "></div>
                    <p className=' font-Poppins tracking-wide  animate-pulse text-lg text-[#47A5E4]'>Featching Data, Please wait...</p>
                </div>

            </>}




        </div >


    );
};

export default RetiredStudent;
