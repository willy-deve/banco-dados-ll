import React from 'react'
import Form from '../components/Form/Form'
import Navigation from '../components/Navigation/Navigation'
import Recados from '../components/Recados/Recados'

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Form />
      <Recados />
    </div>
  )
}

export default Home
