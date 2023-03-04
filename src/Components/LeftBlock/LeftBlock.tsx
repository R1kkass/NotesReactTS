import { FC, useContext, useEffect, useState } from "react"
import "./LeftBlock.scss"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import MyTask from "../../UI/Task/MyTask"
import ButtonDelete from "../../UI/ButtonDelete/ButtonDelete"
import { MyContext } from "../../Context"
import { INotes } from "../../App"
import { useParams } from "react-router"

const nt: INotes[] = JSON.parse(localStorage.getItem("note") || "[{}]")

const LeftBlock: FC = () => {
    const { notes = [], noteSearch = [], status } = useContext(MyContext)
    const params = useParams()
    
    if(status && params.id){
        return <></>
    }

    return (
        <div
            className={
                status ? "LeftBlock__containerBlock" : "LeftBlock__container"
            }
        >
            <div className={"LeftBlock"}>
                {status ? (
                    <></>
                ) : (
                    <>
                        <ButtonDelete />
                        <div className="LeftBlock__when">
                            <p>Сегодня</p>
                        </div>
                    </>
                )}

                <div className={status ? "LeftBlock__tasksBlock" : "LeftBlock__tasks"}>
                    {Array.isArray(noteSearch)
                        ? noteSearch?.map((note) => (
                              <MyTask
                                  id={note?.id}
                                  key={note?.id}
                                  name={note?.name}
                                  date={note?.data}
                                  text={note?.text}
                              />
                          ))
                        : notes?.map((note) => (
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
