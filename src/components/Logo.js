import React, { useState } from "react";
import VaraText from "./VaraText";

function LogoWithHoverEffect(text) {
	const [renderCount, setRenderCount] = useState(0); // State to trigger re-render

	const handleMouseEnter = () => {
		setRenderCount(renderCount + 1); // Increment render count to trigger re-render
	};

	return (
		<div
			onMouseEnter={handleMouseEnter} // Trigger re-render on hover
		>
			<VaraText key={renderCount} text={text} />{" "}
			{/* Re-render VaraText based on key */}
		</div>
	);
}

export default LogoWithHoverEffect;
