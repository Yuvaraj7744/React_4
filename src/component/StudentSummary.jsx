import React, { useContext } from 'react'
import {StudentContext} from './Provider.jsx';


const StudentSummary = () => {
        const state=useContext(StudentContext);
    
  return (
    <>
    <h5>Total Student:{state.length}</h5>
      
    </>
  )
}

export default StudentSummary;
