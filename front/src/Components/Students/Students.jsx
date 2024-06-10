import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { mentoringDataContext } from "../../Context/mentoringDataContext";
import axios from "axios";


function Students() {

    const navigation = useNavigate();
    const { stepNo, setStepNo } = useContext(mentoringDataContext);
    const { dataM, setDataM } = useContext(mentoringDataContext);
    const { isFirstTimeStudent, setIsStudent, loggedStudent, setLoggedStudent } = useContext(mentoringDataContext);
    const { NavigationFlow, setNavigationFlow, loggedUserInfo, setLoggedUserInfo } = useContext(mentoringDataContext);

    const [password, setPassword] = useState('');

    // option for navlinks
    const menuItems = [
        {
            name: "Mentoring Form",
            exact: true,
            to: "/Students",
        },
        {
            name: "Attendance",
            exact: true,
            to: "/Students/attendences",
        },
        {
            name: "Results",
            exact: true,
            to: "/Students/results",
        },
        {
            name: "Fees Details",
            exact: true,
            to: "/Students/feesDetails",
        },

        {
            name: "Log out",
            exact: true,
            to: "",
        },
    ];

    async function handleSubmit() {

        try {


            const req = await fetch(process.env.REACT_APP_SERVER + `/auth/setNewPass/${loggedUserInfo?._id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    "password": password
                })

            })


            let resonse = await req.json();



            if (resonse.status == true) {

                alert(resonse.msg);


                const checkAgain = await fetch(process.env.REACT_APP_SERVER + "/auth/login", {
                    method: "POST",

                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "username": loggedUserInfo.EnrollmentNumber,
                        "password": password
                    })

                })


                if (checkAgain.status == 404) {
                    alert("Something Went Wrong 1.");

                }
                else {

                    const res = await checkAgain.json();

                    if (checkAgain.status == 400) {

                        alert(res.msg)

                    }

                    if (checkAgain.status == 200) {
                        alert(res.msg);
                        let a = window.location;
                        alert("Please Relogin with new password.")
                        a.href = a.origin + "";
                        // setLoggedUserInfo({
                        //     ...res.data
                        // })

                    }


                }

            }





        } catch (error) {
            alert("something went wrong.");
        }
        // 21BCA24125

    }


    useEffect(() => {


        console.log(loggedUserInfo)

        setNavigationFlow({
            ...NavigationFlow,
            studentNavigation: "Mentoring Form"
        })
    }, [])

    function onNavlinkClick(e) {


        if (e == "Log out") {
            setNavigationFlow({});
            let a = window.location;
            a.href = a.origin + "";

        }
        setNavigationFlow({
            ...NavigationFlow,
            studentNavigation: e
        })



    }




    return (
        <>
            {loggedUserInfo.isFirstTime == true ? <> <div className=" w-full gap-5 h-full bg-white flex justify-center items-center flex-col">

                <div className=' w-full  flex justify-center items-center'>
                    <h2 className="text-[color:var(--02,#47A5E4)] text-[30px] font-Montserrat not-italic font-bold leading-[normal]">
                        Set Login Password
                    </h2>
                </div>
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
                        type="text"
                        autoComplete="off"
                        name="password"
                    />
                </div>

                <div className=' w-full  flex justify-center items-center'>
                    {/* ---------------- Login button ------------------ */}
                    <div className="py-0">

                        <button
                            onClick={handleSubmit}
                            className={"text-white rounded-[10px] text-[19px] transition-all duration-300 hover:border-[#00a1db] hover:bg-transparent hover:text-[#00a1db] border border-transparent font-Montserrat bg-[#47A5E4] w-[343px] h-[45px] not-italic font-bold leading-[normal]"}
                        >
                            Set Password
                        </button>
                    </div>
                </div>


            </div></> : <><div className=" h-full ">
                <div className="  flex flex-row h-full relative -top-0.5 p-2 ">

                    <div className=" side-menu w-[16%]  h-full rounded-xl shadow-xl    ">


                        {/* ------------main sidebar start ----------------------------- */}
                        <div className="py-12 flex justify-center flex-col gap-5 ">

                            {/* ------------logo and profile pic start ----------------------------- */}
                            <div onClick={() => { }} className="flex items-center justify-center   ">

                                <div className="pt-4 flex flex-col justify-center items-center ">
                                    <img
                                        src="static/img/User.png"
                                        alt="logo"
                                        className=" w-24  object-cover "
                                    />
                                    <div className="flex flex-col justify-center items-center">
                                        <h2 className="text-[color:var(--01,#16376E)] text-[18px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.32px] capitalize">Mentor 1</h2>
                                        <h2 className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-normal leading-[normal] tracking-[0.2px] capitalize text-center "><span className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.2px] capitalize">Mentor</span> 5th CE - D Devision</h2>
                                    </div>
                                </div>

                            </div>
                            {/* ------------logo and profile pic end ----------------------------- */}



                            {/* ------------Navlink or option  start ----------------------------- */}
                            <div className="main-menu  pt-5 flex flex-col justify-center items-center   ">
                                <ul className="space-y-2 ">
                                    {menuItems.map((menuItem, index) => (
                                        <NavLink
                                            key={index}
                                            exact
                                            to={menuItem.to}
                                            onClick={() => { return onNavlinkClick(menuItem.name) }}
                                            className={` ${menuItem.name == NavigationFlow.studentNavigation ? "buttonForNavigation" : "notSelectedButton"}  `}
                                        >
                                            <span className="pl-3">{menuItem.name}</span>
                                        </NavLink>
                                    )
                                    )}
                                </ul>

                            </div>
                            {/* ------------Navlink or option end ----------------------------- */}



                        </div>
                        {/* ------------main sidebar end ----------------------------- */}
                    </div>
                    <div className=" w-[84%]">
                        <Outlet />
                    </div>
                </div>
            </div></>}

        </>

    )
}


export default Students
