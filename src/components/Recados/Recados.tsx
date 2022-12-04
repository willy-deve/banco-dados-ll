import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box } from '@mui/material'
import { Recado } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../store/modules/hooks'
import { selectAll } from '../../store/recados/recadosSlice'

const Recados: React.FC<Recado> = ({ id, description, detail }) => {
  const dispatch = useAppDispatch();
  const listaRecados = useAppSelector(selectAll)
  return (
    <Box
      sx={{
        width: '70vw',
        boxShadow: '4px -1px 22px 5px #9e9e9e',
        borderRadius: '40px',
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Detail</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Updated</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Teste</TableCell>
              <TableCell>Teste</TableCell>
              <TableCell>data</TableCell>
              <TableCell>data</TableCell>
              <TableCell>
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="edit">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Teste 2</TableCell>
              <TableCell>Teste 2</TableCell>
              <TableCell>data 2</TableCell>
              <TableCell>data 2</TableCell>
              <TableCell>
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="edit">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Teste 3</TableCell>
              <TableCell>Teste 3</TableCell>
              <TableCell>data 3</TableCell>
              <TableCell>data 3</TableCell>
              <TableCell>
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="edit">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Recados
