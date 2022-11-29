import React from 'react'
import { Box } from '@mui/material'
import Form from '../components/Form/Form'
import Navigation from '../components/Navigation/Navigation'
import Recados from '../components/Recados/Recados'

const Home: React.FC = () => {
  return (
    <div>
      <Box
        sx={{
          width: '100vw',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Navigation />
        <Form />
        <Recados />
      </Box>
    </div>
  )
}

export default Home
