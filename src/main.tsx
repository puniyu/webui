import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import App from '@/app'
import { BrowserRouter } from "react-router-dom"
import '@/styles/tailwind.css'
import '@/styles/root.scss'

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>,
)