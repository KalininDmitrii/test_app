import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usersData from './users.json'

function Login({ setIsLoginOpen }) {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const handleSubmit = () => {
		if (password.length < 8) {
			setError('Пароль должен быть не менее 8 символов')
			return
		}

		const user = usersData.find(
			u => u.login === login && u.password === password
		)
		if (user) {
			localStorage.setItem('user', JSON.stringify(user))
			setIsLoginOpen(false)
			navigate('/cabinet')
		} else {
			setError('Неверный логин или пароль')
		}
	}

	return (
		<div className='modal'>
			<div className='modal-content'>
				<span className='close' onClick={() => setIsLoginOpen(false)}>
					&times;
				</span>
				<h2>Авторизация</h2>
				<input
					type='text'
					placeholder='Логин'
					value={login}
					onChange={e => setLogin(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Пароль'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button onClick={handleSubmit}>Войти</button>
				{error && <p style={{ color: 'red' }}>{error}</p>}
			</div>
		</div>
	)
}

export default Login
