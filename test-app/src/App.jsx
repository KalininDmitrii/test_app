import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Contacts from './Contacts'
import Home from './Home'
import PersonalCabinet from './PersonalCabinet'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cabinet' element={<PersonalCabinet />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
		</Router>
	)
}

export default App
