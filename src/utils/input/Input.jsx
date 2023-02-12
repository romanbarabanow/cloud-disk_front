import React from 'react'
import styles from './Input.module.scss'

const Input = props => {
	return (
		<input
			placeholder={props.placeholder}
			type={props.type}
			className={styles.input}
			value={props.value}
			onChange={e => props.setValue(event.target.value)}
		/>
	)
}

export default Input
