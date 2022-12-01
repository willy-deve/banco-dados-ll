/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
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

const adapter = createEntityAdapter<Recado>({
  selectId: (item) => item.id,
})

export const { selectAll, selectById } = adapter.getSelectors(
  (state: RootState) => state.recados
)

const recadosSlice = createSlice({
  name: 'recados',
  initialState: adapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(buscarRecados.pending, (state) => {
      state.loading = true
    })
    builder.addCase(buscarRecados.fulfilled, (state, action) => {
      state.loading = false
      adapter.setAll(state, action.payload)
    })

    builder.addCase(criarRecado.pending, (state) => {
      state.loading = true
    })
    builder.addCase(criarRecado.fulfilled, (state, action) => {
      state.loading = false
      adapter.addOne(state, action.payload)
    })

    builder.addCase(atualizarRecado.pending, (state) => {
      state.loading = true
    })
    builder.addCase(atualizarRecado.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload.id === 0) {
        return state
      }
      adapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      })
    })

    builder.addCase(excluirRecado.pending, (state) => {
      state.loading = true
    })
    builder.addCase(excluirRecado.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload.message === 'Recado não excluido.') {
        return state
      }
      adapter.removeOne(state, action.payload.id)
    })
  },
})

export default recadosSlice.reducer
