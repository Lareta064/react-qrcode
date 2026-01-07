import { GENERATE_DATA } from "../const";
import {QRCodeSVG} from 'qrcode.react';
const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
	console.log(data);
	return ( 
		<div className="hist-wrapper">
			<ul className="hist-list">
				{
					data.map((item, i)=>(
						<li  key={i} className="hist-item">
							<p>{item}</p>
							<QRCodeSVG value={item} />
							
						</li>
					))
				}
			</ul>
		</div>
		
	 );
}
 
export default GenerateHistory;