import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import App from './App.tsx'
import { Provider as AtomProvider } from 'jotai'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AtomProvider>
      <App />
    </AtomProvider>
  </StrictMode>,
)
