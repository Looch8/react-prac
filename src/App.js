import "./App.css";
import FruitList from "./FruitList";

// Some comment here

// Process someFruit and return an array of li tags with fruit names as contents

function App() {
	return (
		<div className="App">
			<h1>Hello World!</h1>
			<ul>
				<h1>Fruit list 1</h1>
				<FruitList listToShow={["banana", "mango", "kiwi"]} />

				<h1>Fruit list 2</h1>
				<FruitList listToShow={["apple", "orange", "lime"]} />
			</ul>
		</div>
	);
}

export default App;
