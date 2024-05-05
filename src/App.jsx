import { Box } from '@mui/material'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  return (
   <Box>
      <RouterProvider router={router} />
   </Box>
  )
}

export default App
