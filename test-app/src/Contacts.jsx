import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'
function Contacts() {
	const navigate = useNavigate()
	const handleLogout = () => {
		localStorage.removeItem('user')
		navigate('/')
	}
	return (
		<>
			<header className='cabinet-header'>
				<div className='logo'>logo</div>

				<Link className='link' to='/contacts'>
					Контакты
				</Link>

				<button className='logout-btn' onClick={handleLogout}>
					Выйти
				</button>
			</header>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8'>
						<h1 className='text'>Контакты</h1>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contacts
