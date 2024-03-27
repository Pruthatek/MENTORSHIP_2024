import React, { useEffect, useState, useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { mentoringDataContext } from "../../Context/mentoringDataContext";
import axios from "axios";
const data = {
    cardData: [
        {
            id: 1,
            img: "/static/img/femaleimg.svg",
            text: "Hanna Novak",
            text2: "From LDRP",
            text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a",
            text4: "Dec 27",
            to: "/conversion1",
        },
        {
            id: 2,
            img: "/static/img/femaleimg.svg",
            text: "Hanna Novak2",
            text2: "From LDRP",
            text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a",
            text4: "Dec 27",
            link: "/conversion2"

        },
        {
            id: 3,
            img: "/static/img/femaleimg.svg",
            text: "Hanna Novak3",
            text2: "From LDRP",
            text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a",
            text4: "Dec 27",
            link: "/conversion3"

        },
        {
            id: 4,
            img: "/static/img/femaleimg.svg",
            text: "Hanna Novak4",
            text2: "From LDRP",
            text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a",
            text4: "Dec 27",
            link: "/conversion4"

        },
        {
            id: 5,
            img: "/static/img/femaleimg.svg",
            text: "Hanna Novak5",
            text2: "From LDRP",
            text3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a",
            text4: "Dec 27",
            link: "/conversion5"

        }
    ]
}
function Colleges() {
    const [filter, setFilter] = useState('')
    const [filternew, setFilternew] = useState('')
    const [datacollage, setDatacollage] = useState([]);

    let navigation = useNavigate();

    const { dataM, setDataM } = useContext(mentoringDataContext);



    async function getColleges() {

        axios({
            url: process.env.REACT_APP_SERVER + "/api/colleges/",
            method: "GET",
        })
            .then(async (res) => {

                let a = JSON.parse(`${res.data.data}`);
                let b = [...a]
                return b;
            })
            .then((e) => {
                setDatacollage(e);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {

        getColleges();

    }, [])

    const searchText = (event) => {
        setFilter(event.target.value)
    }
    const searchText1 = (event) => {
        setFilternew(event.target.value)
    }

    // for search in notfication
    let dataSearch2 = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })


    // for search in college
    let dataSearch = datacollage.filter(item => {
        return Object.keys(item.fields).some(key => {
            return item.fields[key].toString().toLowerCase().includes(filternew.toString().toLowerCase())
        }
        )
    });

    function onCollegeSelect(e) {
        setDataM({
            ...dataM,
            ...e
        })


        navigation('/Chairman/Departments');


    }

    return (
        <>


            <div className="flex flex-row  w-full  gap-x-2    pl-2   ">

                <div className="bg-white w-[50%] p-5 h-full shadow-xl flex flex-col justify-start  rounded-lg ">
                    <h1 onClick={() => { console.log(dataM) }} className="text-[color:var(--02,#47A5E4)] text-[20px] py-2 font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">Colleges</h1>

                    <div className="space-x-2 flex flex-row justify-center h-full items-center">
                        <div className="relative w-full">
                            <input type="text" className=" w-full   py-2 border-[1px] px-4 border-[color:var(--Desable-Grey,#BDBDBD)] rounded-[5px] border-solid" placeholder="Search Collage" value={filternew} onChange={searchText1.bind(this)} />
                            <div className="absolute top-2.5 right-2 "><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9948 8.56806C14.9948 9.41202 14.8285 10.2477 14.5055 11.0274C14.1826 11.8072 13.7091 12.5156 13.1124 13.1124C12.5156 13.7091 11.8072 14.1826 11.0274 14.5056C10.2477 14.8285 9.41203 14.9947 8.56806 14.9947C7.7241 14.9947 6.8884 14.8285 6.10867 14.5056C5.32896 14.1826 4.62048 13.7091 4.02372 13.1124C3.42694 12.5156 2.95356 11.8072 2.63059 11.0274C2.30761 10.2477 2.14139 9.41202 2.14139 8.56806C2.14139 6.8636 2.81847 5.22895 4.02372 4.02372C5.22895 2.81847 6.86359 2.14139 8.56806 2.14139C10.2725 2.14139 11.9072 2.81847 13.1124 4.02372C14.3177 5.22895 14.9948 6.8636 14.9948 8.56806ZM13.8237 15.3375C12.1018 16.6742 9.93533 17.3045 7.76516 17.1C5.59498 16.8956 3.5843 15.8718 2.14246 14.237C0.700598 12.6022 -0.0640332 10.4793 0.00420376 8.30064C0.072455 6.12193 0.968448 4.05111 2.50978 2.50978C4.05112 0.968449 6.12193 0.0724555 8.30064 0.00420425C10.4794 -0.0640371 12.6022 0.700599 14.237 2.14246C15.8718 3.58431 16.8956 5.59498 17.1 7.76516C17.3045 9.93532 16.6743 12.1018 15.3375 13.8237L19.6791 18.1652C19.7843 18.2633 19.8687 18.3816 19.9273 18.513C19.9859 18.6444 20.0173 18.7862 20.0198 18.93C20.0224 19.0738 19.9958 19.2166 19.942 19.35C19.8882 19.4834 19.8079 19.6045 19.7062 19.7062C19.6045 19.808 19.4834 19.8882 19.35 19.942C19.2166 19.9958 19.0738 20.0224 18.93 20.0198C18.7862 20.0173 18.6442 19.9858 18.513 19.9273C18.3816 19.8687 18.2634 19.7843 18.1652 19.6791L13.8237 15.3375Z" fill="#16376E" />
                            </svg></div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className=" overflow-auto h-[72vh]">


                        {dataSearch.map((item, index) => {

                            return (
                                <div className="py-2">
                                    <div onClick={() => onCollegeSelect({
                                        collegeName: item.fields.name,
                                        principal_email: item.fields.principal_email,
                                        principal_name: item.fields.principal_name

                                    })} >
                                        <div className={"bg-[#F5F5F5] flex flex-row justify-between py-1  gap-x-4 w-full  rounded-[5px] border-l-2  " + " border-l-[5px] border-[#F00]"}>
                                            <div className="flex flex-row items-center">
                                                <div className={"" + " w-[5.3rem] "}>
                                                    <img src="/static/img/Ldrp.jpg" className=" px-2" />
                                                </div>
                                                <div className=" ">
                                                    <h1 className="text-black absolute text-[18px] font-inter not-italic font-bold leading-[normal] tracking-[0.36px]">{item.fields.name}</h1>
                                                    <div className="flex flex-row items-center pt-6 py-1">
                                                        <h1 className="text-[color:var(--black,#101010)] text-[12px] px-1 font-inter not-italic font-bold leading-[normal] tracking-[0.24px]">Principle :</h1>
                                                        <h1 className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-medium leading-[normal]">{item.fields.
                                                            principal_name
                                                        }</h1>
                                                    </div>
                                                    <div className="flex flex-row items-center">
                                                        <h1 className="text-[color:var(--black,#101010)] text-[12px] px-1 font-inter not-italic font-bold leading-[normal] tracking-[0.24px]">Email :</h1>
                                                        <h1 className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-medium leading-[normal]">{item.fields.principal_email}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-[3.8rem] pr-2 whitespace-nowrap ">
                                                <h1 className={"text-[12px]   font-inter not-italic  font-semibold leading-[normal] tracking-[0.24px]" + " text-[#F00]"}>"this is pending"</h1>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className="bg-white w-[50%] p-5 h-full shadow-xl   rounded-lg ">
                    <h1 className="text-[color:var(--02,#47A5E4)] text-[20px] py-2 font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">Notification</h1>

                    <div className="space-x-2 flex flex-row justify-center  items-center">
                        <div className="relative w-full">
                            <input type="text" className="w-full   py-2 border-[1px] px-4 border-[color:var(--Desable-Grey,#BDBDBD)] rounded-[5px] border-solid" placeholder="Search Conversion" value={filter} onChange={searchText.bind(this)} />
                            <div className="absolute top-2.5 right-2 "><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9948 8.56806C14.9948 9.41202 14.8285 10.2477 14.5055 11.0274C14.1826 11.8072 13.7091 12.5156 13.1124 13.1124C12.5156 13.7091 11.8072 14.1826 11.0274 14.5056C10.2477 14.8285 9.41203 14.9947 8.56806 14.9947C7.7241 14.9947 6.8884 14.8285 6.10867 14.5056C5.32896 14.1826 4.62048 13.7091 4.02372 13.1124C3.42694 12.5156 2.95356 11.8072 2.63059 11.0274C2.30761 10.2477 2.14139 9.41202 2.14139 8.56806C2.14139 6.8636 2.81847 5.22895 4.02372 4.02372C5.22895 2.81847 6.86359 2.14139 8.56806 2.14139C10.2725 2.14139 11.9072 2.81847 13.1124 4.02372C14.3177 5.22895 14.9948 6.8636 14.9948 8.56806ZM13.8237 15.3375C12.1018 16.6742 9.93533 17.3045 7.76516 17.1C5.59498 16.8956 3.5843 15.8718 2.14246 14.237C0.700598 12.6022 -0.0640332 10.4793 0.00420376 8.30064C0.072455 6.12193 0.968448 4.05111 2.50978 2.50978C4.05112 0.968449 6.12193 0.0724555 8.30064 0.00420425C10.4794 -0.0640371 12.6022 0.700599 14.237 2.14246C15.8718 3.58431 16.8956 5.59498 17.1 7.76516C17.3045 9.93532 16.6743 12.1018 15.3375 13.8237L19.6791 18.1652C19.7843 18.2633 19.8687 18.3816 19.9273 18.513C19.9859 18.6444 20.0173 18.7862 20.0198 18.93C20.0224 19.0738 19.9958 19.2166 19.942 19.35C19.8882 19.4834 19.8079 19.6045 19.7062 19.7062C19.6045 19.808 19.4834 19.8882 19.35 19.942C19.2166 19.9958 19.0738 20.0224 18.93 20.0198C18.7862 20.0173 18.6442 19.9858 18.513 19.9273C18.3816 19.8687 18.2634 19.7843 18.1652 19.6791L13.8237 15.3375Z" fill="#16376E" />
                            </svg></div>
                        </div>
                        <div>
                            <button className="shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] text-[color:var(--03,#FFF)] px-16 py-2.5 text-[16px] bg-[#159BD6] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize rounded-[5px]">Filter</button>
                        </div>
                    </div>
                    <div className="  overflow-auto  h-[470px]">


                        {dataSearch2.map((item, index) => {
                            return (
                                <div key={index.id} className=" my-3 mr-2 rounded-lg shadow-md">
                                    <a href="/notificationchairmain">
                                        <div className={"bg-[#f0f0f096] flex flex-row gap-x-4   rounded-lg    "}>

                                            <div className="flex flex-row justify-center items-center py-2">
                                                <div className="px-5">
                                                    <img src={item.img} className="w-32" />
                                                </div>
                                                <div className="flex flex-col justify-between  ">
                                                    <div className="  flex justify-end px-2 py-0.5 ">
                                                        <h1 className=" "><FaRegBookmark color="#47A5E4" className="  enabled:bg-[#47A5E4] " /></h1>
                                                    </div>
                                                    <div className=" py-1  flex flex-row justify-start gap-x-1 ">
                                                        <h1 className="text-[color:var(--black,#101010)] text-[16px] font-inter not-italic font-semibold leading-[normal] tracking-[0.32px]" >{item.text}</h1>
                                                        <h1 className="text-[color:var(--02,#47A5E4)] pt-1.5 text-[11px] font-inter not-italic font-semibold leading-[normal] tracking-[0.22px]">{item.text2}</h1>


                                                    </div>
                                                    <div className="py-3">
                                                        <p className="text-[color:var(--black,#101010)] px-1 text-[11px] font-inter not-italic font-normal leading-[normal] tracking-[0.22px]">{item.text3}</p>
                                                    </div>
                                                    <div className="flex justify-end px-2 py-0.5">
                                                        <h1 className="text-[rgba(16,16,16,0.55)]  text-[10px] font-inter not-italic font-medium leading-[normal] tracking-[0.2px]">{item.text4}</h1>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </a>

                                </div>
                            )
                        })}
                    </div>
                    <div className="flex flex-row justify-between items-center py-3">
                        <button className="px-8 py-2 bg-[#159BD6] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px]   text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">Clear</button>
                        <a href="/chairmain/chairmainhome">
                            <button className="px-8 py-2 bg-[#16376E] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px]     text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Compose</button>
                        </a>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Colleges
