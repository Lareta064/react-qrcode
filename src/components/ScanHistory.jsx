

import { SCAN_DATA } from "../const";
import {QRCodeSVG} from 'qrcode.react';
const ScanHistory = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
	console.log(data);
	return ( 
		<div className="hist-wrapper">
			<div className="container">
				<ul className="hist-list">
					{
						data.map((item, i)=>(
							<li  key={i} className="hist-item">
								<QRCodeSVG value={item} />
								<p>{item}</p>
								
							</li>
						))
					}
				</ul>
			</div>
		</div>
		
	 );
}
export default ScanHistory; 