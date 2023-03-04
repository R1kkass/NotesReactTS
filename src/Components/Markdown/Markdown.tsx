import { FC, memo, useContext, useEffect, useRef } from "react"
import { useParams } from "react-router"
import { INotes } from "../../App"
import { MyContext } from "../../Context"
import "./Markdown.scss"

const month = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
]

const Markdown: FC<{ note: INotes[] }> = memo(({ note }) => {
    const { editNote = () => {}, status } = useContext(MyContext)
    const textRef = useRef<any>(null)
    const params = useParams()

    if (params.id) {
        return (
            <div className="Text">
                <p className="Text__date">
                    {note[0]?.data[0]} {month[note[0]?.data[1]]}{" "}
                    {note[0]?.data[2] + " г."}
                    {" в "}
                    {note[0]?.data[3] < 10
                        ? "0" + note[0]?.data[3]
                        : note[0]?.data[3]}
                    {":"}
                    {note[0]?.data[4] < 10
                        ? "0" + note[0]?.data[4]
                        : note[0]?.data[4]}
                </p>
                <textarea
                    style={{ ...note[0]?.style }}
                    defaultValue={note[0]?.name}
                    value={note[0]?.name}
                    ref={textRef}
                    onChange={() => {
                        editNote(
                            note[0]?.id || 0,
                            textRef?.current?.value || ""
                        )
                    }}
                ></textarea>
            </div>
        )
    }
    return <></>
})

export default Markdown
