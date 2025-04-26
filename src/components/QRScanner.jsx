import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import style from './qrScanner.module.css'
import { SCAN_DATA } from '../constants';


const QRScanner = () => {
	const [scanned, setScanned] = useState(null)

	const scanHandler = (result) => {
		if (!result) return

		setScanned(result.text)

		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

		if (prevData.includes(result.text)) return

		localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result.text]))
	}

	return (
		<div className={style}>
			<QrReader
				scanDelay={1000}
				onResult={scanHandler}
				containerStyle={{ width: '800px' }}
			/>
			<p>{scanned}</p>
		</div>
	)
}

export default QRScanner
