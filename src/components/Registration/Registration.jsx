import React, { useState } from 'react'
import Input from '../../utils/input/Input'
import styles from './Registration.module.scss'
import { registration } from '../../action/user'

const Registration = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div className={styles.main_cont}>
			<div className={styles.container}>
				<p className={styles.reg_text}>Регистрация</p>
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
					onClick={() => registration(email, password)}
				>
					Регестрация
				</button>
			</div>
		</div>
	)
}

export default Registration
