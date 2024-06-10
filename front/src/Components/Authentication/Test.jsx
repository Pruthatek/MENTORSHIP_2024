

import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };



  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myFile', file);

    try {
      const res = await axios.post('http://localhost:8000/api/students/excelForCreateStudents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }

      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });

      alert('File Uploaded Successfully');
    } catch (err) {
       
      alert("error")
      
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" onChange={onChange} />
          <label htmlFor="customFile">{filename}</label>
        </div>
        <input type="submit" value="Upload" />
      </form>
      {uploadedFile ? (
        <div>
          <h3>{uploadedFile.fileName}</h3>
          <img src={uploadedFile.filePath} alt="" />
        </div>
      ) : null}
    </div>
  );
};


export default Test
