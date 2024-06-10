import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { mentoringDataContext } from "../../Context/mentoringDataContext";
import { useNavigate } from "react-router-dom";

function Chairman() {
    const { dataM, setDataM, isAnyOneLoggedin, setIsAnyOneLoggedin, setLoggedUserInfo, NavigationFlow, setNavigationFlow } = useContext(mentoringDataContext);
    const menuItems = [
        {
            name: "Home",
            to: "/Chairman"
        },
        {
            name: "Attendance",
            to: "/Chairman"
        },
        {
            name: "Results",
            to: "/Chairman"

        },
        {
            name: "Fees Details",
            to: "/Chairman"

        },
        {
            name: "University",
            to: "/Chairman/universitychairmain"

        },
        {
            name: "Notification",
            to: "/Chairman/notificationchairmain"

        },
        {
            name: "Passout Students",
            to: "/Chairman"

        },
        {
            name: "Log out",

        },
    ];

    const navi = useNavigate();

    useEffect(() => {
        setNavigationFlow({
            ...setNavigationFlow,
            chairmanNavigation: "Home",
            MainNavigation: "Home"
        })
    }, [])



    function onNavlinkClick(e) {
        if (e == "Log out") {
            setIsAnyOneLoggedin(false);
            setLoggedUserInfo({});
            let a = window.location;
            a.href = a.origin + "";

        }




        setNavigationFlow({
            ...setNavigationFlow,
            chairmanNavigation: e,
            MainNavigation: e

        })




    }
    return (
        <>
            {!dataM.loggedBy == '' ?
                <>
                    <div className=" flex flex-row h-full  justify-start items-start   relative pt-[5px] ">
                        <div className=" side-menu w-[16%]  h-full  rounded-lg  shadow-xl    ">
                            <div className="py-7    ">
                                <div className="flex items-center justify-center   ">
                                    <a href="">
                                        <div className="pt-4 flex flex-col justify-center items-center ">
                                            <img
                                                src="/static/img/User.png"
                                                alt="logo"
                                                className=" w-24  object-cover "
                                            />
                                            <div className="flex flex-col justify-center items-center">
                                                <h2 className="text-[color:var(--01,#16376E)] text-[18px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.32px] capitalize">Chairman 1</h2>
                                                <h2 className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-normal leading-[normal] tracking-[0.2px] capitalize text-center ">HOD of Computer Engineering
                                                    Department</h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="main-menu  pt-5 flex flex-col justify-center items-center   ">
                                    <ul className="space-y-2 ">
                                        {menuItems.map((menuItem, index) => (
                                            <NavLink
                                                key={index}
                                                exact
                                                to={menuItem.to}
                                                onClick={() => { return onNavlinkClick(menuItem.name) }}
                                                // buttonForNavigation
                                                className={` ${menuItem.name == NavigationFlow.chairmanNavigation ? "buttonForNavigation" : "notSelectedButton"}  `}
                                            >
                                                <span className="pl-3">{menuItem.name}</span>
                                            </NavLink>
                                        )
                                        )}
                                    </ul>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                        <div className=" w-[84%] h-full">
                            <Outlet />

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

export default Chairman
