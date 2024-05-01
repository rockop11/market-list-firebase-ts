import { Box, Divider, Typography } from "@mui/material"
import { Delete } from "@mui/icons-material"

interface Props {
    id: string
    productName: string
    price: number
}

export const ProductListItem = ({ productName, price }: Props) => {
    return (
        <>
            <Box
                component='article'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between', height: '30px'
                }}
            >
                <Typography variant='body1'>{productName}</Typography>
                <Typography variant='body1'>${price}</Typography>
                <Delete color="error" fontSize="small" />
            </Box>
            <Divider />
        </>
    )
}