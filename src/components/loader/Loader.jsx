import { Spinner } from '@chakra-ui/react'
import React from 'react'
import "./loader.scss"

const Loader = () => {
  const white = "#ffffff"
  const purple ="#B1B1B1"

  return (
    <main className='spinner'>
      <Spinner className='spinner__loader'
        thickness='4px'
        speed='0.65s'
        emptyColor={purple}
        color={white}
        size='xl'
      />
    </main>
  )
}

export default Loader