import React from "react"
import { FaTimes,FaRegCircle,FaPen  } from "react-icons/fa";
const Icon = ({choice}) =>{
    switch(choice){
        case "cross":
            return <FaTimes className="icons"/>
        case "circle":
            return <FaRegCircle className="icons"/>
        default:
            return <FaPen className="icons"/>        
        }
    
}
export default Icon
