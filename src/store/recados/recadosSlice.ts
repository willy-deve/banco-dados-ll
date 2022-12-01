import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { deleteApi, getAllApi, postApi, putApi } from '../../service/api/api'
import { Recado, RecadoRequest } from '../../types/types'
import { RootState } from '../modules'

export const buscarRecados = createAsyncThunk(
  'recados/buscarRecadps',
  async () => {
    const response: Recado[] = await getAllApi('/all')
    return response
  }
)

export const criarRecado = createAsyncThunk(
  'recados/criarRecado',
  async (dado: RecadoRequest) => {
    const response = await postApi('/', dado)
    return response
  }
)

export const atualizarRecado = createAsyncThunk(
  'recado/AtualizarRecado',
  async (dado: Recado) => {
    const { id } = dado

    const dataRequest = {
      description: dado.description,
      detail: dado.detail,
    }

    const response = await putApi(`/${id}`, dataRequest)
    return response
  }
)

export const excluirRecado = createAsyncThunk(
  'recados/excluirRecados',
  async (id: number) => {
    const response = await deleteApi(`/${id}`)
    return {
      id,
      message: response,
    }
  }
)

const adapter = createEntityAdapter({
  selectId: (item) => item.id,
})

export const { selectAll, selectById } = adapter.getSelectors(
  (state: RootState) => state.recados
)

const recadosSlice = createSlice({
  name: 'recados',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
})

export const { addOne, addMany, updateOne } = sliceNameSlice.actions
export default sliceNameSlice.reducer
