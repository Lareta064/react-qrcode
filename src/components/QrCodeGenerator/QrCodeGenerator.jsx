import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';

import s from './QrCodeGenerator.module.css';

const QrCodeGenerator = () => {
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');
	
	const onClickHandler =()=>{
		setResult(value);
		setValue('');
	}
	const onChangeHandler = (e)=>{
		setValue(e.target.value);
		setResult('');
	}
	
	return ( 
		<div className="qrcode-block-wrapper">
			<div className={s.qrcode_image}>
				
				{result !=='' && (
					<QRCodeSVG value= {value} />
					)
				}
				
			</div>
			<div className="form-item">
				<input type="text"  value={value} onChange={onChangeHandler} />
			</div>
			<div className="form-btn">
				<button  className="btn" type="button" onClick={onClickHandler} >Генерировать QR</button>
			</div>
		</div>
	 );
}
 
export default QrCodeGenerator;