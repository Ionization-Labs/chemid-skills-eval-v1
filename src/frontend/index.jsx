import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../css/index.css'
import Dashboard from './Dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Dashboard />} />
		</Routes>
	</BrowserRouter>
)
