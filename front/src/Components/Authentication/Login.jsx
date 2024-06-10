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

    const { isAnyOneLoggedin, setIsAnyOneLoggedin, loggedUserInfo, setPagesHandler, PagesHandler, setMentorFormData, setLoggedUserInfo } = useContext(mentoringDataContext);

    const navigate = useNavigate();

    // form data collection states and refs

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = async (e) => {
        try {


            e.preventDefault();

            setLoading(true)


            const req = await fetch(process.env.REACT_APP_SERVER + "/auth/login", {
                method: "POST",

                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    "username": email,
                    "password": password
                })

            })



            if (req.status == 404) {
                alert("Something Went Wrong 1.");
                setLoading(false)
            }
            else {

                const res = await req.json();

                if (req.status == 400) {

                    alert(res.msg)
                    setLoading(false)
                }

                if (req.status == 200) {
                    alert(res.msg);



                    setLoggedUserInfo({
                        ...res.data
                    })

                    console.log("login", res);


                    switch (res?.data.facultyType) {
                        case 'chairman':
                            navigate('/Chairman')
                            break;
                        case 'principal':

                            setPagesHandler({
                                ...PagesHandler,
                                collegeName: res.data?.collegeName
                            })
                            navigate('/Principal')
                            break;


                        case 'hod':
                            setPagesHandler({
                                ...PagesHandler,
                                collegeName: res.data?.collegeName,
                                DepartmentName: res.data?.departmentName,

                                departmentId: res.data?.departmentId,
                            })

                            navigate('/Hod')
                            break;



                        case 'mentor':
                            setPagesHandler({
                                ...PagesHandler,
                                collegeName: res.data?.collegeName,
                                DepartmentName: res.data?.departmentName,
                                subDivisionId: res.data?.subDivisionName,
                                departmentId: res.data?.departmentId,
                            })
                            navigate('/MainMentorship')
                            break;

                        case 'student':
                            setLoggedUserInfo({
                                ...res.StudentData
                            })
                            setMentorFormData({
                                _id: res?.StudentData._id

                            })
                            // alert("i am student");
                            navigate('/Students')
                            break;

                        default:
                            break;
                    }

                    setIsAnyOneLoggedin(true);

                    setLoading(false)
                }
            }

        } catch (error) {
            alert("Something went Wrong 2.");
            setLoading(false)
        }
    };



    return (
        <>
            <div className=' w-full h-full bg-[#f5f5f5] rounded-lg  py-16 flex justify-center  items-center'>

                <div className=' w-[820px] flex flex-row justify-center shadow-[0px_9px_30px_0px_rgba(0,0,0,0.14)] p-5 items-start   bg-white  h-full rounded-[14px]'>

                    {/* logo section  */}
                    <div className=' w-[45%] select-none flex flex-col justify-center items-center h-full  '>
                        <img
                            src="/static/img/Rectangle 4.svg"
                            alt="logo"
                            className="w-60  object-cover "
                        />
                    </div>


                    {/* middle line section */}
                    <div className=' w-[2px] py-16 h-full '>
                        <div className='  w-[1px] h-full bg-[#D9D9D9]'>
                        </div>
                    </div>

                    {/* right side section  */}
                    <div className=' w-[55%] h-full flex flex-col justify-between items-start  '>
                        <div className=' w-full  flex justify-center items-center'>
                            <h2 className="text-[color:var(--02,#47A5E4)] text-[30px] font-Montserrat not-italic font-bold leading-[normal]">
                                Login
                            </h2>
                        </div>
                        <div className='   relative h-full w-full py-3'>
                            <div className=' w-full flex justify-start pt-10 items-center flex-col h-[95%] absolute overflow-auto  '>


                                <form action="">
                                    {/* --------email-------------- */}
                                    <div className="flex flex-col space-y-2 py-2">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="text-[#1E1E1E] text-[17px] font-Poppins not-italic font-medium leading-[normal]"
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
                                            className="text-[#1E1E1E] text-[17px] font-Poppins not-italic font-medium leading-[normal]"
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


                                </form>

                            </div>
                        </div>


                        <div className=' w-full  flex justify-center items-center'>
                            {/* ---------------- Login button ------------------ */}
                            <div className="py-0 pb-10">

                                {!loading ? <button
                                    onClick={handleSubmit}
                                    className={"text-white rounded-[10px] text-[19px] transition-all duration-300 hover:border-[#00a1db] hover:bg-transparent hover:text-[#00a1db] border border-transparent font-Montserrat bg-[#47A5E4] w-[343px] h-[45px] not-italic font-bold leading-[normal]"}
                                >
                                    Login
                                </button> : <button
                                    // onClick={signupHandler}
                                    className={"text-white rounded-[10px] text-[19px] transition-all duration-300 hover:border-[#00a1db]   border border-transparent font-Montserrat bg-[#47A5E4] w-[343px] h-[45px] not-italic font-bold leading-[normal]"}
                                >
                                    <div className="load"></div>
                                </button>}
                            </div>
                        </div>

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

        </>
    )
}

export default Login
