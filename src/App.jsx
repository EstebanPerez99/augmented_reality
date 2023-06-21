import Mindar from "./Mindar";

import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img6.jpg";
import img8 from "./assets/img6.jpg";
import img9 from "./assets/img6.jpg";
import img10 from "./assets/img6.jpg";
import img11 from "./assets/img6.jpg";
import img12 from "./assets/img6.jpg";
import img13 from "./assets/img6.jpg";

import { useEffect, useState } from "react";
export default function App() {
	const [idx, setIdx] = useState(0);
	const images = [
		img1,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		img9,
		img10,
		img11,
		img12,
		img13,
	];
	useEffect(() => {
		setTimeout(() => {
			const newImg = idx + 1 >= 13 ? 0 : idx + 1;
			setIdx(newImg);
		}, 1000);
	}, [idx]);

	console.log(idx);
	return (
		<div className='bg-yellow-200 min-w-full h-screen App flex flex-col'>
			<p>Flipante.mag XD</p>
			<div className='container'>
				<Mindar img={images[idx]} />
				<video></video>
			</div>
			<div style={{ position: "absolute", top: 100, left: 100 }}>
				<img src={img1} alt='ola m' style={{ width: "100px" }} />
				<img src={img2} alt='ola md' style={{ width: "100px" }} />
				<img src={img3} alt='olad m' style={{ width: "100px" }} />
				<img src={img4} alt='olaff m' style={{ width: "100px" }} />
			</div>
		</div>
	);
}
