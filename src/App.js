import React,{useState} from "react"
import Icon from "./Components/Icon"

//import react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import react strap
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

import  "./style.css"

const tictacArray = new Array.fill("")
const App=()=>{
    let [isCross,setIsCross] = useState(true)
    let [winMessage,setWinMessage] = useState()

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictacArray.fill("")
    }


    return(
        <div>
            <Icon choice="cross"/>
        </div>
    )
}
export default App