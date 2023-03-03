import { FC } from "react"
import { Link, NavLink } from "react-router-dom"
import { useRef, useEffect } from "react"
interface ITask {
    name: string
    date: Array<number>
    text: string
    id: number
}

const MyTask: FC<ITask> = ({ name, date, text, id }) => {
    console.log(text)
    const refText = useRef<HTMLDivElement>(null)
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
                    <div dangerouslySetInnerHTML={{__html: text}} className="LeftBlock__text"/>
                </div>
            </div>
        </NavLink>
    )
}

export default MyTask
