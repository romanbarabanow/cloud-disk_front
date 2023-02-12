import React, { useState } from 'react'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import icon from './icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducers/userReducer'
import { getFiles, searchFiles } from '../../action/file'
import { showLoader, hideLoader } from '../../reducers/appReducer'
const Header = () => {
	const isAuth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()
	const [searchName, setSearchName] = useState('')
	const [searchTimeout, setSearchTimeout] = useState(false)

	return (
		<div className={styles.container}>
			<div className={styles.leftcont}>
				<img src={icon} alt='icon' />
				<p className={styles.main_text}>Cloud Disk</p>
			</div>
			<div className={styles.rightcont}>
				{!isAuth && (
					<div>
						<NavLink to='/login'>
							<p className={styles.log_text}>Войти</p>
						</NavLink>
					</div>
				)}
				{!isAuth && (
					<div>
						<NavLink to='/registration'>
							<p className={styles.reg_text}>Регистрация</p>
						</NavLink>
					</div>
				)}

				{isAuth && (
					<p
						className={styles.logout}
						onClick={() => {
							dispatch(logout())
						}}
					>
						Выход
					</p>
				)}
			</div>
		</div>
	)
}

export default Header
