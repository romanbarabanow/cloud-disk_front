import React, { useState } from 'react'
import Input from '../../utils/input/Input'
import styles from './Login.module.scss'
import { login } from '../../action/user'
import { useDispatch } from 'react-redux'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	return (
		<div className={styles.main_cont}>
			<div className={styles.container}>
				<p className={styles.reg_text}>Вход</p>
				<Input
					placeholder='Введите почту'
					type='text'
					value={email}
					setValue={setEmail}
				/>
				<Input
					placeholder='Введите пароль'
					type='password'
					value={password}
					setValue={setPassword}
				/>
				<button
					className={styles.button}
					onClick={() => dispatch(login(email, password))}
				>
					Войти
				</button>
			</div>
		</div>
	)
}

export default Login
