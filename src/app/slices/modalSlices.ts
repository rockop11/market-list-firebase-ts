import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ModalState {
    isActive: boolean,
    action: string
}

const initialState: ModalState = {
    isActive: false,
    action: ''
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state, action: PayloadAction<string>) => {
            state.isActive = true
            state.action = action.payload
        },
        closeModal: (state) => {
            state.isActive = false
            state.action = ''
        }
    }
})


export const { showModal, closeModal } = modalSlice.actions

export default modalSlice.reducer

