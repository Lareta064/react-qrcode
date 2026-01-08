import { Scanner } from '@yudiel/react-qr-scanner';

import s from './QrCodeScanner.module.scss';
import { useState } from 'react';
import {SCAN_DATA} from '../../const';
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
		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
		localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
	}
	
	return ( 
		
		<div className="qrcode-block-wrapper">
			<p className={s.scan_title}>Наведите камеру на qr-code</p>
			<Scanner
				allowMultiple
				sound
				components={settings}
				classNames={classNames}
				onScan={scanHandler}
				onError={(error) => console.log(error?.message)}
				/>

			<p className={s.scan_result} >{scanedText}</p>
			
		</div>
		
	);
}
 
export default QrCodeScanner;
