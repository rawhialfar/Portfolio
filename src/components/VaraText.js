import { useEffect } from "react";
import Vara from "vara";

function VaraText() {
	const text = "Rawhi AlFar";
	const text2 = "Hello";
	// console.log(text.text.text);

	useEffect(() => {
		// Ensure the Vara instance is initialized correctly
		var vara = new Vara(
			"#logo", // The ID of the div where the text will be drawn
			// "https://raw.githubusercontent.com/akzhy/Vara/refs/heads/master/fonts/Pacifico/PacificoSLO.json", // Local JSON file for the font
			"https://raw.githubusercontent.com/akzhy/Vara/refs/heads/master/fonts/Satisfy/SatisfySL.json", // Local JSON file for the font
			[
				{
					text: text,
					fontSize: 55,
					queued: true,
					strokeWidth: 1.1,
					color: "#fff",
					autoAnimation: true,
					duration: 4000,
					letterSpacing: 2
				}
			]
		);
	}, []);
	// useEffect(() => {
	// 	// Ensure the Vara instance is initialized correctly
	// 	var vara = new Vara(
	// 		"#Hello", // The ID of the div where the text will be drawn
	// 		"https://raw.githubusercontent.com/akzhy/Vara/refs/heads/master/fonts/Shadows-Into-Light/shadows-into-light.json", // Local JSON file for the font
	// 		// "https://raw.githubusercontent.com/akzhy/Vara/refs/heads/master/fonts/Satisfy/SatisfySL.json", // Local JSON file for the font
	// 		[
	// 			{
	// 				text: text2,
	// 				fontSize: 130,
	// 				queued: true,
	// 				strokeWidth: 2,
	// 				color: "#fff",
	// 				autoAnimation: true,
	// 				duration: 3000,
	// 				letterSpacing: 2
	// 			}
	// 		]
	// 	);
	// }, []);
}

export default VaraText;
