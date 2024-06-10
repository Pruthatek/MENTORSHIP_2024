import React, { useEffect, useState, useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
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
    const [isLoading, setisLoading] = useState(false);

    const [tabForNotification, setTabForNotification] = useState(true);
    const [conversationData, setConversationData] = useState({

        img: "/static/img/femaleimg.svg",
        name: "Hanna Novak",
        fromWhere: "From LDRP",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur a",
        email: 'chairman126@gmail.com',
        department: "Computer Engineering Department",
        college: "LDRP Institute of Technology and Research",
        place: 'Gandhinagar, Gujarat, India.'
    });


    let navigation = useNavigate();

    const { setPagesHandler, PagesHandler } = useContext(mentoringDataContext);



    async function getColleges() {

        axios({
            url: process.env.REACT_APP_SERVER + "/faculty/getAnyStructures?college=all",
            method: "GET",
        })
            .then(async (res) => {

                setDatacollage([...res.data.data]);
                setisLoading(true)
            })
            .catch((err) => {
                console.log(err);
                setisLoading(true)
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


    function onCollegeSelect(e) {

        console.log(e)

        setPagesHandler({
            ...setPagesHandler,
            collegeName: e.collegeName
        })

        navigation('/Chairman/Departments');
    }

    function NotificationClicked(e) {
        setTabForNotification(false);

    }
    function ConversationClicked(e) {
        setTabForNotification(true);

    }

    return (
        <>


            <div className=" flex flex-col w-full h-full  gap-x-2    pl-[5px]  ">
                <div className=" text-end text-gray-900 text-[14px] flex flex-row justify-end items-center gap-2">
                    <p className=" font-Poppins tracking-wider leading-[21px] font-semibold">Last Login</p> <span className=" font-Poppins">2:00 PM, Sunday 15 Oct 2023</span>
                </div>



                {
                    isLoading ? <>
                        {/* left side colleges start */}
                        <div className=" w-full    h-full flex flex-col justify-between items-start">
                            <div className=" w-full flex  flex-row  h-full">


                                {/* colleges section start */}
                                <div className=" w-1/2 h-full bg-[#fff] border-[1px] border-[#a1a1a121]  shadow-lg flex flex-col justify-between items-start  rounded-lg p-[16px]">

                                    {/* above */}
                                    <div className=" w-full ">
                                        <div>
                                            <h1 className="text-[color:var(--02,#47A5E4)] text-[20px]   font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">Colleges</h1>
                                        </div>

                                        <div className=" relative w-full my-[8px]">

                                            <input type="text" className=" w-full   py-2 border-[1px] px-4 border-[color:var(--Desable-Grey,#BDBDBD)] rounded-[5px] border-solid bg-[#f5f5f5]" placeholder="Search Collage" value={filternew} onChange={searchText1.bind(this)} />
                                            <div className="absolute top-2.5 right-2 "><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9948 8.56806C14.9948 9.41202 14.8285 10.2477 14.5055 11.0274C14.1826 11.8072 13.7091 12.5156 13.1124 13.1124C12.5156 13.7091 11.8072 14.1826 11.0274 14.5056C10.2477 14.8285 9.41203 14.9947 8.56806 14.9947C7.7241 14.9947 6.8884 14.8285 6.10867 14.5056C5.32896 14.1826 4.62048 13.7091 4.02372 13.1124C3.42694 12.5156 2.95356 11.8072 2.63059 11.0274C2.30761 10.2477 2.14139 9.41202 2.14139 8.56806C2.14139 6.8636 2.81847 5.22895 4.02372 4.02372C5.22895 2.81847 6.86359 2.14139 8.56806 2.14139C10.2725 2.14139 11.9072 2.81847 13.1124 4.02372C14.3177 5.22895 14.9948 6.8636 14.9948 8.56806ZM13.8237 15.3375C12.1018 16.6742 9.93533 17.3045 7.76516 17.1C5.59498 16.8956 3.5843 15.8718 2.14246 14.237C0.700598 12.6022 -0.0640332 10.4793 0.00420376 8.30064C0.072455 6.12193 0.968448 4.05111 2.50978 2.50978C4.05112 0.968449 6.12193 0.0724555 8.30064 0.00420425C10.4794 -0.0640371 12.6022 0.700599 14.237 2.14246C15.8718 3.58431 16.8956 5.59498 17.1 7.76516C17.3045 9.93532 16.6743 12.1018 15.3375 13.8237L19.6791 18.1652C19.7843 18.2633 19.8687 18.3816 19.9273 18.513C19.9859 18.6444 20.0173 18.7862 20.0198 18.93C20.0224 19.0738 19.9958 19.2166 19.942 19.35C19.8882 19.4834 19.8079 19.6045 19.7062 19.7062C19.6045 19.808 19.4834 19.8882 19.35 19.942C19.2166 19.9958 19.0738 20.0224 18.93 20.0198C18.7862 20.0173 18.6442 19.9858 18.513 19.9273C18.3816 19.8687 18.2634 19.7843 18.1652 19.6791L13.8237 15.3375Z" fill="#16376E" />
                                            </svg></div>
                                        </div>
                                        <div className=" w-full my-1 border-t-[1px] border-dashed border-[#8e8e8e] h-[0px]"></div>
                                    </div>

                                    <div className="   w-full h-full  overflow-hidden">
                                        <div className="  overflow-auto h-[100%]  relative">
                                            <div className=" absolute h-full w-full overflow-auto ">


                                                {/* asdfsdf */}


                                                {
                                                    datacollage.length == 0 ? <div>No college Found</div> :
                                                        <>
                                                            {
                                                                datacollage.map((e, i) => {
                                                                    return (
                                                                        <div className="py-1">
                                                                            <div onClick={() => { onCollegeSelect(e) }} >
                                                                                <div className={"bg-[#F5F5F5] flex flex-row justify-between py-1  gap-x-4 w-full  rounded-[5px] border-l-2  " + " border-l-[5px] border-[#F00]"}>
                                                                                    <div className="flex flex-row items-center">
                                                                                        <div className={"" + " w-[5.3rem] "}>
                                                                                            <img src="/static/img/Ldrp.jpg" className=" px-2" />
                                                                                        </div>
                                                                                        <div className=" pl-6 ">
                                                                                            <h1 className="text-black absolute text-[18px] font-Inter not-italic font-bold leading-[normal] tracking-[0.36px]">{e?.collegeName}</h1>

                                                                                            <div className="flex flex-row items-center pt-6 py-1">
                                                                                                <h1 className="text-[color:var(--black,#101010)] text-[12px]  font-Inter not-italic font-bold leading-[normal] tracking-[0.24px]">Principle :</h1>
                                                                                                <h1 className="text-[color:var(--black,#101010)] text-[12px] font-Inter not-italic font-medium leading-[normal]">{e?.principalDetails?.facultyFullName}</h1>
                                                                                            </div>
                                                                                            <div className="flex flex-row items-center">
                                                                                                <h1 className="text-[color:var(--black,#101010)] text-[12px]  font-Inter not-italic font-bold leading-[normal] tracking-[0.24px]">Email :</h1>
                                                                                                <h1 className="text-[color:var(--black,#101010)] text-[12px] font-Inter not-italic font-medium leading-[normal]">{e?.principalDetails?.email}</h1>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>


                                                                            </div>

                                                                        </div>

                                                                    )

                                                                })
                                                            }


                                                        </>

                                                }


                                            </div>
                                        </div>

                                    </div>



                                </div>
                                {/* colleges section end */}



                                {/* notification section start */}

                                <div className=" w-1/2 h-full  pl-[5px]   ">
                                    <div className=" rounded-lg  h-full bg-[#fff] border-[1px] border-[#a1a1a121] w-full shadow-lg">

                                        {/* by this i can change the notification */}

                                        {
                                            tabForNotification ? <>
                                                <div className=" flex flex-col justify-between p-[16px]  items-start h-full w-full">


                                                    {/* frist */}
                                                    <div className="   w-full">
                                                        <h1 className="text-[color:var(--02,#47A5E4)] text-[20px] py-1 font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">Notification</h1>

                                                        <div className="space-x-2 w-full  flex flex-row justify-center  items-center">
                                                            {/* search box */}
                                                            <div className="relative w-full">
                                                                <input type="text" className="w-full   py-2 border-[1px] px-4 border-[color:var(--Desable-Grey,#BDBDBD)] bg-[#f5f5f5] rounded-[5px] border-solid" placeholder="Search Conversion" value={filter} onChange={searchText.bind(this)} />
                                                                <div className="absolute top-2.5 right-2 "><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.9948 8.56806C14.9948 9.41202 14.8285 10.2477 14.5055 11.0274C14.1826 11.8072 13.7091 12.5156 13.1124 13.1124C12.5156 13.7091 11.8072 14.1826 11.0274 14.5056C10.2477 14.8285 9.41203 14.9947 8.56806 14.9947C7.7241 14.9947 6.8884 14.8285 6.10867 14.5056C5.32896 14.1826 4.62048 13.7091 4.02372 13.1124C3.42694 12.5156 2.95356 11.8072 2.63059 11.0274C2.30761 10.2477 2.14139 9.41202 2.14139 8.56806C2.14139 6.8636 2.81847 5.22895 4.02372 4.02372C5.22895 2.81847 6.86359 2.14139 8.56806 2.14139C10.2725 2.14139 11.9072 2.81847 13.1124 4.02372C14.3177 5.22895 14.9948 6.8636 14.9948 8.56806ZM13.8237 15.3375C12.1018 16.6742 9.93533 17.3045 7.76516 17.1C5.59498 16.8956 3.5843 15.8718 2.14246 14.237C0.700598 12.6022 -0.0640332 10.4793 0.00420376 8.30064C0.072455 6.12193 0.968448 4.05111 2.50978 2.50978C4.05112 0.968449 6.12193 0.0724555 8.30064 0.00420425C10.4794 -0.0640371 12.6022 0.700599 14.237 2.14246C15.8718 3.58431 16.8956 5.59498 17.1 7.76516C17.3045 9.93532 16.6743 12.1018 15.3375 13.8237L19.6791 18.1652C19.7843 18.2633 19.8687 18.3816 19.9273 18.513C19.9859 18.6444 20.0173 18.7862 20.0198 18.93C20.0224 19.0738 19.9958 19.2166 19.942 19.35C19.8882 19.4834 19.8079 19.6045 19.7062 19.7062C19.6045 19.808 19.4834 19.8882 19.35 19.942C19.2166 19.9958 19.0738 20.0224 18.93 20.0198C18.7862 20.0173 18.6442 19.9858 18.513 19.9273C18.3816 19.8687 18.2634 19.7843 18.1652 19.6791L13.8237 15.3375Z" fill="#16376E" />
                                                                </svg></div>

                                                            </div>

                                                            {/* filter button */}
                                                            <div>
                                                                <button className="shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] text-[color:var(--03,#FFF)] px-16 py-2.5 text-[16px] bg-[#159BD6] font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize rounded-[5px]">Filter</button>
                                                            </div>


                                                        </div>

                                                        <div className=" w-full my-2 border-t-[1px] border-dashed border-[#8e8e8e] h-[0px]"></div>


                                                    </div>

                                                    {/* second */}
                                                    <div className="  pb-2  h-full w-full relative ">
                                                        <div className="overflow-auto w-full h-[99%]  absolute ">
                                                            {!dataSearch2.length == 0 ? <>  {dataSearch2.map((item, index) => {
                                                                return (
                                                                    <div key={index.id} className=" my-3 mr-2 rounded-lg ">

                                                                        <div onClick={(item) => NotificationClicked(item)} className={"bg-[#f5f5f5] flex flex-row gap-x-4 py-1 cursor-pointer  rounded-lg  border-[1px] border-[#b6b6b671]  "}>

                                                                            <div className="flex flex-row justify-center items-center">
                                                                                <div className="px-5">
                                                                                    <img src={item.img} className=" w-[80px] h-[80px]" />
                                                                                </div>
                                                                                <div className="flex flex-col justify-between  relative ">
                                                                                    <div className="  flex justify-end  absolute  right-2 top-2 ">
                                                                                        <h1 className=" "><FaRegBookmark color="#47A5E4" className="  enabled:bg-[#47A5E4] " /></h1>
                                                                                    </div>
                                                                                    <div className=" py-1  flex flex-row justify-start gap-2 items-baseline ">

                                                                                        <h1 className="text-[color:var(--black,#101010)] text-[16px] font-Inter not-italic font-semibold leading-[normal] tracking-[0.32px]" >{item.text}</h1>

                                                                                        <h1 className="text-[color:var(--02,#47A5E4)] pt-1.5 text-[11px] font-Inter not-italic font-semibold leading-[normal] tracking-[0.22px]">{item.text2}</h1>


                                                                                    </div>
                                                                                    <div className="py-[4px]">
                                                                                        <p className="text-[color:var(--black,#101010)] text-[12px] font-Inter not-italic font-normal leading-[normal] tracking-[0.22px]">{item.text3}</p>
                                                                                    </div>
                                                                                    <div className="flex justify-end px-2 py-0.5">
                                                                                        <h1 className="text-[rgba(16,16,16,0.55)]  text-[10px] font-Inter not-italic font-medium leading-[normal] tracking-[0.2px]">{item.text4}</h1>

                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                        </div>

                                                                    </div>
                                                                )
                                                            })}</> : <>
                                                                <div className=" w-full py-4 text-center">No Data Available</div>
                                                            </>}

                                                        </div>
                                                    </div>


                                                    {/* third */}
                                                    <div className=" w-full">
                                                        <div className="flex flex-row justify-between items-center  ">
                                                            <button className="px-8 py-2 bg-[#159BD6] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px]   text-[color:var(--03,#FFF)] text-[16px] font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">Clear</button>
                                                            <a href="/chairmain/chairmainhome">
                                                                <button className="px-8 py-2 bg-[#16376E] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px]     text-[color:var(--03,#FFF)] text-[16px] font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Compose</button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> : <>
                                                {/* hole converstion seciton start */}
                                                <div className="bg-white h-full rounded-lg  flex flex-col w-full justify-between  items-start p-4 ">

                                                    {/* converstion section 1 */}
                                                    <div className=" w-full">
                                                        {/* <- converstion buton */}

                                                        <div onClick={ConversationClicked} className=" flex pb-2 flex-row justify-start items-center gap-5 ">
                                                            <span className="   text-blue-500"><FaArrowLeftLong /></span>

                                                            <h1 className="text-[color:var(--02,#47A5E4)] text-[20px]   font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">Conversion</h1>

                                                        </div>

                                                        {/* profile and name seciton */}
                                                        <div className="py-2">
                                                            <div className="flex flex-row space-x-3">
                                                                <img src="/static/img/femaleimg.svg" />
                                                                <div className="flex flex-col">
                                                                    <div className="flex flex-row space-x-1 py-1.5 ">
                                                                        <h1 className="text-[color:var(--black,#101010)] text-[16px] font-Inter not-italic font-semibold leading-[normal] tracking-[0.32px]">Hanna Novak</h1>
                                                                        <h1 className="text-[color:var(--01,#16376E)] pt-1 text-[12px] font-Inter not-italic font-semibold leading-[normal] tracking-[0.24px]">From LDRP</h1>
                                                                    </div>
                                                                    <div>
                                                                        <h1 className="text-[color:var(--black,#101010)] text-[14px] font-Inter not-italic font-medium leading-[normal] tracking-[0.28px]">hanna@ldrp.ac.in</h1>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    {/* converstion section 2 */}
                                                    <div className=" w-full  relative  py-2 h-full">
                                                        <div className=" absolute overflow-auto h-[96%]   w-full  ">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repudiandae sint dignissimos omnis laboriosam optio quas error delectus tempora pariatur iusto illum perspiciatis necessitatibus aperiam asperiores ab quia, doloremque labore voluptatibus corporis sed. Modi illo sequi, quasi necessitatibus porro expedita, vitae sint quas dolores consectetur odit, labore ut ipsum dignissimos. Odit inventore eum iusto sed. Dicta porro repudiandae quo voluptate deleniti vel placeat eaque minima quibusdam temporibus quos necessitatibus, aliquam consequuntur praesentium odio consectetur, esse accusamus ea voluptatem doloribus ullam molestiae quod error! Impedit odio, consequatur ducimus exercitationem dolorum distinctio maxime, iure unde nemo amet, molestias maiores enim asperiores. Libero nemo blanditiis inventore rem fuga delectus, excepturi eos unde exercitationem ratione optio quibusdam laboriosam numquam ut modi ducimus? Magnam, distinctio atque. Vel iste magni doloribus est. Obcaecati saepe maiores, accusantium autem dolor ipsam praesentium pariatur. Provident aut libero, vel cupiditate nulla iusto autem. Culpa accusantium at voluptas libero tempora, iure dignissimos perspiciatis numquam maxime magnam molestias hic non quo sint facilis ex, ullam voluptates est optio animi consequatur commodi. Doloribus minima eius nam corporis iure blanditiis rem tempora velit quibusdam provident vel, accusamus harum dolor animi! Debitis aperiam nam sed accusantium similique dolore illum id quia error odio ducimus quos veritatis nesciunt labore consequatur cupiditate suscipit distinctio nulla obcaecati, quis voluptates, rem explicabo non? Eveniet quisquam dolorum necessitatibus officia veritatis aliquam beatae dolorem soluta obcaecati libero voluptatem, provident autem fuga nulla ullam dolore! Esse qui, natus laudantium velit odit tenetur debitis voluptatum accusantium ullam, eos sunt? Fuga laboriosam, corrupti voluptatem atque doloribus perspiciatis quia sint voluptate odit ad nobis quibusdam error magni architecto doloremque dolorem inventore impedit aspernatur ipsam. Eveniet rem sed a libero vitae neque molestiae quas est sequi provident officiis, omnis accusantium blanditiis eius perspiciatis porro aliquid doloremque natus repudiandae nisi iste dignissimos voluptatum doloribus ad. Similique, magni quo maxime aliquam, minus sed, culpa dolore aspernatur odio officia assumenda ab dolorem fugit non! Explicabo odio blanditiis earum accusamus officiis vel alias debitis nisi id nulla, corporis esse modi rerum corrupti dicta sunt sed asperiores eligendi. Sunt itaque numquam commodi obcaecati quas accusantium eius magnam quaerat aut saepe. Totam hic autem, ex perspiciatis veritatis fugiat, ipsa velit quas eligendi vitae modi doloribus officia nostrum sint adipisci nobis, quia deserunt blanditiis dolor similique nam soluta tempore veniam. Ullam quae corrupti exercitationem perspiciatis delectus odio, natus iste dolor sapiente quibusdam numquam amet, cum fugiat porro hic! Omnis modi animi facilis aspernatur exercitationem sequi ut qui distinctio aliquam odio totam adipisci beatae soluta sunt, et labore eos voluptates quisquam! Laboriosam itaque cumque, omnis eaque ad earum excepturi accusamus harum sequi, ab laudantium voluptatibus culpa corporis ex. Magni ea quas earum? Officiis enim consectetur, rem assumenda in ipsam fuga, aspernatur quam quisquam praesentium odio hic nesciunt? Accusantium molestiae eaque distinctio atque, voluptate ut illum tempore quisquam sed neque consequatur voluptates esse possimus libero alias a quia veritatis optio tempora amet odit ratione expedita aperiam quidem! Sint quibusdam optio, ipsam, natus libero illo consequuntur quas sunt distinctio molestias neque, eum odit at reiciendis eligendi.
                                                        </div>

                                                    </div>


                                                    {/* converstion section 3 */}
                                                    <div className=" w-full">
                                                        <div className="    flex w-full justify-between  items-end">
                                                            <div className="flex flex-col gap-y-3 w-[70%]  ">
                                                                <div>
                                                                    <h1 className="text-[color:var(--black,#101010)] text-[16px] font-Inter not-italic font-semibold leading-[normal] tracking-[0.32px] w-full truncate">Hanna Novak</h1>
                                                                </div>
                                                                <div className=" space-y-1.5">
                                                                    <h1 className="w-full truncate text-[color:var(--black,#101010)]  text-[12px] font-Inter not-italic font-medium leading-[normal] tracking-[0.24px]">Assistant Professor</h1>
                                                                    <h1 className="w-full truncate text-[color:var(--black,#101010)]  text-[12px] font-Inter not-italic font-medium leading-[normal] tracking-[0.24px]">Computer Engineering Department</h1>
                                                                    <h1 className="w-full truncate text-[color:var(--black,#101010)]  text-[12px] font-Inter not-italic font-medium leading-[normal] tracking-[0.24px]">LDRP Institute of Technology and Research</h1>
                                                                    <h1 className="w-full truncate text-[color:var(--black,#101010)]  text-[12px] font-Inter not-italic font-medium leading-[normal] tracking-[0.24px]">Gandhinagar, Gujarat, India.</h1>
                                                                    <h1 className="w-full truncate text-[color:var(--black,#101010)]  text-[12px] font-Inter not-italic font-medium leading-[normal] tracking-[0.24px]">Email: hanna@ldrp.ac.in</h1>

                                                                </div>
                                                            </div>

                                                            <div className=" bg-gray-200 ">
                                                                <button className="text-[color:var(--03,#FFF)] shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] px-10 py-2 bg-[#16376E] text-[16px] font-Inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Reply</button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* hole converstion seciton end */}</>
                                        }






                                    </div>
                                </div>
                                {/* notification section end */}
                                {/* left side colleges end */}

                            </div>

                            <div className=" w-full h-0 bg-red-600">

                            </div>
                        </div></> : <>
                        <div className=' w-full flex-col gap-7 h-full flex justify-center items-center'>

                            <div className="loader animate-spin   "></div>
                            <p className=' font-Poppins tracking-wide  animate-pulse text-lg text-[#47A5E4]'>Featching Data, Please wait...</p>
                        </div>

                    </>
                }

            </div >

        </>
    )
}

export default Colleges
