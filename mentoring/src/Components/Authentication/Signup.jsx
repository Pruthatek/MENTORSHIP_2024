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
        toast.error(`${res.data.msg}`, {
        })
      }
      if (res.data.status == 2) {

        toast.success(`${res.data.msg}`, {
        })
        navigation('/');

        setLoading(false)
      }
      else {
        toast.error(`Something went wrong !`, {
        })
        setLoading(false)
      }

    })
      .catch((err) => {
        toast.error("Wrong Credintials", {
        })
        setLoading(false)
      });

  }

  return (
    <>
      <div className=' w-full h-full bg-[#F6F3F3] overflow-auto py-16  flex justify-center items-start'>
        <div className=" w-[820px] h-fit relative -top-10 pb-5 bg-white shadow-[0px_9px_30px_0px_rgba(0,0,0,0.14)] rounded-[14px]  overflow-hidden   ">


          {/* -----------------------form start-------------------------- */}
          <div className="flex flex-row">

            {/* -------------------------- img section 1 start --------------------------- */}
            <div className="px-5 pl-9 flex items-center select-none">
              <img
                src="/static/img/Rectangle 4.svg"
                alt="logo"
                className="w-80  object-cover "
              />
            </div>
            {/* -------------------------- img section 1 end --------------------------- */}


            {/* -------------------------- middle line section 2 start --------------------------- */}
            <div className=" py-20">
              <div className="w-[2px]  h-full bg-[#D9D9D9]"></div>
            </div>
            {/* -------------------------- middle line section 2 end --------------------------- */}


            {/* -------------------------- form section 3  start --------------------------- */}
            <div className="flex flex-col px-5">


              <div className="px-32 py-10">
                <h2 className="text-[color:var(--02,#47A5E4)] text-[30px] font-Montserrat not-italic font-bold leading-[normal]">
                  Sign Up
                </h2>
              </div>

              <div className='px-5'>

                {/* ----------- userName -------------------- */}
                <div className="flex flex-col space-y-2 py-2">
                  <label
                    htmlFor="username"
                    className="text-[#1E1E1E] text-[18px] font-inter not-italic font-semibold leading-[normal]"
                  > User Name
                  </label>
                  <input className=" rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]" ref={userName} type="text" name="username" id="username" placeholder=' username' />
                </div>


                {/* ----------- Name -------------------- */}
                <div className="flex flex-col space-y-2 py-2">
                  <label
                    htmlFor="name"
                    className="text-[#1E1E1E] text-[18px] font-inter not-italic font-semibold leading-[normal]"
                  >
                    Name
                  </label>
                  <input className=" rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]" ref={Uname} type="text" name="name" id="name" placeholder='name' />
                </div>


                {/* -----------Last Name -------------------- */}
                <div className="flex flex-col space-y-2 py-2">
                  <label
                    htmlFor="lname"
                    className="text-[#1E1E1E] text-[18px] font-inter not-italic font-semibold leading-[normal]"
                  > Last Name
                  </label>
                  <input className=" rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]" ref={lname} type="text" name="lname" id="lname" placeholder='lname' />
                </div>



                {/* ----------- Email -------------------- */}
                <div className="flex flex-col space-y-2 py-2">
                  <label
                    htmlFor="email"
                    className="text-[#1E1E1E] text-[18px] font-inter not-italic font-semibold leading-[normal]"
                  > Email
                  </label>
                  <input className=" rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]" ref={email} type="email" name="email" id="email" placeholder='email' />
                </div>


                {/* ----------- Password -------------------- */}
                <div className="flex flex-col space-y-2 py-2">
                  <label
                    htmlFor="pass"
                    className="text-[#1E1E1E] text-[18px] font-inter not-italic font-semibold leading-[normal]"
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
                    className="rounded-[10px] text-center border appearance-none p-2 border-[#D9D9D9] w-[343px] h-[45px]  text-[18px] font-inter text-[#0D0D0D]  not-italic font-medium leading-[normal] "
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

                  {data == "Principal" ? <><input className='rounded-[10px] p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]' ref={college} type="text" name="college" id="college" placeholder='college' /> <input className=' p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]' ref={education} type="text" name="education" id="education" placeholder='education' /></> : ''}
                  {
                    data == "HOD" ? <> <input className='p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]' ref={education} type="text" name="education" id="education" placeholder='education' />
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


                {/* ----------- submit BUtton -------------------- */}
                <div className="py-3">
                  <button
                    onClick={signupHandler}
                    className="text-white rounded-[10px] text-[19px] transition-all duration-300 hover:border-[#00a1db] hover:bg-transparent hover:text-[#00a1db] border border-transparent font-Montserrat bg-[#47A5E4] w-[343px] h-[45px] not-italic font-bold leading-[normal]"
                  >
                    {!loading ? "Sign up" : <div className="load"></div>}
                  </button>
                  <div>
                    <p className=' w-full text-center flex justify-center items-center gap-5 pt-3'>Already have account ?<NavLink to={'/'} className='underline '>Login</NavLink></p>
                  </div>
                </div>



              </div>
            </div>
            {/* -------------------------- form section 3  end --------------------------- */}


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
