import React, { useState, useContext } from 'react'
import axios from 'axios';
import { mentoringDataContext } from '../../Context/mentoringDataContext';

function ExcelButtons() {
    const [file, setfile] = useState();
    const [file1, setfile1] = useState();

    const { isAnyOneLoggedin, setIsAnyOneLoggedin, loggedUserInfo, setPagesHandler, PagesHandler, setLoggedUserInfo } = useContext(mentoringDataContext);






    async function subminResult() {
        const formData = new FormData();
        formData.append("myFile", file1[0]);

        try {
            const res = await axios.patch(process.env.REACT_APP_SERVER + `/students/excelForResult/${PagesHandler?.departmentId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });


            if (res.status == 200) {
                alert('File Uploaded Successfully');
            }

            setfile1(undefined);

        } catch (err) {

            alert("something went Wrong")

        }



    }





    function submitStudentExcel() {
        async function fess() {
            const formData = new FormData();
            formData.append("myFile", file[0]);
            try {
                const res = await axios.post(process.env.REACT_APP_SERVER + '/students/excelForCreateStudents', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }

                });

                if (res.status == 200) {
                    alert('File Uploaded Successfully');
                }

                setfile(undefined);

            } catch (err) {

                alert("something went wrong")

            }


        }



        fess();

    }





    return (
        <div className=' font-Poppins flex flex-row justify-between items-center px-6 py-3'>
            <div className=' flex flex-row justify-center gap-5 items-center'>
                {/* button for result excel */}
                <div>
                    <p className='font-Inter not-italic font-bold leading-[normal] text-[16px] tracking-[0.32px]'>Add Results</p>
                    <div className=' pt-3'>

                        <input type="file" onChange={(e) => {
                            setfile1(e.target.files)
                        }} accept=" application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            className="w-full rounded-lg text-black text-sm bg-gray-100 file:cursor-poInter cursor-poInter file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-[#159BD6]   file:text-white " />
                    </div>
                </div>




                {/* button for studnet excel */}
                <div>
                    <p className='font-Inter not-italic font-bold leading-[normal] text-[16px] tracking-[0.32px]'>Add students form Excel</p>
                    <div className=' pt-3'>

                        <input type="file" onChange={(e) => {
                            setfile(e.target.files)
                        }} accept=" application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            className="w-full rounded-lg text-black text-sm bg-gray-100 file:cursor-poInter cursor-poInter file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-[#159BD6]   file:text-white " />
                    </div>
                </div>



            </div>

            <div className=' flex flex-row justify-center gap-5 items-center'>

                {/* button for result excel */}
                <div>
                    <div className={`${!file1 ? "hidden" : ''}`}>
                        <div onClick={subminResult} className=" text-white text-center shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] text-[16px] font-Inter not-italic font-bold leading-[normal] bg-[#159BD6] py-2 px-4 rounded-[5px] tracking-[0.32px] capitalize">
                            Fetch Result <span className=' font-bold text-[18px]'>→</span>
                        </div>
                    </div>
                </div>



                {/* button for add student excel */}
                <div>
                    <div className={`${!file ? "hidden" : ''}`}>
                        <div onClick={submitStudentExcel} className=" text-white text-center shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] text-[16px] font-Inter not-italic font-bold leading-[normal] bg-[#159BD6] py-2 px-4 rounded-[5px] tracking-[0.32px] capitalize">
                            Fetch Students <span className=' font-bold text-[18px]'>→</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default ExcelButtons
