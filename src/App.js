import { useState } from "react"

const messages = [
    "Learn React",
    "Apply for jobs",
    "Get promoted",
    "Invest your new income",
    "Retire early",
    "Asus",
    "something"
]

export default function App(){
    const [step,setStep] = useState(1)

function handleprevious(){
    setStep((s)=>{
        if(s >1 ){
            return s-1
        }
        return s
    })

}
function handlenext(){
    setStep((s)=>{
        if(s < messages.length){
            return s+1
        }
        return s
    })
}







  
    return <div className="steps">
        <div className="numbers">
            
        {
            messages.map((_,index)=>{
                return(
                    <div key={index}className={index+1 == step ? ('active') : undefined }>{index+1}</div>
                )
            })
        }

        </div>

    <p className="message">
            
         Step : {step}  {messages[step-1]}
    </p>

    <div className="buttons">

        <button style={{backgroundColor : "blue",color : "white"}} onClick={handleprevious}>Previous</button>
        <button style={{backgroundColor : "blue",color : "white"}} onClick={handlenext}>Next</button>

    </div>

    </div>
}

