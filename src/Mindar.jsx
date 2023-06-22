/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

export default function Mindar({ img }) {
	return (
		<a-scene
			mindar-image='imageTargetSrc: ./targets.mind;'
			vr-mode-ui='enabled: false'
			device-orientation-permission-ui='enabled: false'
		>
			<a-camera position='0 0 0' look-controls='enabled: false'></a-camera>
			<a-entity mindar-image-target='targetIndex: 0'>
				<a-plane
					color='blue'
					// src={img}
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
