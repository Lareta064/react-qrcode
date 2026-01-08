import {QRCodeSVG} from 'qrcode.react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import {GENERATE_DATA} from "../../const";
import s from './QrCodeGenerator.module.scss';

const QrCodeGenerator = () => {
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');
	
	const onClickHandler =()=>{
		setResult(value);
		setValue('');
		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
		localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
	}
	const onChangeHandler = (e)=>{
		setValue(e.target.value);
		setResult('');
	}
	
	return ( 
		<div className="qrcode-block-wrapper">
			<div className={s.qrcode_image}>
				
				{result !=='' && <QRCodeSVG value= {result} />
				
				}
				
			</div>
			<div className="form-item">
				<label className="form-label">Text to generate</label>
				<input type="text"  value={value} onChange={onChangeHandler} />
			</div>
			<div className="form-btn">
				<button  className="btn" type="button" onClick={onClickHandler} >Generate</button>
			</div>
		</div>
	 );
}
 
export default QrCodeGenerator;