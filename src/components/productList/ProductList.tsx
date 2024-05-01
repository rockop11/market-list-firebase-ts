import { Box, Divider, Typography } from "@mui/material"
import { useAppSelector } from "../../app/store"
import { ProductListItem } from "../productListItem/ProductListItem"


export const ProductList = () => {
	const productList = useAppSelector(state => state.list.productList)
	const totalPrice = useAppSelector(state => state.list.totalPrice)

	return (
		<Box
			component='section'
		>
			<Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
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
