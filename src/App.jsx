import Mindar from "./Mindar";

// import img1 from "./assets/a.png";
// import img2 from "./assets/b.png";
// import img3 from "./assets/c.png";

// import { useEffect, useState } from "react";
export default function App() {
	// const [idx, setIdx] = useState(0);
	// const images = [img1, img2, img3];
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		const newImg = idx + 1 >= images.length ? 0 : idx + 1;
	// 		setIdx(newImg);
	// 	}, 2000);
	// }, [idx]);

	return (
		<div className='bg-yellow-200 min-w-full h-screen App flex flex-col'>
			<div className='container'>
				{/* <Mindar img={images[idx]} /> */}
				<Mindar />
				{/* <video></video> */}
			</div>
			{/* <div style={{ position: "absolute", top: 100, left: 100 }}>
				<img src={img_test} alt='ola m' style={{ width: "100px" }} />
			</div> */}
		</div>
	);
}
