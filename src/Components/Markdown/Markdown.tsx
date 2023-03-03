import { FC, useContext, useEffect, useState } from "react"
import { INotes } from "../../App"
import { MyContext } from "../../Context";

const month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

const Markdown:FC<{note:INotes[]}> = ({note})=>{
    console.log(note);
    const {editNote} = useContext(MyContext)
    
    return(
        <div className="Text" style={{ marginTop: "60px", color: "white" }}>
        <p className="Text__date">
            {note[0]?.data[0]}
            {' '}
            {month[note[0]?.data[1]] }
            {' '}
            {note[0]?.data[2]+ " г."}
            {' в '}
            {note[0]?.data[3] < 10
                ? "0" + note[0]?.data[3]
                : note[0]?.data[3]}
            {':'}
            {note[0]?.data[4] < 10
                ? "0" + note[0]?.data[4]
                : note[0]?.data[4]}
        </p>
        <p contentEditable="true" onChange={()=>{editNote()}}>{note[0]?.name}</p>
        
    </div>
    )
}

export default Markdown