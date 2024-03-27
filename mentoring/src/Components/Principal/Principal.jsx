import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { mentoringDataContext } from "../../Context/mentoringDataContext";
import { Outlet } from "react-router-dom";

function Principal() {
  const { dataM, setDataM } = useContext(mentoringDataContext);

  const menuItems = [
    {
      name: "Home",
      exact: true,
      to: "/Principal",
    },
    {
      name: "Attendance",
      exact: true,
      to: "/Principal/attendanceprinciple",
    },
    {
      name: "Results",
      exact: true,
      to: "/Principal/resultspriciple",
    },
    {
      name: "Fees Details",
      exact: true,
      to: "/Principal/feesprinciple",
    },
    {
      name: "University",
      exact: true,
      to: "/Principal/universityprinciple",
    },
    {
      name: "Notification",
      exact: true,
      to: "/Principal/dashprinciple",
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
      principalStatus: "Home"
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
      principalStatus: e
    })
  }

  return (
    <div className=" h-full flex  flow-row   relative  -top-0.5 p-2 ">
      <div className=" side-menu  shadow-xl h-full rounded-lg    ">
        <div className="py-7  ">
          <div className="flex items-center justify-center   ">
            <a href="">
              <div className="pt-4 flex flex-col justify-center items-center ">
                <img
                  src="/static/img/User.png"
                  alt="logo"
                  className=" w-24  object-cover "
                />
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-[color:var(--01,#16376E)] text-[18px] not-italic font-Poppins font-bold leading-[normal] tracking-[0.32px] capitalize">Principal 1</h2>
                  <h2 className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-normal leading-[normal] tracking-[0.2px] capitalize text-center ">Principal of Computer Engineering
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
                  className={` ${menuItem.name == dataM.principalStatus ? "buttonForNavigation" : "notSelectedButton"}  `}
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


      <div className="w-[84%] ">
        <Outlet />
      </div>


    </div>
  );
};

export default Principal
