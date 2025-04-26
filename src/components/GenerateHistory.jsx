import { QRCodeSVG } from "qrcode.react"
import { GENERATE_DATA } from "../constants"


const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

	return (
		<div>
			<h2>История генерации QR-кодов</h2>
			{data.map((text, index) => (
				<div key={`${text}-${index}`}>
					<p>{text}</p>
					<QRCodeSVG value={text} className='qrwrapper' size={100} />
				</div>
			))}
		</div>
	)
}

export default GenerateHistory 