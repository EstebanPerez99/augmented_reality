import Mindar from "./Mindar";

// import img1 from "./assets/a.png";
// import img2 from "./assets/b.png";
// import img3 from "./assets/c.png";
import img_test from "./assets/over_img.jpg";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

// import { useEffect, useState } from "react";
export default function App() {
	// const [idx, setIdx] = useState(0);
	// const images = [img1, img2, img3];
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		const newImg = idx + 1 >= images.length ? 0 : idx + 1;
	// 		setIdx(newImg);
	// 	}, 1000);
	// }, [idx]);

	return (
		<div className='bg-yellow-200 min-w-full h-screen App flex flex-col'>
			<div className='container'>
				{/* <Mindar img={images[idx]} /> */}
				{/* <Mindar />
				<video></video> */}

				<a-scene
					mindar-image='imageTargetSrc: ./targets.mind;'
					vr-mode-ui='enabled: false'
					device-orientation-permission-ui='enabled: false'
				>
					<a-camera position='0 0 0' look-controls='enabled: false'></a-camera>
					<a-entity mindar-image-target='targetIndex: 0'>
						<a-plane
							src='./over_img.jpg'
							position='0 0 0'
							height='1'
							width='0.4'
							rotation='0 0 0'
						></a-plane>
					</a-entity>
				</a-scene>
			</div>
			<div style={{ position: "absolute", top: 100, left: 100 }}>
				<img src={img_test} alt='ola m' style={{ width: "100px" }} />
			</div>
		</div>
	);
}
