import ButtonDelete from "../../UI/ButtonDelete/ButtonDelete"
import "./Header.scss"
import AddNote from "../AddNote/AddNote"
import Search from "../Search/Search"
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import EditTextModal from "../EditeText/EditTextModal";
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
                        <EditTextModal/>
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
