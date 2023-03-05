import { FC, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { useRef, useEffect } from "react"
import { MyContext } from "../../Context"
import "./MyTask.scss"

interface ITask {
    name: string
    date: Array<number>
    text: string
    id: number
}

const MyTask: FC<ITask> = ({ name, date, text, id }) => {
    const refText = useRef<HTMLDivElement>(null)
    const { status } = useContext(MyContext)
    if (status) {
        return (
            <NavLink
                to={`/${id}`}
                className={({ isActive }) => (isActive ? "Task" : undefined)}
            >
                <div className="LeftBlock__taskBlock">
                    <div className="LeftBlock__taskName">{name}</div>
                </div>
                <div className="LeftBlock__taskNameBlock">{name}</div>
                <div className="LeftBlock__dateBlock">
                    {date[3] < 10 ? "0" + date[3] : date[3]}:
                    {date[4] < 10 ? "0" + date[4] : date[4]}
                </div>
            </NavLink>
        )
    }

    return (
        <NavLink
            to={`/${id}`}
            className={({ isActive }) => (isActive ? "Task" : undefined)}
        >
            <div className="LeftBlock__task">
                <div className="LeftBlock__taskName">{name}</div>
                <div className="LeftBlock__lower">
                    <div className="LeftBlock__date">
                        {date[3] < 10 ? "0" + date[3] : date[3]}:
                        {date[4] < 10 ? "0" + date[4] : date[4]}
                    </div>
                    <div className="LeftBlock__text">
                        {text ? text : "Нет дополнительного текста"}
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default MyTask
