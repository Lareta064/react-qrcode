import { Routes, Route} from "react-router-dom";
import QrCodeGenerator from "./components/QrCodeGenerator/QrCodeGenerator";
import QrCodeScanner from "./components/QrCodeScanner/QrScanner";
import Navigation from './components/Navigation/Navigation';
import "./style.scss";
import GenerateHistory from "./components/GenerateHistory";
import ScanHistory from "./components/ScanHistory";
import Header from "./components/Header/Header";

const Layout = () => {
	return (
		<div className="page-content">
			<Header/>	
			<Navigation/>
			<div className="qr-content">
				<Routes>
					<Route path="/" element={<QrCodeGenerator/>}/>
					<Route path="/scan" element={<QrCodeScanner/>} />
					<Route path="/genhistory" element={<GenerateHistory/>} />
					<Route path="/scanhistory" element={<ScanHistory/>} />
				</Routes>
			</div>
		</div>
		
	 );
}
 
export {Layout};
