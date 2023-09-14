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
				<FruitList
					listToShow={["banana", "pineapple", "mango", "kiwi"]}
				/>

				<h1>Fruit list 2</h1>
				<FruitList listToShow={["apple", "orange", "lime"]} />

				<h1>Blue Fruits</h1>
				<FruitList listToShow={["blueberry", "grape"]} />

				<h3>Blue fruits are rare, because blue is rare in nature</h3>
			</ul>
		</div>
	);
}

export default App;
