import React from 'react'

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
     const handleClick = () => {
          setActiveTab(id);
     };

     return (<li onClick={handleClick} className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? "bg-[#47A5E4] text-white border-transparent " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>
          {title}
     </li>)
}

export default TabNavItem