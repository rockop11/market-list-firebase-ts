import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IList } from '../../interfaces'

export interface ListState {
    productList: IList[]
    totalPrice: number
}

const initialState: ListState = {
    productList: [],
    totalPrice: 0
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addProductToList: (state, action: PayloadAction<IList>) => {
            state.productList.push(action.payload)
        },
        addPrice: (state) => {
            const productsPriceList = state.productList.map((product) => {
                return product.price
            })

            state.totalPrice = productsPriceList.reduce((acc, item) => {
                return acc + item
            }, 0)
        },
        clearProductListAndPrice: (state) => {
            state.productList = []
            state.totalPrice = 0
        }
    },
})


export const { addProductToList, addPrice, clearProductListAndPrice } = listSlice.actions

export default listSlice.reducer

