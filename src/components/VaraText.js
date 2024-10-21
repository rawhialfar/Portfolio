import { useEffect } from "react";
import Vara from "vara";

function VaraText() {
	const text = "Rawhi AlFar";
	useEffect(() => {
		// Ensure the Vara instance is initialized correctly
		var vara = new Vara(
			"#logo", // The ID of the div where the text will be drawn
			// "https://raw.githubusercontent.com/akzhy/Vara/refs/heads/master/fonts/Pacifico/PacificoSLO.json", // Local JSON file for the font
			"https://raw.githubusercontent.com/akzhy/Vara/refs/heads/master/fonts/Satisfy/SatisfySL.json", // Local JSON file for the font
			[
				{
					text: text, // The text to be animated
					fontSize: 65, // Size of the text
					strokeWidth: 1.1, // Width of the stroke
					color: "#fff", // Color of the stroke
					autoAnimation: true, // Whether to animate the text
					duration: 4000 // Duration of the animation
				}
			]
		);
	}, []);

	return <div id="logo"></div>;
}

export default VaraText;
