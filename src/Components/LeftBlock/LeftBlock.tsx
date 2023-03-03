import { FC, useContext, useEffect, useState } from "react"
import "./LeftBlock.scss"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import MyTask from "../../UI/Task/MyTask"
import ButtonDelete from "../../UI/ButtonDelete/ButtonDelete"
import { MyContext } from "../../Context"
import { INotes } from "../../App"

const nt:INotes[] =JSON.parse(localStorage.getItem('note') || '[]')

const LeftBlock: FC = () => {
    const { notes = [] } = useContext(MyContext)
    
    return (
        <div className="LeftBlock__container">
            <div className="LeftBlock">
                <ButtonDelete />
                <div className="LeftBlock__when">
                    <p>Сегодня</p>
                </div>
                <div className="LeftBlock__tasks">
                    {notes?.map((note) => (
                        <MyTask
                            id={note?.id}
                            key={note?.id}
                            name={note?.name}
                            date={note?.data}
                            text={note?.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeftBlock
