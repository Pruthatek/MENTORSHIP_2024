import React, { useState, useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { mentoringDataContext } from "../../Context/mentoringDataContext";


function Hod() {

  const { dataM, setDataM } = useContext(mentoringDataContext);


  const menuItems = [
    {
      name: "Home",
      exact: true,
      to: "/Hod",
    },
    {
      name: "Attendance",
      exact: true,
      to: "/Hod/attendancehod",
    },
    {
      name: "Results",
      exact: true,
      to: "/Hod/resultshod",
    },
    {
      name: "Fees Details",
      exact: true,
      to: "/Hod/feeshod",
    },
    {
      name: "Notification",
      exact: true,
      to: "/Hod/dashod",
    },
    {
      name: "Log out",
      exact: true,
      to: "",
    },

  ];

  useEffect(() => {
    setDataM({
      ...dataM,
      hodStatus: "Home"
    })
  }, [])

  function onNavlinkClick(e) {
    if (e == "Log out") {
      setDataM({});

      let a = window.location;
      a.href = a.origin + '';

    }
    setDataM({
      ...dataM,
      hodStatus: e
    })
  }

  return (
    <>
      <div className=" h-full relative w-full -top-0.5 p-2    flex  justify-start items-start ">
        <div className=" h-full side-menu w-[16%]   shadow-xl    rounded-lg">

          <div className="py-12   ">



            <div className="flex items-center justify-center   ">
              <a href="">
                <div className="pt-4 flex flex-col justify-center items-center ">
                  <img
                    src="/static/img/User.png"
                    alt="logo"
                    className=" w-24  object-cover "
                  />
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[color:var(--01,#16376E)] text-[18px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.32px] capitalize">Hod 1</h2>
                    <h2 className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-normal leading-[normal] tracking-[0.2px] capitalize text-center "><span className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.2px] capitalize px-3"> HOD </span>of Computer Engineering
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
                    // onClick={() => {
                    //   setExpand((e) => !e);
                    // }}
                    onClick={() => { return onNavlinkClick(menuItem.name) }}
                    className={` ${menuItem.name == dataM.hodStatus ? "buttonForNavigation" : "notSelectedButton"}  `}
                  >
                    <span className="pl-3">{menuItem.name}</span>
                    {/* <h2 className="absolute left-full rounded-md px-2 py-1 ml-6 bg-red text-black text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 ">{menuItem.name}</h2> */}
                  </NavLink>
                )
                )}
              </ul>
            </div>






          </div>

        </div>
        <div className="w-[84%] ">
          <Outlet />
        </div>

      </div >


    </>
  )
}

export default Hod
