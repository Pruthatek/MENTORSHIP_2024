import React , {useState} from 'react'

export const Nationaldropdown = ({selected , setSelected}) => {
    const [isActive , SetIsActive ]=useState(false)
    const option =['Indian']
  return (
   <>
    <div className='dropdown w-[218px] h-[40px] relative  z-40' >
        <div className=' pt-[0.6rem] pb-[0.1rem]   bg-[#E6E6E6]   text-center p-4  dropdown-btn rounded-[5px]' 
        
        onClick={(e)=> SetIsActive(!isActive)}> 
      
      {selected }
      {/* <svg width="53" height="41" viewBox="0 0 53 41" fill="none" className='absolute bottom-0 right-0 h-8 w-10    ' xmlns="http://www.w3.org/2000/svg">
<path d="M0.898438 0.558594H32.8984C43.9441 0.558594 52.8984 9.5129 52.8984 20.5586C52.8984 31.6043 43.9441 40.5586 32.8984 40.5586H0.898438V0.558594Z" fill="#1A477A"/>
<path d="M24.9259 21.7714C24.9665 21.7166 24.9984 21.6597 25.0428 21.6153C26.8544 19.7994 28.666 17.9837 30.4795 16.17C31.3773 15.2722 32.8108 15.3828 33.534 16.4016C34.0962 17.1938 34.0001 18.2671 33.3 18.9683C31.3245 20.9474 29.348 22.9257 27.3716 24.9043C27.0284 25.2479 26.6852 25.5915 26.3418 25.9354C25.5126 26.7654 24.2905 26.7671 23.4594 25.9359C21.9602 24.437 20.4632 22.9361 18.9651 21.436C18.1409 20.6106 17.3115 19.7898 16.4938 18.9576C15.9411 18.3949 15.7668 17.7153 15.9978 16.963C16.2274 16.2155 16.7509 15.752 17.5185 15.6005C18.1976 15.4664 18.7987 15.6558 19.2917 16.142C20.0609 16.9006 20.8203 17.6693 21.5838 18.4336C22.6584 19.5097 23.7329 20.5858 24.8077 21.6619C24.8363 21.6905 24.8668 21.7169 24.9254 21.7717L24.9259 21.7714Z" fill="#FFA412"/>
</svg> */}
            
        </div>

                    {isActive && (
                             <div className="absolute top[110px] p-[15px] my-2   bg-white shadow-stone-900 left-0 w-[100%] drop-shadow-md  dropdown-contain">

                           

                              
                               
                                {option.map((option) =>(
                                     <div className="dropdown-item p-[10px] cursor-pointer "
                                      onClick={(e)=>{ 
                                        setSelected(option)
                                        SetIsActive(false);
                                      }
                                     }>
                                       {option}
                                     </div>
                                ))}

                            
                             
                         </div>
                    )}

       

    </div>
   </>
  )
}

export default Nationaldropdown;