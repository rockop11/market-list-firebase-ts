import * as yup from "yup"

export function initialValues() {
    return {
        productName: '',
        price: ''
    }
}

export function validationSchema() {
    return yup.object().shape({
        productName: yup.string().required('campo requerido'),
        //validar los precios con decimales
        price: yup.number()
            .typeError('ingrese un número')
            .required('campo requerido')
    })
}