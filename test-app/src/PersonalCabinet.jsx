import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'

function PersonalCabinet() {
	const user = JSON.parse(localStorage.getItem('user'))
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
						<h1 className='text'>
							Привет, {user ? user.name : 'Пользователь'}!
						</h1>
						<div className='cta'>
							<button className='btn-logout' onClick={handleLogout}>
								Выйти из аккаунта
							</button>
							<Link to='/contacts'>
								<button className='btn-link'>Перейти в контакты</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PersonalCabinet
