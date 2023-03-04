import * as React from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useSpring, animated } from "@react-spring/web"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import { MyContext } from "../../Context"
import { INotes } from "../../App"
import "./AddNote.scss"

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

export default function AddNote() {
    const refName = React.useRef<HTMLTextAreaElement>(null)
    const refText = React.useRef<HTMLInputElement>(null)
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const { addNotes = (text: INotes) => {}, notes = [] } =
        React.useContext(MyContext)
    const [err, setErr] = React.useState("")

    function add() {
        let d = new Date()
        if (!refName?.current?.value) {
            setErr("Поле пустое")
        } else {
            setErr("")
            addNotes({
                name: refName?.current?.value || "",
                text: refText?.current?.value || "",
                id: Date.now(),
                data: [
                    d.getDay(),
                    d.getMonth(),
                    d.getFullYear(),
                    d.getHours(),
                    d.getMinutes(),
                ],
                style: {},
            })
            localStorage.setItem("note", JSON.stringify(notes))
        }
    }

    return (
        <div>
            <CreateOutlinedIcon onClick={handleOpen} />
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
                        <div className="AddNote">
                            <Typography
                                id="spring-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                <textarea
                                    ref={refName}
                                    placeholder="Текст записи"
                                />
                            </Typography>
                            <Typography
                                id="spring-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                <input
                                    ref={refText}
                                    placeholder="Дополнительный текст"
                                />
                            </Typography>
                            <Typography
                                id="spring-modal-description"
                                sx={{ mt: 2 }}
                            >
                                <Button onClick={add}>Добавить заметку</Button>
                                <p>{err}</p>
                            </Typography>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
