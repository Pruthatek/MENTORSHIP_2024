import React from 'react'

function ResultButton({ setfile1 }) {

    return (
        <div>
            <p className='font-Inter not-italic font-bold leading-[normal] text-[16px] tracking-[0.32px]'>Add Results</p>
            <div className=' pt-3'>

                <input type="file" onChange={(e) => {
                    setfile1(e.target.files)
                }} accept=" application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    className="w-full rounded-lg text-black text-sm bg-gray-100 file:cursor-poInter cursor-poInter file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-[#159BD6]   file:text-white " />
            </div>
        </div>
    )
}

export default ResultButton
