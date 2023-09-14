import ListGroupItem from "react-bootstrap";
import "./FruitList.css";

import ListGroup from "react-bootstrap/ListGroup";

export default function FruitList(props) {
	if (props.listToShow.includes("pineapple") && new Date().getDay() === 3) {
		return null;
	}
	let listOfFruit = props.listToShow.map((fruit) => {
		return <ListGroup.Item key={fruit}>{fruit}</ListGroup.Item>;
	});

	return (
		<span>
			{listOfFruit}
			{props.children}
		</span>
	);
}
