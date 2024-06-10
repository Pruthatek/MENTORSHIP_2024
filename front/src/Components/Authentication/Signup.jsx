import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

  const navigation = useNavigate();
  // All states
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);


  // form data collection refs
  const userName = useRef('');
  const pass = useRef('');
  const userType = useRef('');
  const Uname = useRef('');
  const lname = useRef('');
  const email = useRef('');
  const college = useRef('');
  const education = useRef('');
  const department = useRef('');
  const mentoring_calss = useRef('');
  const number_of_students = useRef('');



  // select box opitons and their handlers
  const options = ['', "Principal", "HOD", "Mentor", "Chairman", "Student"];

  async function signupHandler() {
    setLoading(true)
    const formData = new FormData();
    formData.append("username", userName.current.value);
    formData.append("name", Uname.current.value);
    formData.append("lname", lname.current.value);
    formData.append("email", email.current.value);
    formData.append("pass1", pass.current.value);
    formData.append("user_type", data);
    formData.append("education", education.current.value);
    formData.append("department", department.current.value);
    formData.append("mentoring_calss", mentoring_calss.current.value);
    formData.append("number_of_students", number_of_students.current.value);

    axios({
      url: process.env.REACT_APP_SERVER + "/api/signup/",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then((res) => {

      if (res.data.status == 1) {
        toast.success(`${res.data.msg}`, {
        })
      }
      if (res.data.status == 2) {

        toast.success(`${res.data.msg}`, {
        })

        navigation('');
        setLoading(false)
      }
      else {
        // toast.error(`Something went wrong !`, {
        // })
        setLoading(false)
      }

    })
      .catch((err) => {
        toast.error("Something went Wrong or Wrong Credintials", {
        })
        setLoading(false)
      });

  }

  return (
    <>
      <div className=' w-full h-full bg-[#f5f5f5] rounded-lg  py-16 flex justify-center  items-center'>

        <div className=' w-[820px] flex flex-row justify-center shadow-[0px_9px_30px_0px_rgba(0,0,0,0.14)] p-5 items-start   bg-white  h-full rounded-[14px]'>

          {/* logo section  */}
          <div className=' w-[45%] flex flex-col justify-center items-center h-full  '>
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
                Sign Up
              </h2>
            </div>
            <div className='   relative h-full w-full py-3'>
              <div className=' w-full flex justify-start items-center flex-col h-[95%] absolute overflow-auto  '>

                {/* ----------- userName -------------------- */}
                <div className="flex flex-col  w-fit  space-y-1 py-2">
                  <label
                    htmlFor="username"
                    className="text-[#1E1E1E] text-[17px]  font-Poppins  not-italic font-medium leading-[normal]"
                  > User Name
                  </label>
                  <input className=" rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]" ref={userName} type="text" name="username" id="username" placeholder=' username' />
                </div>


                {/* ----------- Name -------------------- */}
                <div className="flex flex-col space-y-1 py-2">
                  <label
                    htmlFor="name"
                    className="text-[#1E1E1E] text-[17px]  font-Poppins  not-italic font-medium leading-[normal]"
                  >
                    Name
                  </label>
                  <input className=" rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]" ref={Uname} type="text" name="name" id="name" placeholder='name' />
                </div>


                {/* -----------Last Name -------------------- */}
                <div className="flex flex-col space-y-1 py-2">
                  <label
                    htmlFor="lname"
                    className="text-[#1E1E1E] text-[17px]  font-Poppins  not-italic font-medium leading-[normal]"
                  > Last Name
                  </label>
                  <input className=" rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]" ref={lname} type="text" name="lname" id="lname" placeholder='lname' />
                </div>



                {/* ----------- Email -------------------- */}
                <div className="flex flex-col space-y-1 py-2">
                  <label
                    htmlFor="email"
                    className="text-[#1E1E1E] text-[17px]  font-Poppins  not-italic font-medium leading-[normal]"
                  > Email
                  </label>
                  <input className=" rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]" ref={email} type="email" name="email" id="email" placeholder='email' />
                </div>


                {/* ----------- Password -------------------- */}
                <div className="flex flex-col space-y-1 py-2">
                  <label
                    htmlFor="pass"
                    className="text-[#1E1E1E] text-[17px]  font-Poppins  not-italic font-medium leading-[normal]"
                  > Password
                  </label>
                  <input className=" rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]" ref={pass} type="password" name="pass" id="pass" placeholder='pass' />
                </div>


                {/* ----------- selection of user -------------------- */}
                <div className="flex flex-col space-y-2 py-2">
                  <select
                    onChange={(event) => { setData(event.target.value) }}
                    value={data}
                    name="role"
                    className="rounded-[10px] text-center border appearance-none p-2 border-[#D9D9D9] w-[343px] h-[45px]  text-[18px]  font-Poppins text-[#0D0D0D]  not-italic font-medium leading-[normal] "
                  >
                    {options.map((option, index) => {
                      return (
                        <option className='  bg-[#2eb2f99e] ' key={index}>
                          <h2 className="text-[#0D0D0D]  text-lg not-italic font-medium leading-[normal]">
                            {option}
                          </h2>
                        </option>
                      );
                    })}
                  </select>

                  {data == "Principal" ? <>
                    <input className='rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]' ref={college} type="text" name="college" id="college" placeholder='college' />

                    <input className='rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]' ref={education} type="text" name="education" id="education" placeholder='education' />
                  </> : ''}
                  {
                    data == "HOD" ? <> <input className='p-2 border-[1px] rounded-[10px]  border-[#D9D9D9]  w-[343px] h-[45px]' ref={education} type="text" name="education" id="education" placeholder='education' />
                      <input className='rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]' ref={department} type="text" name="department" id="department" placeholder='department' /></> : ''
                  }
                  {
                    data == "Mentor" ? <>
                      <input className='rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]' ref={department} type="text" name="department" id="department" placeholder='department' />
                      <input className='rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]' ref={mentoring_calss} type="text" name="mentoring_calss" id="mentoring_calss" placeholder='mentoring_calss' />
                      <input className='rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]' ref={number_of_students} type="text" name="number_of_students" id="number_of_students" placeholder='number_of_students' />

                    </> : ''
                  }
                </div>







              </div>
            </div>


            <div className=' w-full  flex justify-center items-center'>
              {/* ----------- submit BUtton -------------------- */}
              <div className="py-0">

                {!loading ? <button
                  onClick={signupHandler}
                  className={"text-white rounded-[10px] text-[19px] transition-all duration-300 hover:border-[#00a1db] hover:bg-transparent hover:text-[#00a1db] border border-transparent font-Montserrat bg-[#47A5E4] w-[343px] h-[45px] not-italic font-bold leading-[normal]"}
                >
                  Sign up
                </button> : <button
                  // onClick={signupHandler}
                  className={"text-white rounded-[10px] text-[19px] transition-all duration-300 hover:border-[#00a1db]   border border-transparent font-Montserrat bg-[#47A5E4] w-[343px] h-[45px] not-italic font-bold leading-[normal]"}
                >
                  <div className="load"></div>
                </button>}

                <div>
                  <p className=' w-full font-Poppins text-center flex justify-center items-center gap-5 pt-3'>Already have account ?<NavLink to={'/Login'} className='underline text-[#47A5E4] underline-offset-2  uppercase'>Login</NavLink></p>
                </div>
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

export default Signup
