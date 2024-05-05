import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material"
import { closeModal } from "../../app/slices/modalSlices"
import { useAppDispatch } from "../../app/store"

interface ModalProps {
    open: boolean,
    dialogTitle: string
    buttonColor: string
    buttonValue: string
    handler: () => void
}

export const Modal = ({ open, dialogTitle, buttonColor, buttonValue, handler }: ModalProps) => {
    const dispatch = useAppDispatch()

    return (
        <Dialog open={open}>
            <DialogTitle>{dialogTitle}</DialogTitle>

            <DialogActions>
                <Button
                    variant="contained"
                    onClick={handler}
                    sx={{ background: `${buttonColor}` }}>
                    {buttonValue}
                </Button>

                <Button
                    variant="contained"
                    onClick={() => dispatch(closeModal())}>
                    Cerrar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
