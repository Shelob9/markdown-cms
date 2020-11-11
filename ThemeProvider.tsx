import React, { useState, createContext, useContext, useEffect } from "react";

/**
 * Hook for mananaging theme, currently only dark mode
 */
export const useTheme = () => {
	const { darkMode, toggleDarkMode } = useContext(ThemeContext);
	return { toggleDarkMode, darkMode };
};

const ThemeContext = createContext({
	darkMode: true,
	toggleDarkMode: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		if (darkMode) {
			document.getElementsByTagName("BODY")[0].classList.add("mode-dark");
		} else {
			document.getElementsByTagName("BODY")[0].classList.remove("mode-dark");
		}
		setDarkMode(!darkMode);
	};
	useEffect(() => {
		if (darkMode) {
			document.getElementsByTagName("BODY")[0].classList.add("mode-dark");
		} else {
			document.getElementsByTagName("BODY")[0].classList.remove("mode-dark");
		}
	});
	return (
		<ThemeContext.Provider value={{ toggleDarkMode, darkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
