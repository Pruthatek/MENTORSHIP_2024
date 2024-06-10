import React, { useState } from "react";
import { mentoringDataContext } from "./mentoringDataContext";



const UseMentoringDataProvider = ({ children }) => {



    // new itmes
    const [isAnyOneLoggedin, setIsAnyOneLoggedin] = useState(false);
    const [loggedUserInfo, setLoggedUserInfo] = useState({});

    const [NavigationFlow, setNavigationFlow] = useState({});
    const [PagesHandler, setPagesHandler] = useState({});

    const [MentorFormData, setMentorFormData] = useState({});


    // old fashion
    const [dataM, setDataM] = useState({ loggedBy: "asdfs", collegeName: '' });
    const [stepNo, setStepNo] = useState(1);
    const [formData, setFormData] = useState({});
    const [loggedStudent, setLoggedStudent] = useState({});
    const [isStudent, setIsStudent] = useState(false);
    const [mentorFormDataForStudentPage, setMentorFormDataForStudentPage] = useState({});

    return (
        <mentoringDataContext.Provider value={{ MentorFormData, setMentorFormData, loggedUserInfo, setLoggedUserInfo, PagesHandler, setPagesHandler, NavigationFlow, setNavigationFlow, isAnyOneLoggedin, setIsAnyOneLoggedin, dataM, setDataM, mentorFormDataForStudentPage, setMentorFormDataForStudentPage, stepNo, setStepNo, formData, setFormData, loggedStudent, setLoggedStudent, isStudent, setIsStudent }}>
            {children}

        </mentoringDataContext.Provider>
    )
}

export default UseMentoringDataProvider;
