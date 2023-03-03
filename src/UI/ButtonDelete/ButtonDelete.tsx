import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DeleteModal from "../../Components/DeleteModal/DeleteModal";

const ButtonDelete = ()=>{
    return (
        <div className="LeftBlock__button">
                <div>
                    <FormatListBulletedIcon />
                    <GridViewOutlinedIcon />
                </div>
                <div>
                    <DeleteModal />
                </div>
            </div>
    )
}

export default ButtonDelete