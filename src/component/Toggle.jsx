import { useContext,useState } from "react"
import { AppContext } from "./Context"

const Toggle = () => {
    const {cohort_Name,theme }=useContext(AppContext);
      const [toggleTheme, setTheme] = useState(theme);
  return (
    <div>
      <h1>cohorthName:{cohort_Name}</h1>
      <h1>theme:{toggleTheme}</h1>
      <button onClick={() => setTheme(toggleTheme === "Light" ? "dark" : "Light")}>
      Toggle Theme
    </button>

    </div>
  )
}

export default Toggle
