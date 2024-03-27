import React, { useState } from "react";
import { mentoringDataContext } from "./mentoringDataContext";



const UseMentoringDataProvider = ({ children }) => {
    const [dataM, setDataM] = useState({ loggedBy: "", collegeName: '' });
    const [stepNo, setStepNo] = useState(1);
    const [formData, setFormData] = useState({});

    return (
        <mentoringDataContext.Provider value={{ dataM, setDataM, stepNo, setStepNo, formData, setFormData }}>
            {children}

        </mentoringDataContext.Provider>
    )
}

export default UseMentoringDataProvider;
