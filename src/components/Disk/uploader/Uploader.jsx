import React from 'react'
import styles from './upload.module.scss'
import UploaderFile from './uploaderFile'
import { useDispatch, useSelector } from 'react-redux'
import { hideUploader } from '../../../reducers/uploadReducer'

const Uploader = () => {
	const files = useSelector(state => state.upload.files)
	const isVisible = useSelector(state => state.upload.isVisible)
	const fileComp = files.map(file => <UploaderFile file={file} key={file.id} />)
	const dispatch = useDispatch()
	return (
		isVisible && (
			<div className={styles.uploader}>
				<div className={styles.uploader_header}>
					<div className={styles.uploader_tittle}>Загрузки</div>
					<button
						className={styles.uploader_close}
						onClick={() => {
							dispatch(hideUploader())
						}}
					>
						x
					</button>
				</div>
				{fileComp}
			</div>
		)
	)
}

export default Uploader
