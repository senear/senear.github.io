import "./App.css";
import Navbar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Marquee from "./Components/Marquee";
import Introduction from "./Components/Introduction";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Footer from "./Components/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<Marquee />
			<Introduction />
			<Experience />
			<Projects />
			<Achievements />
			<br />
			<Footer />
		</div>
	);
}

export default App;
