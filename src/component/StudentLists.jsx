import React, { useContext } from 'react'
import {StudentContext} from './Provider.jsx';

const StudentLists = () => {
    const state=useContext(StudentContext);
  return (
    <>
    {state.map((student)=><li>|{student.name}:{student.score}</li>)}
      
    </>
  )
}

export default StudentLists
