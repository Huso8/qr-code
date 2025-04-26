import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import QRCodeGen from "./components/QRCodeGen"
import QRScanner from "./components/QRScanner"
import GenerateHistory from "./components/GenerateHistory"
import ScanHistory from "./components/ScanHistory"

const App = () => {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/qr-code/generate" element={<QRCodeGen />} />
				<Route path="/qr-code/scan" element={<QRScanner />} />
				<Route path="/qr-code/generate-history" element={<GenerateHistory />} />
				<Route path="/qr-code/scan-history" element={<ScanHistory />} />
			</Routes>
		</div>
	)
}

export default App