import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Home() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	return (
		<>
			<header className='cabinet-header'>
				<div className='logo'>logo</div>
				<Link className='link' to='/contacts'>
					Контакты
				</Link>

				<button className='logout-btn' onClick={() => setIsLoginOpen(true)}>
					Войти
				</button>
			</header>
			<div className='home-container'>
				<div className='row1'>
					<div className='col-md-8'>
						<h1 className='main-text'>
							Место для получения медицинской помощи
						</h1>
						<div className='cta1'>
							<button
								className='main-login'
								onClick={() => setIsLoginOpen(true)}
							>
								Войти
							</button>
							<Link to='/contacts'>
								<button className='main-btn-link'>Контакты</button>
							</Link>
						</div>
					</div>
				</div>

				<div className='row2'>
					<div className='card'>
						<img src='/svg/circle1_sec.svg' width='72px' height='72px' />
						<h3>Онлайн-прием</h3>
						<div className='line'></div>
						<p>Рыба текст</p>
					</div>

					<div className='card'>
						<img src='/svg/circle2_sec.svg' width='72px' height='72px' />
						<h3>Экстренный случай</h3>
						<div className='line'></div>
						<p>Рыба текст</p>
					</div>

					<div className='card'>
						<img src='/svg/circle3_sec.svg' width='72px' height='72px' />
						<h3>Лечение рака</h3>
						<div className='line'></div>
						<p>Рыба текст</p>
					</div>
				</div>
			</div>
			{isLoginOpen && <Login setIsLoginOpen={setIsLoginOpen} />}
		</>
	)
}

export default Home
