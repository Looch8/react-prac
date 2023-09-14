// let someFruit = [
// 	"apple",
// 	"banana",
// 	"orange",
// 	"grape",
// 	"kiwi",
// 	"mango",
// 	"pear",
// 	"peach",
// 	"pineapple",
// 	"strawberry",
// 	"watermelon",
// ];

// let listOfListTags = someFruit.map((fruit, index) => {
// 	return (
// 		<li key={fruit} fancynumber={index}>
// 			{fruit}
// 		</li>
// 	);
// });

export default function FruitList(props) {
	return props.listToShow.map((fruit) => {
		return <li key={fruit}>{fruit}</li>;
	});
}
