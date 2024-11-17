import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApiProvider } from './providers/api-provider/api-provider.tsx'
import { StoreProvider } from './providers/store-provider.tsx'
import { CreateComboScreen } from './screens/CreateComboScreen/CreateComboScreen.tsx'
import { NotFoundScreen } from './screens/NotFound.tsx'
import { UserProfileScreen } from './screens/UserProfileScreen/UserProfileScreen.tsx'
import { ViewComboScreen } from './screens/ViewComboScreen.tsx'

function App() {
  return (
    <StrictMode>
      <StoreProvider>
        <ApiProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CreateComboScreen />} />
              <Route path="/u/:userId" element={<UserProfileScreen />} />
              <Route path="/c/:encodedCombo" element={<ViewComboScreen />} />
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </BrowserRouter>
        </ApiProvider>
      </StoreProvider>
    </StrictMode>
  )
}

export default App
