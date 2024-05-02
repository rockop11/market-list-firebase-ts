import { Box, Button, Typography } from "@mui/material"
import { useAppDispatch } from "../../app/store"
import { closeModal } from "../../app/slices/modalSlices"

interface Props {
    title: string,
    actionButtonValue: string
    actionButtonHandler: () => void
}

export const Modal = ({ title, actionButtonValue, actionButtonHandler }: Props) => {
    const dispatch = useAppDispatch()

    const closeModalHandler = () => {
        dispatch(closeModal())
    }

    return (
        <Box sx={{
            border: '1px solid red',
            position: 'absolute',
            top: 0,
            left: 0,
            width: "100%",
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
            <Box sx={{
                position: 'absolute',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: '1px solid black',
                backgroundColor: 'white',
                padding: '20px',
                width: '70%',
                textAlign: 'center',
                borderRadius: '10px'
            }}>
                <Typography variant='h6'>{title}</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Button variant='contained' onClick={closeModalHandler}>Cerrar</Button>

                    <Button variant='contained' onClick={actionButtonHandler}>{actionButtonValue}</Button>
                </Box>
            </Box>
        </Box>
    )
}
