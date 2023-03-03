import * as React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import LeftBlock from "./Components/LeftBlock/LeftBlock"
import Header from "./Components/Header/Header"
import "./Styles/Global.scss"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Test from "./Test"
import { MyContext } from "./Context"

export interface INotes {
    id: number
    text: string
    data: Array<number>
    name: string
}

let nt = JSON.parse(localStorage.getItem("note") || "[]")

export default function TextButtons() {
    const [notes, setNotes] = React.useState<INotes[]>(nt)
    const [noteSearch, setNoteSearch] = React.useState<INotes[]>([])

    React.useEffect(() => {
        localStorage.setItem("note", JSON.stringify(notes))
    }, [notes])

    const addNotes = (text: INotes) => {
        setNotes([...notes, text])
    }

    const deleteNotes = (id: number) => {
        setNotes((p) => p.filter((key) => key.id != id))
    }

    const editNote = (id: number, text: string) => {
        setNotes((p) =>
            p.map((key) => {
                if (key.id == id) {
                    key.name = text
                }
                return key
            })
        )
    }

    const searchNote = (text: string)=>{
        setNoteSearch(notes.filter((key)=>{
            return key.name.includes(text)
        }))
        console.log(noteSearch);
        
    }

    return (
        <MyContext.Provider value={{ notes, noteSearch, addNotes, deleteNotes, editNote, searchNote }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Test />} />
                    <Route path="/:id" element={<Test />} />
                    <Route path="*" element={<h2>404</h2>} />
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    )
}
