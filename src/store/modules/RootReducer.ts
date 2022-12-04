import { combineReducers } from '@reduxjs/toolkit'
import { recado, recados } from '../recados/index'
import botoes from '../botoes/BotoesSlice'

const combinedReducer = combineReducers({
  recados,
  recado,
  botoes,
})

export default combinedReducer
