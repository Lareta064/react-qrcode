import QrCodeGenerator from "./QrCodeGenerator";
import QrCodeScanner from "./QrScanner";
import "./style.css";

const Layout = () => {
	return (
		<div className="qr-content">
			<QrCodeGenerator/>
			<QrCodeScanner/>
		</div>
		
	 );
}
 
export {Layout};
