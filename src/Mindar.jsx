import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.png";
import { useEffect, useState } from "react";

export default function Mindar() {
	const [idx, setIdx] = useState(0);
	const images = [img1, img2, img3, img4];
	useEffect(() => {
		setInterval(() => {
			const newImg = idx + 1 >= 4 ? 0 : idx + 1;
			setIdx(newImg);
		}, 2000);
	}, []);

	console.log(idx);

	return (
		<a-scene
			mindar-image='imageTargetSrc: ./targets.mind;'
			vr-mode-ui='enabled: false'
			device-orientation-permission-ui='enabled: false'
		>
			<a-camera position='0 0 0' look-controls='enabled: false'></a-camera>
			<a-entity mindar-image-target='targetIndex: 0'>
				<a-plane
					// color='blue'
					src={images[idx]}
					opaciy='0.5'
					position='0 0 0'
					height='1'
					width='1'
					rotation='0 0 0'
				></a-plane>
			</a-entity>
		</a-scene>
	);
}
