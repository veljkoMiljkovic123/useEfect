import React, { useState } from "react";
import { IoReloadCircle } from "react-icons/io5";
function SingleUser({ person,setPerson }) {
    const [active,setActive] = useState(false)
    function changePerson(){

        setPerson({...person,age:23
        })
        setActive(true)
    }
  return (
    <div className="w-[300px] h-[300px] border border-red-400 rounded-2xl mx-auto mt-[100px] bg-lime-400 ">
      <h2 className="text-center mb-3  uppercase">{person.name}</h2>
      <h2 className="text-center mb-3  uppercase">{person.age}</h2>
      <h2 className="text-center mb-3  uppercase">{person.address}</h2>
     <div className="flex justify-center items-center gap-2 mx-auto">
     <button className="" onClick={changePerson} >Change person</button>
     {active? <IoReloadCircle size={32} color="black"/>:<IoReloadCircle size={32} color="red" />}
     </div>
    </div>
  );
}

export default SingleUser;
