import { useState } from "react"

const messages = [
    "Learn React",
    "Apply for jobs",
    "Get promoted",
    "Invest your new income",
    "Retire early",

]



export default function App(){
    const [step,setStep] = useState(1)
    const name = 'mkzt'
    const [isopen,setIsopen]= useState(true)

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
  



    return (
        <div>

        <Button className="close" onEvent={()=>setIsopen(!isopen)}>&times;</Button>

            {
                isopen && (
                    <Step className="steps">
                        <Numbers className="numbers" step={step}/>  
                        <Message className="message">
                                Step : {step}  {messages[step-1]}, {name}
                        </Message>

                        <ButtonList className="buttons">
                            <Button style={{backgroundColor : "blue",color : "white"}} onEvent={handleprevious} >Previous</Button>
                            <Button style={{backgroundColor : "blue",color : "white"}} onEvent={handlenext}>Next</Button>
                        </ButtonList>
                    </Step>
                    
            )
        }

        </div>
    )

}

function Step({className, children}){
    return (
        <div className={className}>
            {children}
        </div>
    )
}

function Numbers({className, step}){
    
    return (<div className={className}>
                
    {
        messages.map((_,index)=>{
            return(
                <div key={index}className={index+1 === step ? ('active') : undefined }>{index+1}</div>
            )
        })
    }

    </div>
    )
}


function ButtonList({className, children}){
    return (
        <div className={className}>
                {children}
        </div>
    )
}


function Message({className, children}){
    return (
        <p className={className}>{children}</p>
    )

}


function Button({style={color: "red"}, className="", onEvent, children}){
    return (
        <button style={style} className={className} onClick={onEvent}>
            {children}
        </button>
    )
}