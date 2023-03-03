import * as React from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useSpring, animated } from "@react-spring/web"
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha"
import { MyContext } from "../../Context"
import { useParams } from "react-router-dom"
import Select from "../../UI/Select/Select"

interface FadeProps {
    children: React.ReactElement
    in?: boolean
    onClick?: any
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void
    onExited?: (node: HTMLElement, isAppearing: boolean) => void
    ownerState?: any
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
    props,
    ref
) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null as any, true)
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null as any, true)
            }
        },
    })

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    )
})

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
}

export default function EditTextModal() {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const { deleteNotes = (id: number) => {}, notes = [] } =
        React.useContext(MyContext)
    const params = useParams()

    const { editStyle = () => {} } = React.useContext(MyContext)


    return (
        <div>
            <SortByAlphaIcon onClick={handleOpen} />
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="spring-modal-description"
                            sx={{ mt: 2 }}
                        >
                            <div></div>
                        </Typography>
                        <Typography
                            id="spring-modal-description"
                            sx={{ mt: 2 }}
                        >
                            <Select
                                options={[
                                    { label: "14px" },
                                    { label: "16px" },
                                    { label: "18px" },
                                ]}
                                label="Размер текста"
                                onChange={(e: React.ChangeEvent<any>) => {
                                    editStyle(e?.target?.innerText || "", Number(params?.id) || 0, 'fontSize')
                                }}
                            />
                        </Typography>
                        <Typography
                            id="spring-modal-description"
                            sx={{ mt: 2 }}
                        >
                            <Select
                                options={[
                                    { label: "Красный" },
                                    { label: "Синий" },
                                    { label: "Жёлтый" },
                                ]}
                                label="Цвет"
                                onChange={(e: React.ChangeEvent<any>) => {
                                    editStyle(e?.target?.innerText || "", Number(params?.id) || 0, 'color')
                                }}
                            />
                        </Typography>
                        <Typography
                            id="spring-modal-description"
                            sx={{ mt: 2 }}
                        >
                            <Select
                                options={[
                                    { label: "Times New Roman" },
                                    { label: "Arial" },
                                    { label: "Calibri" },
                                ]}
                                onChange={(e: React.ChangeEvent<any>) => {
                                    editStyle(e?.target?.innerText || "", Number(params?.id) || 0, 'fontFamily')
                                }}
                                label="Шрифт"
                            />
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
