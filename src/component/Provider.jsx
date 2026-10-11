import { createContext, useReducer } from "react";


const studentDatas=[
    {id:1,name:"Yuvi",score:88},
   {id:2,name:"Arun",score:99},
    {id:1,name:"Vadivel",score:101},

];
const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT_SCORE" :{
            return state.map((student)=>student.id===action.playload.id ? {...student,score:student.score+1}:student)
            
        }
        case "DECREMENT_SCORE" :{
            return state.map((student)=>student.id===action.playload.id ? {...student,score:student.score-1}:student)
            
        }
    }

}

export const StudentContext=createContext(studentDatas);
const Provider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,studentDatas);
  return (
    <StudentContext.Provider value={studentDatas}>
        {children}
    </StudentContext.Provider>
      
    
  )
}

export default Provider;
