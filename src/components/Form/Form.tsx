import { Button, Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import { checkBotoes } from '../../store/botoes/BotoesSlice'
import { useAppDispatch, useAppSelector } from '../../store/modules/hooks'
import BoxFormStyled from './BoxFormStyled'

const Form: React.FC<{ id?: number }> = ({ id }) => {
  const [description, setDescription] = useState('')
  const [detail, setDetail] = useState('')
  const [isCreate, setIsCreate] = useState(true)
  const [idRecado, setIdRecado] = useState(0)
  const recadoSelecionado = useAppSelector((state) => state.recado)
  const estadoBotao = useAppSelector((state) => state.botoes.check)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!estadoBotao) {
      setIsCreate(false)
      setDescription(recadoSelecionado.description)
      setDetail(recadoSelecionado.detail)
      setIdRecado(recadoSelecionado.id)
    }

    if (estadoBotao) {
      setDescription('')
      setDetail('')
      setIdRecado(0)
      setIsCreate(true)
    }
  }, [estadoBotao, recadoSelecionado])

  const handleCancelFormulario = () => {
    setDescription('')
    setDetail('')
    setIdRecado(0)
    dispatch(checkBotoes(true))
  }

  return (
    <BoxFormStyled>
      <TextField
        variant="filled"
        placeholder="Digite aqui"
        label="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <TextField
        variant="filled"
        placeholder="Digite aqui"
        label="Detail"
        sx={{ marginTop: '20px' }}
        onChange={(e) => setDetail(e.target.value)}
        value={detail}
      />

      <Button variant="contained"> Salvar</Button>
      <Button variant="contained"> Cancelar</Button>
    </BoxFormStyled>
  )
}

export default Form
