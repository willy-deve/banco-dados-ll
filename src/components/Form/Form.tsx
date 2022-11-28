import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import React from 'react'
import BoxFormStyled from './BoxFormStyled'

const Form = () => {
  return (
    <BoxFormStyled>
      <TextField
        variant="filled"
        placeholder="Digite aqui"
        label="Description"
      />
      <TextField
        variant="filled"
        placeholder="Digite aqui"
        label="Detail"
        sx={{ marginTop: '20px' }}
      />

      <Button variant="contained"> Salvar</Button>
      <Button variant="contained"> Cancelar</Button>
    </BoxFormStyled>
  )
}

export default Form
