import { Box, Button, Divider, Typography } from "@mui/material"
import { useAppSelector, useAppDispatch } from "../../app/store"
import { ProductListItem } from "../productListItem/ProductListItem"
import { showModal, closeModal } from "../../app/slices/modalSlices"
import { clearProductListAndPrice } from "../../app/slices/listSlices"
import { Modal } from "../../components"


export const ProductList = () => {
	const dispatch = useAppDispatch()

	const productList = useAppSelector(state => state.list.productList)
	const totalPrice = useAppSelector(state => state.list.totalPrice)

	const modal = useAppSelector(state => state.modal.isActive)

	const deleteButtonHanlder = (): void => {
		dispatch(showModal())
	}

	const deleteListHandler = () => {
		dispatch(clearProductListAndPrice())
		dispatch(closeModal())
	}

	return (
		<>
			<Box
				component='section'
			>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
					<Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
					{
						productList.length > 0 && (
							<Button variant="contained" color="error" onClick={deleteButtonHanlder}>Borrar Lista</Button>
						)
					}

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
				{
					modal && (
						<Modal
							title='Desea eliminar la lista?'
							actionButtonValue="Borrar"
							actionButtonHandler={deleteListHandler}
						/>
					)
				}
			</Box>
		</>
	)
}
