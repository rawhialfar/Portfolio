module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem"
			},
			screens: {
				xsxs: "377px",
				xss: "400px",
				xs: "450px",
				xsx: "500px",
				sm: "615px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
				"3xl": "1900px"
			},
			colors: {
				primary: "#1DA1F2", // Example custom color
				secondary: "#14171A",
				accent: "#657786",
				background: "#F5F8FA"
			},
			fontFamily: {
				body: ['"Open Sans"', "sans-serif"],
				heading: ['"Poppins"', "sans-serif"],
				mono: ["'Roboto Mono'", "monospace"]
			},
			fontSize: {
				xs: ".75rem",
				sm: ".875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "2rem",
				"4xl": "2.5rem",
				"5xl": "3rem"
			},
			borderRadius: {
				none: "0",
				sm: "0.125rem",
				md: "0.375rem",
				lg: "0.5rem",
				full: "9999px"
			}
		}
	},
	plugins: []
};
