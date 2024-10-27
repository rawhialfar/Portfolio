import React, { createContext, useState, useContext } from "react";

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
	// Check if dark mode is saved in localStorage; default to true if not
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem("darkMode");
		return savedMode ? JSON.parse(savedMode) : true;
	});

	// Toggle function to switch between dark and light mode
	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			localStorage.setItem("darkMode", JSON.stringify(newMode)); // Save mode to localStorage
			return newMode;
		});
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
