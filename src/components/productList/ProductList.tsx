import { Box, Button, Divider, Typography } from "@mui/material"
import { useAppSelector } from "../../app/store"
import { ProductListItem } from "../productListItem/ProductListItem"


export const ProductList = () => {
	const productList = useAppSelector(state => state.list.productList)
	const totalPrice = useAppSelector(state => state.list.totalPrice)

	return (
		<Box
			component='section'
		>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
				<Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
				<Button variant="contained" color="error">Borrar Lista</Button>
			</Box>
			<Divider sx={{ marginBottom: '10px' }} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
				{
					!productList.length ? (
						<Typography variant='h5' align="center">La lista esta vacía</Typography>
					) : (
						productList.map(({ id, productName, price }) => (
							<ProductListItem key={id} id={id} productName={productName} price={price} />
						))
					)
				}
			</Box>
		</Box>
	)
}
