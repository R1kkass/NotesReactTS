import SearchIcon from "@mui/icons-material/Search"
import { MyContext } from "../../Context"
import {FC} from 'react'
import * as React from "react"

const Search:FC = () => {
    const {searchNote=()=>{}} = React.useContext(MyContext)

    return (
        <div className="Header__searchs">
            <SearchIcon />
            <input className="Header__search" onChange={(e)=>searchNote(e?.target?.value)} placeholder="Поиск" />
        </div>
    )
}

export default Search
