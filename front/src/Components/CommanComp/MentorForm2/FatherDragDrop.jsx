import React, { useState, useRef } from 'react'

const FatherDragDrop = ({setfatherPhoto}) => {
  const [files , setFiles] = useState(null);
  const[image, setImage] = useState(null);
  // const[previewUrl, setPreviewUrl] = useState(""); 

  const inputRef = useRef()

  const handleDragOver = (event) =>{

   
   event.preventDefault();

  }

  //hadlefile image
  const handleFile = files => {
   //you can carry out any file validations here...
   setImage(files);
   setImage(URL.createObjectURL(files));
}

const handleDrop = (event) =>{
   event.preventDefault();

   setFiles(event.dataTransfer.files);

   //let's grab the image file
   let imageFile = event.dataTransfer.files[0];
   handleFile(imageFile);

   console.log(event);
   
  }

  //handle change

  const handleFileChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = () => {
          const imageData = reader.result;
          setImage(imageData);
        };
  
        reader.readAsDataURL(file);
setfatherPhoto(file)
         console.log(file)
      }
    };

  // handle button

const handlebutton=()=>{
  inputRef.current.click()
}

  return (
    <>
    <form action=''>
         
  
  
    {/* upload student photo */}
    <div className="flex flex-col items-center justify-center w-full">
        <label 
        for="dropzone-file"
        title="Drop father image here"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="cursor-pointer border border-[color:var(--Desable-Grey,#BDBDBD)] border-dashed w-40 h-40">
            <div className="flex flex-col items-center justify-center ">
    
            { image && <div className="image">
    <img src={image} className='w-40 h-40 ' alt='filename' />
         </div> }
         {/* <span className="flex justify-center items-center text-center py-14 text-[color:var(--Desable-Grey,#BDBDBD)] text-[16px] font-inter  not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize  px-6 formbold-drop-file  ">
           {" "}
           Drag & Drop
           Or
           Open File{" "}
         </span> */}
         
     </div>
     <input id="dropzone-file"type="file" name="file" accept='image/*' className="hidden" 
     multiple
     //onChange={(event) => setFiles(event.target.files)}
     onChange={handleFileChange}
   
     
     ref={inputRef}
     />
  </label>
  <div className="">
  <h2 className="py-2 text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">Father Photo</h2>
  </div>
  <span
  //  onClick={() => inputRef.current.click()}
  onClick={handlebutton}
          className="cursor-pointer text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize px-10 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] py-2 bg-[#159BD6]">Upload
       </span>
       </div> 
           
          
    
    
           
          </form>
  
  </>
  )
}

export default FatherDragDrop