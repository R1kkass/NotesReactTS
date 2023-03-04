import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import DeleteModal from "../../Components/DeleteModal/DeleteModal"
import { memo, useContext } from "react"
import { MyContext } from "../../Context"
import { useParams } from "react-router"

const ButtonDelete = memo(() => {
    const { statusSet = () => {} } = useContext(MyContext)
    const params = useParams()
    return (
        <div className="LeftBlock__button">
            <div>
                <FormatListBulletedIcon onClick={() => statusSet(false)} />
                <GridViewOutlinedIcon onClick={() => statusSet(true)} />
            </div>
            <div>{params.id ? <DeleteModal /> : <></>}</div>
        </div>
    )
})

export default ButtonDelete
