import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { mentoringDataContext } from "../../Context/mentoringDataContext";

function MainMentorship() {

    const navigation = useNavigate();
    const { stepNo, setStepNo } = useContext(mentoringDataContext);

    const { dataM, setDataM, PagesHandler, NavigationFlow, setNavigationFlow, setIsAnyOneLoggedin, setLoggedUserInfo, loggedUserInfo, setPagesHandler } = useContext(mentoringDataContext);

    // option for navlinks
    const menuItems = [
        {
            name: "Mentoring Form",
            exact: true,
            to: "/MainMentorship",
        },
        {
            name: "Attendance",
            exact: true,
            to: "/MainMentorship/attendences",
        },
        {
            name: "Results",
            exact: true,
            to: "/MainMentorship/results",
        },
        {
            name: "Fees Details",
            exact: true,
            to: "/MainMentorship/feesDetails",
        },
        {
            name: "Mentoring Session",
            exact: true,
            to: "/MainMentorship/session",
        },
        {
            name: "New Form",
            exact: true,
            to: "/MainMentorship/AddStudent",
        },
        {
            name: "Passout Students",
            exact: true,
            to: "/MainMentorship/passoutStudent",
        },
        {
            name: "Log out",
            exact: true,
            to: "",
        },
    ];

    useEffect(() => {

        console.log(loggedUserInfo)

        setNavigationFlow({
            ...setNavigationFlow,
            mentorNavigation: "Mentoring Form",
            MainNavigation: "Home"
        })
    }, [])

    function onNavlinkClick(e) {

        if (e == "New Form") {
            setStepNo(1)
        }

        if (e == "Log out") {
            setIsAnyOneLoggedin(false);
            setLoggedUserInfo({});
            let a = window.location;
            a.href = a.origin + "";

        }


        setNavigationFlow({
            ...setNavigationFlow,
            mentorNavigation: e,
            MainNavigation: e

        })


    }

    return (
        <>
            {!dataM.loggedBy == '' ? <> <div className=" h-full ">
                <div className="  flex flex-row h-full relative -top-0.5 p-2 ">

                    <div className=" side-menu w-[16%]  h-full rounded-xl shadow-xl    ">


                        {/* ------------main sidebar start ----------------------------- */}
                        <div className="py-12 flex justify-center flex-col gap-5 ">

                            {/* ------------logo and profile pic start ----------------------------- */}
                            <div className="flex items-center justify-center   ">
                                <a href="">
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
                                </a>
                            </div>
                            {/* ------------logo and profile pic end ----------------------------- */}



                            {/* ------------Navlink or option  start ----------------------------- */}
                            <div className="main-menu  pt-5 flex flex-col justify-center items-center  ">
                                <ul className="space-y-2 ">
                                    {menuItems.map((menuItem, index) => (
                                        <NavLink
                                            key={index}
                                            exact
                                            to={menuItem.to}
                                            onClick={() => { return onNavlinkClick(menuItem.name) }}
                                            className={` ${menuItem.name == NavigationFlow.mentorNavigation ? "buttonForNavigation" : "notSelectedButton"}  `}
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
            </div></> : <>
                <div className=" w-full h-full flex  justify-center items-center">
                    <div className="  flex justify-center items-center flex-col gap-12">
                        <h1 className=" text-3xl text-[color:var(--02,#47A5E4)] text-[30px] font-Montserrat not-italic font-bold leading-[normal]">Please Login to View Dash Board.</h1>
                        <div className=" ">
                            <NavLink to={'/Login'} >
                                <div className="text-white flex justify-center items-center  rounded-[10px] text-[19px] transition-all duration-300 hover:border-[#00a1db] hover:bg-transparent hover:text-[#00a1db] border border-transparent font-Montserrat bg-[#47A5E4] w-[173px] h-[45px] not-italic font-bold leading-[normal]">Login →</div>
                            </NavLink>
                        </div>
                    </div>
                </div></>
            }

        </>

    )
}

export default MainMentorship;
