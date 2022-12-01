export interface Recado {
  id: number
  description: string
  detail: string
  created?: Date
  updated?: Date
}

export interface RecadoRequest {
  description: string
  detail: string
}
