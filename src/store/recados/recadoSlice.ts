import { createSlice } from '@reduxjs/toolkit'
import { Recado } from '../../types/types'
import { RootState } from '../modules'

const initialState: Recado = {
  id: 0,
  description: '',
  detail: '',
}

const recadoSlice = createSlice({
  name: 'recado',
  initialState,
  reducers: {
    create(state, action) {
      return action.payload
    },
    clear() {
      return initialState
    },
  },
})

export const { create, clear } = recadoSlice.actions
export const recadoSelecionado = (state: RootState): Recado => state.recado
export default recadoSlice.reducer
