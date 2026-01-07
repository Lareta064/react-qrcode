import { Routes, Route} from "react-router-dom";
import QrCodeGenerator from "./components/QrCodeGenerator/QrCodeGenerator";
import QrCodeScanner from "./components/QrCodeScanner/QrScanner";
import Navigation from './components/Navigation/Navigation';
import "./style.css";
import GenerateHistory from "./components/GenerateHistory";
import ScanHistory from "./components/ScanHistory";

const Layout = () => {
	return (
		<div className="page-content">
			<Navigation/>
			<div className="qr-content">
				<Routes>
					<Route path="/generate" element={<QrCodeGenerator/>}/>
					<Route path="/scan" element={<QrCodeScanner/>} />
					<Route path="/genhistory" element={<GenerateHistory/>} />
					<Route path="/scanhistory" element={<ScanHistory/>} />
				</Routes>
			</div>
		</div>
		
	 );
}
 
export {Layout};
