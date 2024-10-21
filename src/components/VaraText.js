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
					fontSize: 55,
					strokeWidth: 1.1,
					color: "#fff",
					autoAnimation: true,
					duration: 4000,
					letterSpacing: 2
				}
			]
		);
	}, []);

	return (
		<div
			id="logo"
			className="w-full max-h-20 max-w-[1200px] mx-auto ws-nowrap"
			style={{ height: "200px", textAlign: "center", whiteSpace: "nowrap" }}
		></div>
	);
}

export default VaraText;
