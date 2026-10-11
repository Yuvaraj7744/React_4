import { createContext } from "react"

    const initialState={
        cohort_Name:"cohort_3",
        theme:"Light"
    }
    

export const AppContext = createContext(initialState);
   
const Context = ({children}) => {
  


  return (
    <div>
        <AppContext.Provider value={initialState}>
         {children}
        </AppContext.Provider>
      
    </div>
  )
}

export default Context;
