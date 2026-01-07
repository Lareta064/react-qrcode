import { Routes, Route} from "react-router-dom";
import QrCodeGenerator from "./components/QrCodeGenerator/QrCodeGenerator";
import QrCodeScanner from "./components/QrCodeScanner/QrScanner";
import Navigation from './components/Navigation/Navigation';
import "./style.css";

const Layout = () => {
	return (
		<div className="page-content">
			<Navigation/>
			<div className="qr-content">
				<Routes>
					<Route path="/generate" element={<QrCodeGenerator/>}/>
					
					<Route path="/scan" element={<QrCodeScanner/>} />
					
				</Routes>
			</div>
		</div>
		
	 );
}
 
export {Layout};
