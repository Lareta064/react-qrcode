import { GENERATE_DATA } from "../const";
const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
	console.log(data);
	return ( 
		<div>
			{/* <p>{data[0]}</p>
			<p>{data[1]}</p> */}
			{
				data.map((item, i)=>{
					return <p key={i}>{item}</p>
				})
			}
		</div>
	 );
}
 
export default GenerateHistory;