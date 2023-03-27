import './App.scss'
import router from './app/index.jsx'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App
