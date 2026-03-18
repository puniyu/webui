import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'normalize.css'
import '@/styles/global.css'
import { scan } from 'react-scan'

import App from '@/app'

scan({
	enabled: true,
})

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
				<App />
		</BrowserRouter>
	</React.StrictMode>,
)
