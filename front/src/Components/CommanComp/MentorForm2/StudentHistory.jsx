import React, { useState, useContext } from "react";
import { FaSortDown } from "react-icons/fa";

import { mentoringDataContext } from "../../../Context/mentoringDataContext";

const StudentHistory = ({ handleNextStep, handlePrevStep }) => {

  const { stepNo, setStepNo } = useContext(mentoringDataContext);
  const { formData, setFormData } = useContext(mentoringDataContext);
  const [data, setData] = useState({});

  const options = [
    "India", "Canada", "France", "Germany"
  ];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };
  const [values, setValues] = React.useState({
    studentname: "",
    date: "",
    emailId: "",
    dob: "",
    caste: "",
    gender: "",
    weight: "",
    height: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    hobbies: "",
    selectnantion: "",
    sports: "",
    ssc: "",
    hsc: "",
    diploma: "",
    studentno: "",
    fatherno: "",
    motherno: "",
    fathername: "",
    foccupation: "",
    mothername: "",
    moccupation: ""




  });

  const [validations, setValidations] = React.useState({
    studentname: "",
    date: "",
    emailId: "",
    dob: "",
    caste: "",
    gender: "",
    weight: "",
    height: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    hobbies: "",
    selectnantion: "",
    sports: "",
    ssc: "",
    hsc: "",
    diploma: "",
    studentno: "",
    fatherno: "",
    motherno: "",
    fathername: "",
    foccupation: "",
    mothername: "",
    moccupation: ""

  });

  const { studentname, date, emailId, dob, caste, gender, weight, height, address, city, state, pincode, hobbies, selectnantion, sports, ssc, hsc, diploma, studentno, fatherno, motherno, fathername, foccupation, mothername, moccupation } = values;

  const validateAll = () => {
    const validations = { studentname: "", date: "", emailId: "", dob: "", caste: "", gender: "", weight: "", height: "", address: "", city: "", state: "", pincode: "", hobbies: "", selectnantion: "", studentno: "", fatherno: "", motherno: "", fathername: "", mothername: "" };

    let isValid = true;
    if (!studentname) {
      //validations.firstName = 'First Name is required'
      alert("student Name is required" + validations.studentname);
      isValid = false;
    }
    if ((studentname && studentname.length < 3) || studentname.length > 50) {
      //validations.firstName = 'First Name must contain between 3 and 50 characters'
      alert(
        "Student  Name must contain between 3 and 50 characters: " +
        validations.studentname
      );
      isValid = false;
    }

    const prev = () => {
      setStepNo(stepNo - 1)
    }

    const next = () => {
      setStepNo(stepNo + 1)
    }



    //email valdiation
    if (!emailId) {
      // validations.enrollmentno = 'enrollmentno is required'
      alert('Email is required' + validations.emailId)
      isValid = false
    }


    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (emailId && !emailRegex.test(emailId)) {

      alert('Email format must be as example@gmail.com: ' + validations.emailId);
      isValid = false
    }



    //Address validation

    if (!address) {

      alert('Address is required' + validations.address);
      isValid = false
    }
    if (address && address.length < 10 || address.length > 150) {

      alert('address must contain between 10 and 150 characters: ' + validations.address);
      isValid = false
    }

    //student phone number validation 

    // const phoneRegex = /^[0-9]{10}$/;
    // if (studentno && !phoneRegex.test(studentno)) {

    //   alert('Please enter a valid student phone number ' + validations.studentno);
    //   isValid = false
    // }

    // if (fatherno && !phoneRegex.test(fatherno)) {

    //   alert('Please enter a valid Father phone number ' + validations.fatherno);
    //   isValid = false
    // }

    // if (motherno && !phoneRegex.test(motherno)) {

    //   alert('Please enter a valid Motherno phone number ' + validations.motherno);
    //   isValid = false
    // }

    // //Pin code validation 
    // const pincodeRegex = /^[1-9][0-9]{5}$/;
    // if (pincode && !pincodeRegex.test(pincode)) {

    //   alert('Please enter a valid Pincode ' + validations.pincode);
    //   isValid = false
    // }


    if (!isValid) {
      setValidations(validations);
    }


    return isValid;
  };

  const validateOne = (e) => {
    const { name } = e.target;
    const value = values[name];
    let message = "";
    if (!value) {
      // message = `${name} is required`
      alert(`${name}  is required` + message);
    }

    if (
      value &&
      name === "studentname" &&
      (value.length < 3 || value.length > 50)
    ) {
      //message = 'Name must contain between 3 and 50 characters'
      alert(
        " Student Name must contain between 3 and 150 characters: " + message
      );
    }

    //Email validation

    if (!value) {

      // message=`${name} is required`
      alert(`${name} is required` + message)
      console.log(message)
      //toast.error(message)
    }
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (value && name === 'emailId' && !emailRegex.test(value)) {
      //message = 'Email format must be as example@mail.com'
      alert('Email format must be as example@gmail.com ' + message);
    }


    //Address validation
    if (value && name === 'address' && (value.length < 10 || value.length > 150)) {

      alert(' Address must contain between 10 and 50 characters: ' + message);
    }

    //student number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (value && name === ' studentno' && !phoneRegex.test(value)) {

      alert('Please enter a valid Student phone number ' + message);
    }

    //student number validation

    if (value && name === ' fatherno' && !phoneRegex.test(value)) {

      alert('Please enter a valid Father phone number ' + message);
    }

    //student number validation

    if (value && name === ' motherno' && !phoneRegex.test(value)) {

      alert('Please enter a valid Mather phone number ' + message);
    }


    //Pin code validation 
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    if (value && name === ' pincode' && !pincodeRegex.test(value)) {

      alert('Please enter a valid Pincode' + message);
    }

    setValidations({ ...validations, [name]: message });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //setState({...state,[name]:value});
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values)

    const isValid = validateAll();
    setStepNo(stepNo + 1)

    setFormData({
      ...formData,
      studentHistory: {
        ...values

      }
    })

    if (!isValid) {
      return false;
    }

    // alert(JSON.stringify(values));
  };

  const textInput = React.useRef();

  return (
    <>
      {/* <Progressbar/> */}
      <div className="overflow-hidden   flex justify-center ">
        <div className="   pt-1 pb-14 relative w-screen px-10  max-h-[580px]    overflow-y-scroll ">
          <div className="flex justify-center  items-center py-4">
            <h2 onClick={() => {
              console.log(formData)
            }} className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
              Student History And Information
            </h2>
          </div>

          {/* FORM START */}

          <div className="px-1">
            <form onSubmit={handleSubmit}>
              <div className="flex  flex-row px-10 justify-between items-center  py-5">
                <div className="flex flex-row">
                  <label
                    for="studentname"
                    className=" px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]">
                    Student Name:{" "}
                  </label>

                  <input
                    type="text"
                    id="studentname"
                    name="studentname"
                    value={studentname}
                    onChange={handleInputChange}
                    onBlur={validateOne}
                    className="hover:border-[2px] hover:border-[#159BD6] ml-[20px] w-[300px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    placeholder="First/Second"
                    tabindex="1"
                  />
                </div>
                <div className="flex flex-row">
                  <label
                    for="date"
                    className="px-1 ml-[50px] py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Date :{" "}
                  </label>

                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="DD/MM/YYYY"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[150px] h-[40px] ml-[20px] rounded-[5px] border  border-[#CBCBCB] bg-[#FFFFFF] font-inter text-stone-300 uppercase p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="2"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center px-10 flex-row py-5">
                <div className="flex flex-row">
                  <label
                    for="emailId"
                    className=" px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Email Address:{" "}
                  </label>

                  <input
                    type="text"
                    id="emailId"
                    name="emailId"
                    value={emailId}
                    onChange={handleInputChange}
                    // onBlur={validateOne}
                    className="hover:border-[2px] hover:border-[#159BD6] w-[302px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    placeholder="Email Address"
                    tabindex="3"
                  />
                </div>
                <div className="flex flex-row">
                  <label
                    for="dob"
                    className=" px-1  py-2 ml-[50px] text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Date Of Birth:{" "}
                  </label>

                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={dob}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="DD/MM/YYYY"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[150px] h-[40px] rounded-[5px] text-stone-300 uppercase border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="4"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center px-10 flex-row py-5">
                <div className="flex flex-row">
                  <label
                    for="caste"
                    className="px-1  py-2 ttext-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Caste:
                  </label>

                  <input
                    type="text"
                    id="caste"
                    name="caste"
                    value={caste}
                    onChange={handleInputChange}
                    // onBlur={validateOne}
                    placeholder=" Caste"
                    className="hover:border-[2px] hover:border-[#159BD6] mr-[37px] w-[235px] h-10 rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="5"
                  />
                </div>
                <div className="flex flex-row">
                  <label
                    for="gender"
                    className="px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Gender:{" "}
                  </label>

                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="Gender"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[161px] h-10 mr-[37px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="6"
                  />
                </div>
                <div className="flex flex-row">
                  <label
                    for="weight"
                    className=" px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Weight:{" "}
                  </label>

                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={weight}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="Weight"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[140px] h-[40px] mr-[37px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="7"
                  />
                </div>
                <div className="flex flex-row">
                  <label
                    for="height"
                    className="  px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Height:{" "}
                  </label>

                  <input
                    type="text"
                    id="height"
                    name="height"
                    value={height}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="Height"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[150px] h-[40px]  rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="8"
                  />
                </div>
              </div>

              <div className="px-10">
                <label
                  for=" address"
                  className=" px-1 block py-2 text-left  text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                >
                  Address
                </label>
                <textarea
                  type=" text"
                  id=" address"
                  name="address"
                  value={address}
                  onChange={handleInputChange}
                  onBlur={validateOne}
                  className="hover:border-[2px] hover:border-[#159BD6] resize-none mr-[5rem]  w-[490px] h-[97px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                  placeholder=" Address"
                  required
                  tabIndex="9"
                />
              </div>

              <div className="flex justify-between items-center px-10 lex-row py-5">
                <div className="flex flex-row">
                  <label
                    for="city"
                    className=" px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    City:{" "}
                  </label>

                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={handleInputChange}
                    // onBlur={validateOne}
                    placeholder="City"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[200px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="10"
                  />
                </div>
                <div className="flex flex-row">
                  <label
                    for="state"
                    className=" px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    State:{" "}
                  </label>

                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={state}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="State"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[200px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="11"
                  />
                </div>
                <div className="flex flex-row">
                  <label
                    for="pincode"
                    className=" px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Pin Code:{" "}
                  </label>

                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={pincode}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="Pin Code"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[200px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="12"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center px-10 flex-row py-5">
                <div className="flex flex-row">
                  <label
                    for="hobbies"
                    className=" px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Hobbies :{" "}
                  </label>

                  <input
                    type="text"
                    id="hobbies"
                    name="hobbies"
                    value={hobbies}
                    onChange={handleInputChange}
                    // onBlur={validateOne}
                    className="hover:border-[2px] hover:border-[#159BD6] w-[300px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    placeholder="Hobbies"
                    tabindex="13"
                  />
                </div>

                <div className="flex flex-row">
                  <label
                    for="hobbies"
                    className="ml-[20px] px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Are You :{" "}
                  </label>
                  <div className="flex justify-center relative min-w-[198px] px-1 h-[40px]">
                    <select onChange={onOptionChangeHandler} className=" px-9 rounded-[5px] border-none appearance-none p-2 w-[100%] hover:text-[#47A5E4] bg-[#E6E6E6] text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
                      id="12th"
                      name="selectoption"
                      // value={selectoption}
                      // onChange={handleInputChange}
                      //onBlur={validateOne}
                      tabIndex={1}

                    >
                      <option className="">National</option>
                      {options.map((option, index) => {
                        return (
                          <option key={index}>
                            {option}
                          </option>
                        );
                      })}
                    </select>
                    <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
                      <span className="text-[20px] text-black  "><FaSortDown /></span>
                    </div>
                  </div>


                  {/* <Nationaldropdown selected={selected} setSelected={setSelected} /> */}
                </div>
              </div>

              <div className="px-10">
                <label
                  for="sports "
                  className=" px-1 block py-2 text-left  text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                >
                  What sports do you play ?
                </label>
                <textarea
                  type=" text"
                  id=" sports"
                  name="sports"
                  value={sports}
                  onChange={handleInputChange}
                  //onBlur={validateOne}
                  className="hover:border-[2px] hover:border-[#159BD6] resize-none mr-[5rem]  w-[390px] h-[97px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                  placeholder=" Cricket/Football/Volleyball/Hockey/Other...."
                  required
                  tabIndex="14"
                />
              </div>

              <div className="flex justify-between items-center px-10 flex-row py-5">
                <div className="flex flex-row">
                  <label
                    for="ssc"
                    className=" px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    10th %:{" "}
                  </label>

                  <input
                    type="text"
                    id="ssc"
                    name="ssc"
                    value={ssc}
                    onChange={handleInputChange}
                    // onBlur={validateOne}
                    placeholder="Overall %"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[200px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="15"
                  />
                </div>
                <div className="flex flex-row">
                  <label
                    for="hsc"
                    className=" px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    12th %:{" "}
                  </label>

                  <input
                    type="text"
                    id="hsc"
                    name="hsc"
                    value={hsc}
                    onChange={handleInputChange}
                    onBlur={validateOne}
                    placeholder="Overall %"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[200px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="16"
                  />
                </div>
                <div className="flex flex-row">
                  <label
                    for="diploma"
                    className=" px-2  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                  >
                    Diploma %:{" "}
                  </label>

                  <input
                    type="text"
                    id="diploma"
                    name="diploma"
                    value={diploma}
                    onChange={handleInputChange}
                    // onBlur={validateOne}
                    placeholder="Overall %"
                    className="hover:border-[2px] hover:border-[#159BD6] w-[200px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                    required
                    tabindex="17"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center px-10 flex-row py-5">
                <div className="flex flex-row">
                  <div className="mb-6">
                    <label
                      for=" studentno"
                      className=" px-1 block py-2 text-left  text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                    >
                      Student No:
                    </label>
                    <input
                      type="number"
                      id="studentno"
                      name="studentno"
                      value={studentno}
                      onChange={handleInputChange}
                      onBlur={validateOne}
                      className="hover:border-[2px] hover:border-[#159BD6] ml-[5px]  w-[280px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                      placeholder=" Student  No"
                      required
                      tabIndex="18"
                    />
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="mb-6">
                    <label
                      for="fatherno"

                      className=" px-1 block py-2 text-left  text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                    >
                      Father No:
                    </label>
                    <input
                      type="number"
                      id=" fatherno"
                      name="fatherno"
                      value={fatherno}
                      onChange={handleInputChange}
                      onBlur={validateOne}
                      className="hover:border-[2px] hover:border-[#159BD6] ml-[5px]  w-[280px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                      placeholder=" Father No:"
                      required
                      tabIndex="19"
                    />
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="mb-6">
                    <label
                      for="motherno"
                      className=" px-1 block py-2 text-left  text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                    >
                      Mother No:
                    </label>
                    <input
                      type="number"
                      id=" motherno"
                      name="motherno"
                      value={motherno}
                      onChange={handleInputChange}
                      onBlur={validateOne}
                      className="hover:border-[2px] hover:border-[#159BD6] ml-[5px] w-[280px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                      placeholder=" Mother No:"
                      required
                      tabIndex="20"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center px-10 flex-row py-5">
                <div className="flex flex-row">
                  <div className="mb-6">
                    <label
                      for=" fathername"
                      className=" px-1 block py-2 text-left  text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                    >
                      Father Name:
                    </label>
                    <input
                      type="text"
                      id="fathername"
                      name="fathername"
                      value={fathername}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      className="hover:border-[2px] hover:border-[#159BD6] ml-[5px]  w-[350px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                      placeholder="  first/Second"
                      required
                      tabIndex="21"
                    />
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="mb-6">
                    <label
                      for="foccupation"
                      className=" px-3 block py-2 text-left  text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                    >
                      Father Occupation:
                    </label>
                    <input
                      type="text"
                      id=" foccupation"
                      name="foccupation"
                      value={foccupation}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      className="hover:border-[2px] hover:border-[#159BD6] ml-[10px]  w-[364px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                      placeholder=" Occupation"
                      required
                      tabIndex="22"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center px-10 flex-row py-5">
                <div className="flex flex-row">
                  <div className="mb-6">
                    <label
                      for="mothername"
                      className=" px-1 block py-2 text-left  text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                    >
                      Mother Name:
                    </label>
                    <input
                      type="text"
                      id="mothername"
                      name="mothername"
                      value={mothername}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      className="hover:border-[2px] hover:border-[#159BD6] ml-[5px]  w-[350px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                      placeholder="  first/Second"
                      required
                      tabIndex="23"
                    />
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="mb-6">
                    <label
                      for=" moccupation"
                      className=" px-1 block py-2 text-left  text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
                    >
                      Mother Occupation:
                    </label>
                    <input
                      type="text"
                      id=" moccupation"
                      name="moccupation"
                      value={moccupation}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      className="hover:border-[2px] hover:border-[#159BD6] ml-[10px]  w-[364px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                      placeholder=" Occupation"
                      required
                      tabIndex="24"
                    />
                  </div>
                </div>
              </div>
              {/* BUTTONS */}
              <div className="flex flex-row py-5 justify-center items-center gap-x-7">
                <button
                  onClick={() => {
                    setStepNo(stepNo - 1)
                  }}
                  className="border-[#159BD6] px-10 py-2 border-[1px] rounded-[5px] text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                  Cancel
                </button>
                <button
                  type="submit"

                  className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                  Save & Next
                </button>

              </div>{" "}
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHistory;
