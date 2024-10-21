import React, { useState } from "react";
import VaraText from "./VaraText";

function LogoWithHoverEffect() {
	const [renderCount, setRenderCount] = useState(0); // State to trigger re-render

	const handleMouseEnter = () => {
		setRenderCount(renderCount + 1); // Increment render count to trigger re-render
	};

	return (
		<div
			className="hover:opacity-80 top-[1px] text-nowrap cursor-pointer right-[50px] font-bold space-x-8 flex relative transition-transform duration-300 ease-in-out hover:-translate-y-1"
			onMouseEnter={handleMouseEnter} // Trigger re-render on hover
		>
			<a href="#hero">
				<VaraText key={renderCount} /> {/* Re-render VaraText based on key */}
			</a>
		</div>
	);
}

export default LogoWithHoverEffect;
