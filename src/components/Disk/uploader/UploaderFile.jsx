import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUploadFile } from '../../../reducers/uploadReducer'
import styles from './upload.module.scss'

const UploaderFile = ({ file }) => {
	const dispatch = useDispatch()
	return (
		<div className={styles.upload_file}>
			<div className={styles.upload_file_header}>
				<div className={styles.upload_file_name}>{file.name}</div>
				<button
					className={styles.upload_file_remove}
					onClick={() => dispatch(removeUploadFile(file.id))}
				>
					X
				</button>
			</div>
			<div className={styles.upload_file_progress_bar}>
				<div
					className={styles.upload_file_upload_bar}
					style={{ width: file.progress + '%' }}
				/>
				<div className={styles.upload_file_percent}>{file.progress}%</div>
			</div>
		</div>
	)
}

export default UploaderFile
