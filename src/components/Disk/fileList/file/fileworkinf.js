import React from 'react'
import styles from './File.module.scss'
import iconDir from './filefolder.png'
import iconFile from './file.png'
import { useDispatch, useSelector } from 'react-redux'
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer'
import { deleteFile, downloadFile } from '../../../../action/file'
const File = ({ file }) => {
	const dispatch = useDispatch()
	const currentDir = useSelector(state => state.files.currentDir)

	function openDirHandler(file) {
		if (file.type === 'dir') {
			dispatch(pushToStack(currentDir))
			dispatch(setCurrentDir(file._id))
		}
	}

	function downloadClickHandler(e) {
		// e.stopPropagation()
		downloadFile(file)
	}

	function deleteClickHandler(e) {
		e.stopPropagation()
		dispatch(deleteFile(file))
	}
	return (
		<div className={styles.file} onClick={() => openDirHandler(file)}>
			<img
				src={file.type === 'dir' ? iconDir : iconFile}
				alt=''
				className={styles.file_img}
			/>
			<div className={styles.file_name}>
				<p className={styles.text}>{file.name}</p>
			</div>
			<div className={styles.file_date}>
				<p className={styles.text}>{file.data.slice(0, 10)}</p>
			</div>
			<div className={styles.file_size}>
				<p className={styles.text}>{file.size}</p>
			</div>
			{file.type !== 'dir' && (
				<button
					className={styles.file_btn_file_download}
					onClick={e => downloadClickHandler(e)}
				>
					Download
				</button>
			)}
			<button
				className={styles.file_btn_file_delete}
				onClick={e => deleteClickHandler(e)}
			>
				Delete
			</button>
		</div>
	)
}

export default File
