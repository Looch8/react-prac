import "./FruitList.css";

export default function FruitList(props) {
	if (props.listToShow.includes("pineapple") && new Date().getDay() === 3) {
		return null;
	}
	let listOfFruit = props.listToShow.map((fruit) => {
		return <li key={fruit}>{fruit}</li>;
	});

	return (
		<span>
			{listOfFruit}
			{props.children}
		</span>
	);
}
