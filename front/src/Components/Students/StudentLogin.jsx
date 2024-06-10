import React, { useState, useEffect, useContext } from "react";
import { NavLink, Navigate, json, redirect, useNavigate } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";
import { mentoringDataContext } from "../../Context/mentoringDataContext";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentLogin() {


  const [loading, setLoading] = useState(false);
  const { dataM, setDataM } = useContext(mentoringDataContext);
  const { isStudent, setIsStudent } = useContext(mentoringDataContext);
  const { loggedStudent, setLoggedStudent } = useContext(mentoringDataContext);
  const navigate = useNavigate();

  // form data collection states and refs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = new FormData();
  formData.append("enrollment", email);

  const handleSubmit = (e) => {

    const testingStudetn = new FormData();
    testingStudetn.append("enrollment", email);
    axios({
      url: process.env.REACT_APP_SERVER + "/api/specificStudent/",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: testingStudetn,
    }).then(e => { return e.data }).then((e) => {
      let a = JSON.parse(e.data);

      if (a == 0) {
        // it run if any student with enrollemnt no is NOT found

        alert("No Student Found with this Enrollment No.")

      }
      else {
        // it run if any student with enrollemnt no. is found
        setLoggedStudent({
          ...a[0].fields
        })

        axios({
          url: process.env.REACT_APP_SERVER + "/api/IsStudentProfile/",
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: formData,

        }).then(e => e).then((e) => {

          if (e.data.status == "false") {
            // if studetn is not found

            setIsStudent(true);

            setLoggedStudent({
              enrollmentOfStudent: email,
              ...a[0].fields

            })

            navigate('/Students')
          }



          if (e.data.status == 'true') {
            // if studetn found
            setIsStudent(false);

            const dataForLogin = new FormData();
            dataForLogin.append("enrollment", email);
            dataForLogin.append("password", password);

            axios({
              url: process.env.REACT_APP_SERVER + "/api/studentLogin/",
              method: "POST",
              headers: {
                "Content-Type": "multipart/form-data",
              },
              data: dataForLogin,
            }).then(e => { return e.data }).then((e) => {

              if (e.Message == "Invalid Creddentials") {
                // if creadintal is  WRONG for alredy studetn with profile
                alert(e.Message);
                setLoggedStudent({});
              }
              else {
                // if creadintal is right for alredy studetn with profile
                navigate('/Students')
              }

            }).catch((e) => {
              console.log(e)
            })




          }



        }).catch((e) => {
          console.log(e)
        })

      }

    }).catch((e) => {
      console.log(e)
    })


  }

  return (
    <div className=' w-full relative h-full bg-[#f5f5f5] rounded-lg  py-16 flex justify-center  items-center'>
      <div onClick={() => { navigate("/Login") }} className=" absolute font-Inter tracking-wide text-lg text-blue-500 font-semibold underline underline-offset-4 top-0 right-0 p-5">
        Staff ?
      </div>
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
              Student Login
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
                    Enrollment Id
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
                    type="text"
                    autoComplete="off"
                    name="password"
                  />
                </div>


              </form>

            </div>
          </div>


          <div className=' w-full  flex justify-center items-center'>
            {/* ---------------- Login button ------------------ */}
            <div className="py-0">

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
  )
}

export default StudentLogin
