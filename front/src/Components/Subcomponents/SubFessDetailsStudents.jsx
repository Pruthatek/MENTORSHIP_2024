import React, { useState, useRef } from 'react'
import { FaSortDown } from "react-icons/fa";
import { BiRightArrowAlt } from 'react-icons/bi'

const SubFessDetailsStudents = () => {
  const fileInputRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  //first
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Display the name of the selected file
      console.log('Selected File:', file.name);

      // You can also store the file object in state if needed
      setSelectedImage(file);
    }
  };
  // handle button

  const handlebutton = () => {
    fileInputRef.current.click();
  }
  const [data, setData] = useState({});
  const options = [
    "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"
  ];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };
  return (
    <>
      <div className=" px-2 w-full  overflow-auto h-full">
        <div className="flex flex-row justify-between ">


        </div>
        <div className=" px-12  py-5  bg-white rounded-lg ">
          <div className="flex flex-row justify-between  ">
            <h2 className="text-[color:var(--01,#16376E)] text-[20px] font-Poppins not-italic font-bold leading-[normal] tracking-[1.1px]">21BECE30000</h2>
            <h2 className="text-[color:var(--01,#16376E)] text-[18px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.99px]">Raj Mehta</h2>
          </div>

          <div className="flex justify-center  items-center ">
            <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
              Fees Details
            </h2>
          </div>

          <form>
            <div className="flex flex-row gap-x-[22rem] py-5  items-center justify-center">
              <div>
                <span
                  onClick={handlebutton}
                  type="button"
                  className="text-white text-[16.5px] font-inter   bg-[#159BD6] rounded-[5px]  font-bold px-12 py-2.5 mr-2 mb-2 leading-[19.36px] tracking-[2%] capitalize"
                >
                  <input
                    type="file"
                    id="imageUpload"
                    className="hidden"
                    // value={selectedImage}
                    accept="image/*" // Specify the accepted file types (e.g., images)
                    onChange={handleImageChange}
                    ref={fileInputRef}
                  />
                  Upload Result Copy
                </span>
                {selectedImage && (
                  <div>
                    <span
                      onClick={handlebutton}
                      className=" pt-2 text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize px-20 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] py-2  bg-[#159BD6]">
                      {selectedImage.name}</span>
                  </div>
                )}
              </div>
              <div className="flex ">
                <label
                  for="Semester"
                  className="ml-[20px] font-Poppins px-1  py-2 text-[16px]   font-semibold text-[#1E1E1E] leading-[24px]"
                >
                  Semester :{" "}
                </label>
                <div className="flex flex-row justify-center items-center">
                  <div className="flex justify-center relative min-w-[38px] px-1 h-[40px]">
                    <select onChange={onOptionChangeHandler} className=" px-9 rounded-[5px] border-none appearance-none p-2 w-[100%] hover:text-[#47A5E4] bg-[#E6E6E6] text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
                      id="12th"
                      name="selectoption"
                      // value={selectoption}
                      // onChange={handleInputChange}
                      //onBlur={validateOne}
                      tabIndex={1}

                    >
                      <option className="">Semester 1</option>
                      {options.map((option, index) => {
                        return (
                          <option key={index}>
                            {option}
                          </option>
                        );
                      })}
                    </select>
                    <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1 right-2 flex items-center justify-center ">
                      <span className="text-[20px] text-black  "><FaSortDown /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table  */}
            {/* <div className="flex items-center justify-center text-white text-[16px] w-[500px] h-[45px]   bg-[#16376E] rounded-[5px]  font-bold   leading-[19.36px] tracking-[2%] capitalize">
                <h1>College Fees Semester -1 </h1>
            </div> */}
            <div className="py-4 flex items-center justify-center">
              <table className=" ">
                <div className="py-10">
                  <tr>
                    <th colspan="5" className="p-2 text-white text-center font-inter text-[18px] h-[45px]   bg-[#16376E] rounded-[5px]  font-bold   leading-[21.78px] tracking-[2%]">
                      College Fees Semester - 1 </th>

                  </tr>
                  <tr className="text-center ">
                    <th className=" border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      amount
                    </th>
                    <th className="border-r-[1px] w-[170px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Status
                    </th>
                    <th className="border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Payment Method
                    </th>
                    <th className="border-r-[1px] w-[400px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Proof
                    </th>
                  </tr>
                  <tr className="">
                    <td>
                      <div className="font-inter text-center  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        54000/-
                      </div>
                    </td>
                    <td>
                      <div className="font-inter text-center text-[#00BE35]  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        Paid
                      </div>
                    </td>

                    <td>
                      <div className=" font-inter text-center  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        Cash
                      </div>
                    </td>
                    <td>
                      <div className="font-inter text-center  w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        -
                      </div>
                    </td>
                  </tr>
                </div>

                <div className="py-10">
                  <tr>
                    <th
                      colspan="5"
                      className="p-2 text-white text-[18px] h-[45px]   bg-[#16376E] rounded-[5px]  font-bold   leading-[21.78px] tracking-[2%]">
                      Exam Fees Semester -1  </th>

                  </tr>
                  <tr className="text-center ">
                    <th className="border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      amount
                    </th>
                    <th className="border-r-[1px] w-[170px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Status
                    </th>
                    <th className="border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Payment Method
                    </th>
                    <th className="border-r-[1px] w-[400px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Proof
                    </th>
                  </tr>
                  <tr className="">
                    <td>
                      <div className="font-inter text-center  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        775/-
                      </div>
                    </td>
                    <td>
                      <div className=" font-inter text-center text-[#00BE35]  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        Paid
                      </div>
                    </td>

                    <td>
                      <div className=" font-inter  text-center w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        Cash
                      </div>
                    </td>
                    <td>
                      <div className=" font-inter text-center w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        -
                      </div>
                    </td>
                  </tr>
                </div>

                <div className="py-10">
                  <tr>
                    <th colspan="5"
                      className="p-2 text-white text-[18px] h-[45px]   bg-[#16376E] rounded-[5px]  font-bold   leading-[21.78px] tracking-[2%]">
                      Hostel Fees Semester -1  </th>

                  </tr>
                  <tr className="text-center ">
                    <th className="border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]   py-3  text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      amount
                    </th>
                    <th className="border-r-[1px] w-[170px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Status
                    </th>
                    <th className="border-r-[1px]  w-[170px] h-[45px] bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]   py-3 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Payment Method
                    </th>
                    <th className="border-r-[1px] w-[400px] h-[45px] bg-[#159BD6] rounded-[0px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-inter not-italic font-bold leading-[19.36px] tracking-[2%] capitalize">
                      Proof
                    </th>
                  </tr>
                  <tr className="">
                    <td>
                      <div className="font-inter text-center  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        42500/-
                      </div>
                    </td>
                    <td>
                      <div className=" font-inter text-center text-[#00BE35]  w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        Paid
                      </div>
                    </td>

                    <td>
                      <div className="font-inter text-center w-[170px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        Cash
                      </div>
                    </td>
                    <td>
                      <div className=" font-inter text-center w-[400px] h-[45px] py-2 border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none">
                        -
                      </div>
                    </td>
                  </tr>
                </div>
              </table>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubFessDetailsStudents;

