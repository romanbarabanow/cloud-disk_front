import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles, uploadFile } from '../../action/file'
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer'
import styles from './Disk.module.scss'
import FileList from './fileList/FileList'
import Popup from './Popup'
import Uploader from './uploader/Uploader'
import './Animation.css'

const Disk = () => {
	function fileUplaodHandler() {
		const files = [...event.target.files]
		files.forEach(file => dispatch(uploadFile(file, currentDir)))
	}
	function showPopUp() {
		dispatch(setPopupDisplay('flex'))
	}
	function backClickHandle() {
		const backDirId = dirStack.pop()
		dispatch(setCurrentDir(backDirId))
	}

	function dragEnterHandler(event) {
		event.preventDefault()
		event.stopPropagation()
		setDragEnter(true)
	}
	function dragLeaverHandler(event) {
		event.preventDefault()
		event.stopPropagation()
		setDragEnter(false)
	}

	function dropHandle(event) {
		event.preventDefault()
		event.stopPropagation()
		let files = [...event.dataTransfer.files]
		files.forEach(file => dispatch(uploadFile(file, currentDir)))
		setDragEnter(false)
	}

	const [sort, setSort] = useState('type')
	const [dragEnter, setDragEnter] = useState(false)
	const dirStack = useSelector(state => state.files.dirStack)
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)
	const loader = useSelector(state => state.app.loader)

	useEffect(() => {
		dispatch(getFiles(currentDir, sort))
	}, [currentDir, sort])

	if (loader) {
		return (
			<div className='loader'>
				<div className='lds-roller'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		)
	}
	return (
		<>
			{!dragEnter ? (
				<>
					<div
						className={styles.disk_cont}
						onDragEnter={dragEnterHandler}
						onDragLeave={dragLeaverHandler}
						onDragOver={dragEnterHandler}
					>
						<div className={styles.disk_button_cont}>
							{/* <button
								className={styles.back_button}
								onClick={() => {
									backClickHandle()
								}}
							>
								Назад
							</button>
							<button
								className={styles.newDir_button}
								onClick={() => {
									showPopUp()
								}}
							>
								Создать папку
							</button> */}

							<div className={styles.disk_upload}>
								<label
									htmlFor='disk_upload_input'
									className={styles.disk_upload_label}
								>
									Загрузите файл
								</label>
								<input
									multiple={true}
									type='File'
									className={styles.disk_upload_input}
									id='disk_upload_input'
									onChange={event => {
										fileUplaodHandler(event)
									}}
								/>
							</div>
							<select
								className={styles.disk_select}
								value={sort}
								onChange={e => {
									setSort(e.target.value)
								}}
							>
								<option value='name'>По имени</option>
								<option value='date'>По дате</option>
								<option value='type'>По типу</option>
							</select>
						</div>
						<FileList />
					</div>
					<Popup />
					<Uploader />
				</>
			) : (
				<div
					className={styles.drop_area}
					onDragEnter={dragEnterHandler}
					onDragLeave={dragLeaverHandler}
					onDragOver={dragEnterHandler}
					onDrop={dropHandle}
				>
					Перетащите файлы сюда
				</div>
			)}
		</>
	)
}

export default Disk
