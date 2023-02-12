import React from 'react'
import styles from './Success.module.scss'
import { NavLink } from 'react-router-dom'

const RegistrationSuccess = () => {
	return (
		<div className={styles.success_cont}>
			<p className={styles.success_text}>Вы успешно загегистрировались!</p>
			<NavLink to='/' className={styles.success_text_disk}>
				<p className={styles.success_text_disk}>Перейти к Диску</p>
			</NavLink>
		</div>
	)
}

export default RegistrationSuccess
