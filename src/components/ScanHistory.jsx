import { QRCodeSVG } from "qrcode.react"
import { SCAN_DATA } from "../constants"


const ScanHistory = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

	return (
		<div>
			<h2>История сканирования QR-кодов</h2>

			{data.map((text, index) => (
				<div key={`${text}-${index}`}>
					<p>{text}</p>
					<QRCodeSVG value={text} className='qrwrapper' size={100} />
				</div>
			))}
		</div>
	)
}

export default ScanHistory 