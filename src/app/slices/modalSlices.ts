import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
    isActive: boolean
}

const initialState: ModalState = {
    isActive: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.isActive = true
        },
        closeModal: (state) => {
            state.isActive = false
        }
    }
})


export const { showModal, closeModal } = modalSlice.actions

export default modalSlice.reducer

