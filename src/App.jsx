import Mindar from "./Mindar";

export default function App() {
	return (
		<div className='bg-yellow-200 min-w-full h-screen App flex flex-col'>
			<p>Flipante.mag XD</p>
			<div className='container'>
				<Mindar />
				<video></video>
			</div>
		</div>
	);
}
