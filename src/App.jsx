import Header from './components/Header/Header'
import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import Disk from './components/Disk/Disk'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { auth } from './action/user'
import LoginSuccses from './components/success/LoginSuccses'
import RegistrationSuccess from './components/success/RegistrationSuccess'

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(auth())
	}, [dispatch])
	return (
		<BrowserRouter>
			<Header />
			<div>
				{!isAuth ? (
					<>
						<Routes>
							<Route path='/registration' element={<Registration />} />
							<Route path='/login' element={<Login />} />
						</Routes>
					</>
				) : (
					<>
						<Routes>
							<Route path='/login' element={<LoginSuccses />} />
							<Route path='/registration' element={<RegistrationSuccess />} />
							<Route exact path='/' element={<Disk />} />
						</Routes>
					</>
				)}
			</div>
		</BrowserRouter>
	)
}

export default App
