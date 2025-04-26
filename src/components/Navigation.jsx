import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav style={{
			display: 'flex',
			gap: '20px',
			padding: '20px',
			backgroundColor: '#f0f0f0',
			marginBottom: '20px'
		}}>
			<Link to="/qr-code/generate">Генерировать QR код</Link>
			<Link to="/qr-code/scan">Сканировать QR код</Link>
			<Link to="/qr-code/generate-history">История генерирования</Link>
			<Link to="/qr-code/scan-history">История сканирования</Link>
		</nav>
	)
}

export default Navigation