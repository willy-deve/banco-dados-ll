/* eslint-disable spaced-comment */
import axios from 'axios'
import { Recado, RecadoRequest } from '../../types/types'

const api = axios.create({
  baseURL: 'https://api-database-ll.herokuapp.com/',
})

//BUSCAR TODOS
async function getAllApi(url: string): Promise<Recado[]> {
  try {
    const response = await api.get(url)
    return response.data
  } catch {
    return []
  }
}

//CRIAR RECADO
async function postApi(url: string, data: RecadoRequest): Promise<Recado> {
  try {
    const response = await api.post(url, data)
    return response.data
  } catch {
    return { id: 0, description: '', detail: '' }
  }
}

//EXCLUIR RECADO
async function deleteApi(url: string): Promise<string> {
  try {
    const response = await api.delete(url)
    return response.data
  } catch {
    return 'Recado não excluido.'
  }
}

//ATUALIZAR RECADO
async function putApi(url: string, data: RecadoRequest): Promise<Recado> {
  try {
    const response = await api.put(url, data)
    return response.data
  } catch {
    return { id: 0, description: '', detail: '' }
  }
}

export { postApi, putApi, deleteApi, getAllApi }
