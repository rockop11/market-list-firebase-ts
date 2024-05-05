import { useEffect, useState } from "react"
import { Box, Button, Divider, Typography } from "@mui/material"
import { ProductListItem } from "../productListItem/ProductListItem"
import { useAppSelector, useAppDispatch } from "../../app/store"
import { showModal, closeModal } from "../../app/slices/modalSlices"
import { clearProductListAndPrice } from "../../app/slices/listSlices"
import { Modal } from '../'


export const ProductList = () => {
	const dispatch = useAppDispatch()

	const productList = useAppSelector(state => state.list.productList)
	const totalPrice = useAppSelector(state => state.list.totalPrice)
	const modal = useAppSelector(state => state.modal)

	const [dialogTitle, setDialogTitle] = useState<string>("")
	const [buttonValue, setButtonValue] = useState<string>("")
	const [buttonColor, setButtonColor] = useState<string>("")

	const openModal = (action: string) => {
		dispatch(showModal(action));
	};

	const checkActionButton = () => {
		if (modal.action === "Borrar Lista") dispatch(clearProductListAndPrice())
		if (modal.action === "Guardar Lista") console.log("guardar en firebase")

		dispatch(closeModal())
	}

	const checkDialogValues = () => {
		if (modal.action === "Borrar Lista") {
			setDialogTitle("Desea borrar la lista?")
			setButtonValue("Borrar lista")
			setButtonColor('#d32f2f')
		}

		if (modal.action === "Guardar Lista") {
			setDialogTitle("Desea guardar la lista?")
			setButtonValue("Guardar lista")
			setButtonColor('#2e7d32')
		}
	}

	useEffect(() => {
		checkDialogValues()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modal.action])


	return (
		<>
			<Box
				component='section'
			>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
					<Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
					{
						productList.length > 0 && (
							<Button variant="contained" color="error" onClick={() => openModal("Borrar Lista")}>
								Borrar Lista
							</Button>
						)
					}

				</Box>
				<Divider sx={{ marginBottom: '10px' }} />
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '450px', overflow: 'hidden', overflowY: 'scroll' }}>
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
					productList.length > 0 && (
						<Box sx={{ marginTop: '10px' }}>
							<Button
								variant='contained'
								onClick={(() => openModal("Guardar Lista"))}
							>
								Guardar Lista
							</Button>
						</Box>
					)
				}

				<Modal
					open={modal.isActive}
					dialogTitle={dialogTitle}
					buttonValue={buttonValue}
					buttonColor={buttonColor}
					handler={checkActionButton}
				/>
			</Box>
		</>
	)
}