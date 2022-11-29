/* eslint-disable import/no-extraneous-dependencies */
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Navigation = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Projeto Final Banco de Dados ll API - Willy
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation
