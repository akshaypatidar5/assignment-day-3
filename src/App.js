import React,{useState} from "react"
import Icon from "./Components/Icon"

//import react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import react strap
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Container,Card,CardBody,Row,Col } from 'reactstrap';

import  "./style.css"

const tictacArray = new Array(9).fill("")

const App=()=>{
    let option=["X","O"]
    const [displayOp,setDisplayOP] = useState("X");
    console.log(displayOp)
    
    let m;
    if(displayOp==="X")
    {
        m=true;
        
    }else if(displayOp==="O")
    {
        m=false;
    }
        
    
    let [isCross,setIsCross] = useState(m)
    
    let [winMessage,setWinMessage] = useState()

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictacArray.fill("")
    }

    const findWinner=()=>{
        if(tictacArray[0]==tictacArray[1] && tictacArray[0]==tictacArray[2] && tictacArray[0]!=""){
            setWinMessage(tictacArray[0] + " has won")
        }
        else if(tictacArray[3]==tictacArray[4] && tictacArray[3]==tictacArray[5] && tictacArray[3]!=""){
            setWinMessage(tictacArray[3] + " has won")
        }
        else if(tictacArray[6]==tictacArray[7] && tictacArray[6]==tictacArray[8] && tictacArray[6]!=""){
            setWinMessage(tictacArray[6] + " has won")
        }
        else if(tictacArray[0]==tictacArray[3] && tictacArray[0]==tictacArray[6] && tictacArray[0]!=""){
            setWinMessage(tictacArray[0] + " has won")
        }
        else if(tictacArray[1]==tictacArray[4] && tictacArray[1]==tictacArray[7] && tictacArray[1]!=""){
            setWinMessage(tictacArray[1] + " has won")
        }
        else if(tictacArray[2]==tictacArray[5] && tictacArray[2]==tictacArray[8] && tictacArray[2]!=""){
            setWinMessage(tictacArray[2] + " has won")
        }
        else if(tictacArray[0]==tictacArray[4] && tictacArray[0]==tictacArray[8] && tictacArray[0]!=""){
            setWinMessage(tictacArray[0] + " has won")
        }
        else if(tictacArray[2]==tictacArray[4] && tictacArray[2]==tictacArray[6] && tictacArray[2]!=""){
            setWinMessage(tictacArray[2] + " has won")
        }
        else if(tictacArray[0]!="" && tictacArray[1]!="" && tictacArray[2]!="" && tictacArray[3]!="" && tictacArray[4]!=""
        && tictacArray[5]!="" && tictacArray[6]!="" && tictacArray[7]!="" && tictacArray[8]!=""){
            setWinMessage("Draw...")
        }
        
    }  
    
    const changeItem = (index) =>{
        if(winMessage){
            return toast("Gaem has already got over",{type:"success"})
        }
        if(tictacArray[index] == ""){
            tictacArray[index] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }
        else{
            return toast("This is already occupied",{type:"error"})
        }
        findWinner( )
    }

    return(
        <Container className="p-5">
            <ToastContainer position="bottom-center">
            </ToastContainer>
            <Row>
                <Col md={6} className="offset-md-3">
                    {
                        //to display the winner
                        
                        winMessage?(
                            
                            <div className="cent">
                                <h1 className="text-center">
                                {winMessage}
                            </h1>
                            <Button onClick={playAgain}>Play Again</Button>
                            </div>
                        ) : (
                            <div className="cent">
                                {option.map(result => (
                                    <>
                                    <input type="radio" value={result} name="gpr1" checked={displayOp===result}  onChange={(e)=>setDisplayOP(e.target.value)}/>{result}
                                </>
                                ))}
                            <h1>
                                {isCross?"Cross's Turn":"Circle's Turn"}
                            </h1>
                            </div>
                        )
                       
                    }
                    <div className="grid">
                        {tictacArray.map((value,index)=>
                            (<Card onClick={()=>changeItem(index)}>
                                <CardBody className="box">
                                    <Icon choice={tictacArray[index]}/>
                                </CardBody>
                            </Card>
                        ))}

                    </div>


                </Col>
            </Row>

        </Container>
    )
}
export default App