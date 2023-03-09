import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Button } from '@mui/material'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <Button
        variant="contained"
        sx={style.button1}
        onClick={() => {
          setCount((count) => count + 1)
        }}
      >
        count is {count}
      </Button>
    </>
  )
}

const style = {
  button1: {
    backgroundColor: '#255a60',
    color: '#ccd47e'
  }
}

export default App
