import React, { useState } from 'react'
import styles from './Popup.module.scss'
import Input from '../../utils/input/Input'
import { createDir } from '../../action/file'
import { useDispatch, useSelector } from 'react-redux'
import { setPopupDisplay } from '../../reducers/fileReducer'

const Popup = () => {
	const [dirName, setDirName] = useState('')
	const popupDisplay = useSelector(state => state.files.popupDisplay)
	const currentDir = useSelector(state => state.files.currentDir)
	const dispatch = useDispatch()
	function createDirHandle() {
		dispatch(createDir(currentDir, dirName))
		setDirName('')
		dispatch(setPopupDisplay('none'))
	}
	return (
		<div
			className={styles.popup}
			style={{ display: popupDisplay }}
			onClick={() => {
				dispatch(setPopupDisplay('none'))
			}}
		>
			<div className={styles.popup_cont} onClick={e => e.stopPropagation()}>
				<div className={styles.popup_tittle}>
					<p className={styles.popup_tittle_text}>Создать папку</p>
					<button
						className={styles.popup_close}
						onClick={() => {
							dispatch(setPopupDisplay('none'))
						}}
					>
						X
					</button>
				</div>

				<Input
					placeholder='Введите название папки'
					type='text'
					value={dirName}
					setValue={setDirName}
				/>
				<button
					className={styles.popup_create}
					onClick={() => createDirHandle()}
				>
					Создать
				</button>
			</div>
		</div>
	)
}

export default Popup
