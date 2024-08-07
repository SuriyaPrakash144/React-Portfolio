import "./Forms.css";
import {useState} from "react";

function Forms()
{
  const [data,setData]=useState({
    "name":"Suriya",
    "age":21,
    "city":"Dindigul"
  });

  function fun()
  {
    setData({...data,"name":"Prakash"});
  }
    return(
        <>
        <button onClick={fun}>Button</button>
        </>
    )
}
export default Forms;