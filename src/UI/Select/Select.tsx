import * as React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { MyContext } from "../../Context"
import { useParams } from "react-router"

type TOption = {
    label: String
}

interface ISelect {
    options: TOption[]
    label: string,
    onChange?: (e:React.ChangeEvent<any>)=>void
}

const Select: React.FC<ISelect> = ({ options, label,onChange }) => {
    const { editStyle = () => {} } = React.useContext(MyContext)
    const params = useParams()
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            onChange={onChange}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    )
}

export default Select
