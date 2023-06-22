import Mindar from "./Mindar";

import img1 from "./assets/a.png";
import img2 from "./assets/b.png";
import img3 from "./assets/c.png";

import { useEffect, useState } from "react";
export default function App() {
	const [idx, setIdx] = useState(0);
	const images = [img1, img2, img3];
	useEffect(() => {
		setTimeout(() => {
			const newImg = idx + 1 >= images.length ? 0 : idx + 1;
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
			</div>
		</div>
	);
}
