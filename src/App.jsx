
// import StudentDetails from './component/StudentDetails.jsx';


// import Header from "./component/Header.jsx"
// import Footer from "./component/Footer.jsx"
// import CohortSummary from "./component/CohortSummary.jsx"
// import StudentList from "./component/StudentList.jsx"
// import Context from "./component/Context.jsx"
// import Toggle from "./component/Toggle.jsx"
import StudentLists from "./component/StudentLists.jsx"
import StudentSummary from "./component/StudentSummary.jsx"



function App() {
//   const students = [
//     { id: "s1", name: "Arun", track: "React", score: 85 },
//     { id: "s2", name: "Priya", track: "React", score: 92 },
//     { id: "s3", name: "Kumar", track: "React", score: 76 },
//   ];
  // students.sort((a,b)=> b.score- a.score);

  return (
    <>
    {/* {students.map((student)=>  <StudentDetails  key={student.id} name={student.name} track={student.track} score={student.score}/>)} */}
   {/* <Header/>
   <StudentList/>
   <CohortSummary/>
   <Footer/> */}
   {/* <Context/>
   <Toggle/> */}
   <StudentLists/>
   <StudentSummary/>

      
    </>
  )
}

export default App
