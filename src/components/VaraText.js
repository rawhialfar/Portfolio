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
					text: text,
					fontSize: 60,
					strokeWidth: 1.1,
					color: "#fff",
					autoAnimation: true,
					duration: 4000
				}
			]
		);
	}, []);

	return <div id="logo" className="w-full h-20"></div>;
}

export default VaraText;
