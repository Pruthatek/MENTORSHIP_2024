import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DragDropImage from "../MentorFormComponents/DragDropImage";
import FatherDragDrop from "../MentorFormComponents/FatherDragDrop";
import MotherDragDrop from "../MentorFormComponents/MotherDragDrop";
import { mentoringDataContext } from "../../../Context/mentoringDataContext";
const Basicinfo = ({ handleNextStep, list }) => {

  const [studentPhoto, setStudentPhoto] = useState(undefined);
  const [fatherPhoto, setfatherPhoto] = useState(undefined);
  const [motherPhoto, setmotherPhoto] = useState(undefined);



  const { stepNo, setStepNo } = useContext(mentoringDataContext);
  const { formData, setFormData, loggedUserInfo, loggedStudent, setLoggedStudent, setMentorFormDataForStudentPage, mentorFormDataForStudentPage } = useContext(mentoringDataContext);

  const [values, setValues] = React.useState({
    name: loggedUserInfo?.fullName,
    enrollmentno: loggedUserInfo?.EnrollmentNumber,
    sem1_mentorname: loggedUserInfo?.division?.mentorId?.facultyFullName,
    sem2_mentorname: loggedUserInfo?.division?.mentorId?.facultyFullName,
    sem3_mentorname: loggedUserInfo?.division?.mentorId?.facultyFullName,
    sem4_mentorname: loggedUserInfo?.division?.mentorId?.facultyFullName,
    sem5_mentorname: loggedUserInfo?.division?.mentorId?.facultyFullName,
    sem6_mentorname: loggedUserInfo?.division?.mentorId?.facultyFullName,
    sem7_mentorname: loggedUserInfo?.division?.mentorId?.facultyFullName,
    startyear: loggedUserInfo?.mentoringStartingYear,
    department: loggedUserInfo?.department?.departmentName,
    batchdiv: loggedUserInfo?.division?.subDivisionName


  });
  const prev = () => {
    setStepNo(stepNo - 1)
  }

  const next = () => {
    setStepNo(stepNo + 1)
  }


  const navigate = useNavigate()
  const onNext = () => {

    navigate("/history")
  };


  //handle change

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })

  }


  //   handlesubmit

  const handleSubmit = (e) => {
    e.preventDefault()

    setMentorFormDataForStudentPage({
      basicinfo: {
        ...values
      },
      student_photo: studentPhoto,
      father_photo: fatherPhoto,
      mother_photo: motherPhoto,

    })



    setStepNo(stepNo + 1)



  }

  const { name, enrollmentno, sem1_mentorname, sem2_mentorname, sem3_mentorname,
    sem4_mentorname, sem5_mentorname, sem6_mentorname, sem7_mentorname, startyear, department, batchdiv } = values


  useEffect(() => {

    setValues({
      name: loggedStudent?.name,
      enrollmentno: loggedStudent?.enrollment,
      sem1_mentorname: loggedStudent?.mentor_name,
      sem2_mentorname: loggedStudent?.mentor_name,
      sem3_mentorname: loggedStudent?.mentor_name,
      sem4_mentorname: loggedStudent?.mentor_name,
      sem5_mentorname: loggedStudent?.mentor_name,
      sem6_mentorname: loggedStudent?.mentor_name,
      sem7_mentorname: loggedStudent?.mentor_name,
      startyear: loggedStudent?.mentoring_started_year,
      department: loggedStudent?.department,
      batchdiv: loggedStudent?.division
    })

  }, [])


  return (
    <>
      <div className="">
        <div className="overflow-hidden   flex justify-center ">
          <div className="   pt-1 pb-14 relative w-screen px-10  max-h-[580px]    overflow-y-scroll ">
            <div className="flex justify-center  items-center">
              <h2 onClick={() => {
                console.log(loggedUserInfo)

              }} className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
                Basic Information
              </h2>
            </div>
            <div className=" pt-7 flex flex-row  items-center">
              <div className="flex px-1">
                <h2 className="text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                  {" "}
                  Note:
                </h2>
              </div>
              <div className="flex ">
                <h2 className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-normal leading-[normal] tracking-[0.28px] capitalize">
                  Please Fill all the details in{" "}
                  <span className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">
                    CAPITAL
                  </span>{" "}
                  Letters only
                </h2>
              </div>
            </div>

            {/* FORM START */}
            <form onSubmit={handleSubmit} className="px-10">
              <div className="flex  flex-row justify-between items-center py-5  ">
                <div className="">
                  <label
                    for="fullname"
                    className=" flex justify-start  py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                  >
                    Student Name{" "}
                  </label>
                  <div className=" p-0.5 w-[203px] h-[48px] ">
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleChange}

                      tabIndex={1}
                      placeholder="Full Name Of Student"
                      className=" hover:border-[2px] hover:border-[#159BD6]  text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize w-[380px] h-[40px] rounded-[5px] border-[1px] border-[#CBCBCB] bg-[#fff]  p-3  focus:outline-none"
                      required

                    />
                    {/* <div className="absolute lg:bottom-[530px] lg:left-[100px] md:bottom-[430px] md:left-[100px] font-semibold z-10 text-[10px] text-[#FF0000]">{snamval}</div> */}
                  </div>
                </div>
                <div className="">
                  <label
                    for="enrollmentno"
                    className="  flex justify-start py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                  >
                    Enrollment No{" "}
                  </label>
                  <div className=" p-0.5 w-[303px] h-[48px] ">
                    <input
                      disabled
                      readOnly

                      type="text"
                      id="enrollmentno"
                      placeholder="Enrollment No"
                      name="enrollmentno"
                      value={enrollmentno}
                      onChange={handleChange}

                      className=" hover:border-[2px] hover:border-[#159BD6] text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize  w-[313px] h-[40px] rounded-[5px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                      required
                      tabIndex={2}
                    />
                    {/* <div className="absolute lg:bottom-[530px] lg:left-[50rem]  font-semibold z-10 text-[10px] text-[#FF0000]">{enoval}</div> */}
                  </div>
                </div>
              </div>
              {/* PHOTOS ADD */}
              <div className="flex justify-between px-10 flex-row  items-center py-4">

                <DragDropImage setStudentPhoto={setStudentPhoto} />
                <FatherDragDrop setfatherPhoto={setfatherPhoto} />
                <MotherDragDrop setmotherPhoto={setmotherPhoto} />

              </div>
              {/* MENTOR ADD */}
              <div className=" flex flex-row justify-between items-center py-4 ">
                <div>
                  <div className=" relative  w-[100%]">
                    <table className=" min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden border-collapse ">
                      <thread>
                        <tr className="    px-3 sticky top-0 z-20 max-h-[70px]  h-[10px] ">
                          <th className=" w-full px-[4.1rem]  whitespace-nowrap border-r-[1px]  bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                            Sem
                          </th>
                          <th className="px-[7.1rem]  whitespace-nowrap border-l-[1px]  bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                            Mentor Name
                          </th>
                        </tr>
                      </thread>
                      <tbody>
                        <tr className="text-sm  h-[45px] rounded-lg  px-3 transition-all duration-300">

                          <td className="flex flex-row ">
                            <div className="px-[4.6rem] py-2 whitespace-nowrap border-[1px]   border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                              1st
                            </div>
                            <input
                              id="sem1_mentorname"
                              type="text"
                              disabled
                              readOnly
                              name="sem1_mentorname"
                              value={sem1_mentorname}
                              onChange={handleChange}
                              //onBlur={validateOne}
                              placeholder=""
                              className="p-3 w-[326px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]     focus:outline-none"
                              required
                              tabIndex={3}
                            />
                          </td>
                          <td className="flex flex-row ">
                            <div className="px-[4.29rem] py-2 whitespace-nowrap table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                              2nd
                            </div>
                            <input
                              disabled
                              readOnly
                              id="sem2_mentorname"
                              type="text"
                              name="sem2_mentorname"

                              value={sem2_mentorname}
                              onChange={handleChange}
                              //onBlur={validateOne}
                              placeholder=""
                              className="p-3 table-auto1 w-[326px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                              required
                              tabIndex={4}
                            />
                          </td>
                          <td className="flex flex-row ">
                            <div className="px-[4.39rem] py-2 whitespace-nowrap border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                              3rd
                            </div>
                            <input
                              disabled
                              readOnly
                              type="text"
                              id="sem3_mentorname"
                              name="sem3_mentorname"
                              value={sem3_mentorname}
                              onChange={handleChange}
                              //onBlur={validateOne}
                              placeholder=""
                              className=" p-3 w-[326px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                              required
                              tabIndex={5}
                            />
                          </td>
                          <td className="flex flex-row  ">
                            <div className="px-[4.39rem] py-2   whitespace-nowrap  table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                              4th
                            </div>
                            <input
                              disabled
                              readOnly
                              type="text"
                              id="sem4_mentorname"
                              name="sem4_mentorname"
                              value={sem4_mentorname}
                              onChange={handleChange}
                              //onBlur={validateOne}
                              placeholder=""
                              className="p-3 table-auto1 w-[326px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                              required
                              tabIndex={6}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <div className="-top-5 relative  w-[100%]">
                    <table className=" min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden border-collapse ">
                      <thread>
                        <tr className="     px-3 sticky top-0 z-20 max-h-[70px]  h-[10px] ">
                          <th className=" px-[3.1rem]  whitespace-nowrap border-r-[1px]  bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                            Sem
                          </th>
                          <th className="px-[6.1rem]  w-full whitespace-nowrap border-l-[1px]  bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                            Mentor Name
                          </th>
                        </tr>
                      </thread>
                      <tbody>
                        <tr className="text-sm  h-[45px] rounded-lg  px-3 transition-all duration-300">
                          <td className="flex flex-row ">
                            <div className="px-[3.35rem] py-2 whitespace-nowrap border-[1px]   border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                              5th
                            </div>
                            <input
                              disabled
                              readOnly
                              type="text"
                              id="sem5_mentorname"
                              name="sem5_mentorname"
                              value={sem5_mentorname}
                              onChange={handleChange}
                              //onBlur={validateOne}
                              //onBlur={validateOne}
                              placeholder=""
                              className="p-3 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                              required
                              tabIndex={5}
                            />
                          </td>
                          <td className="flex flex-row ">
                            <div className="px-[3.35rem] py-2 whitespace-nowrap table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                              6th
                            </div>
                            <input
                              disabled
                              readOnly
                              type="text"
                              id="sem6_mentorname"
                              name="sem6_mentorname"
                              value={sem6_mentorname}
                              onChange={handleChange}
                              //onBlur={validateOne}
                              placeholder=""
                              className="p-3 table-auto1 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                              required
                              tabIndex={6}
                            />
                          </td>
                          <td className="flex flex-row ">
                            <div className="px-[3.39rem] py-2 whitespace-nowrap border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                              7th
                            </div>
                            <input
                              disabled
                              readOnly
                              type="text"
                              name="sem7_mentorname"
                              value={sem7_mentorname}
                              onChange={handleChange}
                              //onBlur={validateOne}
                              placeholder=""
                              className=" p-3 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                              required
                              tabIndex={7}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>


              </div>
              {/* INPUTS */}
              <div className="flex justify-between items-center flex-row py-5">
                <div className="flex flex-col">
                  <label
                    for="caste"
                    className="px-1  py-2 flex justify-start text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Mentoring Started Year:{" "}
                  </label>

                  <input
                    type="number"
                    disabled
                    readOnly
                    name="startyear"
                    placeholder="(YYYY)"
                    value={startyear}
                    onChange={handleChange}
                    //onBlur={validateOne}
                    className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex={10}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for="department"
                    className="px-1 flex justify-start  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Department:{" "}
                  </label>

                  <input
                    type="text"
                    name="department"
                    disabled
                    readOnly
                    value={department}
                    onChange={handleChange}
                    //onBlur={validateOne}
                    placeholder="Department"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex={11}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for="batchdiv"
                    className="flex justify-start px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Batch/Div:{" "}
                  </label>

                  <input
                    type="text"
                    disabled
                    readOnly
                    name="batchdiv"
                    value={batchdiv}
                    onChange={handleChange}
                    //onBlur={validateOne}
                    placeholder="Batch/Div"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex={12}
                  />
                </div>
              </div>
              {/* <UseContextProvider>{displayStep(currentStep)}</UseContextProvider> */}
              {/* BUTTONS */}

              <button type="submit"
                // onClick={handleNextStep}
                className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
              >Save & Next</button>

              {/* <button type="submit" onClick={handleNextStep}>Save & Next</button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basicinfo;
