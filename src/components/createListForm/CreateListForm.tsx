import { v4 as uuidv4 } from 'uuid';
import { useFormik } from "formik";
import { useAppDispatch } from "../../app/store"
import { addProductToList, addPrice } from "../../app/slices/listSlices"
import { initialValues, validationSchema } from './CreateListFormSchema';
import { FormGroup, FormControl, TextField, Button, Typography, Grid } from "@mui/material"

interface formValues {
    productName: string;
    price: string
}


export const CreateListForm = () => {

    const dispatch = useAppDispatch()

    const formik = useFormik<formValues>({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: (formValues, { resetForm }) => {

            const parsedPrice = parseFloat(formValues.price)

            const newProduct = {
                id: uuidv4(),
                productName: formValues.productName,
                price: parsedPrice
            }

            dispatch(addProductToList(newProduct))
            dispatch(addPrice())

            resetForm()
        }
    })


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <FormControl sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                        <TextField
                            label="Producto"
                            variant="outlined"
                            size='small'
                            name='productName'
                            value={formik.values.productName}
                            error={formik.touched.productName && Boolean(formik.errors.productName)}
                            onChange={formik.handleChange}
                            sx={{ width: '50%' }}
                        />

                        <TextField
                            label="Precio"
                            variant="outlined"
                            size='small'
                            name='price'
                            type='number'
                            value={formik.values.price}
                            error={formik.touched.productName && Boolean(formik.errors.productName)}
                            onChange={formik.handleChange}
                            sx={{ width: '20%' }}
                        />


                        <Button
                            variant='contained'
                            color="success"
                            type='submit'
                        >
                            +
                        </Button>

                    </FormControl>

                    <Grid container direction='row' columnSpacing={7}>
                        <Grid item xs={6}>
                            {
                                formik.errors.productName && <Typography variant='caption' color='#d32f2f'>{formik.errors.productName}</Typography>
                            }
                        </Grid>

                        <Grid item xs={6}>
                            {
                                formik.errors.price && <Typography variant='caption' color='#d32f2f'>{formik.errors.price}</Typography>
                            }
                        </Grid>

                    </Grid>
                </FormGroup>
            </form>
        </>
    )
}