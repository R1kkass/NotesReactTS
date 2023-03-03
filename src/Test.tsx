import * as React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import LeftBlock from "./Components/LeftBlock/LeftBlock"
import Header from "./Components/Header/Header"
import "./Styles/Global.scss"
import { useParams } from "react-router-dom"
import { MyContext } from "./Context"
import { INotes } from "./App"
import Markdown from "./Components/Markdown/Markdown"

interface IParams {
    id: string
}
const nt: INotes[] = JSON.parse(localStorage.getItem("note") || "[]")
export default function Test() {
    const params = useParams()
    const [note, setNote] = React.useState<INotes[]>([])
    const { notes = [] } = React.useContext(MyContext)
    console.log(notes[0])

    React.useEffect(() => {
        if (params.id) {
            setNote(
                notes?.filter(
                    (key: INotes | undefined) => key?.id == params?.id
                )
            )
        } else {
            setNote([])
        }
    }, [notes, params])

    return (
        <>
            <Header />
            <div className="Main">
                <div>
                    <LeftBlock />
                </div>
               <Markdown note={note}/>
            </div>
        </>
    )
}
