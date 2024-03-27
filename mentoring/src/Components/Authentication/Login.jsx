import React, { useState, useEffect, useContext } from "react";
import { NavLink, Navigate, redirect, useNavigate } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";
import { mentoringDataContext } from "../../Context/mentoringDataContext";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {


    const [loading, setLoading] = useState(false);


    const { dataM, setDataM } = useContext(mentoringDataContext);

    const navigate = useNavigate();

    // form data collection states and refs
    const [data, setData] = useState("Chairmain");
    const [college, setCollege] = useState("ldrp");
    const [department, setDepartment] = useState("Bca");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // select box handlers and their options
    const options = ["Principle", "HOD", "Mentor", "Chairmain", "Student"];
    const options2 = ["ldrp", "ksv"];
    const options3 = ["Bca", "BCOM", "MCOM"];




    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        // console.log(email, password, data);
        const formdata = new FormData();
        formdata.append("username", email);
        formdata.append("pass1", password);
        formdata.append("usertype", data);

        axios({
            url: process.env.REACT_APP_SERVER + "/api/login/",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data: formdata,
        })

            .then((res) => {
                console.log(res);

                if (res.data.status) {

                    switch (data) {
                        case "Chairmain": {
                            setDataM({
                                ...dataM,
                                loggedBy: "chairman"
                            })
                            navigate("/chairman")
                            // window.location.reload('/chairmain');
                            break;
                        }
                        case "HOD": {
                            setDataM({
                                ...dataM,
                                loggedBy: "hod",
                                collegeName: college,
                                department_title: department

                            })
                            navigate("/Hod")
                            // window.location.reload('/Hod');
                            break;
                        }
                        case "Principle": {
                            setDataM({
                                ...dataM,
                                loggedBy: "principal",
                                collegeName: college

                            })
                            navigate("/Principal")
                            // window.location.reload('/Principal');
                            break;
                        }
                        case "Mentor": {
                            setDataM({
                                ...dataM,
                                loggedBy: "mentor",
                                collegeName: college,
                                department_title: department,
                                nameOfMentor: email

                            })
                            navigate("/MainMentorship");
                            // window.location.reload('/MainMentorship');
                            break;
                        }
                        case "Student": {
                            navigate("/")
                            break;
                        }


                        default: {
                            console.log("defalut")
                            break;
                        }
                    }

                    setLoading(false)

                }
                else {
                    toast.error("Wrong Credintials", {
                    })

                    setLoading(false)

                }

            })
            .catch((err) => {

                toast.error("Some thing went Wrong", {
                })

                toast.error(err);
                setLoading(false)
            });
    };



    return (
        <div>
            <div className="bg-[#F6F3F3] flex items-center justify-center flex-col h-screen">
                <div className=" w-[820px] h-[577px] relative -top-10 bg-white shadow-[0px_9px_30px_0px_rgba(0,0,0,0.14)] rounded-[14px]  overflow-hidden   ">

                    {/* -----------------------form start-------------------------- */}

                    <div className="flex flex-row">

                        {/* -------------------------- img section 1 start --------------------------- */}
                        <div className="px-5 pl-9 flex items-center">
                            <img
                                src="/static/img/Rectangle 4.svg"
                                alt="logo"
                                className="w-80   object-cover "
                            />
                        </div>
                        {/* -------------------------- img section 1 start --------------------------- */}


                        {/* -------------------------- middle line section 2 start --------------------------- */}
                        <div className="px-5 pt-20">
                            <div className="w-[2px]  h-[22rem] bg-[#D9D9D9]"></div>
                        </div>
                        {/* -------------------------- middle line section 2 end --------------------------- */}



                        {/* -------------------------- form section 3  start --------------------------- */}
                        <div className="flex flex-col px-5">


                            <div className="px-32 py-10">
                                <h2 onClick={() => {

                                }} className="text-[color:var(--02,#47A5E4)] text-[30px] font-Montserrat not-italic font-bold leading-[normal]">
                                    Log in
                                </h2>
                            </div>




                            <form action="">

                                {/* --------email-------------- */}
                                <div className="flex flex-col space-y-2 py-2">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="text-[#1E1E1E] text-[18px] font-inter not-italic font-semibold leading-[normal]"
                                    >
                                        Email id
                                    </label>
                                    <input
                                        id="exampleInputEmail1"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-describedby="emailHelp"
                                        className=" rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]"
                                        type="text"
                                        autoComplete="off"
                                        name="email"
                                    />
                                </div>


                                {/* --------password-------------- */}
                                <div className="flex flex-col space-y-2 py-2">
                                    <label
                                        htmlFor="exampleInputPassword1"
                                        className="text-[#1E1E1E] text-[18px] font-inter not-italic font-semibold leading-[normal]"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="exampleInputPassword1"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]"
                                        type="password"
                                        autoComplete="off"
                                        name="password"
                                    />
                                </div>


                                {/* --------option for user-------------- */}
                                <div className="flex  items-center py-1.5 ">
                                    <div className="flex justify-center relative min-w-[343px] h-[40px]">
                                        <select
                                            onChange={(event) => { setData(event.target.value); }}
                                            value={data}
                                            name="role"
                                            className="rounded-[10px]   text-center border-none appearance-none p-2 w-[100%] bg-[#F9F7F7] text-[18px] font-inter text-[#0D0D0D]  not-italic font-medium leading-[normal] "
                                        >
                                            {options.map((option, index) => {
                                                return (
                                                    <option key={index} className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">

                                                        {option}

                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1.5 right-0 flex items-center justify-center ">
                                            <span className="text-[30px] text-gray-400  ">
                                                <FaSortDown />
                                            </span>
                                        </div>
                                    </div>
                                </div>




                                {/* college */}
                                <div className={"flex  items-center py-1.5 " + `${data == "Chairmain" ? 'hidden' : ''}`}>
                                    <div className="flex justify-center relative min-w-[343px] h-[40px]">
                                        <select
                                            onChange={(event) => { setCollege(event.target.value) }}
                                            value={college}
                                            name="role"
                                            className="  rounded-[10px] text-center border-none appearance-none p-2 w-[100%] bg-[#F9F7F7] text-[18px] font-inter text-[#0D0D0D]  not-italic font-medium leading-[normal] "
                                        >

                                            {options2.map((option, index) => {
                                                return (
                                                    <option key={index} className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">

                                                        {option}

                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1.5 right-0 flex items-center justify-center ">
                                            <span className="text-[30px] text-gray-400  ">
                                                <FaSortDown />
                                            </span>
                                        </div>
                                    </div>
                                </div>



                                {/* department */}
                                <div className={"flex  items-center py-1.5 " + `${data == 'Chairmain' || data == "Principle" ? 'hidden' : ''}`}>
                                    <div className="flex justify-center relative min-w-[343px] h-[40px]">
                                        <select
                                            onChange={(event) => { setDepartment(event.target.value) }}
                                            value={department}
                                            name="role"
                                            className="  rounded-[10px] text-center border-none appearance-none p-2 w-[100%] bg-[#F9F7F7] text-[18px] font-inter text-[#0D0D0D]  not-italic font-medium leading-[normal] "
                                        >
                                            {options3.map((option, index) => {
                                                return (
                                                    <option key={index} className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">

                                                        {option}

                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1.5 right-0 flex items-center justify-center ">
                                            <span className="text-[30px] text-gray-400  ">
                                                <FaSortDown />
                                            </span>
                                        </div>
                                    </div>
                                </div>


                                {/* ---------------- Login button ------------------ */}
                                <div className="py-3">
                                    <button
                                        onClick={handleSubmit}
                                        className="text-white h-[48px]  hover:bg-transparent hover:text-[#00a1db] border-[1px] border-transparent hover:border-[#00a1db] transition-all duration-300 rounded-[10px] text-[19px] font-Montserrat bg-[#00a1db] px-36 py-2.5 not-italic font-bold leading-[normal]"
                                        type="submit"
                                    >
                                        {!loading ? "Login" : <div className="load"></div>}

                                    </button>
                                    <p className=" w-full text-center  py-2 underline  cursor-pointer" onClick={() => navigate('/Signup')} > Sign Up</p >
                                </div>

                            </form>



                        </div>
                        {/* -------------------------- form section 3 end --------------------------- */}


                    </div>
                    {/* -----------------------form end-------------------------- */}
                </div>
            </div>


            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="colored"
                pauseOnHover={false}

            />
        </div>
    )
}

export default Login
