import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateComboScreen } from './screens/CreateComboScreen/CreateComboScreen.tsx'
import { ViewComboScreen } from './screens/ViewComboScreen.tsx'

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateComboScreen />} />
          <Route path="/c/:encodedCombo" element={<ViewComboScreen />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

export default App
