import { Scanner } from '@yudiel/react-qr-scanner';

import s from './QrCodeScanner.module.css';
import { useState } from 'react';
const QrCodeScanner = () => {
	
	const classNames ={
		container: s.qr_scanner_block,
		video: 'qr-scanner__video',
	}
	const settings ={
		finder: false
	}
    const [scanedText, setScanedText] = useState('');
	const scanHandler = (result)=>{
		setScanedText(result[0].rawValue);
	}
	return ( 
		
		<div className="qrcode-block-wrapper">
			<Scanner
				allowMultiple
				sound
				components={settings}
				classNames={classNames}
				onScan={scanHandler}
				onError={(error) => console.log(error?.message)}
				/>

			<div className="form-item">
				<input type="text"  value={scanedText} />
			</div>
		</div>
		
	);
}
 
export default QrCodeScanner;
