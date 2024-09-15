
import { useEffect, useState } from "react";
import "./App.css";
import SingleUser from "./components/SingleUser";


function App() {

  const[person,setPerson] = useState({
    name:'Tihomir',
    age:24,
    address:'Rasovaca',
  })
  
  return (
    <div className="bg-slate-600">
      <SingleUser person={person} setPerson={setPerson}/>
    </div>
  )
}

export default App;
