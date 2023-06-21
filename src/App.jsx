import Mindar from "./Mindar";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.png";

export default function App() {
	return (
		<div className='bg-yellow-200 min-w-full h-screen App flex flex-col'>
			<p>Flipante.mag XD</p>
			<div className='container'>
				<Mindar />
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
