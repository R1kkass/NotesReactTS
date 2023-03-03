import ButtonDelete from "../../UI/ButtonDelete/ButtonDelete"
import "./Header.scss"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import { TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import AddNote from "../AddNote/AddNote"
import Search from "../Search/Search"

const Header = () => {
    return (
        <div className="Header__container">
            <div className="Header">
                <div className="Header__buttonLeft">
                    <ButtonDelete />
                </div>
                <div className="Header__buttonRight">
                    <div>
                        <AddNote />
                    </div>
                    <div>
                        <div className="Header__searchs">
                           <Search/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
