import react, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'

// COMPONENTS FOR COMMAN
import Navbar from './Components/CommanComp/Navbar';
import Departments from './Components/CommanComp/Departments';
import MentorClasses from './Components/CommanComp/MentorClasses';



// COMPONENTS FOR AUNTHETICAION 
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';


// COMPONENTS FOR MENTORSHIP ROUTES 
import MainMentorship from './Components/Mentorship/MainMentorship';
import Attendence from './Components/CommanComp/Attendence';
import MentorForm from './Components/CommanComp/MentorForm/MentorForm';
import Results from './Components/CommanComp/Results';
import FeesDetails from './Components/CommanComp/FeesDetails';
import Sessions from './Components/CommanComp/Sessions';
import AddStudent from './Components/CommanComp/MentorForm2/AddStudent'



//COMPONENTS FOR HOD ROUTES
import Hod from './Components/Hod/Hod';
import NotificationHod from './Components/Hod/NotificationHod'


//COMPONENTS FOR CHAIRMAN ROUTES
import Chairman from './Components/Chairman/Chairman';
import Colleges from './Components/Chairman/Colleges';
import UniversityChairman from './Components/Chairman/UniversityChairman'
import Notificationchairmain from './Components/Chairman/Notificationchairmain'

//COMPONENTS FOR PRINCIPAL ROUTES
import Principal from './Components/Principal/Principal';


//COMPONENTS FOR SUB-COMPONENST ROUTES
import SubAttendenceStudents from './Components/Subcomponents/SubAttendenceStudents';
import SubFeesDetailsStudents from './Components/Subcomponents/SubFessDetailsStudents';
import SubResultsofStudent from './Components/Subcomponents/SubResultsofStudent';
import StudentForm from './Components/CommanComp/MentorForm/StudentForm';

function App() {

  const [userType, setUserType] = useState("mentor");

  return (
    <>
      <div className=' w-[100vw] flex justify-between flex-col items-start h-[100vh] overflow-hidden  '>
        <Navbar />

        <div className=' h-full w-full'>

          <Routes>

            {/* ------------------ Authenticaion routes---------------------------------- */}
            <Route index exact element={<Login setUserType={setUserType} />} />
            <Route path="/Signup" element={<Signup />} />


            {/* ------------------ Mentor routes---------------------------------- */}
            <Route path="/MainMentorship" exact element={<MainMentorship />} >
              <Route path="" exact element={<MentorForm />} />
              <Route path="attendences" exact element={<Attendence />} />
              <Route path="results" exact element={<Results />} />
              <Route path="feesDetails" exact element={<FeesDetails />} />
              <Route path="session" exact element={<Sessions />} />
              <Route path="AddStudent" exact element={<AddStudent />} />

              <Route path="StudentForm" exact element={<StudentForm />} />
              <Route path="attendences/SubAttendence" exact element={<SubAttendenceStudents />} />
              <Route path="results/SubResults" exact element={<SubResultsofStudent />} />
              <Route path="feesDetails/SubFeesDetails" exact element={<SubFeesDetailsStudents />} />


            </Route>



            {/* ------------------ Hod routes---------------------------------- */}
            <Route path="/Hod" exact element={<Hod />} >

              <Route path="" exact element={<MentorClasses />} />
              <Route path="attendancehod" exact element={<MentorClasses />} />
              <Route path="resultshod" exact element={<MentorClasses />} />
              <Route path="feeshod" exact element={<MentorClasses />} />
              <Route path="dashod" exact element={<NotificationHod />} />

              {/* --------- sub routes --------- */}
              <Route path="MentorForm" exact element={<MentorForm />} />
              <Route path="attendancehod/Attendence" exact element={<Attendence />} />
              <Route path="resultshod/Results" exact element={<Results />} />
              <Route path="feeshod/FeesDetails" exact element={<FeesDetails />} />

              <Route path="MentorForm/StudentForm" exact element={<StudentForm />} />
              <Route path="attendancehod/Attendence/SubAttendence" exact element={<SubAttendenceStudents />} />
              <Route path="resultshod/Results/SubResults" exact element={<SubResultsofStudent />} />
              <Route path="feeshod/FeesDetails/SubFeesDetails" exact element={<SubFeesDetailsStudents />} />

            </Route>




            {/* ------------------ Principal routes---------------------------------- */}
            <Route path="/Principal" exact element={<Principal />} >
              <Route path="" exact element={<Departments />} />
              <Route path="attendanceprinciple" exact element={<Departments />} />
              <Route path="resultspriciple" exact element={<Departments />} />
              <Route path="feesprinciple" exact element={<Departments />} />
              <Route path="universityprinciple" exact element={<Departments />} />
              <Route path="dashprinciple" exact element={<Departments />} />
              <Route path="MentorsOfClasses" exact element={<MentorClasses />} />

              {/* --------- sub routes --------- */}
              <Route path="MentorForm" exact element={<MentorForm />} />
              <Route path="attendanceprinciple/Attendence" exact element={<Attendence />} />
              <Route path="resultspriciple/Results" exact element={<Results />} />
              <Route path="feesprinciple/FeesDetails" exact element={<FeesDetails />} />

              <Route path="MentorForm/StudentForm" exact element={<StudentForm />} />
              <Route path="attendanceprinciple/Attendence/SubAttendence" exact element={<SubAttendenceStudents />} />
              <Route path="resultspriciple/Results/SubResults" exact element={<SubResultsofStudent />} />
              <Route path="feesprinciple/FeesDetails/SubFeesDetails" exact element={<SubFeesDetailsStudents />} />
            </Route>


            {/* ------------------ Chairman routes---------------------------------- */}
            <Route path="/Chairman" exact element={<Chairman />} >
              <Route path="" exact element={<Colleges />} />

              <Route path="attendanceChairman" exact element={<Colleges />} />
              <Route path="resultsChairman" exact element={<Colleges />} />
              <Route path="feesChairman" exact element={<Colleges />} />
              <Route path="Departments" exact element={<Departments />} />
              <Route path="MentorsOfClasses" exact element={<MentorClasses />} />
              <Route path="universitychairmain" exact element={<UniversityChairman />} />
              <Route path="notificationchairmain" exact element={<Notificationchairmain />} />

              {/* --------- sub routes --------- */}
              <Route path="MentorForm" exact element={<MentorForm />} />
              <Route path="attendenceChairman/Attendence" exact element={<Attendence />} />
              <Route path="resultChairman/Results" exact element={<Results />} />
              <Route path="fessChairman/FeesDetails" exact element={<FeesDetails />} />

              <Route path="MentorForm/StudentForm" exact element={<StudentForm />} />
              <Route path="attendenceChairman/Attendence/SubAttendence" exact element={<SubAttendenceStudents />} />
              <Route path="resultChairman/Results/SubResults" exact element={<SubResultsofStudent />} />
              <Route path="fessChairman/FeesDetails/SubFeesDetails" exact element={<SubFeesDetailsStudents />} />
            </Route>



          </Routes>
        </div>

      </div>
    </>
  )
}

export default App
