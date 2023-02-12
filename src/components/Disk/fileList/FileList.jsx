import React from 'react'
import { useSelector } from 'react-redux'
import styles from './FileList.module.scss'
import File from './file/File'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './file.css'

const FileList = () => {
	const files = useSelector(state => state.files.files)

	if (files.length === 0) {
		return <div className='loader'>File is not found</div>
	}
	return (
		<div className={styles.filelist}>
			<div className={styles.filelist_header}>
				<div className={styles.filelist_name}>
					<p className={styles.text}>Название</p>
				</div>
				<div className={styles.filelist_date}>
					<p className={styles.text}>Дата</p>
				</div>
				<div className={styles.filelist_size}>
					<p className={styles.text}>Размер</p>
				</div>
			</div>
			<TransitionGroup>
				{files.map(file => (
					<CSSTransition
						key={file._id}
						timeout={500}
						classNames={'file'}
						exit={false}
					>
						<File file={file} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	)
}

export default FileList
