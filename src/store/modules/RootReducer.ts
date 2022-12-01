import { combineReducers } from '@reduxjs/toolkit'
import { recado, recados } from '../recados/index'

const combinedReducer = combineReducers({
  recados,
  recado,
})

export default combinedReducer
