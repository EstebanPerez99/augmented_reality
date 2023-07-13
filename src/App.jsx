import { useEffect, useState } from "react";
import Mindar from "./Mindar";
import img1 from "./assets/a.png";
import img2 from "./assets/b.png";
import img3 from "./assets/c.png";
import img4 from "./assets/d.png";
import img5 from "./assets/e.png";
import img6 from "./assets/f.png";
import img7 from "./assets/g.png";
import img8 from "./assets/h.png";
import img9 from "./assets/i.png";
import img10 from "./assets/j.png";
import img11 from "./assets/k.png";
import img12 from "./assets/l.png";
import img13 from "./assets/m.png";
import img14 from "./assets/n.png";

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
		img14,
	];
	useEffect(() => {
		setTimeout(() => {
			const newImg = idx + 1 >= images.length ? 0 : idx + 1;
			setIdx(newImg);
		}, 2000);
	}, [idx]);

	return (
		<div className='bg-yellow-200 min-w-full h-screen App flex flex-col'>
			<div className='container'>
				<Mindar img={images[idx]} />
				{/* <Mindar /> */}
				{/* <video></video> */}
			</div>
			{/* <div style={{ position: "absolute", top: 100, left: 100 }}>
				<img src={img1} alt='ola m' style={{ width: "100px" }} />
			</div> */}
		</div>
	);
}
