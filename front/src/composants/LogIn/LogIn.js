import { useState } from "react"
import LogInCon from "./LogInCon/LogInCon"
const LogIn = () => {
  const [lien,setLien] = useState()
  return (
    <div>
      {/* <select onClick={(e)=> setLien(e.target.value)}>
        <option>User</option>
        <option value= 'Admin'>Admin</option>
        <option value= 'Etudiant'>Etudiant</option>
        <option value= 'Prof'>Prof</option>
        <option value= 'Parent'>Parent</option>
      </select> */}
      <LogInCon /* lier={lien} *//>
    </div>
  )
}
export default LogIn 