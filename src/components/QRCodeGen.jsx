import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './qrCodeGen.css'
import { GENERATE_DATA } from '../constants';

const QRCodeGen = () => {
	const [value, setValue] = useState('')
	const [result, setResult] = useState('')

	const onChangeHandler = event => {
		setValue(event.target.value)
		setResult('')
	}
	const onClickHandler = () => {
		setResult(value);
		setValue('')

		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

		localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))
	}

	return (
		<div className='container'>
			<input
				type='text' value={value}
				onChange={onChangeHandler} className='input'
				placeholder='Введите текст...'
			/>

			<button type='button' onClick={onClickHandler} className='button'>
				Сгенерировать QR
			</button>

			{result !== '' && <QRCodeSVG value={result} className='qrwrapper' />}
		</div>
	)
}

export default QRCodeGen
