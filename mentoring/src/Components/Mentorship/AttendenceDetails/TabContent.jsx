import React from 'react'

const TabContent = ({ id, activeTab, children }) => {
     if (activeTab === id) {
          return (<div className="py-4 w-full ">
               <div className='flex flex-col items-center mx-auto w-full'>
                    {children}
               </div>
          </div>)
     }
     else {
          return null
     }
}

export default TabContent;